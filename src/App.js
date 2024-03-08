import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import PatientDashboard from './pages/PatientDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appointment from './pages/Appointment';
import Edit from './pages/Edit';
import { useState } from 'react';

function App() {
  const [patientId, setPatientId] = useState();

  const getPatientIdHandler = (id) => {
    setPatientId(id);
  };

  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Appointment />} />
        <Route path="/edit" element={<Edit id={patientId} setPatientId={setPatientId} />} />
        <Route path="/patientDashboard" element={<PatientDashboard  getPatientId={getPatientIdHandler} />} />
        

      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
