"use client"
import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import PrintSched from './../../components/printingsched'

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const numberArray = Array.from({ length: 32 }, (_, index) => index + 1);
const year = ['2024', '2025', '2026', '2027', '2028', '2029', '2030'];


const PrintOut = ({params}) => {
    const [date, setDate] = useState('')
    const [dateMonth, setDateMonth] = useState('')
    const [dateYear, setDateYear] = useState('')
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`http://localhost:7000/schedule`,{
            next:{
            revalidate: 0
            }
        });
          const jsonData = await response.json()
          const sortedData = jsonData.sort((a, b) => {
            return a.shift.shift.localeCompare(b.shift.shift);
          });
          setSchedule(sortedData);
      }
      fetchData()
    }, [])
    const [schedule, setSchedule] = useState([])

    const createPDF = async () => {   
        const pdf = new jsPDF("landscape", "pt", "a4"); 
        const data = await html2canvas(document.querySelector("#pdf"));
        const img = data.toDataURL("image/png");
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(img, "PNG", 0, 10, pdfWidth, pdfHeight);
        pdf.save(`${params.printout}.pdf`);
    };

return(
    <div>
        <select className="font-bold" onChange={(e)=>setDate(e.target.value)}>
            {month.map((item, index)=>(<option key={index} value={item}>{item}</option>))}
        </select>
        <select className="font-bold" onChange={(e)=>setDateMonth(e.target.value)}>
            {numberArray.map((number)=>(<option value={number}>{number}</option>))}
        </select>
        <select className="font-bold" onChange={(e)=>setDateYear(e.target.value)}>
            {year.map((number)=>(<option value={number}>{number}</option>))}
        </select>
        <div id="pdf" className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="text-center mx-auto">
                <h1 className="font-bold text-2xl">
                    <img className="w-10 mx-auto" src="/favicon.ico" alt="logo"/>
                        APEXTRADE VENTURES INCORPORATION</h1>
                <h1 className="text-xl">U910 East Tower Tektite Bldg. Exchange Road San Antonio Pasig City</h1>
                <h1 className="text-xl">Contact # : (+63)976-044-3837</h1><br/>
                <hr className="h-1 bg-gray-200 w-90 content-center mx-auto"/>
            </div>
                <h1 className="text-center font-bold">Schedule of Work for the Month of {params.printout}</h1>
                
                    <div className="text-center font-bold">
                        Effective Date: {date} {dateMonth}, {dateYear}

                        </div>
            <table className="mt-2 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-900">
                <thead className="text-xs text-gray-900 uppercase bg-gray-100 dark:bg-gray-600 dark:text-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3">NAME</th>
                        <th scope="col" className="px-6 py-3 text-center">MONDAY</th>
                        <th scope="col" className="px-6 py-3 text-center">TUESDAY</th>
                        <th scope="col" className="px-6 py-3 text-center">WEDNESDAY</th>
                        <th scope="col" className="px-6 py-3 text-center">THURDAY</th>
                        <th scope="col" className="px-6 py-3 text-center">FRIDAY</th>
                        <th scope="col" className="px-6 py-3 text-center">SATURDAY</th>
                        <th scope="col" className="px-6 py-3 text-center">SUNDAY</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.filter((employee) => employee.monthyear2 === `${params.printout}`).map((employee) =>(
                    <PrintSched key={employee.id} sched={employee} />
                    ))}
                </tbody>
            </table>
        </div><br/>
        <div className="text-center radius-3 bg-gray-600 text-gray-100">
            <button onClick={createPDF} type="button">Download</button>
        </div><br/>
  </div>
  
)
}
export default PrintOut