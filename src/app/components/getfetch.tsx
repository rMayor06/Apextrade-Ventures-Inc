export const GetFetchData = () => {
    const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:7000/payroll`, {
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

}