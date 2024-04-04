const PayslipPrint = ({ payslip }) => {
  const head = "min-w-full";
  const dots = "border-b border-dashed border-black";
  const dots2 = "border-b border-t border-dashed border-black";
  const dotsl = "border-l border-r border-dashed border-black";
  const dotsr = "border-r border-dashed border-black";
  return (
    // <div className="w-9/10 md:w-5/6 lg:w-4/5 xl:w-3/4 mt-1 mb-1">
    <div className="w-full mt-1 mb-1 ml-1 mr-1">
      <table className="border-4 border-gray-700">
        <thead>
          <tr>
            <td
              colspan="7"
              className={`${head} ${dotsr} font-bold text-3xl h-[60px]`}
            >
              <h1 className="ml-2">APEXTRADE VENTURES INC.</h1>
            </td>
          </tr>
          <tr className={`${dotsr}`}></tr>
          <tr></tr>
        </thead>
        <tbody>
          <tr>
            <td className="" colspan="4" className="font-bold">
              <h1 className="ml-2">PAYSLIP - SEMI-MONTHLY PAYROLL</h1>
            </td>
            <td colspan="3" className={`${dotsr} font-bold text-s`}>
              PERIOD : {payslip.period} of {payslip.month} {payslip.year}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <tr>
          <td className="h-[35px] w-[10%]"></td>
          <td className="w-[8%]"></td>
          <td className="w-[8%]"></td>
          <td className="w-[18%]"></td>
          <td className="w-[12%]"></td>
          <td className="w-[17%] font-bold text-xs"></td>
          <td className={`${dotsr} w-[3%]`}></td>
          <td className="w-[10%] font-bold">
            <h1 className="ml-2">BASIC PAY:</h1>
          </td>
          <td className="w-[10%] text-right">
            <h1 className="mr-4 font-bold">{payslip.basicpay}</h1>
          </td>
        </tr>
        <tr>
          <td className={`${dots2} h-[5px]`}></td>
          <td className={`${dots2}`}></td>
          <td className={`${dots2}`}></td>
          <td className={`${dots2}`}></td>
          <td className={`${dots2}`}></td>
          <td className={`${dots2}`}></td>
          <td className={`${dots2} ${dotsr}`}></td>
          <td className={`${dots2}`}></td>
          <td className={`${dots2}`}></td>
        </tr>
        <tr>
          <td className={`${dots} h-[35px]`}>
            <h1 className="ml-2">EMPLOYEE:</h1>
          </td>
          <td
            className={`${dots} font-bold text-left text-s italic`}
            colspan="3"
          >
            {payslip.lname}, {payslip.fname} {payslip.mname}
          </td>
          <td className={`${dots}`}>STATUS:</td>
          <td className={`${dots} font-bold text-left text-s italic`}>
            {payslip.status}
          </td>
          <td className={`${dots} ${dotsr}`}></td>
          <td>
            <h1 className="ml-2">OVERTIME :</h1>
          </td>
          <td className="text-right">
            <h1 className="mr-4">{payslip.overtime}</h1>
          </td>
        </tr>
        <tr>
          <td className={`${dots} h-[35px]`}>
            <h1 className="ml-2">POSITION:</h1>
          </td>
          <td
            className={`${dots} font-bold text-left text-s italic`}
            colspan="3"
          >
            {payslip.position}
          </td>
          <td className={`${dots}`}>EMPLOYEE ID: </td>
          <td className={`${dots} font-bold text-left text-s italic`}>
            {payslip.empnumber}
          </td>
          <td className={`${dots} ${dotsr}`}></td>
          <td>
            <h1 className="ml-2">ADJUSTMENTS:</h1>
          </td>
          <td className="text-right">
            <h1 className="mr-4">{payslip.adjustment}</h1>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={`${dots} h-[50px] font-bold text-center`}>OVERTIME</td>
          <td className={`${dots} font-bold text-center`}>HRS</td>
          <td className={`${dotsr} ${dots} font-bold text-center`}>PAY</td>
          <td className={`${dots}  font-bold`}>
            <h1 className="ml-2">ADJUSTMENTS</h1>
          </td>
          <td className={`${dotsr} ${dots} font-bold`}>
            <h1 className="ml-2">AMOUNT</h1>
          </td>
          <td className={`${dots} font-bold`}>
            <h1 className="ml-2">DEDUCTION</h1>
          </td>
          <td className={`${dotsr} ${dots} font-bold`}>
            <h1 className="ml-2">AMOUNT</h1>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={`${dotsr}`}></td>
          <td className={dotsr}></td>
          <td className={dotsr}></td>
          <td className={dotsr}>
            <h1 className={`ml-2`}>13th MONTH</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">{payslip.thmonth}</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">W/H TAX</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">{payslip.whtax}</h1>
          </td>
          <td>
            <h1 className="ml-2">GROSS PAY:</h1>
          </td>
          <td className="text-right">
            <h1 className="mr-4">{payslip.grosspay}</h1>
          </td>
        </tr>
        <tr>
          <td className={`${dotsr} text-center`}>REGULAR</td>
          <td className={`${dotsr} text-center`}>{payslip.otregular}</td>
          <td className={`${dotsr} text-center`}>{payslip.totalOT}</td>
          <td className={dotsr}>
            <h1 className="ml-2">INCENTIVE</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">{payslip.incentives}</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">SSS</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">{payslip.sss}</h1>
          </td>
          <td className="">
            <h1 className="ml-2">DEDUCTION :</h1>
          </td>
          <td className="text-right">
            <h1 className="mr-4">{payslip.deduction}</h1>
          </td>
        </tr>
        <tr>
          <td className={`${dotsr}`}></td>
          <td className={`${dotsr} text-center`}></td>
          <td className={dotsr}></td>
          <td className={dotsr}>
            <h1 className="ml-2">PAID LEAVES</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">{payslip.paidleaves}</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">SALARY LOAN</h1> 
          </td>
          <td className={dotsr}>
            <h1 className="ml-2 w-[100px] text-left mr-3">
              {payslip.salaryloan}
            </h1>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={`${dotsr} text-center`}>NIGHT DIFF</td>
          <td className={`${dotsr} text-center`}>{payslip.totalnyt}</td>
          <td className={`${dotsr} text-center`}>{payslip.adlnytdiff2}</td>
          <td className={dotsr}>
            <h1 className="ml-2">HOLIDAY PAY</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">{payslip.holidaypay}</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">CALAMITY LOAN</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">{payslip.calamityloan}</h1>
          </td>
          <td>
            <h1 className="ml-2 font-bold">NET PAY :</h1>
          </td>
          <td className="text-right">
            <h1 className="mr-4">{payslip.netpay}</h1>
          </td>
        </tr>
        <tr>
          <td className={`${dotsr}`}></td>
          <td className={`${dotsr} text-center`}></td>
          <td className={dotsr}></td>
          <td className={dotsr}>
            <h1 className="ml-2">ALLOWANCE</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">{payslip.allowance}</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">PHILHEALTH</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">{payslip.phealth}</h1>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={`${dotsr}`}></td>
          <td className={`${dotsr} text-center`}></td>
          <td className={dotsr}></td>
          <td className={dotsr}></td>
          <td className={dotsr}></td>
          <td className={dotsr}>
            <h1 className="ml-2">PAGIBIG</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">{payslip.pagibig}</h1>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={`${dotsr}`}></td>
          <td className={`${dotsr} text-center`}></td>
          <td className={dotsr}></td>
          <td className={dotsr}></td>
          <td className={dotsr}></td>
          <td className={dotsr}>
            <h1 className="ml-2">TARDINESS</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">{payslip.tardiness}</h1>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={`${dotsr}`}></td>
          <td className={`${dotsr} text-center`}></td>
          <td className={dotsr}></td>
          <td className={dotsr}></td>
          <td className={dotsr}></td>
          <td className={dotsr}>
            <h1 className="ml-2">OTHERS</h1>
          </td>
          <td className={dotsr}>
            <h1 className="ml-2">{payslip.otherdeduction}</h1>
          </td>
          <td>
            <h1 className="ml-2 font-bold">PREPARED BY:</h1>
          </td>
          <td className="text-right">
            <h1 className="mr-4 font-bold">Ms. A</h1>
          </td>
        </tr>
        <tr>
          <td className={`${dotsr} h-[20px]`}></td>
          <td className={`${dotsr} text-center`}></td>
          <td className={dotsr}></td>
          <td className={dotsr}></td>
          <td className={dotsr}></td>
          <td className={dotsr}></td>
          <td className={dotsr}></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};
export default PayslipPrint;
