// utils/monthConverter.ts

export const numberToMonth = (monthNumber: number): string | null => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    if (monthNumber >= 1 && monthNumber <= 12) {
      return months[monthNumber - 1];
    }
    return null; // Return null for invalid month numbers
  };