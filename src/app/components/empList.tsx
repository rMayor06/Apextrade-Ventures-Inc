"use client";
import { Infos } from "~/..//../types/infos";
import React, { useState } from "react";
import Link from "next/link";
import Details from "./details";

interface EmployeeList {
  emplist: Infos[];
}
const EmpList: React.FC<EmployeeList> = ({ emplist }) => {
  const [filteredRecords, setFilteredRecords] = useState<Infos[]>(emplist);

  const filterRecords = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    const filtered = emplist.filter(
      (employee) =>
        employee.lname.toLowerCase().includes(query) ||
        employee.fname.toLowerCase().includes(query)
    );
    setFilteredRecords(filtered);
  };
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="text-2xl">
          <input
            onChange={filterRecords}
            placeholder="Search...."
            type="search"
          ></input>
        </div>
        <div>{/* 2 */}</div>
        <div className="text-2xl font-bold">LIST OF EMPLOYEES</div>
        <div>{/* 4 */}</div>
        <div className="text-center font-bold">
          <Link href="/masterlistinfo">VIEW MASTERLIST</Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-900">
          <thead className="text-xs text-gray-900 uppercase bg-gray-100 dark:bg-gray-600 dark:text-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name of Employee
              </th>
              <th scope="col" className="px-6 py-3">
                Designation
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Employee Number
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Contact Number
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Info Last Updated
              </th>
              <th scope="col" className="px-6 py-3">
                Update Info
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((info) => (
              <Details key={info.id} info={info} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default EmpList;
