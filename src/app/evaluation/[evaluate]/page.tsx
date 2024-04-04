"use client";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import TableEval from "./../../components/tableeval";
import Header from "./../../components/header";

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
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [purpose, setPurpose] = useState("ANNUAL PERFORMANCE REVIEW");

  const [rating1, setRating1] = useState(1);
  const total1ok = (rating1 * 1.5).toFixed(2);
  const [rating2, setRating2] = useState(1);
  const total2ok = (rating2 * 1.5).toFixed(2);
  const [rating3, setRating3] = useState(1);
  const total3ok = (rating3 * 1.5).toFixed(2);
  const [rating4, setRating4] = useState(1);
  const total4ok = (rating4 * 0.5).toFixed(2);
  const [rating5, setRating5] = useState(1);
  const total5ok = (rating5 * 1.0).toFixed(2);
  const [rating6, setRating6] = useState(1);
  const total6ok = (rating6 * 0.5).toFixed(2);
  const [rating7, setRating7] = useState(1);
  const total7ok = (rating7 * 0.5).toFixed(2);
  const [rating8, setRating8] = useState(1);
  const total8ok = (rating8 * 0.7).toFixed(2);
  const [rating9, setRating9] = useState(1);
  const total9ok = (rating9 * 0.7).toFixed(2);
  const [rating10, setRating10] = useState(1);
  const total10ok = (rating10 * 0.45).toFixed(2);
  const [rating11, setRating11] = useState(1);
  const total11ok = (rating11 * 0.7).toFixed(2);
  const [rating12, setRating12] = useState(1);
  const total12ok = (rating12 * 0.45).toFixed(2);
  // const rtotal = parseInt(rating1) + parseInt(rating2) + parseInt(rating3);
  const oatotal = (
    parseFloat(total1ok) +
    parseFloat(total2ok) +
    parseFloat(total3ok) +
    parseFloat(total4ok) +
    parseFloat(total5ok) +
    parseFloat(total6ok) +
    parseFloat(total7ok) +
    parseFloat(total8ok) +
    parseFloat(total9ok) +
    parseFloat(total10ok) +
    parseFloat(total11ok) +
    parseFloat(total12ok)
  ).toFixed(2);

  // const oatotalok = oatotal.toFixed(2);
  const [evalemp, setEvalEmp] = useState([]);
  const [currentDate, setCurrentDate] = useState(getDate());
  const [color, setColor] = useState({
    one: "transparent",
    two: "transparent",
    three: "transparent",
    four: "transparent",
    five: "transparent",
  });
  const handleCompute = () => {
    if (oatotal <= 64) {
      setColor((prevColor) => ({
        ...prevColor,
        one: "gray",
        two: "transparent",
        three: "transparent",
        four: "transparent",
        five: "transparent",
      }));
    }
    if (oatotal >= 65) {
      setColor((prevColor) => ({
        ...prevColor,
        two: "gray",
        one: "transparent",
        three: "transparent",
        four: "transparent",
        five: "transparent",
      }));
    }
    if (oatotal >= 75) {
      setColor((prevColor) => ({
        ...prevColor,
        one: "transparent",
        two: "transparent",
        three: "gray",
        four: "transparent",
        five: "transparent",
      }));
    }
    if (oatotal >= 85) {
      setColor((prevColor) => ({
        ...prevColor,
        one: "transparent",
        two: "transparent",
        three: "transparent",
        four: "gray",
        five: "transparent",
      }));
    }
    if (oatotal >= 95) {
      setColor((prevColor) => ({
        ...prevColor,
        one: "transparent",
        two: "transparent",
        three: "transparent",
        four: "transparent",
        five: "gray",
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
        attendance: rating1,
        workefficiency: rating2,
        behavior: rating3,

        relatedduties: rating4,
        technical: rating5,
        communication: rating6,
        resourceutilization: rating7,
        initiative: rating8,
        integrity: rating9,
        safety: rating10,
        dependability: rating11,
        loyalty: rating12,

        tattendance: total1ok,
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
        comment: comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const datas = await response.json();
    console.log(datas);
  };

  return (
    <div className="text-center mx-auto">
      <button className="btn btn-block" onClick={createPDF} type="button">
        Download and Save
      </button>
      <div id="pdf">
        <Header />
        <h1 className="font-bold text-2xl mb-5 mt-5">
          PERFORMANCE APPRAISAL FORM [For rank & file positions]
        </h1>
        <TableEval
          rating={rating}
          handleCompute={handleCompute}
          color={color}
          currentDate={currentDate}
          evalemp={evalemp}
          setPurpose={setPurpose}
          purpose={purpose}
          setComment={setComment}
          comment={comment}
          setRating1={setRating1}
          setRating2={setRating2}
          setRating3={setRating3}
          setRating4={setRating4}
          setRating5={setRating5}
          setRating6={setRating6}
          setRating7={setRating7}
          setRating8={setRating8}
          setRating9={setRating9}
          setRating10={setRating10}
          setRating11={setRating11}
          setRating12={setRating12}
          total1ok={total1ok}
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
          rating1={rating1}
          rating2={rating2}
          rating3={rating3}
          rating4={rating4}
          rating5={rating5}
          rating6={rating6}
          rating7={rating7}
          rating8={rating8}
          rating9={rating9}
          rating10={rating10}
          rating11={rating11}
          rating12={rating12}
        />
        <br />
        <br />
      </div>
    </div>
  );
};
export default Evaluation;
