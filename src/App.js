import './App.css';
import Login from './components/login_screen';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from './components/dashboard';
import Leads from './components/leads_genrated';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element= {<Navigate to ="/login" replace/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leads" element= {<Leads/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
