import React from 'react'

export default function Team(props) {
   const { details, onEdit } = props

   if (!details) {
      return <h3>Fetching Team Details...</h3>
   }

   // Want to make 3 different teams with different people in them - currently have 3 different named divs created with each person
   return (
      <div className='teams container'>
         {/* <div className='indvTeam container'> */}
         {/* <h2>Purple Dinosaurs</h2> */}
         <div className='member container'>
            <h3>{details.name}</h3>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
            {/* Team Name not showing up */}
            <p>Team: {details.teamName}</p>
         </div>
         {/* </div> */}
         {/* <div className='indvTeam container'>
            <h2>Bubbly Boba</h2>
            <div className='member container'>
               <h3>{details.name}</h3>
               <p>Email: {details.email}</p>
               <p>Role: {details.role}</p>
            </div>
         </div>
         <div className='indvTeam container'>
            <h2>Lyrical Developers</h2>
            <div className='member container'>
               <h3>{details.name}</h3>
               <p>Email: {details.email}</p>
               <p>Role: {details.role}</p>
            </div>
         </div> */}
         <button className='edit' onClick={onEdit} value={details.id}>Edit</button>
      </div>
   )
}
