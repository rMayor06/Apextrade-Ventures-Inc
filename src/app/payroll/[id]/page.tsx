'use client'
import { useEffect, useState } from "react";
import { payroll } from "./../../../../types/infos";
import { useRouter } from "next/navigation";
import { fetchPayrollData, updatePayrollData } from "@/../api";
import Link from "next/link";

const DTR = ({ params }) => {

  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const tableStyle = "px-5 mx-auto border-collapse border border-slate-500 text-center text-3xl";
  const fbold = "font-bold"

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
    }, [params.id]);

    const handleUpdateData = async () => {
      try {
        await updatePayrollData(params.id, data);
      } catch (error) {
        console.error('Error updating data:', error.message);
      }
    };

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

    const totaldeduction = parseFloat(data.whtax)+parseFloat(data.sss)+parseFloat(data.phealth)+parseFloat(data.pagibig)+parseFloat(data.salaryloan)+parseFloat(data.calamityloan)+parseFloat(data.tardiness)+parseFloat(data.otherdeduction);
    const totaladjustment = parseFloat(data.thmonth)+parseFloat(data.incentives)+parseFloat(data.paidleaves)+parseFloat(data.allowance)+parseFloat(data.holidaypay);
    const otNytDiff = parseFloat(data.adlnytdiff2)+parseFloat(data.totalOT)+parseFloat(data.nightdiff);
    const adlpay = (parseFloat(data.adlnytdiff)*parseFloat(data.hourrate))*.1;
    const handleOnChange = (type, value) => {
      setData((prevData) => ({
        ...prevData,  
        [type]: value,
        totalnyt: totalNytDiff,
        deduction: totaldeduction.toFixed(2),
        adjustment: totaladjustment.toFixed(2),
        overtime: otNytDiff.toFixed(2),
        adlnytdiff2: adlpay.toFixed(2),
      }))
      handleUpdateData()
    }

    const head = ['Adjustments', 'Amount', 'Deductions', 'Amount']
    const row = (label1='', value1='', type1='', label2 = '', value2 = '', type2 = '', readOnly = false) => (
      <tr className={tableStyle} key={label1}>
        <td className={tableStyle}>{label1}</td>
        <td className={tableStyle}>
          <input
            className='text-center'
            type='text'
            value={value1}
            onChange={(e) => handleOnChange(type1, e.target.value)}
            readOnly={readOnly}
          />
        </td>
        {label2 && (
          <>
            <td className={tableStyle}>{label2}</td>
            <td className={tableStyle}>
              <input
                className='text-center'
                type='text'
                value={value2}
                onChange={(e) => handleOnChange(type2, e.target.value)}
                readOnly={readOnly}
              />
            </td>
          </>
        )}
      </tr>
    );

  return (
    <>
      <table className={tableStyle}>
        <tbody>
          <td colspan='3  '><h1 className="font-bold">{data.lname}, {data.fname} {data.mname}</h1></td>
          <td><Link href={`/dtr/${data.id}`}>dtr/payslip</Link></td>
          {row('email:', data.email, 'email', '', '', '')}
          {head.map((item, index)=>(<td key='index' className={`${tableStyle} ${fbold}`}>{item}</td>))}
          {row('13th Month:', data.thmonth, 'thmonth','W/H Tax:', data.whtax, 'whtax')}
          {row('Incentives', data.incentives, 'incentives', 'SSS:', data.sss, 'sss')}
          {row('Paid Leaves', data.paidleaves, 'paidleaves', 'PhilHealth:', data.phealth, 'phealth')}
          {row('Allowance:', data.allowance, 'allowance','Pagibig:', data.pagibig, 'pagibig' )}
          {row('Holiday Pay',data.holidaypay,'','Salary Loan:', data.salaryloan, 'salaryloan' )}
          {row('','','','Calamity Loan:', data.calamityloan, 'calamityloan')}
          {row('','','','Tardiness:', data.tardiness, 'tardiness')}
          {row('','','','Others:', data.otherdeduction, 'otherdeduction')}
          <tr>
          <td className={`${tableStyle} ${fbold}`}>Total:</td>
          <td className={tableStyle}><h1 className='font-bold'>{data.adjustment}</h1></td>
          <td className={tableStyle}></td><td className={tableStyle}></td>
          </tr>
          <tr>
          <td className={`${tableStyle} h-[30px]`}></td><td className={tableStyle}></td>
          <td className={tableStyle}></td><td className={tableStyle}></td>
          </tr>
          <tr>
          <td className={tableStyle}>Total Nyt Diff Hour</td><td className={tableStyle}>{data.totalnyt}</td>
          <td className={tableStyle}></td><td className={tableStyle}></td>
          </tr>
          {row('Overtime Pay',data.totalOT,'totalOT','','','', true)}
          {row('Night Diff Pay',data.nightdiff,'nightdiff','','','', true)}
          {row('Addl Hour Nyt Diff 1',data.adlnytdiff,'adlnytdiff','','','')}
          {row('Addl Nyt Diff Rate',data.adlnytdiff2,'adlnytdiff2','','','',true)}
          {row('','','','','','')}
          <td className={`${tableStyle} ${fbold}`}>Total:</td>
          <td className={tableStyle}><h1 className='font-bold'>{data.overtime}</h1></td>
          <td className={`${tableStyle} ${fbold}`}>Total:</td>
          <td className={tableStyle}><h1 className="font-bold">{data.deduction}</h1></td>
          {row('','','','','','')}
          <tr className={tableStyle}>
            <td colspan='4' className={tableStyle}>
              <button onClick={handleOnChange} disabled={loading}>
                Compute
              </button>
            </td>
          </tr>
          <tr className={tableStyle}>
            <td colspan='4' className={tableStyle}>
              <button onClick={handleUpdateData} disabled={loading}>
                Save
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default DTR;
