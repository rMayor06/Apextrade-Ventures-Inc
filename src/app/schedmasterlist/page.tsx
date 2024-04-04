"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const SchedMasterList = () => {

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`http://localhost:7000/schedule`,{
            next:{
            revalidate: 0
            }
        });
          const jsonData = await response.json()
          setSched(jsonData)
      }
      fetchData()
    }, [])

    const [sched, setSched] = useState([])

    return (
        <div className='text-center'>
          <h1 className="font-bold text-xl">Print-out Summary of Employees Work Schedule</h1> <br/><br/>
            {Array.from(new Set(sched.map((list) => list.monthyear2))).map((uniqueMonthYear) => (
                    <div key={uniqueMonthYear}>
                        <Link href={`/schedmasterlist/${uniqueMonthYear}`}>{uniqueMonthYear}</Link>
                    </div>
            ))}
        </div>
      );
}
export default SchedMasterList