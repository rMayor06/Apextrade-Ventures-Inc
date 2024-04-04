"use client";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Select from "../../../app/components/option";
import { Infos } from "../../../../types/infos";
import AddEvalist from "./../../components/addevaluatelist";
import { useRouter } from "next/navigation";

const Evaluatedlist = ({ params }) => {
  const rating = [
    "10",
    "9.5",
    "9",
    "8.5",
    "8",
    "7.5",
    "7",
    "6.5",
    "6",
    "5.5",
    "5",
    "4.5",
    "4",
    "3.5",
    "3",
    "2.5",
    "2",
    "1.5",
    "1",
    ".5",
    "0",
  ];
  const td = "border border-gray-900 px-4 py-2 text-left mb-4 text-xl";
  const [evalemp, setEvalEmp] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:7000/evaluated/${params.print}`,
        {
          next: {
            revalidate: 0,
          },
        }
      );
      const jsonData = await response.json();
      setEvalEmp(jsonData);
      router.refresh();
    };
    fetchData();
  }, []);

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 15, pdfWidth, pdfHeight);
    pdf.save(
      `${evalemp.rateelname}, ${evalemp.rateefname} ${evalemp.rateemname}.pdf`
    );
  };

  const b2xl = "px-4 py-2 border border-slate-600 font-bold text-2xl";
  const xl = "px-4 py-2 border border-slate-600 text-xl";
  const xl1 = "px-4 py-2 border border-slate-600 text-xl";
  const bxl1 = "px-4 py-2 border border-slate-600 text-xl font-bold";
  const b2xl1 = "px-4 py-2 border border-slate-600 text-2xl font-bold";
  const bxl1c = "px-4 py-2 border border-slate-700 text-center text-xl";
  const clnmtotal =
    "px-4 py-2 border border-slate-700 text-3xl text-center font-bold";
  const comments =
    "px-4 py-2 border border-slate-700 font-bold text-xl text-center";
  const comments2 =
    "px-4 py-2 border border-slate-700 text-2xl text-center italic";

  return (
    <div className="text-center mx-auto">
      <button className="btn btn-block" onClick={createPDF} type="button">
        Download and Save
      </button>
      <div id="pdf">
        <h1 className="font-bold text-2xl mt-8">
          <img className="w-10 mx-auto" src="/favicon.ico" alt="logo" />
          APEXTRADE VENTURES INCORPORATION
        </h1>
        <h1 className="">
          U910 East Tower Tektite Bldg. Exchange Road San Antonio Pasig City
        </h1>
        <h1>Contact # : (+63)976-044-3837</h1>
        <br />
        <hr className="h-1 bg-gray-200 w-90 content-center mx-auto" />
        <h1 className="font-bold text-2xl mb-5 mt-5">
          PERFORMANCE APPRAISAL FORM [For rank & file positions]
        </h1>
        <div className="mx-auto flex justify-center">
          <table className="border-collapse border border-gray-300 w-[85%]">
            <tr>
              <td
                colspan="5"
                className={`${td} text-left font-bold bg-gray-200`}
              >
                I. EMPLOYEE DATA:
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} font-bold w-[40%]`}>
                Ratee Name
              </td>
              <td className={`${td} font-bold`}>Employee No.</td>
              <td className={`${td} font-bold`}>Position and Department</td>
              <td className={`${td} font-bold`}>Date Hired</td>
            </tr>
            <tr>
              <td colspan="2" className={`${td}`}>
                {evalemp.rateelname}, {evalemp.rateefname} {evalemp.rateemname}
              </td>
              <td className={`${td}`}>{evalemp.rateeenum}</td>
              <td className={`${td}`}>{evalemp.rateeposition}</td>
              <td className={`${td}`}>{evalemp.datehired}</td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} font-bold`}>
                Rater Name
              </td>
              <td colspan="3" className={`${td} font-bold`}>
                Position and Department
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td}`}>
                CALARA, CHRISTIAN PAUL GUERRERO
              </td>
              <td colspan="3" className={`${td}`}>
                TEAM LEADER
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} font-bold`}>
                Purpose
              </td>
              <td colspan="3" className={`${td}`}>
                {evalemp.purpose}
              </td>
            </tr>
            <tr>
              <td className={`${td} font-bold w-[20%]`}>Evaluation Period</td>
              <td className={`${td} font-bold`}>--</td>
              <td className={`${td} font-bold`}>Evaluated Date:</td>
              <td className={`${td}`}>{evalemp.dateevaluated}</td>
              <td className={`${td}`}></td>
            </tr>
            <tr>
              <td
                colspan="5"
                className={`${td} font-bold text-left bg-gray-200`}
              >
                II. SUMMARY OF RATINGS
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} font-bold text-center`}>
                FACTORS
              </td>
              <td className={`${td} font-bold text-center`}>RATINGS</td>
              <td className={`${td} font-bold text-center`}>MULTIPLIER</td>
              <td className={`${td} font-bold text-center`}>
                PERFORMANCE RATINGS
              </td>
            </tr>
            <tr>
              <td colspan="5" className={`${td} font-bold`}>
                A. OUTPUTS 20%
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} text-right`}>
                Quality of work
              </td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.attendance}
              </td>
              <td className={`${td} font-bold text-center`}>1.50</td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.tattendance}
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} text-right`}>
                Quantity of work
              </td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.workefficiency}
              </td>
              <td className={`${td} font-bold text-center`}>1.50</td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.tworkefficiency}
              </td>
            </tr>
            <tr>
              <td colspan="5" className={`${td} font-bold`}>
                B. KNOWLEDGE 20%
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} text-right`}>
                On Job
              </td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.behavior}
              </td>
              <td className={`${td} font-bold text-center`}>1.50</td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.tbehavior}
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} text-right`}>
                Related Duties
              </td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.relatedduties}
              </td>
              <td className={`${td} font-bold text-center`}>0.50</td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.trelatedduties}
              </td>
            </tr>
            <tr>
              <td colspan="5" className={`${td} font-bold`}>
                C. SKILLS 30%
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} text-right`}>
                Technical
              </td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.technical}
              </td>
              <td className={`${td} font-bold text-center`}>1.00</td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.ttechnical}
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} text-right`}>
                Communication
              </td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.communication}
              </td>
              <td className={`${td} font-bold text-center`}>0.50</td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.tcommunication}
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} text-right`}>
                Resource Utilization
              </td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.resourceutilization}
              </td>
              <td className={`${td} font-bold text-center`}>0.50</td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.tresourceutilization}
              </td>
            </tr>
            <tr>
              <td colspan="5" className={`${td} font-bold`}>
                D. ATTITUDES/ATTRIBUTES 30%
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} text-right`}>
                Initiative/Industriousness
              </td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.initiative}
              </td>
              <td className={`${td} font-bold text-center`}>0.70</td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.tinitiative}
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} text-right`}>
                Integrity
              </td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.integrity}
              </td>
              <td className={`${td} font-bold text-center`}>0.70</td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.tintegrity}
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} text-right`}>
                Safety/Orderliness/Decorum
              </td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.safety}
              </td>
              <td className={`${td} font-bold text-center`}>0.45</td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.tsafety}
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} text-right`}>
                Dependability/Attendance
              </td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.dependability}
              </td>
              <td className={`${td} font-bold text-center`}>0.70</td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.tdependability}
              </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td} text-right`}>
                Loyalty/Corporate Image & Values
              </td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.loyalty}
              </td>
              <td className={`${td} font-bold text-center`}>0.45</td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.tloyalty}
              </td>
            </tr>
            <tr>
              <td colspan="4" className={`${td} font-bold text-right`}>
                OVERALL PERFORMANCE RATING
              </td>
              <td className={`${td} font-bold text-center`}>
                {evalemp.totalscore}
              </td>
            </tr>
            <tr>
              <td
                colspan="5"
                className={`${td} font-bold text-left bg-gray-200`}
              >
                III. OVERALL PERFORMANCE RATING
              </td>
            </tr>
            <tr className={`${td}`}>
              <td className={`${td}`} colspan="4"></td>
              <td className={`${td} text-center mb-2 mt-4`}>Point Rating</td>
            </tr>
            <tr>
              <td colspan="2" className={`${td}`}></td>
              <td colspan="2" className={`${td}`}>
                <h1 className="text-left align-center">
                  <input type="checkbox" value="" /> 5 - Exceptional Performance
                </h1>
              </td>
              <td className={`${td} text-center`}>95-100</td>
            </tr>
            <tr>
              <td colspan="2" className={`${td}`}></td>
              <td colspan="2" className={`${td}`}>
                <h1 className="text-left">
                  <input type="checkbox"></input> 4 - Above Standard Performance
                </h1>
              </td>
              <td className={`${td} text-center`}>85-94</td>
            </tr>
            <tr>
              <td colspan="2" className={`${td}`}></td>
              <td colspan="2" className={`${td}`}>
                <h1 className="text-left">
                  <input type="checkbox"></input> 3 - Standard Performance
                </h1>
              </td>
              <td className={`${td} text-center`}>75-84</td>
            </tr>
            <tr>
              <td colspan="2" className={`${td}`}></td>
              <td colspan="2" className={`${td}`}>
                <h1 className="text-left">
                  <input type="checkbox"></input> 2 - Below Standard Performance
                </h1>
              </td>
              <td className={`${td} text-center`}>65-74 </td>
            </tr>
            <tr>
              <td colspan="2" className={`${td}`}></td>
              <td colspan="2" className={`${td}`}>
                <h1 className="text-left">
                  <input type="checkbox"></input> 1 - Unacceptable performance
                </h1>
              </td>
              <td className={`${td} text-center`}>below 65</td>
            </tr>
            <tr>
              <td
                colspan="5"
                className={`${td} font-bold text-center bg-gray-200`}
              >
                COMMENTS
              </td>
            </tr>
            <tr className="border-r border-l border-gray-900">
              <td className={`${td} text-center`} colspan="5">
                {evalemp.comment}
              </td>
            </tr>
            <tr className="border-r border-l border-b border-gray-900 h-20 text-center align-bottom">
              <td colspan="3" className="font-bold">
                <h1 className="mb-6">RATER'S SIGNATURE</h1>
              </td>
              <td colspan="2" className="font-bold">
                <h1 className="mb-6">SIGNATURE OF RATER'S SUPERIOR</h1>
              </td>
            </tr>
          </table>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};
export default Evaluatedlist;
