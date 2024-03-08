import { db } from "../firebase";

import {collection , addDoc,doc,getDoc,getDocs,updateDoc,deleteDoc } from "firebase/firestore";

const bookCollectionRef = collection(db ,"patient")
class patientDataService {

    addPatients =(newPatient)=>{
        return addDoc(bookCollectionRef ,newPatient)
    };
    updatePatients=(id,updatedBook)=>{
        const bookDoc=doc(db ,"patient",id)
        return updateDoc(bookDoc ,updatedBook);

    };
    deletePatient =(id)=>{
        const bookDoc=doc(db ,"patient",id)
        return deleteDoc(bookDoc)


    };
    getAllPatient=()=>{
        return getDocs(bookCollectionRef)
    };
    getPatient =(id)=>{
        const bookDoc=doc(db ,"patient",id)
        return getDoc(bookDoc)


    };

}


export default new patientDataService