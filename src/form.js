import React, { useState, useEffect } from "react";
import * as Yup from 'yup'

//For the form requirements via Yup:
// I got it to work where the error messages come up as the user is typing on the form
// I also disabled the button using an useEffect() instead of hard coding the requirements in the JSX

export default function Form(props) {
   const { values, update, submit, formState, setFormState } = props
   //Trying to use Yup for form requirements:
   const [errors, setErrors] = useState({
      name: '',
      email: '',
      role: '',
      teamName: ''
   })
   const [buttonDisabled, setButtonDisabled] = useState(true)

   // const onChange = event => {
   //    const { name, value } = event.target

   //    update(name, value)
   // }

   const onSubmit = event => {
      event.preventDefault()

      submit()
   }

   // Trying to use Yup to make form requirements:
   const formRequirements = Yup.object().shape({
      name: Yup.string().min(2, 'Name must be at least 2 characters').required('Enter a name'),
      email: Yup.string().email('Enter an email address').min(9, 'Enter a valid email').required('Enter an email address'),
      role: Yup.string().required(),
      teamName: Yup.string().required()
   })

   useEffect(() => {
      formRequirements.isValid(formState).then(valid => {
         setButtonDisabled(!valid)
      })
   }, [formState])

   const inputChange = event => {
      const { name, value } = event.target

      Yup.reach(formRequirements, name)
         .validate(value)
         .then(valid => {
            setErrors({ ...errors, [name]: "" })
         })
         .catch(err => {
            setErrors({
               ...errors, [name]: err.errors
            })
         })

      setFormState({
         ...formState, [name]: value
      })
   }



   return (
      <div className='form container' onSubmit={onSubmit}>
         <form>
            <label> Team Member Name:
               <input
                  type={'text'}
                  placeholder='    Team Member Name'
                  value={values.name}
                  name='name'
                  onChange={inputChange}
               />
            </label>
            <p className="error">{errors.name}</p>

            <label> Team Member Email:
               <input
                  type={'text'}
                  placeholder='    Team Member Email'
                  value={values.email}
                  name='email'
                  onChange={inputChange}
               />
            </label>
            <p className="error">{errors.email}</p>

            <label> Team Member Role:
               <select
                  value={values.role}
                  name='role'
                  onChange={inputChange}
               >
                  <option value=''>Select Role</option>
                  <option value='Back End Developer'>Back End Developer</option>
                  <option value='Data Scientist'>Data scientist</option>
                  <option value='Front End Developer'>Front End Developer</option>
                  <option value='Team Lead'>Team Lead</option>
                  <option value='UX Designer'>UX Designer</option>
               </select>
            </label>

            <label> Team Name:
               <select
                  value={values.teamName}
                  name='teamName'
                  onChange={inputChange}
               >
                  <option value=''>Select Team</option>
                  <option value='Purple Dinosaurs'>Purple Dinosaurs</option>
                  <option value='Bubbly Boba'>Bubbly Boba</option>
                  <option value='Lyrical Developers'>Lyrical Developers</option>
               </select>
            </label>
            <div className="submit">
               {/* <button disabled={!values.name || !values.email || !values.teamName || !values.role}> Add Member </button> 
               
               This disabled the button before - trying to using Yup to disable the button*/}
               <button disabled={buttonDisabled}>Add Member</button>
            </div>
         </form >
      </div >
   )
}