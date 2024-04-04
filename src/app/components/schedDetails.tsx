"use client"
import { Schedule } from "../../../types/infos"
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { FormEventHandler, useState, useEffect } from "react";
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import Modal from "./Modal"
import { deleteSched } from "@/../api"

// const [ monthNumber, setMonthNumber ] = useState('');
function getMonth() {
    const today = new Date();
    const monthForCon = today.getMonth() + 1;
    return `${monthForCon}`;
    }

function getYear() {
    const today = new Date();
    const yearForCon = today.getFullYear(); 
    return `${yearForCon}`;
    }

interface SchedProps{
    list: Schedule;
}
const Scheddetails: React.FC<SchedProps> = ({list}) => {
    const monthForCondition = getMonth();
    const yearForCondition = getYear();
    const router = useRouter();
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [edit, setEdit] = useState('Edit');
    const [ disableButton, setDisableButton ] = useState('');
    const [montime,setMonTime] = useState(`${list.day1.timestart12?.time12_1} - ${list.day1.timeend12?.time12_2}`)
    const [mon,setMon] = useState(`${list.day1.duty.duty1}`)
    const [monthyear,setMonthYear] = useState(`${list.monthyear}`)
    const [month,setMonth] = useState(`${list.month.month}`)
    const [year,setYear] = useState(`${list.year.year}`)
    const [monthNumber,setMonthNumber] = useState(`${list.monthNumber.monthNumber}`)
    const [tuestime,setTuesTime] = useState(`${list.day2.timestart12?.time12_3} - ${list.day2.timeend12?.time12_4}`)
    const [tues,setTues] = useState(`${list.day2.duty.duty2}`)
    const [wedtime,setWedTime] = useState(`${list.day3.timestart12?.time12_5} - ${list.day3.timeend12?.time12_6}`)
    const [wed,setWed] = useState(`${list.day3.duty.duty3}`)
    const [thurstime,setThursTime] = useState(`${list.day4.timestart12?.time12_7} - ${list.day4.timeend12?.time12_8}`)
    const [thurs,setThurs] = useState(`${list.day4.duty.duty4}`)
    const [fritime,setFriTime] = useState(`${list.day5.timestart12?.time12_9} - ${list.day5.timeend12?.time12_10}`)
    const [fri,setFri] = useState(`${list.day5.duty.duty5}`)
    const [sattime,setSatTime] = useState(`${list.day6.timestart12?.time12_11} - ${list.day6.timeend12?.time12_12}`)
    const [sat,setSat] = useState(`${list.day6.duty.duty6}`)
    const [suntime,setSunTime] = useState(`${list.day7.timestart12?.time12_13} - ${list.day7.timeend12?.time12_14}`)
    const [sun,setSun] = useState(`${list.day7.duty.duty7}`)
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    router.refresh();
    const handleDeleteTask = async (id: string) => {
        await deleteSched(id);
        setOpenModalDeleted(false);
        window.location.reload();
    }
    useEffect(() => {
        if (year >= yearForCondition) {
          if (monthNumber >= monthForCondition) {
            setIsButtonDisabled(false);
          }
            else {
                setIsButtonDisabled(true);
                setEdit('');
                }
        }
        else {
            setIsButtonDisabled(true);
            setEdit('');
        }
        if(montime===' - '){setMonTime('')}
        if(tuestime===' - '){setTuesTime('')}
        if(wedtime===' - '){ setWedTime('')}    
        if(thurstime===' - '){setThursTime('')}
        if(fritime===' - '){setFriTime('')}
        if(sattime===' - '){setSatTime('')}
        if(suntime===' - '){setSunTime('')}
      }, [year, monthNumber, yearForCondition, monthForCondition]);

      const clnm = "px-6 py-4 text-center";
      const clnm2 = "text-xs italic font-bold";

    return(
        <tr key={list.id} className="odd:bg-white odd:dark:bg-gray-200 even:bg-gray-900 even:dark:bg-gray-100 border-b dark:border-gray-900">
            <th scope="row" className="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                <Link href={`sumduty/${list.id}`}> {list.lname}, {list.fname} {list.mname}</Link>
            </th>
            <td className={clnm}>{list.month.month} {list.year.year}</td>
            <td className={clnm}>{montime}<h1 className={clnm2}>{mon}</h1></td>
            <td className={clnm}>{tuestime}<h1 className={clnm2}>{tues}</h1></td>
            <td className={clnm}>{wedtime}<h1 className={clnm2}>{wed}</h1></td>
            <td className={clnm}>{thurstime}<h1 className={clnm2}>{thurs}</h1></td>
            <td className={clnm}>{fritime}<h1 className={clnm2}>{fri}</h1> </td>
            <td className={clnm}>{sattime}<h1 className={clnm2}>{sat}</h1></td>
            <td className={clnm}>{suntime}<h1 className={clnm2}>{sun}</h1> </td>
            <td className={clnm}>{list.shift.shift}</td>
            <td className={clnm}>
                <button disabled={isButtonDisabled} onClick={()=>{
                    router.push(`/schedsystem/${list.id}`)}}>
                        {edit}
                </button>
                </td>   
            <td className="text-center">
                <FiTrash2 onClick={()=>setOpenModalDeleted(true)} cursor="pointer" className="text-red-500 mx-auto" size={25}/>
                    <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
                        <h3 className="text-lg text-gray-300">Are you sure you want to delete {list.lname}, {list.fname} {list.mname} from evaluated lists?</h3>
                        <div className="modal-action">
                            <button className="btn text-gray-300 content-center"
                                    onClick={()=>handleDeleteTask(list.id)}>
                                        Yes
                            </button>
                        </div>
                    </Modal>
            </td>
        </tr>
    )
}
export default Scheddetails;