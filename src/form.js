import React, { useState } from "react";

export default function Form(props) {
   const { values, update, submit } = props

   return (
      <div className='form container' onSubmit={null}>
         <form>
            <label> Team Member Name:
               <input
                  type={'text'}
                  placeholder='Team Member Name'
                  value={null}
                  name='team member'
                  onChange={null}
               />
            </label>
            <label> Team Member Email:
               <input
                  type={'text'}
                  placeholder='Team Member Email'
                  value={null}
                  name='team member'
                  onChange={null}
               />
            </label>
            <label> Team Member Role:
               <select
                  value={null}
                  name='role'
                  onChange={null}
                  placeholder='Select Role'
               >
                  <option></option>
               </select>
            </label>

            <button disabled={null}>Add Member</button>
         </form>
      </div>
   )
}