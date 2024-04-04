import { Infos, EvaluatedList, Schedule } from "./types/infos";

const baseUrl = 'http://localhost:7000';


export const getInfos = async (): Promise<Infos[]> => {
  try {
    const res = await fetch(`${baseUrl}/einfo`,{
        next:{
        revalidate: 0
        }
    });
    const infos = await res.json();
    const sortedData = infos.sort((a: Infos, b: Infos) => {
      return a.lname.localeCompare(b.lname);
    });
    return sortedData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
};

export const addEmployee = async (add: Infos): Promise<Infos> =>{
  const res = await fetch(`${baseUrl}/einfo`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(add)
  })
  const addEmp = await res.json();
  return addEmp;
}

export const editInfo = async (edit: Infos): Promise<Infos> =>{
  const res = await fetch(`${baseUrl}/einfo/${edit.id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(edit)
  })
  const updatedInfo = await res.json();
  return updatedInfo;
}


export const deleteInfo = async (id: string): Promise<void> =>{
  await fetch(`${baseUrl}/einfo/${id}`,{
    method: 'DELETE',
  })
}


export const deleteEva = async (id: string): Promise<void> =>{
  await fetch(`${baseUrl}/evaluated/${id}`,{
    method: 'DELETE',
  })
}

export const getEvaluated = async (): Promise<EvaluatedList[]> => {
  try {
    const res = await fetch(`${baseUrl}/evaluated`, {
      next: {
        revalidate: 0
      }
    });
    const infos: EvaluatedList[] = await res.json();
    
    // Sort the data by date
    const sortedData = infos.sort((a: EvaluatedList, b: EvaluatedList) => {
      // Assuming 'date' is a property of type string in ISO format (e.g., '2022-01-01')
      const dateA = new Date(a.dateevaluated).getTime();
      const dateB = new Date(b.dateevaluated).getTime();
      return dateB - dateA;
    });

    return sortedData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
};


export const getSched = async (): Promise<Schedule[]> => {
  try {
    const res = await fetch(`${baseUrl}/schedule`,{
        next:{
        revalidate: 0
        }
    });
    const infos = await res.json();
    const sortedData = infos.sort((a: Schedule, b: Schedule) => {
      const dateA = new Date(a.monthyear).getTime();
      const dateB = new Date(b.monthyear).getTime();
      return dateB - dateA;
    });
    return sortedData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
};



export const deleteSched = async (id: string): Promise<void> =>{
  await fetch(`${baseUrl}/schedule/${id}`,{
    method: 'DELETE',
  })
}


export const fetchPayrollData = async (id) => {
  try {
    const response = await fetch(`http://localhost:7000/payroll/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch schedule data');
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching schedule data:', error.message);
    throw error;
  }
};

export const updatePayrollData = async (id, data) => {
  try {
    const response = await fetch(`http://localhost:7000/payroll/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to update file');
    }

    console.log('Data updated successfully');
  } catch (error) {
    console.error('Error updating data:', error.message);
    throw error;
  }
};

export const savePayslip = async (data) => {
  try {
    const response = await fetch('http://localhost:7000/payslip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('Server response:', response);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error saving data to the database. Server response: ${errorMessage}`);
    }

    console.log('Data saved successfully!');
  } catch (error) {
    console.error('Error saving data:', error.message);
    throw error; // Re-throw the error to handle it in the calling code if needed
  }
};

export default savePayslip;

export const fetchPayslipData = async (id) => {
  try {
    const response = await fetch(`http://localhost:7000/payslip/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch schedule data');
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching schedule data:', error.message);
    throw error;
  }
};