import Addtodo from './componenets/Addtodo';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="px-4 py-4 text-center">
        <h1 className="font-bold text-3xl">To Do List</h1>    
        <Addtodo />
    </div>
  );
}

export default App;
