import React from "react";

export default function Form(props) {
   const { values, update, submit } = props

   const onChange = event => {
      const { name, value } = event.target

      update(name, value)
   }

   const onSubmit = event => {
      event.preventDefault()

      submit()
   }

   return (
      <div className='form container' onSubmit={onSubmit}>
         <form>
            <label> Team Member Name:
               <input
                  type={'text'}
                  placeholder='Team Member Name'
                  value={values.name}
                  name='name'
                  onChange={onChange}
               />
            </label>
            <label> Team Member Email:
               <input
                  type={'text'}
                  placeholder='Team Member Email'
                  value={values.email}
                  name='email'
                  onChange={onChange}
               />
            </label>
            <label> Team Member Role:
               <select
                  value={values.role}
                  name='role'
                  onChange={onChange}
               >
                  <option value=''>Select Role</option>
                  <option value='back-end'>Back End Developer</option>
                  <option value='data-scientist'>Data scientist</option>
                  <option value='front-end'>Front End Developer</option>
                  <option value='team-lead'>Team Lead</option>
                  <option value='UX'>UX Designer</option>
               </select>
            </label>
            <label> Team Name:
               <select
                  value={values.teamName}
                  name='teamName'
                  onChange={onChange}
               >
                  <option value=''>Select Team</option>
                  <option value='purple dinosaurs'>Purple Dinosaurs</option>
                  <option value='bubbly boba'>Bubbly Boba</option>
                  <option value='lyrical developers'>Lyrical Developers</option>
               </select>
            </label>
            <div className="submit">
               <button disabled={!values.name || !values.email || !values.teamName || !values.role}>Add Member</button>
            </div>
         </form >
      </div >
   )
}