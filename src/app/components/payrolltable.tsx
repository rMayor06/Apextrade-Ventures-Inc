import { fetchPayrollData, updatePayrollData } from "@/../api";
import { useEffect, useState } from "react";
import { payroll } from "../../../types/infos";

const PayrollTable = ({serverData}) => {

    return(
        <>
            <tr >
              <td colspan='4' className="text-right italic font-bold border-collapse border border-slate-500">TOTAL HRS: </td>
              <td className="font-bold border-collapse border border-slate-500">{serverData.otnightdiff}</td>
              <td className="font-bold border-collapse border border-slate-500">{serverData.otregular}</td>
              <td className="font-bold border-collapse border border-slate-500">{serverData.totalUT}</td>
              <td className="border-collapse border border-slate-500"></td>
              <td className="border-collapse border border-slate-500"></td>
            </tr>
            <tr>
              <td colspan='4' className="text-right italic font-bold border-collapse border border-slate-500">TOTAL RATE: </td>
              <td className="font-bold border-collapse border border-slate-500">{serverData.basicpay}</td>
              <td className="font-bold border-collapse border border-slate-500">{serverData.totalOT}</td>
              <td className="font-bold border-collapse border border-slate-500">{serverData.totalUTrate}</td>
              <td className="border-collapse border border-slate-500"></td>
              <td className="font-bold border-collapse border border-slate-500">{serverData.holidaypay}</td>
            </tr>
            <tr>
              <td colspan='9' className="border-collapse border border-slate-500">__</td>
            </tr>
            <tr>
              <td className="text-center border-collapse border border-slate-500"></td>
              <td className="text-center border-collapse border border-slate-500">OT Regular : <h1 className="text-center w-13 font-bold">{serverData.totalOT}</h1></td>
              <td className="text-center border-collapse border border-slate-500">Night Diff : <h1 className="text-center w-13 font-bold">{serverData.nightdifftotal}</h1></td>
              <td className="text-center border-collapse border border-slate-500">Basic Pay :<h1 className="text-center w-13 font-bold">{serverData.basicpay}</h1></td>
              <td className="text-center border-collapse border border-slate-500">Total Overtime :<h1 className="text-center w-13 font-bold">{serverData.overtime}</h1></td>
              <td className="text-center border-collapse border border-slate-500">Total Adjustments :<h1 className="text-center w-13 font-bold">{serverData.adjustment}</h1></td>
              <td className="text-center border-collapse border border-slate-500">Gross Pay :<h1 className="text-center w-13 font-bold">{serverData.grosspay}</h1></td>
              <td className="text-center border-collapse border border-slate-500">Deductions :<h1 className="text-center w-13 font-bold">{serverData.deduction}</h1></td>
              <td className="text-center border-collapse border border-slate-500">Net Pay :<h1 className="text-center w-13 font-bold">{serverData.netpay}</h1></td>
            </tr>

        </>
    )
}
export default PayrollTable