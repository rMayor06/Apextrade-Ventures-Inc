import React from "react";
import TableEvalInfo from "./tableevalinfo";

const RatingTable = ({
  rating,
  handleCompute,
  color,
  currentDate,
  evalemp,
  setPurpose,
  purpose,
  setComment,
  comment,
  setRating1,
  setRating2,
  setRating3,
  setRating4,
  setRating5,
  setRating6,
  setRating7,
  setRating8,
  setRating9,
  setRating10,
  setRating11,
  setRating12,
  total1ok,
  total2ok,
  total3ok,
  total4ok,
  total5ok,
  total6ok,
  total7ok,
  total8ok,
  total9ok,
  total10ok,
  total11ok,
  total12ok,
  oatotal,
  rating1,
  rating2,
  rating3,
  rating4,
  rating5,
  rating6,
  rating7,
  rating8,
  rating9,
  rating10,
  rating11,
  rating12,
}) => {
  const td = "border border-gray-900 px-4 py-2 text-left mb-4 text-xl";

  return (
    <div className="mx-auto flex justify-center">
      <table className="border-collapse border border-gray-300 w-[85%]">
        <tr>
          <td colspan="5" className={`${td} text-left font-bold bg-gray-200`}>
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
            {evalemp.lname}, {evalemp.fname} {evalemp.mname}
          </td>
          <td className={`${td}`}>{evalemp.empnumber}</td>
          <td className={`${td}`}>{evalemp.designation}</td>
          <td className={`${td}`}>{evalemp.datestarted}</td>
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
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option>ANNUAL PERFOMANCE REVIEW</option>
              <option>PROMOTION/UPGRADE</option>
              <option>REGULARIZATION</option>
              <option>TRANSFER</option>
              <option>PROBATIONARY (1 MONTH EXTENSION)</option>
              <option>PROBATIONARY (2 MONTHS EXTENSION)</option>
            </select>
          </td>
        </tr>
        <tr>
          <td className={`${td} font-bold w-[20%]`}>Evaluation Period</td>
          <td className={`${td} font-bold`}>--</td>
          <td className={`${td} font-bold`}>Date:</td>
          <td className={`${td}`}>{currentDate}</td>
          <td className={`${td}`}></td>
        </tr>
        <tr>
          <td colspan="5" className={`${td} font-bold text-left bg-gray-200`}>
            II. SUMMARY OF RATINGS
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} font-bold text-center`}>
            FACTORS
          </td>
          <td className={`${td} font-bold text-center`}>RATINGS</td>
          <td className={`${td} font-bold text-center`}>MULTIPLIER</td>
          <td className={`${td} font-bold text-center`}>PERFORMANCE RATINGS</td>
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
            <select
              value={rating1}
              onChange={(e) => {
                setRating1(e.target.value);
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </td>
          <td className={`${td} font-bold text-center`}>1.50</td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total1ok}
              onChange={(e) => setRating1(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Quantity of work
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rating2}
              onChange={(e) => {
                setRating2(e.target.value);
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </td>
          <td className={`${td} font-bold text-center`}>1.50</td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total2ok}
              onChange={(e) => setRating1(e.target.value)}
            ></input>
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
            <select
              value={rating3}
              onChange={(e) => {
                setRating3(e.target.value);
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} font-bold text-center`}>1.50</td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total3ok}
              onChange={(e) => setRating3(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Related Duties
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rating4}
              onChange={(e) => {
                setRating4(e.target.value);
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} font-bold text-center`}>0.50</td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total4ok}
              onChange={(e) => setRating4(e.target.value)}
            ></input>
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
            <select
              value={rating5}
              onChange={(e) => {
                setRating5(e.target.value);
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} font-bold text-center`}>1.00</td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total5ok}
              onChange={(e) => setRating5(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Communication
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rating6}
              onChange={(e) => {
                setRating6(e.target.value);
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} font-bold text-center`}>0.50</td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total6ok}
              onChange={(e) => setRating6(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Resource Utilization
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rating7}
              onChange={(e) => {
                setRating7(e.target.value);
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} font-bold text-center`}>0.50</td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total7ok}
              onChange={(e) => setRating7(e.target.value)}
            ></input>
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
            <select
              value={rating8}
              onChange={(e) => {
                setRating8(e.target.value);
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} font-bold text-center`}>0.70</td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total8ok}
              onChange={(e) => setRating8(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Integrity
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rating9}
              onChange={(e) => {
                setRating9(e.target.value);
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} font-bold text-center`}>0.70</td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total9ok}
              onChange={(e) => setRating9(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Safety/Orderliness/Decorum
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rating10}
              onChange={(e) => {
                setRating10(e.target.value);
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} font-bold text-center`}>0.45</td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total10ok}
              onChange={(e) => setRating10(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Dependability/Attendance
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rating11}
              onChange={(e) => {
                setRating11(e.target.value);
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} font-bold text-center`}>0.70</td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total11ok}
              onChange={(e) => {
                setRating11(e.target.value);
                handleCompute();
              }}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Loyalty/Corporate Image & Values
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rating12}
              onChange={(e) => {
                setRating12(e.target.value);
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} font-bold text-center`}>0.45</td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total12ok}
              onChange={(e) => setRating12(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="4" className={`${td} font-bold text-right`}>
            OVERALL PERFORMANCE RATING
          </td>
          <td className={`${td} font-bold text-center`}>{oatotal}</td>
        </tr>
        <tr>
          <td colspan="5" className={`${td} font-bold text-left bg-gray-200`}>
            III. OVERALL PERFORMANCE RATING
          </td>
        </tr>
        <tr className={`${td}`}>
          <td className={`${td}`} colspan="4"></td>
          <td className={`${td} text-center mb-2 mt-4`}>
            <button onClick={handleCompute}>Point Rating</button>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td}`}></td>
          <td colspan="2" className={`${td} bg-${color.five}-500`}>
            <h1 className="text-left align-center">
              <input type="checkbox" value="" /> 5 - Exceptional Performance
            </h1>
          </td>
          <td className={`${td} text-center bg-${color.five}-500`}>95-100</td>
        </tr>
        <tr>
          <td colspan="2" className={`${td}`}></td>
          <td colspan="2" className={`${td} bg-${color.four}-500`}>
            <h1 className="text-left">
              <input type="checkbox"></input> 4 - Above Standard Performance
            </h1>
          </td>
          <td className={`${td} text-center bg-${color.four}-500`}>85-94</td>
        </tr>
        <tr>
          <td colspan="2" className={`${td}`}></td>
          <td colspan="2" className={`${td} bg-${color.three}-500`}>
            <h1 className="text-left">
              <input type="checkbox"></input> 3 - Standard Performance
            </h1>
          </td>
          <td className={`${td} text-center bg-${color.three}-500`}>75-84</td>
        </tr>
        <tr>
          <td colspan="2" className={`${td}`}></td>
          <td colspan="2" className={`${td} bg-${color.two}-500`}>
            <h1 className="text-left">
              <input type="checkbox"></input> 2 - Below Standard Performance
            </h1>
          </td>
          <td className={`${td} text-center bg-${color.two}-500`}>65-74 </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td}`}></td>
          <td colspan="2" className={`${td} bg-${color.one}-500`}>
            <h1 className="text-left">
              <input type="checkbox"></input> 1 - Unacceptable performance
            </h1>
          </td>
          <td className={`${td} text-center bg-${color.one}-500`}>below 65</td>
        </tr>
        <tr>
          <td colspan="5" className={`${td} font-bold text-center bg-gray-200`}>
            COMMENTS
          </td>
        </tr>
        <tr className="border-r border-l border-gray-900">
          <td className={`${td}`} colspan="5">
            <textarea
              className="w-full h-12 text-center font-normal italic"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
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
  );
};

export default RatingTable;
