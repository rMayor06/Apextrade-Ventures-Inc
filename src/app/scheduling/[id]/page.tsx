"use client"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { monthToNumber } from './../../components/monthConverter';
import { useRouter } from "next/navigation";

const Scheduling=({params})=>{

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:7000/einfo/${params.id}`,{
        next:{
        revalidate: 0
        }
    });
      const jsonData = await response.json()
      setSched(jsonData)
  }
  fetchData()
}, [])

const router = useRouter();
const [sched, setSched] = useState([])
    const [scheduled, setScheduled] = useState([])
    const [month, setMonth] = useState('January');
    const [year, setYear] = useState('2024');
    const [day1, setDay1] = useState('Monday');
    const [label1, setLabel1] = useState('visible');
    const [duty1, setDuty1] = useState('');
    const [color1, setColor1] = useState('900');
    const [text1, setText1] = useState('white');
    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');

    const [day2, setDay2] = useState('Tuesday');
    const [label2, setLabel2] = useState('visible');
    const [duty2, setDuty2] = useState('');
    const [color2, setColor2] = useState('900');
    const [text2, setText2] = useState('white');
    const [time3, setTime3] = useState('');
    const [time4, setTime4] = useState('');

    const [day3, setDay3] = useState('Wednesday');
    const [label3, setLabel3] = useState('visible');
    const [duty3, setDuty3] = useState('');
    const [color3, setColor3] = useState('900');
    const [text3, setText3] = useState('white');
    const [time5, setTime5] = useState('');
    const [time6, setTime6] = useState('');

    const [day4, setDay4] = useState('Thursday');
    const [label4, setLabel4] = useState('visible');
    const [duty4, setDuty4] = useState('');
    const [color4, setColor4] = useState('900');
    const [text4, setText4] = useState('white');
    const [time7, setTime7] = useState('');
    const [time8, setTime8] = useState('');

    const [day5, setDay5] = useState('Friday');
    const [label5, setLabel5] = useState('visible');
    const [duty5, setDuty5] = useState('');
    const [color5, setColor5] = useState('900');
    const [text5, setText5] = useState('white');
    const [time9, setTime9] = useState('');
    const [time10, setTime10] = useState('');

    const [day6, setDay6] = useState('Saturday');
    const [label6, setLabel6] = useState('visible');
    const [duty6, setDuty6] = useState('');
    const [color6, setColor6] = useState('900');
    const [text6, setText6] = useState('white');
    const [time11, setTime11] = useState('');
    const [time12, setTime12] = useState('');

    const [day7, setDay7] = useState('Sunday');
    const [label7, setLabel7] = useState('visible');
    const [duty7, setDuty7] = useState('');
    const [color7, setColor7] = useState('900');
    const [text7, setText7] = useState('white');
    const [time13, setTime13] = useState('');
    const [time14, setTime14] = useState('');

    const showInput1=()=>{
    if(label1==='invisible'){
        setLabel1('visible')
        setColor1('100')
        setText1('white')
        setDuty1('')
    }
    else{
        setLabel1('invisible')
        setColor1('900')
        setText1('blue')
        setDuty1('OFF DUTY')
        setTime1('')
        setTime2('')
    }
    }

    const showInput2=()=>{

        if(label2==='invisible'){
            setLabel2('visible')
            setColor2('100')
            setText2('white')
            setDuty2('')
        }
        else{
            setLabel2('invisible')
            setColor2('900')
            setText2('blue')
            setDuty2('OFF DUTY')
            setTime3('')
            setTime4('')
        }
        }

    const showInput3=()=>{

        if(label3==='invisible'){
                setLabel3('visible')
                setColor3('100')
                setText3('white')
                setDuty3('')
            }
            else{
                setLabel3('invisible')
                setColor3('900')
                setText3('blue')
                setDuty3('OFF DUTY')
                setTime5('')
                setTime6('')
            }
            }

    const showInput4=()=>{
            if(label4==='invisible'){
                setLabel4('visible')
                setColor4('100')
                setText4('white')
                setDuty4('')
            }
            else{
                setLabel4('invisible')
                setColor4('900')
                setText4('blue')
                setDuty4('OFF DUTY')
                setTime7('')
                setTime8('')
            }
            }

    const showInput5=()=>{
            if(label5==='invisible'){
                setLabel5('visible')
                setColor5('100')
                setText5('white')
                setDuty5('')
            }
            else{
                setLabel5('invisible')
                setColor5('900')
                setText5('blue')
                setDuty5('OFF DUTY')
                setTime9('')
                setTime10('')
            }
            }

    const showInput6=()=>{
            if(label6==='invisible'){
                setLabel6('visible')
                setColor6('100')
                setText6('white')
                setDuty6('')
            }
            else{
                setLabel6('invisible')
                setColor6('900')
                setText6('blue')
                setDuty6('OFF DUTY')
                setTime11('')
                setTime12('')
                }
                }

    const showInput7=()=>{
            if(label7==='invisible'){
                setLabel7('visible')
                setColor7('100')
                setText7('white')
                setDuty7('')
                }
            else{
                setLabel7('invisible')
                setColor7('900')
                setText7('blue')
                setDuty7('OFF DUTY')
                setTime13('')
                setTime14('')
                }
                }

    const monthNumber = monthToNumber(`${month}`);
    
    const handleSubmitDuty = async () => {
        
        const response = await fetch(`http://localhost:7000/schedule`, {
          method: 'POST',
          body: JSON.stringify({
            id: sched.id,
            fname: sched.fname,
            mname: sched.mname,
            lname: sched.lname,
            month: {month},
            monthNumber: {monthNumber},
            year:  {year},
            monthyear: `${month} ${year}`,
            monthyear2: `${month}_${year}`,
            day1:{
                day: {day1},
                duty: {duty1},
                timestart: {time1},
                timeend: {time2},
                time: `${time1} - ${time2}`,
                label: {label1},
                color: {color1},
                text: {text1},
                timestart12: {time12_1},
                timeend12: {time12_2}
            },
            day2:{
                day: {day2},
                duty: {duty2},
                timestart: {time3},
                timeend: {time4},
                time: `${time3} - ${time4}`,
                label: {label2},
                color: {color2},
                text: {text2},
                timestart12: {time12_3},
                timeend12: {time12_4}
            },
            day3:{
                day: {day3},
                duty: {duty3},
                timestart: {time5},
                timeend: {time6},
                time: `${time5} - ${time6}`,
                label: {label3},
                color: {color3},
                text: {text3},
                timestart12: {time12_5},
                timeend12: {time12_6}
            },
            day4:{
                day: {day4},
                duty: {duty4},
                timestart: {time7},
                timeend: {time8},
                time: `${time7} - ${time8}`,
                label: {label4},
                color: {color4},
                text: {text4},
                timestart12: {time12_7},
                timeend12: {time12_8}
            },
            day5:{
                day: {day5},
                duty: {duty5},
                timestart: {time9},
                timeend: {time10},
                time: `${time9} - ${time10}`,
                label: {label5},
                color: {color5},
                text: {text5},
                timestart12: {time12_9},
                timeend12: {time12_10}
            },
            day6:{
                day: {day6},
                duty: {duty6},
                timestart: {time11},
                timeend: {time12},
                time: `${time11} - ${time12}`,
                label: {label6},
                color: {color6},
                text: {text6},
                timestart12: {time12_11},
                timeend12: {time12_12}
            },
            day7:{
                day: {day7},
                duty: {duty7},
                timestart: {time13},
                timeend: {time14},
                time: `${time13} - ${time14}`,
                label: {label7},
                color: {color7},
                text: {text7},
                timestart12: {time12_13},
                timeend12: {time12_14}
            },
        }),
          headers: {
            'Content-Type': 'application/json'
          },

        });
        const data = await response.json();
        console.log(data)
        router.push('/schedsystem/')
    };
    const [open, setOpen ] = useState('Copy Time')
    const handleOnclickOnOff = () => {
        if(label2==='visible'){
            setTime3(`${time1}`)
            setTime4(`${time2}`)
        }
        if(label2==='invisible'){
            setTime3('')
            setTime4('')
        }

        if(label3==='visible'){
            setTime5(`${time1}`)
            setTime6(`${time2}`)
        }
        if(label3==='invisible'){
            setTime5('')
            setTime6('')
        }

        if(label4==='visible'){
            setTime7(`${time1}`)
            setTime8(`${time2}`)
        }
        if(label4==='invisible'){
            setTime7('')
            setTime8('')
        }

        if(label5==='visible'){
            setTime9(`${time1}`)
            setTime10(`${time2}`)
        }
        if(label5==='invisible'){
            setTime9('')
            setTime10('')
        }

        if(label6==='visible'){
            setTime11(`${time1}`)
            setTime12(`${time2}`)
        }
        if(label6==='invisible'){
            setTime11('')
            setTime12('')
        }

        if(label7==='visible'){
            setTime13(`${time1}`)
            setTime14(`${time2}`)
        }
        if(label7==='invisible'){
            setTime13('')
            setTime14('')
        }
            
    }
    const handleDeleteAll = () => {
        setTime1('')
        setTime2('')
        setTime3('')
        setTime4('')
        setTime5('')
        setTime6('')
        setTime7('')
        setTime8('')
        setTime9('')    
        setTime10('')
        setTime11('')
        setTime12('')
        setTime13('')
        setTime14('')
    }
