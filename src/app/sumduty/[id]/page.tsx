"use client"
import { useEffect, useState } from "react"
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const SumDuty = ({params}) => {
  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(`http://localhost:7000/schedule/${params.id}`,{
              next:{
              revalidate: 0
              }
          });
          const jsonData = await response.json()
          setSched(jsonData)
      }
      fetchData()
  },[])

const [sched, setSched] = useState('')
const createPDF = async () => {   
    const pdf = new jsPDF("portrait", "pt", "a4"); 
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("shipping_label.pdf");
  };
const className = "text-xl font-bold"
return (
    <div className="shipping text-center">
      <div id="pdf">
      <h1>Individual Summary of Duty for the Month of {sched.monthyear}</h1>
      <p className={className}>{sched.fname} {sched.mname} {sched.lname}R</p>
      </div>
      <button onClick={createPDF} type="button">Download</button>
    </div>
  );
}
export default SumDuty