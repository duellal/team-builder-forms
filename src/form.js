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
                  onChange={onChange}
               >
                  <option value=''>Select Team</option>
                  <option value='Purple Dinosaurs'>Purple Dinosaurs</option>
                  <option value='Bubbly Boba'>Bubbly Boba</option>
                  <option value='Lyrical Developers'>Lyrical Developers</option>
               </select>
            </label>
            <div className="submit">
               <button disabled={!values.name || !values.email || !values.teamName || !values.role}>Add Member</button>
            </div>
         </form >
      </div >
   )
}