"use client";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { fetchPayrollData, fetchPayslipData } from "@/../api";
import { useEffect, useState } from "react";
import PayslipPrint from "./../../components/payslip";

const PrintPayslip = ({ params }) => {
  const [payslips, setPayslips] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await fetchPayslipData(params.id);
        setPayslips(jsonData);
      } catch (error) {
        console.error("Error fetching schedule data:", error.message);
      }
    };
    fetchData();
  }, [params.id]);

  const createPDF = async () => {
    // const pdf = new jsPDF("p", "mm", [297, 210]);
    // const data = await html2canvas(document.querySelector("#pdf"));
    // const img = data.toDataURL("image/png");
    // const imgProperties = pdf.getImageProperties(img);
    // const pdfWidth = pdf.internal.pageSize.getWidth();
    // const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    // pdf.addImage(img, "PNG", 10, 10, pdfWidth, pdfHeight);
    // pdf.save(`payslip.pdf`);
    const data = await html2canvas(document.querySelector("#pdf"), {
      scale: 2,
    });

    const img = data.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `${payslips.lname}, ${payslips.fname} ${payslips.mname}.png`;
    link.href = img;
    link.click();
  };

  return (
    <div className="container">
      <div>
        <button
          className="btn btn-block mx-auto w-auto"
          onClick={createPDF}
          type="button"
        >
          Download
        </button>
      </div>
      <div id="pdf" className="flex justify-center">
        <PayslipPrint payslip={payslips} />
      </div>
    </div>
  );
};
export default PrintPayslip;
