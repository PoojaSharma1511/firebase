import React, { useState, useEffect } from 'react';
import patientDataService from '../Services/patientServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

function Edit({ id, setPatientId }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const editHandler = async () => {
    try {
      const docSnap = await patientDataService.getPatient(id);
      setName(docSnap.data().name);
      setEmail(docSnap.data().email);
      setPhone(docSnap.data().phone);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id !== undefined && id !== '') {
      editHandler();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const patientData = {
        name,
        email,
        phone,
      };

      try {
        if (id !== undefined && id !== '') {
          await patientDataService.updatePatients(id, patientData);
          toast.success('Updated Successfully', {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate('/patientDashboard');
        } else {
          toast.error('Something went wrong', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } catch (error) {
        toast.error('Please fill in all the fields', {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      if (id !== undefined && id !== '') {
        await patientDataService.updatePatients(id, patientData);
        setPatientId('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleclick = () => {
    setPatientId(id);
  };

  return (
    <div className='box'>
      <form className='form' onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Mobile Number</label>
        <input
          type='tel'
          placeholder='Mobile no.'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button className='button' onClick={(e) => handleclick()}>
          Edit
        </button>
      </form>
    </div>
  );
}

export default Edit;
