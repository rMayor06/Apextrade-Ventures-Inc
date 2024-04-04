"use client"
import { useEffect, useState } from "react";
import { fetchPayrollData, updatePayrollData, savePayslip } from "@/../api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';

const dtrpayslip = ({params}) => {
  const router = useRouter();
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false);
  const tableStyle = "px-5 mx-auto border-collapse border border-slate-500 text-center text-xl";
  const fbold = "font-bold"
  const head = ['Day', 'Date', 'Time-In', 'Time-Out', 'Total Hours', 'Over-Time', 'Day', 'Addl Pay'];
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const year = ['2024', '2025', '2026', '2027', '2028', '2029']
  const cutoff = [
    { value: '1st_Cut-off', label: '1st Cut-off'}, { value: '2nd_Cut-off', label:'2nd Cut-off'},
  ];
  const nightday = [
    { value: '0', label: 'Day Shift'}, { value: '0.1', label:'Night Shift'},
  ];
  const dayEvent = ['Regular', 'Non-Working', 'National']
  const options = [
    { value: ' ', label: ''}, { value: '0', label: 'Regular Day' }, { value: '.3', label: 'Non-Working' }, { value: '1', label: 'National' },
  ];
  const num = Array.from({ length: 15 }, (_, index) => (index + 1).toString())

    useEffect(() => {
      const fetchData = async () => {
        try {
          const jsonData = await fetchPayrollData(params.id);
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching schedule data:', error.message);
        }
      };
      fetchData();
      router.refresh();
    }, [params.id]);

    const handleUpdateData = async () => {
      try {
        await updatePayrollData(params.id, data);
      } catch (error) {
        console.error('Error updating data:', error.message);
      }
    };
  
    const handleSavePayslip = async () => {
      try {
        await savePayslip(data);
      } catch (error) {

      }
    };

    const calculateTotalTime = (timeIn, timeOut) => {
      if (timeIn && timeOut) {
        const [hoursIn, minutesIn] = timeIn.split(":").map(Number);
        const [hoursOut, minutesOut] = timeOut.split(":").map(Number);
        const adjustedHoursOut = hoursOut < hoursIn ? hoursOut + 24 : hoursOut;
        const totalMinutes = (adjustedHoursOut - hoursIn) * 60 + (minutesOut - minutesIn);
        const totalHourss = Math.floor(totalMinutes / 60);
        const totalHours = totalHourss - 1;
        return totalHours;
      }
      return 0;
    };

    const calculateTotalOT = (totalTime) => {
      return totalTime > 8 ? totalTime - 8 : 0;
    };
    const totalHoursPerDay = (timeIn, timeOut) => {
      const totalTime = calculateTotalTime(timeIn, timeOut);
      const totalOT = calculateTotalOT(totalTime);
      return totalTime - totalOT;
    };

    for (let i = 1; i <= 15; i++) {
      const key = `totalUT${i}`;
      if (data[key] === 8) {
        data[key] = '0';
      }
    }

    const holidayAddlPayPerDay = (totaltime, holidayRate) => {
      const rate = isNaN(parseFloat(holidayRate)) ? 0 : parseFloat(holidayRate);
      const holidayPerDay = (totaltime * data.hourrate) * rate;
      return holidayPerDay;
    };

    const oaHr = Array.from({ length: 15 }, (_, index) => data[`thour${index + 1}`] || 0).reduce((acc, value) => acc + parseInt(value), 0);
    const oaOT = Array.from({ length: 15 }, (_, index) => data[`totalOT${index + 1}`] || 0)
    .reduce((acc, value) => acc + parseInt(value), 0);
    const oaHrate = Array.from({ length: 15 }, (_, index) => data[`holidayrate${index + 1}`] || 0)
    .reduce((acc, value) => acc + parseFloat(value), 0);
    const nytdifftotal = parseFloat(data.otnightdiff)* (parseFloat(oaHr) * parseFloat(data.hourrate));
    const oaHrRate = parseFloat(oaHr) * parseFloat(data.hourrate);
    const oaHrOT = parseFloat(oaOT) * parseFloat(data.hourrate); 
    const overTime = parseFloat(data.nightdiff) + parseFloat(data.totalOT) + parseFloat(data.adlnytdiff2); 
    const Adjustments = parseFloat(data.holidaypay) + parseFloat(data.thmonth) + parseFloat(data.incentives) + parseFloat(data.paidleaves) + parseFloat(data.allowance);
    const Grosspay = parseFloat(data.basicpay) + parseFloat(data.overtime) + parseFloat(data.adjustment);
    const Deductions = parseFloat(data.whtax) + parseFloat(data.sss) + parseFloat(data.salaryloan) + parseFloat(data.calamityloan) + parseFloat(data.phealth) + parseFloat(data.pagibig) + parseFloat(data.tardiness) + parseFloat(data.otherdeduction);
    const Netpay = parseFloat(Grosspay) - parseFloat(Deductions);
    
    const [nyt, setNyt] = useState('')

    useEffect(() => {
      if (data.otnightdiff === "0.1") {
        setNyt(data.nightdifftotal);
      }
      else{
        setNyt('0')
      }
    }, [data.otnightdiff, data.nightdifftotal]);

    const totalNytDiff = parseFloat(nyt)+parseFloat(data.adlnytdiff);
    
    const updateDataForDay = (data, day) => ({
      [`thour${day}`]: totalHoursPerDay(data[`timein${day}`], data[`timeout${day}`]),
      [`totalOT${day}`]: calculateTotalOT(calculateTotalTime(data[`timein${day}`], data[`timeout${day}`])),
      [`holidayrate${day}`]: holidayAddlPayPerDay(
        calculateTotalTime(data[`timein${day}`], data[`timeout${day}`]),
        data[`holiday${day}`]
      ),
    });

    const handleOnChange = (type, value) => {
      setData((e) => ({
        ...e, 
        [type]: value,
        id: uuidv4(),
        id2:  `${params.id}`,
        pym: `${data.period}_for_the_month_of_${data.month}_${data.year}`,
        nightdifftotal: oaHr,
        totalnyt: totalNytDiff,
        otregular: oaOT,
        nightdiff: nytdifftotal.toFixed(2),
        holidaypay: oaHrate.toFixed(2),
        basicpay: oaHrRate.toFixed(2),
        totalOT: oaHrOT.toFixed(2),
        overtime: overTime.toFixed(2),
        adjustment: Adjustments.toFixed(2),
        grosspay: Grosspay.toFixed(2),
        deduction: Deductions.toFixed(2),
        netpay: parseFloat(Netpay.toFixed(2)).toLocaleString(),
        ...updateDataForDay(e, 1), ...updateDataForDay(e, 2), ...updateDataForDay(e, 3), ...updateDataForDay(e, 4),
        ...updateDataForDay(e, 5), ...updateDataForDay(e, 6), ...updateDataForDay(e, 7), ...updateDataForDay(e, 8),
        ...updateDataForDay(e, 9), ...updateDataForDay(e, 10), ...updateDataForDay(e, 11), ...updateDataForDay(e, 12),
        ...updateDataForDay(e, 13), ...updateDataForDay(e, 14), ...updateDataForDay(e, 15),
      }));
      handleUpdateData();
    };

    const Tab = ({day}) => {
      return(
      <tr>
          <td className={tableStyle}>Day {day}</td>
          <td className={tableStyle}>
            <input type='date' value={data[`date${day}`]}
              onChange={(e) => handleOnChange(`date${day}`, e.target.value)}/>
          </td>
          <td className={tableStyle}>
            <input type='time' value={data[`timein${day}`]}
              onChange={(e) => handleOnChange(`timein${day}`, e.target.value)}/>
          </td>
          <td className={tableStyle}>
            <input type='time' value={data[`timeout${day}`]}
              onChange={(e) => handleOnChange(`timeout${day}`, e.target.value)}/>
          </td>
          <td className={tableStyle}>
            <input className='w-24 text-center' type='text' value={data[`thour${day}`]}
              onChange={(e) => handleOnChange(`thour${day}`, e.target.value)}/>
          </td>
          <td className={tableStyle}>
            <input className='w-24 text-center' type='text' value={data[`totalOT${day}`]}
              onChange={(e) => handleOnChange(`totalOT${day}`, e.target.value)}/>
          </td>
          <td className={tableStyle}>
            <select value={data[`holiday${day}`]}
              onChange={(e) => handleOnChange(`holiday${day}`, e.target.value)} required defaultValue={options.value}>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>))}
            </select>
          </td>
          <td className={tableStyle}>
            <input className='w-24 text-center' type='text' value={data[`holidayrate${day}`]}
              onChange={(e) => handleOnChange(`holidayrate${day}`, e.target.value)}
            />
          </td>
      </tr>
      )
    }

    const [time, setTime] = useState('Copy Time')
    const [datee, setDatee] = useState('Copy Date')

    const handleCopyDate = () => {
      if(datee==='Copy Date'){
        setDatee('Erase Date')
        setData((prevData) => {
          const newData = { ...prevData };
          for (let i = 2; i <= 15; i++) {
            newData[`date${i}`] = prevData.date1;
          }
          return newData;
        });
      }
      else{
        setDatee('Copy Date')
        setData((prevData) => {
          const newData = { ...prevData };
          for (let i = 2; i <= 15; i++) {
            newData[`date${i}`] = "";
          }
          return newData;
        });
      }
    }

    const handleCopyTime = () => {

      if(time==='Copy Time'){
        setTime('Erase Time')
        setData((prevData) => {
        const newData = { ...prevData };
        
        for (let i = 2; i <= 15; i++) {
          newData[`timein${i}`] = prevData.timein1;
          newData[`timeout${i}`] = prevData.timeout1;
        }
        return newData;
      });
    }
      else{
        setTime('Copy Time')
        setData((prevData) => {
          const newData = { ...prevData };
          
          for (let i = 2; i <= 15; i++) {
            newData[`timein${i}`] = "";
            newData[`timeout${i}`] = "";
          }
          return newData;
        });
      }
    };
  return (
    <div className="mx-auto">
      <table className="mx-auto border-collapse border border-slate-500 ...">
        <tr>
          <td></td>
          <td colspan='4' className={tableStyle}><h1 className="font-bold text-center text-3xl">{data.lname}, {data.fname} {data.mname}</h1></td>
          <td className={tableStyle}>
            <select value={data.otnightdiff} onChange={(e) => handleOnChange(`otnightdiff`, e.target.value)} required>
                {nightday.map((item) => (
                  <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </select>
          </td>
          <td className={tableStyle}>Addl Rate:
            <input
              className='w-24 text-center' type='text' value={data.nightdiff}
              onChange={(e) => handleOnChange(`nightdiff`, e.target.value)}
            required />
          </td>
          <td className={`${tableStyle} w-[200px]`}>
            <Link href={`/payroll/${data.id}`}>
              BACK
            </Link></td>
        </tr>
        <tr>
          <td className={tableStyle}>
          </td>
          <td className={tableStyle}>
            <button className='w-full text-center' onClick={handleCopyDate} value={datee}>{datee}</button>
          </td>
          <td className={tableStyle}>
            <button className='w-full text-center' onClick={handleCopyTime} value={time}>{time}</button>
          </td>
          <td className={tableStyle}>
          </td>
          <td className={tableStyle}>
          </td>
          <td className={tableStyle}>
            <select className='text-center' value={data.period} onChange={(e) => handleOnChange(`period`, e.target.value)} required>
                {cutoff.map((item, index) => (
                  <option key={index} value={item.value}>{item.label}</option>
                ))}
            </select>
          </td>
          <td className={tableStyle}>
            <select value={data.month} onChange={(e) => handleOnChange(`month`, e.target.value)} required>
                {month.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
            </select>
            <select value={data.year} onChange={(e) => handleOnChange(`year`, e.target.value)} required>
                {year.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
            </select>
          </td>
          <td className={tableStyle}>Rate/Hr
            <input className='w-24 text-center' type='text' value={data.hourrate}
              onChange={(e) => handleOnChange(`hourrate`, e.target.value)}
            required />
          </td>
        </tr>
        <tr>
          {head.map((item, index) => (
            <td className={`${tableStyle} ${fbold}`} key={index}>{item}</td>
          ))}
        </tr>
        {num.map((item)=>(<Tab key={item} day={item} />))}
        <tr>
          <td colspan='4' className="text-right text-2xl font-bold px-5 mx-auto border-collapse border border-slate-500 text-center">
            Total Hours:
          </td>
          <td className="text-2xl font-bold text-center px-5 mx-auto border-collapse border border-slate-500 text-center">
            <input className='w-24 text-center' type='text' value={data.nightdifftotal}
              onChange={(e) => handleOnChange(`nightdifftotal`, e.target.value)}
            />
          </td>
          <td className="text-2xl font-bold text-center px-5 mx-auto border-collapse border border-slate-500 text-center">
            <input className='w-24 text-center' type='text' value={data.otregular}
              onChange={(e) => handleOnChange(`otregular`, e.target.value)}
            />
          </td>
          <td className="text-2xl font-bold text-center px-5 mx-auto border-collapse border border-slate-500 text-center">
          </td>
          <td className={tableStyle}></td>
        </tr> 

        <tr>
          <td colspan='4' className="text-right text-2xl font-bold px-5 mx-auto border-collapse border border-slate-500 text-center">
            Total Rate:
          </td>
          <td className="text-2xl font-bold text-center px-5 mx-auto border-collapse border border-slate-500 text-center">
            <input className='w-[150px] text-center' type='text' value={data.basicpay}
              onChange={(e) => handleOnChange(`basicpay`, e.target.value)}
            />
          </td>
          <td className="text-2xl font-bold text-center px-5 mx-auto border-collapse border border-slate-500 text-center">
            <input className='w-24 text-center' type='text' value={data.totalOT}
              onChange={(e) => handleOnChange(`totalOT`, e.target.value)}
            />
          </td>
          <td className="text-2xl font-bold text-center px-5 mx-auto border-collapse border border-slate-500 text-center">
            
          </td>
          <td className="text-2xl font-bold text-center px-5 mx-auto border-collapse border border-slate-500 text-center">
            <input className='w-24 text-center' type='text' value={data.holidaypay}
              onChange={(e) => handleOnChange(`holidaypay`, e.target.value)}
            />
          </td>
        </tr> 
        <tr>
          <td colspan='7' className='px-5 mx-auto border-collapse border border-slate-500 text-right text-xl font-bold'>
            <h1>Basic Pay:</h1>
          </td>
          <td className={tableStyle}>
            <input className='w-[200px] text-center font-bold' type='text' value={data.basicpay}
              onChange={(e) => handleOnChange(`basicpay`, e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colspan='7'className='px-5 mx-auto border-collapse border border-slate-500 text-right text-xl font-bold'>
            <h1>Overtime + Night Differential:</h1>
          </td>
          <td className={tableStyle}>
            <input className='w-[200px] text-center font-bold' type='text' value={data.overtime}
              onChange={(e) => handleOnChange(`overtime`, e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colspan='7'className='px-5 mx-auto border-collapse border border-slate-500 text-right text-xl font-bold'>
            <h1>Adjustments:</h1>
          </td>
          <td className={tableStyle}>
            <input className='w-[200px] text-center font-bold' type='text' value={data.adjustment}
              onChange={(e) => handleOnChange(`adjustment`, e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colspan='7'className='px-5 mx-auto border-collapse border border-slate-500 text-right text-xl font-bold'>
            <h1>Gross Pay:</h1>
          </td>
          <td className={tableStyle}>
            <input className='w-[200px] text-center font-bold' type='text' value={data.grosspay}
              onChange={(e) => handleOnChange(`grosspay`, e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colspan='7'className='px-5 mx-auto border-collapse border border-slate-500 text-right text-xl font-bold'>
            <h1>Deductions:</h1>
          </td>
          <td className={tableStyle}>
            <input className='w-[200px] text-center font-bold' type='text' value={data.deduction}
              onChange={(e) => handleOnChange(`deduction`, e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colspan='7'className='px-5 mx-auto border-collapse border border-slate-500 text-right text-xl font-bold'>
            <h1>Net Pay:</h1>
          </td>
          <td className={tableStyle}>
            <input className='w-[200px] text-center font-bold text-3xl' type='text' value={data.netpay}
              onChange={(e) => handleOnChange(`netpay`, e.target.value)}
            />
          </td>
        </tr>
        <tr>  
            <td colspan='8' className='px-5 mx-auto border-collapse border border-slate-500 text-center text-2xl  text-center mx-auto'>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded"
                  onClick={handleOnChange}>Update Data</button>
            </td>
        </tr>
        <tr><td colspan='8' className="text-center h-10"></td></tr>
        <tr>  
            <td colspan='8' className='px-5 mx-auto border-collapse border border-slate-500 text-center text-2xl  text-center mx-auto'>
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded"
                  onClick={handleUpdateData}>Save</button>
            </td>
        </tr>
        <tr><td colspan='8' className="text-center h-10"></td></tr>
        <tr>  
            <td colspan='8' className='px-5 mx-auto border-collapse border border-slate-500 text-center text-2xl text-center mx-auto'>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded"
                  onClick={handleSavePayslip}>finalized {data.period} of {data.month} {data.year}</button>
            </td>
        </tr>
      </table>
    </div>
  );
}
export default dtrpayslip