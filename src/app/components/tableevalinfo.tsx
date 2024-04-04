import { useState } from "react";

export const TableEvalInfo = ({ evalem, purpose, setPurpose }) => {
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
  const [currentDate, setCurrentDate] = useState(getDate());
  const td = "border border-gray-900 px-4 py-2 text-left mb-4 text-xl";
  return (
    <>
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
          {evalem.lname}, {evalem.fname} {evalem.mname}
        </td>
        <td className={`${td}`}>{evalem.empnumber}</td>
        <td className={`${td}`}>{evalem.designation}</td>
        <td className={`${td}`}>{evalem.datestarted}</td>
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
          <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
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
    </>
  );
};
export default TableEvalInfo;
