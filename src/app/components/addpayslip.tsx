"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { numberToMonth } from './NumberToMonthConverter';
import { v4 as uuidv4 } from 'uuid'

function getMonth() {
  const today = new Date();
  const monthForCon = today.getMonth() + 2;
  return `${monthForCon}`;
  }

const AddPayslip = () => {
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:7000/einfo`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch schedule data');
        }
        const jsonData = await response.json();
        setSched(jsonData);
      } catch (error) {
        console.error('Error fetching schedule data:', error.message);
      }
    };

    fetchData();
  }, []);

  const router = useRouter();
  const [ sched, setSched ] = useState([])
  const [isboxVisible, setIsboxVisible] = useState(false);

  useEffect(() => {
    const storedVisibility = localStorage.getItem('boxVisibility');
    if (storedVisibility !== null) {
      setIsboxVisible(JSON.parse(storedVisibility));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('boxVisibility', JSON.stringify(isboxVisible));
  }, [isboxVisible]);

  const toggleboxVisibility = () => {
    setIsboxVisible((prevVisibility) => !prevVisibility);
  };

  const monthNumber = getMonth();
  const month = numberToMonth(`${monthNumber}`);

  const handleAddEmployeeSched = async (list) => {
    const response = await fetch(`http://localhost:7000/payroll`, {
      method: 'POST',
      body: JSON.stringify({
        id: list.id,
        id2: "",
        fname: list.fname,
        mname: list.mname,
        lname: list.lname,
        extname: list.extname,
        period: "1st Cut-off",
        adlnytdiff: "0",
        adlnytdiff2: "0",
        year: "",
        month: "",
        pym: "",
        otregular: "0",
        otnightdiff: "0",
        nightdifftotal: "0",
        totalUT: "",
        totalUTrate: "",
        totalOT: "",
        position: list.designation, 
        email: list.email,
        status: list.sched,
        empnumber: list.empnumber,
        basicpay: list.salary,
        hourrate: "0",
        nightdiff: "Day Shift",
        totalnyt: "",
        date1: '',
        timein1: '',
        timeout1: '',
        thour1: '0',
        totalOT1: '',
        totalUT1: '0',
        holiday1: '',
        holidayrate1: '',
        salaryloan: '',
        calamityloan: '',
        undertime: '',

        thmonth: "0.00",
        incentives: "1000.00",
        paidleaves: "0.00",
        holidaypay: "0.00",
        otheradd: "0.00",
        allowance: "500.00",
        whtax: "0.00",
        sss: "0.00",
        phealth: "0.00",
        pagibig: "200.00",
        tardiness: "0.00",
        loan: "0.00",
        otherdeduction: "0.00",
        salaryloan: "0.00",
        calamityloan: "0.00",

        overtime: "",
        adjustment: "",
        grosspay: "",
        deduction: "", 
        netpay: "",

        }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
            const data = await response.json();
            console.log(data)
            window.location.reload();
};
  return (
    <div className="fixed bottom-1 right-60 w-60 bg-white border border-gray-300 shadow-md">
      {/* <div className={`p-2 bg-gray-600 text-white font-bold text-center ${isboxVisible ? 'rounded-t-md' : ''}`}>
        Add Employee Schedule of Duty
      </div> */}
      {isboxVisible && (
        <>
          <div className="flex-grow overflow-y-auto p-2">
              <table>
                  {sched.map((list) => (
                    <tr key={list.id}>
                      <td>
                          <h1 className='font-bold text-xs'>
                            {/* <Link href={`scheduling/${list.id}`}> */}
                            <button onClick={()=>handleAddEmployeeSched(list)}>
                                {list.lname}, {list.fname} {list.lname}
                            </button>
                            {/* </Link> */}
                          </h1>
                      </td>
                    </tr>
                  ))}
              </table>
          </div>
        </>
      )}
      <div className="flex justify-center p-2 bg-gray-600 rounded-b-md">
        <button onClick={toggleboxVisibility} className="text-gray-50 focus:outline-none">
          {isboxVisible ? 'Hide' : 'Add Employee'}
        </button>
      </div>
    </div>
  );
};

export default AddPayslip;
