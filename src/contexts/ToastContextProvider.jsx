import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

const ToastContextProvider = ({ children }) => {
  const [type, setType] = useState("");
  const [visible, setVisible] = useState(false);
  console.log(type, visible);
  return (
    <ToastContext.Provider value={{ type, setType, visible, setVisible }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;

export const useToastContext = () => {
  const context = useContext(ToastContext);
  return context;
};
