import React,{useEffect, useState} from "react";
import Card from "./Card";
import Axios from "axios"

function CreateCard(contact){
  
  return(
    <Card 
    key={contact._id}
      firstname={contact.firstname}
      lastname={contact.lastname}
      country={contact.country}
      email={contact.email}
    />
  )
}

 
function App() {
  let [contacts, setContacts] =useState([])
  let { data, status} = contacts
 // let { constactList}= data
  useEffect(()=>{
    console.log('fetcing data from server')
    Axios.get('http://localhost:5000/api/v1/contact/list').then((res)=>{
      setContacts(res.data)
    }).catch((err)=>{
      console.error(err)
    })
  },[])
  console.log(data.contactList)
  return (
    <div>
      {/* <AddContact/> */}
      <h1 className="heading">My Contacts</h1>
     {data.contactList.map(CreateCard)}
     
    </div>
  );
}

export default App;
