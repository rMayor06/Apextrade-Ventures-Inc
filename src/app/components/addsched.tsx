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

const AddSched = () => {
  
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
  const [ sched, setSched ] = useState('')
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
  const year = "2024";

  const day1 = "Monday";
  const duty1 = "";   
  const time1 = "";
  const time2 = "";
  const label1 = "visible";
  const color1 = "900";
  const text1 = "white";
  const time12_1 = "";
  const time12_2 = "";

  const day2 = "Tuesday";
  const duty2 = "";
  const time3 = "";
  const time4 = "";
  const label2 = "visible";
  const color2 = "900";
  const text2 = "white";
  const time12_3 = "";
  const time12_4 = "";

  const day3 = "Wednesday";
  const duty3 = "";
  const time5 = "";
  const time6 = "";
  const label3 = "visible";
  const color3 = "900";
  const text3 = "white";
  const time12_5 = "";
  const time12_6 = "";

  const day4 = "Thursday";
  const duty4 = "";
  const time7 = "";
  const time8 = "";
  const label4 = "visible";
  const color4 = "900";
  const text4 = "white";
  const time12_7 = "";
  const time12_8 = "";

  const day5 = "Friday";
  const duty5 = "";
  const time9 = "";
  const time10 = "";
  const label5 = "visible";
  const color5 = "900";
  const text5 = "white";
  const time12_9 = "";
  const time12_10 = "";

  const day6 = "Saturday";
  const duty6 = "";
  const time11 = "";
  const time12 = "";
  const label6 = "visible";
  const color6 = "900";
  const text6 = "white";
  const time12_11 = "";
  const time12_12 = "";

  const day7 = "Sunday";
  const duty7 = "";
  const time13 = "";
  const time14 = "";
  const label7 = "visible";
  const color7 = "900";
  const text7 = "white";
  const time12_13 = "";
  const time12_14 = "";

  const handleAddEmployeeSched = async (list) => {
    const response = await fetch(`http://localhost:7000/schedule`, {
      method: 'POST',
      body: JSON.stringify({
        id: uuidv4(),
        fname: list.fname,
        mname: list.mname,
        lname: list.lname,
        month: {month},
        monthNumber: {monthNumber},
        year:  {year},
        monthyear: `${month} ${year}`,
        monthyear2: `${month}_${year}`,
        shift: "",
        day1:{
            day: {day1},
            duty: {duty1},
            timestart: {time1},
            timeend: {time2},
            time: `${time1} - ${time2}`,
            label: {label1},
            color: {color1},
            text: {text1},
            timestart12: {time12_1},
            timeend12: {time12_2}
        },
        day2:{
            day: {day2},
            duty: {duty2},
            timestart: {time3},
            timeend: {time4},
            time: `${time3} - ${time4}`,
            label: {label2},
            color: {color2},
            text: {text2},
            timestart12: {time12_3},
            timeend12: {time12_4}
        },
        day3:{
            day: {day3},
            duty: {duty3},
            timestart: {time5},
            timeend: {time6},
            time: `${time5} - ${time6}`,
            label: {label3},
            color: {color3},
            text: {text3},
            timestart12: {time12_5},
            timeend12: {time12_6}
        },
        day4:{
            day: {day4},
            duty: {duty4},
            timestart: {time7},
            timeend: {time8},
            time: `${time7} - ${time8}`,
            label: {label4},
            color: {color4},
            text: {text4},
            timestart12: {time12_7},
            timeend12: {time12_8}
        },
        day5:{
            day: {day5},
            duty: {duty5},
            timestart: {time9},
            timeend: {time10},
            time: `${time9} - ${time10}`,
            label: {label5},
            color: {color5},
            text: {text5},
            timestart12: {time12_9},
            timeend12: {time12_10}
        },
        day6:{
            day: {day6},
            duty: {duty6},
            timestart: {time11},
            timeend: {time12},
            time: `${time11} - ${time12}`,
            label: {label6},
            color: {color6},
            text: {text6},
            timestart12: {time12_11},
            timeend12: {time12_12}
        },
        day7:{
            day: {day7},
            duty: {duty7},
            timestart: {time13},
            timeend: {time14},
            time: `${time13} - ${time14}`,
            label: {label7},
            color: {color7},
            text: {text7},
            timestart12: {time12_13},
            timeend12: {time12_14}
        },
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
          {isboxVisible ? 'Hide' : 'Add Employee Schedule'}
        </button>
      </div>
    </div>
  );
};

export default AddSched;
