"use client";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import TableEval from "./../../components/tableeval";
import Header from "./../../components/header";
import Criteria from "../../components/Criteria";
import criteriaData from "../../components/criteriaData";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  return `${month}/${date}/${year} ${hours}:${minutes}`;
}

const Evaluation = ({ params }) => {
  // prettier-ignore
  const rating = [
    "10", "9.5", "9", "8.5", "8", "7.5", "7", "6.5", "6", "5.5", "5", "4.5", "4", "3.5", "3", "2.5", "2", "1.5", "1", ".5", "0",
  ];
  const td = "border border-gray-900 px-4 py-2 text-left mb-4 text-xl";
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [purpose, setPurpose] = useState("ANNUAL PERFORMANCE REVIEW");
  // prettier-ignore
  const [rate, setRate] = useState({
    one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0, eleven: 0, twelve: 0,
    commentall: "", comment1: "", comment2: "", comment3: "", comment4: "", comment5: "", comment6: "", comment7: "", comment8: "",
    comment9: "", comment10: "", comment11: "", comment12: "",
  });
  // const [total1ok, setTotal1ok] = useState({
  //   one: (rate.one * 1.5).toFixed(2),
  // });
  // prettier-ignore
  const total1ok = (rate.one * 1.5).toFixed(2);
  const total2ok = (rate.two * 1.5).toFixed(2);
  const total3ok = (rate.three * 1.5).toFixed(2);
  const total4ok = (rate.four * 0.5).toFixed(2);
  const total5ok = (rate.five * 1.0).toFixed(2);
  const total6ok = (rate.six * 0.5).toFixed(2);
  const total7ok = (rate.seven * 0.5).toFixed(2);
  const total8ok = (rate.eight * 0.7).toFixed(2);
  const total9ok = (rate.nine * 0.7).toFixed(2);
  const total10ok = (rate.ten * 0.45).toFixed(2);
  const total11ok = (rate.eleven * 0.7).toFixed(2);
  const total12ok = (rate.twelve * 0.45).toFixed(2);
  // prettier-ignore
  const oatotal = ( parseFloat(total1ok) + parseFloat(total2ok) + parseFloat(total3ok) + parseFloat(total4ok) +
    parseFloat(total5ok) + parseFloat(total6ok) + parseFloat(total7ok) + parseFloat(total8ok) + parseFloat(total9ok) + 
    parseFloat(total10ok) + parseFloat(total11ok) + parseFloat(total12ok)).toFixed(2);

  const [evalemp, setEvalEmp] = useState([]);
  const [currentDate, setCurrentDate] = useState(getDate());
  // prettier-ignore
  const [isChecked, setIsChecked] = useState({
    one: true, two: false, three: false, four: false, five: false,
  });
  // prettier-ignore
  const handleCompute = () => {
    if (oatotal <= 64) {
      setIsChecked((prevColor) => ({
        ...prevColor,
        one: true, two: false, three: false, four: false, five: false,
      }));
    }
    if (oatotal >= 65) {
      setIsChecked((prevColor) => ({
        ...prevColor,
        one: false, two: true, three: false, four: false, five: false,
      }));
    }
    if (oatotal >= 75) {
      setIsChecked((prevColor) => ({
        ...prevColor,
        one: false, two: false, three: true, four: false, five: false,
      }));
    }
    if (oatotal >= 85) {
      setIsChecked((prevColor) => ({
        ...prevColor,
        one: false, two: false, three: false, four: true, five: false,
      }));
    }
    if (oatotal >= 95) {
      setIsChecked((prevColor) => ({
        ...prevColor,
        one: false, two: false, three: false, four: false, five: true,
      }));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:7000/einfo/${params.evaluate}`,
        {
          next: {
            revalidate: 0,
          },
        }
      );
      const jsonData = await response.json();
      setEvalEmp(jsonData);
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
    pdf.save(`${evalemp.lname}, ${evalemp.fname} ${evalemp.mname}.pdf`);
    router.push("/evaluated");
    router.refresh();

    const response = await fetch(`http://localhost:7000/evaluated`, {
      method: "POST",
      body: JSON.stringify({
        id: uuidv4(),
        ratername: "CALARA, CHRISTIAN PAUL GUERRERO",
        raterposition: "TEAM LEADER",
        purpose: purpose,
        rateefname: evalemp.fname,
        rateemname: evalemp.mname,
        rateelname: evalemp.lname,
        rateeenum: evalemp.empnumber,
        rateeposition: evalemp.designation,
        datehired: evalemp.datestarted,
        dateevaluated: currentDate,
        attendance: rate.one,
        workefficiency: rate.two,
        behavior: rate.three,

        relatedduties: rate.four,
        technical: rate.five,
        communication: rate.six,
        resourceutilization: rate.seven,
        initiative: rate.eight,
        integrity: rate.nine,
        safety: rate.ten,
        dependability: rate.eleven,
        loyalty: rate.twelve,

        tattendance: total1ok.one,
        tworkefficiency: total2ok,
        tbehavior: total3ok,
        trelatedduties: total4ok,
        ttechnical: total5ok,
        tcommunication: total6ok,
        tresourceutilization: total7ok,
        tinitiative: total8ok,
        tintegrity: total9ok,
        tsafety: total10ok,
        tdependability: total11ok,
        tloyalty: total12ok,
        totalscore: oatotal,
        comment: rate.commentall,
        comment1: rate.comment1,
        comment2: rate.comment2,
        comment3: rate.comment3,
        comment4: rate.comment4,
        comment5: rate.comment5,
        comment6: rate.comment6,
        comment7: rate.comment7,
        comment8: rate.comment8,
        comment9: rate.comment9,
        comment10: rate.comment10,
        comment11: rate.comment11,
        comment12: rate.comment12,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const datas = await response.json();
    console.log(datas);
  };

  const tableStyle =
    "px-5 mx-auto border-collapse border border-slate-500 text-center text-xl";
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [hidden, setHidden] = useState(
    new Array(criteriaData.length).fill(true)
  );

  const toggleHidden = (index) => {
    const newHidden = [...hidden];
    newHidden[index] = !newHidden[index];
    setHidden(newHidden);
  };

  return (
    <div className="text-center mx-auto">
      <button
        className="fixed top-50 right-0 p-2 bg-yellow-200 shadow-md font-bold"
        onClick={toggleSidebar}
      >
        categories
      </button>
      <h1 className="fixed bottom-0 p-2 bg-yellow-200 shadow-md font-bold w-full">
        <h1 className="text-xs">you are evaluating</h1>
        <h1 className="text-red-900 italic font-bold text-xl">
          {evalemp.lname}, {evalemp.fname} {evalemp.mname}
        </h1>
        <button
          className="w-full btn btn-block bg-blue-200"
          onClick={createPDF}
          type="submit"
        >
          Download and Save
        </button>
      </h1>

      <div id="pdf">
        <Header />
        <h1 className="font-bold text-2xl mb-5 mt-5">
          PERFORMANCE APPRAISAL FORM [For rank & file positions]
        </h1>
        <TableEval
          rating={rating}
          rate={rate}
          setRate={setRate}
          handleCompute={handleCompute}
          currentDate={currentDate}
          evalemp={evalemp}
          setPurpose={setPurpose}
          purpose={purpose}
          setComment={setComment}
          comment={comment}
          total1ok={total1ok}
          // setTotal1ok={setTotal1ok}
          total2ok={total2ok}
          total3ok={total3ok}
          total4ok={total4ok}
          total5ok={total5ok}
          total6ok={total6ok}
          total7ok={total7ok}
          total8ok={total8ok}
          total9ok={total9ok}
          total10ok={total10ok}
          total11ok={total11ok}
          total12ok={total12ok}
          oatotal={oatotal}
          setIsChecked={setIsChecked}
          isChecked={isChecked}
        />
        <br />
        <br />
      </div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bg-white p-4 shadow-md hover:bg-gray-300 bg-gray-700 p-8 rounded-md shadow-md h-full w-3/4 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-[98%]"
        } transition-transform ease-in-out duration-300`}
      >
        <div className="bg-gradient-to-r from-gray-200 via-gray-400 to-pink-400 h-full w-full overflow-y-auto">
          <button
            className="p-2 bg-yellow-200 shadow-md font-bold w-full mb-3"
            onClick={toggleSidebar}
          >
            close
          </button>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-900 p-5 h-[70px] shadow-md w-full">
            <h2 className="text-2xl font-bold text-white stroke-cyan-900">
              FACTORS TO CONSIDER IN EVALUATING THE PERFORMANCE OF THE RATEE
            </h2>
          </div>
          <div className="w-[90%] mx-auto">
            {criteriaData.map((data, index) => (
              <Criteria
                key={index}
                title={data.title}
                description={data.description}
                isOpen={!hidden[index]}
                toggle={() => toggleHidden(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* End Sidebar */}
    </div>
  );
};
export default Evaluation;
