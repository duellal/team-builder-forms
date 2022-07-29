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

  const [memEdit, setMemEdit] = useState({ name: '', email: '', role: '', teamName: '' })
  const [edit, setEdit] = useState(false)


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
        setTeamMem([res.data, ...teamMem])
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

  const onChange = event => {
    const { name, value } = event.target

    updateForm(name, value)
  }

  const onSubmit = event => {
    event.preventDefault()

    submitForm()
  }

  const editFunc = event => {
    // if (event.view.$r.hooks[0].value[0].id === teamMem.id) {
    teamMem.map(member => {
      if (event.view.$r.hooks[0].value[0].id === member.id) {
        setFormValues({ ...formValues, name: member.name, email: member.email, role: member.role, teamName: member.teamName })

        setMemEdit(member)
      }
      return -1
    })

    // Was trying to make the member container div change to input boxes with current info and the user would be able to change them. Currently, not sure what isn't letting the div change from text into input boxes

    // return (
    //   <div className='member container' onSubmit={onSubmit}>
    //     <h3>
    //       <input
    //         type={'text'}
    //         placeholder={event.view.$r.hooks[0].value[0].name}
    //         value={formValues.name}
    //         name='name'
    //         onChange={onChange}
    //       />
    //     </h3>
    //     <p>Email: <input
    //       type={'email'}
    //       placeholder={event.view.$r.hooks[0].value[0].email}
    //       value={formValues.email}
    //       name='email'
    //       onChange={onChange}
    //     />
    //     </p>
    //     <p>Role: <select
    //       value={event.view.$r.hooks[0].value[0].role}
    //       name='role'
    //       onChange={onChange}
    //     >
    //       <option value=''>Select Role</option>
    //       <option value='Back End Developer'>Back End Developer</option>
    //       <option value='Data Scientist'>Data scientist</option>
    //       <option value='Front End Developer'>Front End Developer</option>
    //       <option value='Team Lead'>Team Lead</option>
    //       <option value='UX Designer'>UX Designer</option>
    //     </select>
    //     </p>
    //     <p>Team: <select
    //       value={event.view.$r.hooks[0].value[0].teamName}
    //       name='teamName'
    //       onChange={onChange}
    //     >
    //       <option value=''>Select Team</option>
    //       <option value='Purple Dinosaurs'>Purple Dinosaurs</option>
    //       <option value='Bubbly Boba'>Bubbly Boba</option>
    //       <option value='Lyrical Developers'>Lyrical Developers</option>
    //     </select>
    //     </p>
    //     <div className="editSubmit">
    //       <button disabled={!formValues.name || !formValues.email || !formValues.teamName || !formValues.role}>Submit</button>
    //     </div>
    //   </div>
    // )
    // }

    setEdit(true)
  }

  return (
    < div className='container' >
      <h1>Company Teams</h1>

      <Form
        values={formValues}
        onChange={onChange}
        onSubmit={onSubmit}

      />

      {
        teamMem.map(mem => {
          return (
            <Team
              key={mem.id}
              details={mem}
              onEdit={editFunc}
            />
          )
        })
      }
    </div >
  );
}

export default App;
