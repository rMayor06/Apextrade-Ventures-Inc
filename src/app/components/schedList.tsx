"use client"
import { Schedule } from "~/..//../types/infos"
import React, { useState } from "react"
import Link from 'next/link'
import Scheddetails from './schedDetails'
import AddSched from './addsched';
import PrintSchedMasterList from './printschedmasterlist'   ;

interface EmployeeList {
    emplist: Schedule[];
  }
  const EmpList: React.FC<EmployeeList> = ({ emplist }) => {
   const [filteredRecords, setFilteredRecords] = useState<Schedule[]>(emplist);
   const filterRecords = (event: React.ChangeEvent<HTMLInputElement>) => {
   const query = event.target.value.toLowerCase();
   const filtered = emplist.filter(
      employee =>
         employee.lname.toLowerCase().includes(query) ||
         employee.fname.toLowerCase().includes(query) ||
         employee.month.month.toLowerCase().includes(query) ||
         employee.year.year.toLowerCase().includes(query)
      );
      setFilteredRecords(filtered);
    };
return (
   <>
      <div className="grid grid-cols-5">
         <div className="text-2xl">   
            <input onChange={filterRecords} placeholder="Search...." type="search"></input>
         </div><div>{/* 2 */}</div>
         <div className="text-xl font-bold">Scheduling System</div>
         <div>{/* 4 */}</div><div>{/* 5 */}</div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-900">
            <thead className="text-xs text-gray-900 uppercase bg-gray-100 dark:bg-gray-600 dark:text-gray-100">
               <tr>
                  <th scope="col" className="px-6 py-3 ">NAME</th>
                  <th scope="col" className="px-6 py-3 text-center">Month & Year</th>
                  <th scope="col" className="px-6 py-3 text-center">MONDAY</th>
                  <th scope="col" className="px-6 py-3 text-center">TUESDAY</th>
                  <th scope="col" className="px-6 py-3 text-center">WEDNESDAY</th>
                  <th scope="col" className="px-6 py-3 text-center">THURDAY</th>
                  <th scope="col" className="px-6 py-3 text-center">FRIDAY</th>
                  <th scope="col" className="px-6 py-3 text-center">SATURDAY</th>
                  <th scope="col" className="px-6 py-3 text-center">SUNDAY</th>
                  <th scope="col" className="px-6 py-3 text-center">Shift</th>
                  <th scope="col" className="px-6 py-3 text-center">EDIT</th>
                  <th scope="col" className="px-6 py-3 text-center">DELETE</th>
               </tr>
            </thead>
            <tbody>
                {filteredRecords.map((emplist)=>(  <Scheddetails key={emplist.id} list={emplist}/>))}
            </tbody>
         </table>
      </div>
      <div className="grid grid-cols-2 gap-2">
         <div><AddSched/></div>
            <div className="text-left"><PrintSchedMasterList/></div>
      </div>
   </>
)
}
export default EmpList