import React, { useState } from 'react'
import './App.css';
import Form from './form'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [teamMem, setTeamMem] = useState({
    name: '',
    email: '',
    role: ''
  })

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = () => {
    null
  }

  const submitForm = () => {
    null
  }

  return (
    <div className='container'>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  );
}

export default App;
