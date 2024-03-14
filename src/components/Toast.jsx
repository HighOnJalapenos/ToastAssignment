import React, { useEffect } from "react";
import { useToastContext } from "../contexts/ToastContextProvider";

const Toast = ({ message }) => {
  const { visible, type, setVisible } = useToastContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });

  let textColor;
  switch (type) {
    case "Success":
      textColor = "text-green-500";
      break;
    case "Error":
      textColor = "text-red-500";
      break;
    case "Warning":
      textColor = "text-yellow-500";
      break;
  }
  return (
    <div
      className={`${
        visible ? "block" : "hidden"
      } w-[300px] bg-white rounded py-3 px-2`}
    >
      <h1 className={`${textColor} bg-white`}>{type}</h1>
      <h3>{type} message here</h3>
    </div>
  );
};

export default Toast;
