// Utility function to format date
import { v4 as uuidv4 } from 'uuid';
export const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  
  // Utility function to format currency
  export const formatCurrency = (amount: number, currency: string): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };
  
  // Utility function to generate a unique ID (UUID)
  
  export const generateUniqueId = (): string => {
    return uuidv4();
  };
  
  // Add any other utility functions here
  
  // Ensure the file is treated as a module
  export {};
  