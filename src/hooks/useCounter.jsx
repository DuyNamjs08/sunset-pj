import { useState, useEffect } from "react";

const useCounters = (targets, duration) => {
  const [counts, setCounts] = useState(() => targets.map(() => 0));

  useEffect(() => {
    // Tính toán bước tăng cho từng mục tiêu, với mức tăng nhanh hơn cho các số lớn
    const increments = targets.map((target) => {
      if (target > 10000) {
        return 1000; // Tăng nhanh cho các số lớn hơn 10000
      } else if (target > 1000) {
        return 50; // Tăng vừa phải cho các số lớn hơn 1000
      } else {
        return 1; // Tăng chậm cho các số nhỏ hơn
      }
    });

    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => {
          if (count < targets[index]) {
            // Tăng giá trị theo bước đã tính toán
            const newValue = count + increments[index];
            return newValue >= targets[index] ? targets[index] : newValue;
          } else {
            return targets[index];
          }
        })
      );
    }, 50); // Khoảng thời gian 50ms cho mỗi lần tăng (có thể điều chỉnh)

    return () => clearInterval(interval);
  }, [targets, duration]);

  return counts;
};

export default useCounters;
