import { ToastContainer } from 'react-toastify';
import './App.css';
import Userlist from './components/Userlist';
import 'react-toastify/dist/ReactToastify.css'


function App() {

  return (
    <div className="App">
     <Userlist/>
     <ToastContainer/>
    </div>
  );
}

export default App;
