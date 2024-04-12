import React from "react";
import TableEvalInfo from "./tableevalinfo";

const RatingTable = ({
  rating,
  setRate,
  rate,
  handleCompute,
  currentDate,
  evalemp,
  setPurpose,
  purpose,
  setComment,
  comment,
  total1ok,
  setTotal1ok,
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
  isChecked,
  setIsChecked,
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
          <td colspan="2" className={`${td} font-bold w-[10%]`}>
            Ratee Name
          </td>
          <td className={`${td} font-bold w-[15%]`}>Employee No.</td>
          <td className={`${td} font-bold w-[55%]`}>Position and Department</td>
          <td className={`${td} font-bold w-[20%]`}>Date Hired</td>
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
              <option>ANNUAL PERFORMANCE REVIEW</option>
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
          <td className={`${td} font-bold text-center`}>COMMENTS</td>
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
              value={rate.one}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  one: e.target.value,
                }));
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
          <td className={`${td} text-center`}>
            <input
              className="w-full text-center italic"
              type="text"
              value={rate.comment1}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  comment1: e.target.value,
                }));
              }}
              required
            />
          </td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total1ok}
              onChange={(e) => setRate.one(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Quantity of work
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rate.two}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  two: e.target.value,
                }));
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
          <td className={`${td} text-center`}>
            <input
              className="w-full text-center italic"
              type="text"
              value={rate.comment2}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  comment2: e.target.value,
                }));
              }}
              required
            />
          </td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total2ok}
              onChange={(e) => setRate.two(e.target.value)}
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
              value={rate.three}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  three: e.target.value,
                }));
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} text-center`}>
            <input
              className="w-full text-center italic"
              type="text"
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  comment3: e.target.value,
                }));
              }}
              required
            />
          </td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total3ok}
              onChange={(e) => setRate.three(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Related Duties
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rate.four}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  four: e.target.value,
                }));
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} text-center`}>
            <input
              className="w-full text-center italic"
              type="text"
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  comment4: e.target.value,
                }));
              }}
              required
            />
          </td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total4ok}
              onChange={(e) => setRate.four(e.target.value)}
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
              value={rate.five}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  five: e.target.value,
                }));
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} text-center`}>
            <input
              className="w-full text-center italic"
              type="text"
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  comment5: e.target.value,
                }));
              }}
              required
            />
          </td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total5ok}
              onChange={(e) => setRate.five(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Communication
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rate.six}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  six: e.target.value,
                }));
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} text-center`}>
            <input
              className="w-full text-center italic"
              type="text"
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  comment6: e.target.value,
                }));
              }}
              required
            />
          </td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total6ok}
              onChange={(e) => setRate.six(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Resource Utilization
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rate.seven}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  seven: e.target.value,
                }));
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} text-center`}>
            <input
              className="w-full text-center italic"
              type="text"
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  comment7: e.target.value,
                }));
              }}
              required
            />
          </td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total7ok}
              onChange={(e) => setRate.seven(e.target.value)}
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
              value={rate.eight}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  eight: e.target.value,
                }));
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} text-center`}>
            <input
              className="w-full text-center italic"
              type="text"
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  comment8: e.target.value,
                }));
              }}
              required
            />
          </td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total8ok}
              onChange={(e) => setRate.eight(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Integrity
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rate.nine}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  nine: e.target.value,
                }));
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} text-center`}>
            <input
              className="w-full text-center italic"
              type="text"
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  comment9: e.target.value,
                }));
              }}
              required
            />
          </td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total9ok}
              onChange={(e) => setRate.nine(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Safety/Orderliness/Decorum
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rate.ten}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  ten: e.target.value,
                }));
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} text-center`}>
            <input
              className="w-full text-center italic"
              type="text"
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  comment10: e.target.value,
                }));
              }}
              required
            />
          </td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total10ok}
              onChange={(e) => setRate.ten(e.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            Dependability/Attendance
          </td>
          <td className={`${td} font-bold text-center`}>
            <select
              value={rate.eleven}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  eleven: e.target.value,
                }));
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} text-center`}>
            <input
              className="w-full text-center italic"
              type="text"
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  comment11: e.target.value,
                }));
              }}
              required
            />
          </td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total11ok}
              onChange={(e) => {
                setRate.eleven(e.target.value);
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
              value={rate.twelve}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  twelve: e.target.value,
                }));
                handleCompute();
              }}
            >
              {rating.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </td>
          <td className={`${td} text-center`}>
            <input
              className="w-full text-center italic"
              type="text"
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  comment12: e.target.value,
                }));
              }}
              required
            />
          </td>
          <td className={`${td} font-bold text-center`}>
            <input
              className="w-20 text-center"
              type="text"
              value={total12ok}
              onChange={(e) => setRate.twelve(e.target.value)}
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
          <td colspan="2" className={`${td} text-right`}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-right"
              checked={isChecked.five}
              onChange={() => setIsChecked.five(!isChecked.five)}
              disabled={true}
            />
          </td>
          <td colspan="2" className={`${td} align-top`}>
            <h1 className="text-left align-top">5 - Exceptional Performance</h1>
          </td>
          <td className={`${td} text-center`}>95-100</td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            <input
              type="checkbox"
              className="h-5 w-5"
              checked={isChecked.four}
              onChange={() => setIsChecked.four(!isChecked.four)}
              disabled={true}
            />
          </td>
          <td colspan="2" className={`${td}`}>
            <h1 className="text-left">4 - Above Standard Performance</h1>
          </td>
          <td className={`${td} text-center`}>85-94</td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            <input
              type="checkbox"
              className="h-5 w-5"
              checked={isChecked.three}
              onChange={() => setIsChecked.three(!isChecked.three)}
              disabled={true}
            />
          </td>
          <td colspan="2" className={`${td}`}>
            <h1 className="text-left">3 - Standard Performance</h1>
          </td>
          <td className={`${td} text-center`}>75-84</td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            <input
              type="checkbox"
              className="h-5 w-5"
              checked={isChecked.two}
              onChange={() => setIsChecked.two(!isChecked.two)}
              disabled={true}
            />
          </td>
          <td colspan="2" className={`${td}`}>
            <h1 className="text-left">2 - Below Standard Performance</h1>
          </td>
          <td className={`${td} text-center`}>65-74 </td>
        </tr>
        <tr>
          <td colspan="2" className={`${td} text-right`}>
            <input
              type="checkbox"
              className="h-5 w-5"
              checked={isChecked.one}
              onChange={() => setIsChecked.one(!isChecked.one)}
              disabled={true}
            />
          </td>
          <td colspan="2" className={`${td}`}>
            <h1 className="text-left">1 - Unacceptable performance</h1>
          </td>
          <td className={`${td} text-center`}>below 65</td>
        </tr>
        <tr>
          <td colspan="5" className={`${td} font-bold text-center bg-gray-200`}>
            OVER-ALL COMMENT
          </td>
        </tr>
        <tr className="border-r border-l border-gray-900">
          <td className={`${td}`} colspan="5">
            <textarea
              className="w-full h-12 text-center font-normal italic"
              value={rate.commentall}
              onChange={(e) => {
                setRate((prevRate) => ({
                  ...prevRate,
                  commentall: e.target.value,
                }));
              }}
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
