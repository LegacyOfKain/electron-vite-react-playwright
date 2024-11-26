// Button.tsx
import React from "react";

interface ButtonProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Button: React.FC<ButtonProps> = ({ count, setCount }) => {
  return (
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
      count is {count}
    </button>
  );
};

export default Button;