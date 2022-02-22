import { useEffect, useState } from "react";
export const debounce = (func, delay) => {
  let timeout = null;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func();
    }, delay);
  };
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次再value 变化之后，设置一个定时器
    const timeout = setTimeout(() => {
      setDebouncedValue(value, delay);
    }, delay);
    // 每次再上一个useEffect处理完之后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
