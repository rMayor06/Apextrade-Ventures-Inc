"use client";
import { useEffect, useState, useRef } from "react";
import PayslipPrint from "./../../components/payslip";
import { fetchPayrollData, fetchPayslipData } from "@/../api";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const MasterListPayslip = ({ params }) => {
  const [payslips, setPayslips] = useState([]);
  const pdfRef = useRef(null);

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
        setPayslips(jsonData);
      } catch (error) {
        console.error("Error fetching schedule data:", error.message);
      }
    };
    fetchData();
  }, []);

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const payslipsPerPage = 4; // Number of payslips to display per page
    const payslipsToDisplay = payslips.filter(
      (employee) => employee.pym === `${params.id}`
    );

    for (let i = 0; i < payslipsToDisplay.length; i += payslipsPerPage) {
      if (i > 0) {
        pdf.addPage();
      }

      for (
        let j = 0;
        j < payslipsPerPage && i + j < payslipsToDisplay.length;
        j++
      ) {
        const payslipRef = payslipsToDisplay[i + j];
        const payslipData = await html2canvas(
          document.querySelector(`#payslip-${payslipRef.id}`)
        );
        const img = payslipData.toDataURL("image/png");
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const aspectRatio = imgProperties.width / imgProperties.height;
        let pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        const yPosition = 10 + j * (pdfHeight + 10); // Adjust vertical position for each payslip

        pdf.addImage(img, "PNG", 50, 5 + yPosition, pdfWidth - 100, pdfHeight);
      }
    }

    pdf.save(`payslip.pdf`);
  };

  return (
    <div className="container">
      <div>
        <button className="btn btn-block" onClick={createPDF} type="button">
          Download
        </button>
      </div>
      <h1>Payslips {params.id}</h1>
      <div className="w-full flex flex-col" ref={pdfRef}>
        {payslips
          .filter((employee) => employee.pym === `${params.id}`)
          .map((employee) => (
            <div
              key={employee.id}
              id={`payslip-${employee.id}`}
              className="flex justify-center"
            >
              <PayslipPrint payslip={employee} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MasterListPayslip;
