import { useState, useEffect } from "react";

const ToDoListWrapperLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error retrieving data from local storage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error saving data to local storage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default ToDoListWrapperLocalStorage;
