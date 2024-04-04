import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

function getMonth() {
  const today = new Date();
  const monthForCon = today.getMonth() + 2;
  return `${monthForCon}`;
  }

const PrintSchedMasterList = () => {
  
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:7000/schedule`, {
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

  return (
    <div className="fixed bottom-1 right-50 w-60 bg-white border border-gray-300 shadow-md">
      {/* <div className={`p-2 bg-gray-600 text-white font-bold text-center ${isboxVisible ? 'rounded-t-md' : ''}`}>
        Add Employee Schedule of Duty
      </div> */}
      {isboxVisible && (
        <>
          <div className="flex-grow overflow-y-auto p-1 mx-auto font-bold">
            <table>
                {Array.from(new Set(sched.map((list) => list.monthyear2))).map((uniqueMonthYear) => (
                    <div key={uniqueMonthYear}>
                        <Link href={`/schedmasterlist/${uniqueMonthYear}`}>{uniqueMonthYear}</Link>
                    </div>
                ))}
            </table>
          </div>
        </>
      )}
      <div className="flex justify-center p-2 bg-gray-600 rounded-b-md">
        <button onClick={toggleboxVisibility} className="text-gray-50 focus:outline-none">
          {isboxVisible ? 'Hide' : 'Print Masterlist'}
        </button>
      </div>
    </div>
  );
};

export default PrintSchedMasterList;
