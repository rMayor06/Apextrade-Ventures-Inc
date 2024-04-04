"use client";
import { useEffect, useState } from "react";
import AddPayslip from "../../components/addpayslip";
import Modal from "../../components/Modal";
import Link from "next/link";

const Payroll = ({ params }) => {
  const [sched, setSched] = useState([]);
  const [sched2, setSched2] = useState("");
  const [openModalDeleted, setOpenModalDeleted] = useState(false);
  const [selectedIdToDelete, setSelectedIdToDelete] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:7000/payslip`, {
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
        setSched2(jsonData);
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
          `http://localhost:7000/payslip/${list.id}`,
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
        <div className="text-xl font-bold">PAYSLIPS</div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <div className="text-xl font-bold"></div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-900">
          <thead className="text-xs text-gray-900 uppercase bg-gray-100 dark:bg-gray-600 dark:text-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                NAME
              </th>
              <th scope="col" className="px-6 py-3">
                Period
              </th>
              <th scope="col" className="px-6 py-3">
                Month
              </th>
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                NetPay
              </th>
              <th scope="col" className="px-6 py-3 text-center"></th>
              <th scope="col" className="px-6 py-3">
                View Payslip
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {sched
              .filter((list) => list.id2 === `${params.id}`)
              .map((list) => (
                <tr
                  id={list.id}
                  className="odd:bg-white odd:dark:bg-gray-200 even:bg-gray-900 even:dark:bg-gray-100 border-b dark:border-gray-900"
                >
                  <td className="px-6 py-4 font-bold">
                    {list.lname}, {list.fname} {list.mname}
                  </td>
                  <td className="px-6 py-4">{list.period}</td>
                  <td className="px-6 py-4">{list.month}</td>
                  <td className="px-6 py-4">{list.year}</td>
                  <td className="px-6 py-4">{list.netpay}</td>
                  <td className="px-6 py-4 text-center">
                    <Link href={`/payroll/${list.id}`}></Link>
                  </td>
                  <td className="px-6 py-4">
                    <Link href={`/paysliplist/${list.id}`}>View Payslip</Link>
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
    </>
  );
};
export default Payroll;
