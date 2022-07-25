import React from "react";

export default function Form(props) {
   const { values, update, submit } = props

   const onChange = event => {
      const { name, value } = event
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
                  name='team member'
                  onChange={onChange}
               />
            </label>
            <label> Team Member Email:
               <input
                  type={'text'}
                  placeholder='Team Member Email'
                  value={values.email}
                  name='team member'
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
                  name='team name'
                  onChange={onChange}
               >
                  <option value=''>Select Team</option>
                  <option value=''>Purple Dinosaurs</option>
                  <option value=''>Bubbly Boba</option>
                  <option value=''>Lyrical Developers</option>
               </select>
            </label>
            <button disabled={null}>Add Member</button>
         </form>
      </div>
   )
}