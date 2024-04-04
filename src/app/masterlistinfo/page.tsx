"use client";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

const PrintInfo = () => {
  const [sched, setSched] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:7000/einfo`, {
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

  const createExcel = () => {
    const wb = XLSX.utils.book_new();

    const wsData = [
      [
        "No",
        "Status",
        "Employee No.",
        "Employee Name",
        "Position",
        "Salary Rate",
        "Employment Date",
        "Personal No.",
        "Home Address",
        "Birth Date",
        "Place of Birth",
        "Email",
        "Civil Status",
        "No. of Dependencies",
        "SSS No.",
        "HDMF No.",
        "PHIC No.",
        "TIN No.",
        "MOTHER'S MAIDEN NAME",
        "EMERGENCY CONTACT PERSON",
        "NUMBER",
      ],
      ...sched.map((item, index) => [
        index + 1,
        "", // Status - Placeholder, modify as needed
        item.empnumber,
        `${item.lname}, ${item.fname} ${item.mname}`,
        item.designation,
        item.salary,
        item.datestarted,
        item.cnumber,
        item.address,
        item.datebirth,
        item.placebirth,
        item.email,
        item.mstatus,
        item.dependencies,
        item.sss,
        item.pagibig,
        item.phealth,
        item.tin,
        item.maidenname,
        item.contactperson,
        item.contact,
      ]),
    ];

    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Set autoFilter option
    ws["!autofilter"] = {
      ref: XLSX.utils.encode_range({
        s: { r: 0, c: 0 },
        e: { r: wsData.length - 1, c: wsData[0].length - 1 },
      }),
    };

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    const fileName = "Employee_Info.xlsx";

    XLSX.writeFile(wb, fileName);
  };

  const tab = {
    head: "border border-solid border-collapse border-gray-500 table-auto text-xs",
    thcol: "border border-solid border-gray-500 text-xs",
    col: "border border-solid border-gray-500 text-xs",
  };

  return (
    <div>
      <button className="btn btn-block" onClick={createExcel} type="button">
        Download
      </button>
      <div id="pdf">
        <table className={tab.head}>
          <thead>
            <tr>
              <th className={tab.thcol}>No</th>
              <th className={tab.thcol}>Status</th>
              <th className={tab.thcol}>Employee No.</th>
              <th className={tab.thcol}>Employee Name</th>
              <th className={tab.thcol}>Position</th>
              <th className={tab.thcol}>Salary Rate</th>
              <th className={tab.thcol}>Employment Date</th>
              <th className={tab.thcol}>Personal No.</th>
              <th className={tab.thcol}>Home Address</th>
              <th className={tab.thcol}>Birth Date</th>
              <th className={tab.thcol}>Place of Birth</th>
              <th className={tab.thcol}>Email</th>
              <th className={tab.thcol}>Civil Status</th>
              <th className={tab.thcol}>No. of Dependencies</th>
              <th className={tab.thcol}>SSS No.</th>
              <th className={tab.thcol}>HDMF No.</th>
              <th className={tab.thcol}>PHIC No.</th>
              <th className={tab.thcol}>TIN No.</th>
              <th className={tab.thcol}>Mother's Maiden Name</th>
              <th className={tab.thcol}>Emergency Contact Person</th>
              <th className={tab.thcol}>Number</th>
            </tr>
          </thead>
          <tbody>
            {sched.map((item, index) => (
              <tr key={index}>
                <td className={`${tab.col} text-center`}>{index + 1}</td>
                <td className={tab.col}></td>
                <td className={tab.col}>{item.empnumber}</td>
                <td className={tab.col}>
                  {item.lname}, {item.fname} {item.mname}
                </td>
                <td className={tab.col}>{item.designation}</td>
                <td className={tab.col}>{item.salary}</td>
                <td className={tab.col}>{item.datestarted}</td>
                <td className={tab.col}>{item.cnumber}</td>
                <td className={tab.col}>{item.address}</td>
                <td className={tab.col}>{item.datebirth}</td>
                <td className={tab.col}>{item.placebirth}</td>
                <td className={tab.col}>{item.email}</td>
                <td className={tab.col}>{item.mstatus}</td>
                <td className={`${tab.col} text-center`}>
                  {item.dependencies}
                </td>
                <td className={tab.col}>{item.sss}</td>
                <td className={tab.col}>{item.pagibig}</td>
                <td className={tab.col}>{item.phealth}</td>
                <td className={tab.col}>{item.tin}</td>
                <td className={tab.col}>{item.maidenname}</td>
                <td className={tab.col}>{item.contactperson}</td>
                <td className={tab.col}>{item.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrintInfo;
