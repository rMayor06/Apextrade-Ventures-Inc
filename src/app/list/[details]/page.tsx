"use client"
import { useState, useEffect } from 'react'
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";


const Details = ({params}) => {
  const [detail, setDetail] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:7000/einfo/${params.details}`)
      const jsonData = await response.json()
      setDetail(jsonData)
  }
  fetchData()
}, [])

const createPDF = async () => {   
  const pdf = new jsPDF("landscape", "pt", "a4"); 
  const data = await html2canvas(document.querySelector("#pdf"));
  const img = data.toDataURL("image/png");
  const imgProperties = pdf.getImageProperties(img);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
  pdf.addImage(img, "PNG", 0, 20, pdfWidth, pdfHeight);
  pdf.save(`${detail.lname}, ${detail.fname} ${detail.mname}.pdf`);
};
  return(
    <div>
      <button className="btn btn-block" onClick={createPDF} type="button">Download</button>
      <div id="pdf">
        <div className="content py-2 px-10">
          <img className="w-20 float-left" src="/favicon.ico" alt="logo"/>
          <div className="text-left font-bold text-4xl mb-1">
            APEXTRADE VENTURES INCORPORATION
          </div>
          <div className="italic font-bold text-xl">
            U910 East Tower Tektite Bldg. Exchange Road San Antonio Pasig City
          </div><br/>
            hr className="w-100 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-0 dark:bg-gray-700"/>
        </div>
        <div className="ml-12 mt-8 mr-12">
          <p className="font-bold text-5xl">{detail.lname}, {detail.fname} {detail.mname}</p>
          <p className="italic text-3xl">{detail.address}</p>
          <p className="text-xl text-3xl">{detail.email}</p>
          <p className="text-xl text-3xl">{detail.cnumber}</p>
          <br/>
          <div className="ml-12 text-3xl">
            <tr>
              <td><p className="ml-12 text-2xl px-6 py-6">Employee Number:</p></td><td><p className="text-2xl text-left font-bold text-3xl">{detail.empnumber}</p> </td>
              <td><p className="ml-12 text-2xl px-6 py-6">Designation:</p></td><td><p className="text-2xl text-left font-bold text-3xl">{detail.designation}</p> </td>
              <td><p className="ml-12 text-2xl px-6 py-6">Salary Rate:</p></td><td><p className="text-2xl text-left font-bold text-3xl">{detail.salary}</p> </td>
            </tr>   
          </div><br/><br/>
          <table className="border-solid border-2 border-sky-500 w-full text-3xl text-center">
            <tr>
              <td className="text-left border-solid border-2 border-sky-500 ">Date of Birth:</td>
              <td className="text-left font-bold border-solid border-2 border-sky-500">{detail.datebirth}</td>
              <td className="text-left border-solid border-2 border-sky-500">Place of Birth:</td>
              <td className="text-left border-solid border-2 border-sky-500 font-bold">{detail.placebirth}</td>
            </tr>
            <tr>
              <td className="text-left border-solid border-2 border-sky-500">Marital Status:</td>
              <td className="text-left border-solid border-2 border-sky-500 font-bold">{detail.mstatus}</td>
              <td className="text-left border-solid border-2 border-sky-500"></td>
              <td className="text-left border-solid border-2 border-sky-500 font-bold"></td>
            </tr>
            <tr>
              <td className="text-left border-solid border-2 border-sky-500">Emergency Contact Person:</td>
              <td className="text-left border-solid border-2 border-sky-500 font-bold">{detail.contactperson}</td>
              <td className="text-left border-solid border-2 border-sky-500">Emergency Contact Number:</td>
              <td className="text-left border-solid border-2 border-sky-500 font-bold">{detail.contact}</td>
            </tr>
            <tr>
              <td className="text-left border-solid border-2 border-sky-500">Mother's Maiden Name:</td>
              <td className="text-left border-solid border-2 border-sky-500 font-bold">{detail.maidenname}</td>
              <td className="text-left border-solid border-2 border-sky-500">No. of Dependencies:</td>
              <td className="text-left font-bold border-solid border-2 border-sky-500">{detail.dependencies}</td>
            </tr>
            <tr>
              <td className="text-left border-solid border-2 border-sky-500">SSS No.:</td>
              <td className="text-left font-bold border-solid border-2 border-sky-500">{detail.sss}</td>
              <td className="text-left border-solid border-2 border-sky-500">HDMF No.:</td>
              <td className="text-left font-bold border-solid border-2 border-sky-500">{detail.pagibig}</td>
            </tr>
            <tr >
              <td className="text-left border-solid border-2 border-sky-500">PHIC No.:</td>
              <td className="text-left font-bold border-solid border-2 border-sky-500">{detail.phealth}</td>
              <td className="text-left border-solid border-2 border-sky-500">TIN No.:</td>
              <td className="text-left font-bold border-solid border-2 border-sky-500">{detail.tin}</td>
            </tr>
          </table>
        </div><br/><br/>
      </div>
    </div>
  )
}
export default Details