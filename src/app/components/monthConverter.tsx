// utils/monthConverter.ts

export const monthToNumber = (monthName: string): number | null => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const index = months.findIndex((m) => m.toLowerCase() === monthName.toLowerCase());
  
    // Add 1 to the index to convert from 0-based to 1-based month numbering
    if (index !== -1) {
      return index + 1;
    }
  
    return null; // Return null for invalid month names
  };