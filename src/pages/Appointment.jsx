import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import patientDataService from '../Services/patientServices';
import { toast } from 'react-toastify';

function Appointment() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPatient = {
      name,
      email,
      phone,
    };

    try {
      await patientDataService.addPatients(newPatient);
      toast.success('Successfully booked appointment', {
        position: toast.POSITION.TOP_CENTER,
      });

      navigate('/patientDashboard');
    } catch (error) {
      toast.error('Please fill in all the fields', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  
  return (
    <>
    <div className='box'>     
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type='tel' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <button className='button'>Submit</button>
      </form>
    </div>
    </>
  );
}

export default Appointment;
