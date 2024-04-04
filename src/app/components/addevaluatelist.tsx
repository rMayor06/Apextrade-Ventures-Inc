import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
// import { numberToMonth } from './NumberToMonthConverter';
// import { v4 as uuidv4 } from 'uuid'

function getMonth() {
  const today = new Date();
  const monthForCon = today.getMonth() + 2;
  return `${monthForCon}`;
  }
const AddEvalist = () => {
  const router = useRouter();
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
      } 
      catch (error) {
        console.error('Error fetching schedule data:', error.message);
      }
    };

    fetchData();
  }, []);

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
                            <Link href={`evaluation/${list.id}`}>
                            {/* <button onClick={()=>handleAddEmployeeSched(list)}> */}
                                {list.lname}, {list.fname} {list.lname}
                            {/* </button> */}
                            </Link>
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
          {isboxVisible ? 'Hide' : 'Evaluate Employee'}
        </button>
      </div>
    </div>
  );
};

export default AddEvalist;
