"use client";
import { Infos } from "~/..//../types/infos";
import React from "react";
// import Link from 'next/link'
import Evaldetails from "./evaldetails";
import AddEvalist from "./addevaluatelist";
import Link from "next/link";

interface EvalEmp {
  evalist: Infos[];
}
const Evaluated: React.FC<EvalEmp> = ({ evalist }) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="text-2xl font-bold">List of Evaluated Employees</div>
        <div className="font-bold text-right">
          <Link href="/read">Read (Categories of Evaluation)</Link>
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
                Total Score
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Date and Time Evaluated
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Purpose of Evaluation
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Evaluated by:
              </th>
              <th scope="col" className="px-6 py-3">
                Full Details
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {evalist.map((info) => (
              <Evaldetails key={info.id} list={info} />
            ))}
          </tbody>
        </table>
      </div>
      <AddEvalist />
    </>
  );
};
export default Evaluated;
