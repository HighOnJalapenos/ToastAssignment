import ToastContainer from "./components/ToastContainer";
import { useToastContext } from "./contexts/ToastContextProvider";

function App() {
  const { setVisible, setType } = useToastContext();

  const handleClick = (type) => {
    setType(type);
    setVisible(true);
  };

  return (
    <div className="h-screen bg-slate-200">
      <ToastContainer />
      <div className="flex gap-4 p-4">
        <button
          className="px-3 py-2 text-sm bg-green-800 rounded text-white"
          onClick={() => handleClick("Success")}
        >
          Success
        </button>
        <button
          className="px-3 py-2 text-sm bg-yellow-800 rounded text-white"
          onClick={() => handleClick("Warning")}
        >
          Warning
        </button>
        <button
          className="px-3 py-2 text-sm bg-red-800 rounded text-white"
          onClick={() => handleClick("Error")}
        >
          Error
        </button>
      </div>
    </div>
  );
}

export default App;
