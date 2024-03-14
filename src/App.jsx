import ToastContainer from "./components/ToastContainer";
import ToastContextProvider, {
  useToastContext,
} from "./contexts/ToastContextProvider";

function App() {
  const { setVisible, setType } = useToastContext();

  const handleClick = (type) => {
    setType(type);
    setVisible(true);
  };

  return (
    <div className="h-screen bg-slate-200">
      <ToastContainer />
      <div className="flex gap-4">
        <button onClick={() => handleClick("Success")}>Success</button>
        <button onClick={() => handleClick("Warning")}>Warning</button>
        <button onClick={() => handleClick("Error")}>Error</button>
      </div>
    </div>
  );
}

export default App;
