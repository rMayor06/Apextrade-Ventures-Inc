"use client";
import { useEffect, useState } from "react";
import AddPayslip from "./../components/addpayslip";
import PrintPayslipMasterList from "./../components/printpayslipmasterlist";
import Modal from "./../components/Modal";
import Link from "next/link";

const Payroll = () => {
  const [sched, setSched] = useState([]);
  const [openModalDeleted, setOpenModalDeleted] = useState(false);
  const [selectedIdToDelete, setSelectedIdToDelete] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:7000/payroll`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch schedule data");
        }
        const jsonData = await response.json();
        setSched(jsonData);
      } catch (error) {
        console.error("Error fetching schedule data:", error.message);
      }
    };
    fetchData();
  }, []);

  const handleDeleteTask = async (list) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete ${list.lname}, ${list.fname} ${list.mname}?`
    );
    if (isConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:7000/payroll/${list.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to delete schedule data");
        }
        setSched((prevSched) =>
          prevSched.filter((item) => item.id !== list.id)
        );
      } catch (error) {
        console.error("Error deleting schedule data:", error.message);
      }
    }
  };
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="text-2xl">
          <input onChange="" placeholder="Search...." type="search"></input>
        </div>
        <div className="text-xl font-bold">Payroll System</div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <div className="text-s font-bold">
            <Link href={`/paysliplist/`}>LIST OF FINALIZED PAYSLIP</Link>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-900">
          <thead className="text-xs text-gray-900 uppercase bg-gray-100 dark:bg-gray-600 dark:text-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                NAME
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Position
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Employee Number
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Previous NetPay
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Payslip
              </th>
              <th scope="col" className="px-6 py-3">
                DTR/PAYSLIP
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {sched.map((list) => (
              <tr
                id={list.id}
                className="odd:bg-white odd:dark:bg-gray-200 even:bg-gray-900 even:dark:bg-gray-100 border-b dark:border-gray-900"
              >
                <td className="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                  {list.lname}, {list.fname} {list.mname}
                </td>
                <td className="px-6 py-4 text-center">{list.position}</td>
                <td className="px-6 py-4 text-center">{list.status}</td>
                <td className="px-6 py-4 text-center">{list.empnumber}</td>
                <td className="px-6 py-4 text-center">{list.netpay}</td>
                <td className="px-6 py-4 text-center">
                  <Link href={`/payslip/${list.id2}`}>Payslip/s</Link>
                </td>
                <td className="px-6 py-4">
                  <Link href={`/dtr/${list.id}`}>dtr/Payslips</Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteTask(list)}
                    className="text-red-500 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddPayslip />
      <div className="text-left">
        <PrintPayslipMasterList />
      </div>
    </>
  );
};
export default Payroll;
