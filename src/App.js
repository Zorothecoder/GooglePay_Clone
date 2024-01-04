import './App.css';
import DashBoard from './components/Dashboard/DashBoard'
import Test from './components/Login/Login'
import Profile from './components/Modules/Profile.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/GooglePay_Clone" element={<Test />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Profile" element={<Profile />}/>
      </Routes>
    </Router>
  );
}

export default App;
