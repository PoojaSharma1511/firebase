import React, { useState, useEffect } from 'react';
import patientDataService from '../Services/patientServices';
import { Link } from 'react-router-dom';

function PatientDashboard({ getPatientId }) {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients();
  }, []);

  const getPatients = async () => {
    try {
      const data = await patientDataService.getAllPatient();
      const filteredPatients = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPatients(filteredPatients);
    } catch (error) {
      console.error('Error fetching Patients:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await patientDataService.deletePatient(id);
      setPatients(patients.filter(patient => patient.id !== id));
    } catch (error) {
      console.error('Error deleting Patient:', error);
    }
  };

  return (
    <>
      <div className='table table-striped-columns'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">MOBILE NO.</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((doc, index) => {
              return (
                <tr key={doc.id}>
                  <td>{index + 1}</td>
                  <td>{doc.name}</td>
                  <td>{doc.email}</td>
                  <td>{doc.phone}</td>
                  <td className="btn-group">
                    <Link className='link' to='/edit'>
                      <button className="btn btn-success" onClick={() => getPatientId(doc.id)}>Edit</button>
                    </Link>
                    <button className="btn btn-danger" onClick={() => handleDelete(doc.id)}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PatientDashboard;
