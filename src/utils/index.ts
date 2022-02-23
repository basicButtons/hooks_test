import { useEffect, useState } from "react";
// export const debounce = (func, delay) => {
//   let timeout = null;
//   return () => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       func();
//     }, delay);
//   };
// };

// 后面使用泛型来解决这个问题
export const useDebounce = <V>(value: V, delay?: number): V => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次再value 变化之后，设置一个定时器
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // 每次再上一个useEffect处理完之后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

const isEmpty = (value: unknown) => (value === 0 ? true : !value);

export const parseParams = (param: object) => {
  let newParams = { ...param };
  return Object.fromEntries(
    Object.entries(newParams).filter(([key, value]) => !isEmpty(value))
  );
};
