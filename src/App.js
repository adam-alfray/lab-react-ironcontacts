import './App.css';
import allContacts from "./contacts.json";
import React, { useState } from 'react'
import logo from './logo.svg';


function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0,5))
  console.log(contacts)



  const addContact = () => {
   const newContact = allContacts[Math.floor(Math.random() * allContacts.length)]
   
   const newContactId = newContact.id
   let isInList = false

   for (let contact of contacts) {
      if (contact.id === newContactId) {
        isInList = true
      }
   }

  if (isInList === false){
    setContacts(contacts => [newContact, ...contacts])}
  }

  const sortPopularity = () => {
  const sortedList = contacts.sort((b, a) => {
    return a.popularity - b.popularity;
  })

  setContacts ([...sortedList])

  }

  const sortName = () => {
    const sortedNames = contacts.sort((b, a) => {
      return a.name.localeCompare(b.name);
    })
  
    setContacts ([...sortedNames])
    
  }

  const deleteContact = (myId) => {
    const deleteList = contacts.filter((i) => {
      return i.id !== myId
    })

    setContacts ([...deleteList])

  }



  
  return (
    <div className="App">
  <button onClick={addContact}>Add a Contact</button>
  <button onClick={sortPopularity}>Sort by popularity</button>
  <button onClick={sortName}>Sort by name</button>



    <table>  
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Emmy</th>
          <th>Won Oscar</th>
          <th>Actions</th>

        </tr>
    {contacts.map(contact => {
      return (
          
          <tr>
            <td><img src={contact.pictureUrl} style={{
              width: '80px',
            }}/></td>
            
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>{contact.wonEmmy === true &&<p>🏆</p>}</td>
            <td>{contact.wonOscar === true &&<p>⭐️</p>}</td>
            <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
          </tr>
      )
    })}
        </table>

    </div>
  );
}

export default App;