const timecon1 = `${time1}`
const timecon2 = `${time2}`
const timecon3 = `${time3}`
const timecon4 = `${time4}`
const timecon5 = `${time5}`
const timecon6 = `${time6}`
const timecon7 = `${time7}`
const timecon8 = `${time8}`
const timecon9 = `${time9}`
const timecon10 = `${time10}`
const timecon11 = `${time11}`
const timecon12 = `${time12}`
const timecon13 = `${time13}`
const timecon14 = `${time14}`

const time24 = [ timecon1, timecon2, timecon3, timecon4, timecon5, timecon6, timecon7, timecon8, timecon9, timecon10, timecon11, timecon12, timecon13, timecon14, ]; // Replace with your 24-hour time
    
function convertTo12HourFormat(times24) {
    return times24.map((time24) => {
      const [hours, minutes] = time24.split(':');
      let period = 'AM';
      let hours12 = parseInt(hours, 10);
      if (isNaN(hours12)) {
        return '';
    }
      if (hours12 >= 12) {
        period = 'PM';
        hours12 = hours12 === 12 ? 12 : hours12 - 12;
      }
      hours12 = hours12 === 0 ? 12 : hours12;
      return `${hours12}:${minutes} ${period}`;
    });
  }
      const timeconverted = convertTo12HourFormat(time24);
      const time12_1 = timeconverted[0]
      const time12_2 = timeconverted[1]
      const time12_3 = timeconverted[2]
      const time12_4 = timeconverted[3]
      const time12_5 = timeconverted[4]
      const time12_6 = timeconverted[5]
      const time12_7 = timeconverted[6]
      const time12_8 = timeconverted[7]
      const time12_9 = timeconverted[8]
      const time12_10 = timeconverted[9]
      const time12_11 = timeconverted[10]
      const time12_12 = timeconverted[11]
      const time12_13 = timeconverted[12]
      const time12_14 = timeconverted[13]
    
