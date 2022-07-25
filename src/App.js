import React, { useEffect, useState } from 'react'
// Cannot get code to work with axios installation:
// import axios from 'axios'
// Code works with hard coded axios - not sure why this works, but the other way does not:
import axios from './axios/axios'

import './App.css';

import Form from './form'
import Team from './teams'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
  teamName: '',
}

function App() {
  const [teamMem, setTeamMem] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newMem = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      teamName: formValues.teamName,
    }

    if (!newMem.name || !newMem.email || !newMem.role || !newMem.teamName) return

    axios
      .post(Date.now(), newMem)
      .then(res => {
        setTeamMem([...teamMem, res.data])
      })
      .catch(err => {
        console.log(err)
      })

    setFormValues(initialFormValues)
  }

  useEffect(() => {
    axios
      .get(Date.now())
      .then(res =>
        setTeamMem(res.data)
      )
  }, [])

  return (
    < div className='container' >
      <h1>Company Teams</h1>

      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teamMem.map(mem => {
          return (
            <Team key={mem.id} details={mem} />
          )
        })
      }
    </div >
  );
}

export default App;
