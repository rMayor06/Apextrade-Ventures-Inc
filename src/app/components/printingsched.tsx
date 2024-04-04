"use client"
import { useEffect, useState } from "react";

const PrintSched = ({ sched, setSched }) => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:7000/schedule`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            throw new Error('Failed to fetch schedule data');
          }
          const jsonData = await response.json();
          setSched(jsonData);
        } catch (error) {
          console.error('Error fetching schedule data:', error.message);
        }
      };
  
      fetchData();
    }, [setSched]);
    
    const [montime,setMonTime] = useState(`${sched.day1.timestart12?.time12_1} - ${sched.day1.timeend12?.time12_2}`)
    const [mon,setMon] = useState(`${sched.day1.duty.duty1}`)
    const [tuestime,setTuesTime] = useState(`${sched.day2.timestart12?.time12_3} - ${sched.day2.timeend12?.time12_4}`)
    const [tues,setTues] = useState(`${sched.day2.duty.duty2}`)
    const [wedtime,setWedTime] = useState(`${sched.day3.timestart12?.time12_5} - ${sched.day3.timeend12?.time12_6}`)
    const [wed,setWed] = useState(`${sched.day3.duty.duty3}`)
    const [thurstime,setThursTime] = useState(`${sched.day4.timestart12?.time12_7} - ${sched.day4.timeend12?.time12_8}`)
    const [thurs,setThurs] = useState(`${sched.day4.duty.duty4}`)
    const [fritime,setFriTime] = useState(`${sched.day5.timestart12?.time12_9} - ${sched.day5.timeend12?.time12_10}`)
    const [fri,setFri] = useState(`${sched.day5.duty.duty5}`)
    const [sattime,setSatTime] = useState(`${sched.day6.timestart12?.time12_11} - ${sched.day6.timeend12?.time12_12}`)
    const [sat,setSat] = useState(`${sched.day6.duty.duty6}`)
    const [suntime,setSunTime] = useState(`${sched.day7.timestart12?.time12_13} - ${sched.day7.timeend12?.time12_14}`)
    const [sun,setSun] = useState(`${sched.day7.duty.duty7}`)

    if(montime===' - '){setMonTime('')}
    if(tuestime===' - '){setTuesTime('')}
    if(wedtime===' - '){setWedTime('')}
    if(thurstime===' - '){setThursTime('')}
    if(fritime===' - '){setFriTime('')}
    if(sattime===' - '){setSatTime('')}
    if(suntime===' - '){setSunTime('')}

    const clnm = "px-6 py-3 text-center border-l border-gray-400"
    const clnm2 = "text-xs italic font-bold"

    return(
        <tr key={sched.id} className="odd:bg-white odd:dark:bg-gray-200 even:bg-gray-900 even:dark:bg-gray-100 border-b dark:border-gray-900">
            <td scope="col" className="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black border-l border-gray-300">  
                {sched.lname}, {sched.fname} {sched.mname}
            </td>
            <td scope="col" className={clnm}>{montime}<h1 className={clnm2}>{mon}</h1></td>
            <td scope="col" className={clnm}>{tuestime}<h1 className={clnm2}>{tues}</h1></td>
            <td scope="col" className={clnm}>{wedtime}<h1 className={clnm2}>{wed}</h1></td>
            <td scope="col" className={clnm}>{thurstime}<h1 className={clnm2}>{thurs}</h1></td>
            <td scope="col" className={clnm}>{fritime}<h1 className={clnm2}>{fri}</h1></td>
            <td scope="col" className={clnm}>{sattime}<h1 className={clnm2}>{sat}</h1></td>
            <td scope="col" className={clnm}>{suntime}<h1 className={clnm2}>{sun}</h1></td>
        </tr>
    )
}
export default PrintSched