return(
    <>
        <h1 className="font-bold text-center text-2xl">SCHEDULING SYSTEM</h1>
        <hr className="h-2"/>
        <h1 className="italic font-bold text-3xl ">{sched.lname}, {sched.fname} {sched.mname}</h1>
        <hr className="h-5"/>
        <div className="mx-auto text-center text-xl font-bold">
            <select selected={month} onChange={e=>setMonth(e.target.value)}>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
            </select>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleOnclickOnOff}>copy time to all
            </button>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleDeleteAll}>delete all time
            </button>
            <select selected={year} onChange={e=>setYear(e.target.value)}>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
            </select>
        </div>
        <br/>
    <form onSubmit={handleSubmitDuty}>
        <div className="grid grid-cols-4 gap-4 text-center align-middle border-solid border-2 border-sky-500 bg-gray-600 text-xl text-gray-200">
            <div className="font-bold border-solid border-2 border-sky-500">Days of Duty</div>
            <div className="font-bold border-solid border-2 border-sky-500">ON/OFF DUTY</div>
            <div className="font-bold border-solid border-2 border-sky-500">Duty starts at</div>
            <div className="font-bold border-solid border-2 border-sky-500">Duty ends at</div>
        </div>
{/* MONDAY */}
        <div className="grid grid-cols-4 gap-4 text-center align-center border-solid border-2 border-sky-500">
            <div className="border-solid border-2 border-sky-500 align-middle">
                    <button value={day1} type="button" onClick={showInput1}
                        className={`text-${text1} text-xl w-full bg-blue-700 hover:bg-blue-800\
                        focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full
                        text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-${color1} dark:hover:bg-blue-700
                        dark:focus:ring-blue-800`}>
                        {day1}</button>
            </div>
            <div className="border-solid border-2 border-sky-500 inline-block align-middle">
                        <h1 className="font-bold text-xl mt-2">{duty1}</h1>
            </div>
            <div className={`${label1} bg-gray-500 border-solid border-2 border-sky-500 inline-block...`}>
                <input type="time" value={time1} onChange={e=>setTime1(e.target.value)}
                className="bg-indigo-200 text-xl text-center mt-3"
                />
            </div>
            <div className={`${label1} bg-gray-500 border-solid border-2 border-sky-500 inline-block align-middle ...`}>
                <input type="time" value={time2} onChange={e=>setTime2(e.target.value)}
                className="bg-indigo-200 text-xl text-center mt-3"
                />
            </div>
        </div>
{/* TUESDAY */}
        <div className="grid grid-cols-4 gap-4 text-center align-center border-solid border-2 border-sky-500">
            <div className="border-solid border-2 border-sky-500 align-middle">
                <button value={day2} type="button" onClick={showInput2}
                        className={`text-${text2} text-xl w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-${color2} dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                        {day2}</button>
            </div>
            <div className="border-solid border-2 border-sky-500 inline-block align-middle">
                        <h1 className="font-bold text-xl mt-3">{duty2}</h1>
            </div>
            <div className={`${label2} bg-gray-500 border-solid border-2 border-sky-500 inline-block align-middle ...`}>
                <input type="time" value={time3} onChange={e=>setTime3(e.target.value)}
                className="bg-indigo-200 text-xl text-center mt-3"/>
            </div>
            <div className={`${label2} bg-gray-500 border-solid border-2 border-sky-500 inline-block align-middle ...`}>
                <input type="time" value={time4} onChange={e=>setTime4(e.target.value)}
                className="bg-indigo-200 text-xl text-center mt-3"/>
            </div>
        </div>
{/* WEDNESDAY */}
        <div className="grid grid-cols-4 gap-4 text-center align-center border-solid border-2 border-sky-500">
            <div className="border-solid border-2 border-sky-500 align-middle">
                <button value={day3} type="button" onClick={showInput3}
                        className={`text-${text3} text-xl w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-${color3} dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                        {day3}</button>
            </div>
            <div className="border-solid border-2 border-sky-500 inline-block align-middle">
                        <h1 className="font-bold text-xl mt-2">{duty3}</h1>
            </div>
            <div className={`${label3} bg-gray-500 border-solid border-2 border-sky-500 inline-block align-middle ...`}>
                <input type="time" value={time5} onChange={e=>setTime5(e.target.value)}
                className="bg-indigo-200 text-xl text-center mt-2"/>
            </div>
            <div className={`${label3} bg-gray-500 border-solid border-2 border-sky-500 inline-block align-middle ...`}>
                <input type="time" value={time6} onChange={e=>setTime6(e.target.value)}
                className="bg-indigo-200 text-xl text-center mt-2"/>
            </div>
        </div>
{/* THURSDAY */}
        <div className="grid grid-cols-4 gap-4 text-center align-center border-solid border-2 border-sky-500">
            <div className="border-solid border-2 border-sky-500 align-middle">
                <button value={day4} type="button" onClick={showInput4}
                        className={`text-${text4} text-xl w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-${color4} dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                        {day4}</button>
            </div>
            <div className="border-solid border-2 border-sky-500 inline-block align-middle">
                        <h1 className="font-bold text-xl mt-2">{duty4}</h1>
            </div>
            <div className={`${label4} bg-gray-500 border-solid border-2 border-sky-500 inline-block align-middle ...`}>
                <input type="time" value={time7} onChange={e=>setTime7(e.target.value)}
                className="bg-indigo-200 text-xl text-center mt-2"/>
            </div>
            <div className={`${label4} bg-gray-500 border-solid border-2 border-sky-500 inline-block align-middle ...`}>
                <input type="time" value={time8} onChange={e=>setTime8(e.target.value)}
                className="bg-indigo-200 text-xl text-center mt-2"/>
            </div>
        </div>
{/* Friday */}
        <div className="grid grid-cols-4 gap-4 text-center align-center border-solid border-2 border-sky-500">
            <div className="border-solid border-2 border-sky-500 align-middle">
                <button value={day5} type="button" onClick={showInput5}
                        className={`text-${text5} text-xl w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-${color5} dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                        {day5}
                </button>
            </div>
            <div className="border-solid border-2 border-sky-500 inline-block align-middle">
                        <h1 className="font-bold text-xl mt-2">{duty5}</h1>
            </div>
            <div className={`${label5} bg-gray-500 border-solid border-2 border-sky-500 inline-block align-middle ...`}>
                <input type="time" value={time9} onChange={e=>setTime9(e.target.value)}
                className="bg-indigo-200 text-xl text-center mt-2"/>
            </div>
            <div className={`${label5} bg-gray-500 border-solid border-2 border-sky-500 inline-block align-middle ...`}>
                <input type="time" value={time10} onChange={e=>setTime10(e.target.value)}
                className="bg-indigo-200 text-xl text-center mt-2"/>
            </div>
        </div>

{/* Saturday */}
        <div className="grid grid-cols-4 gap-4 text-center align-center border-solid border-2 border-sky-500">
            <div className="border-solid border-2 border-sky-500 align-middle">
                <button value={day6} type="button" onClick={showInput6}
                        className={`text-${text6} text-xl w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-${color6} dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                        {day6}
                </button>
            </div>
            <div className="border-solid border-2 border-sky-500 inline-block align-middle">
                        <h1 className="font-bold text-xl mt-2">{duty6}</h1>
            </div>
            <div className={`${label6} bg-gray-500 border-solid border-2 border-sky-500 inline-block align-middle ...`}>
                <input type="time" value={time11} onChange={e=>setTime11(e.target.value)}
                        className="bg-indigo-200 text-xl text-center mt-2"/>
            </div>
            <div className={`${label6} bg-gray-500 border-solid border-2 border-sky-500 inline-block align-middle ...`}>
                <input type="time" value={time12} onChange={e=>setTime12(e.target.value)}
                        className="bg-indigo-200 text-xl text-center mt-2"/>
            </div>
        </div>
{/* Sunday */}
        <div className="grid grid-cols-4 gap-4 text-center align-center border-solid border-2 border-sky-500">
            <div className="border-solid border-2 border-sky-500 align-middle">
                <button value={day7} type="button" onClick={showInput7}
                    className={`text-${text7} text-xl w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-${color7} dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                        {day7}
                </button>
            </div>
            <div className="border-solid border-2 border-sky-500 inline-block align-middle">
                    <h1 className="font-bold text-xl mt-2">{duty7}</h1>
            </div>
            <div className={`${label7} bg-gray-500 border-solid border-2 border-sky-500 inline-block align-middle ...`}>
                <input type="time" value={time13} onChange={e=>setTime13(e.target.value)}
                className="bg-indigo-200 text-xl text-center mt-2"/>
            </div>
            <div className={`${label7} bg-gray-500 border-solid border-2 border-sky-500 inline-block align-middle ...`}>
                <input type="time" value={time14} onChange={e=>setTime14(e.target.value)}
                className="bg-indigo-200 text-xl text-center mt-2"/>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-1 border-solid border-2 border-sky-500">
            <br/>
                <button type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                        >SAVE
                </button>
            <br/>
        </div>
    </form>
</>
)
}
export default Scheduling