import Layout from "./componenets/Layout";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="px-4 py-4 text-center">
        <h1 className="font-bold text-3xl">To Do List</h1>    
        <Layout />
    </div>
  );
}

export default App;
