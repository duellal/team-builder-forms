import React, { useState } from 'react'
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
  const [teamMem, setTeamMem] = useState({
    name: '',
    email: '',
    role: '',
    teamName: ''
  })

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newMem = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      teamName: formValues.teamName.trim()
    }
  }

  return (
    <div className='container'>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {/* {teamMem.map(mem => {
      return (
        <Team key={teamMem.id} details={teamMem} />
      )
    }
    )} */}
    </div>
  );
}

export default App;
