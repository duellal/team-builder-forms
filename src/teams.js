import React, { useEffect } from 'react'

export default function Team(props) {
   const { details, editMem } = props

   // useEffect(() => {
   //    return
   // }

   if (!details) {
      return <h3>Fetching Team Details...</h3>
   }

   // Want to make 3 different teams with different people in them - currently have 3 different named divs created with each person
   return (
      <div className='teams container'>
         <div className='indvTeam container'>
            {/* <h2>Purple Dinosaurs</h2> */}
            <div className='member container'>
               <h3>{details.name}</h3>
               <p>Email: {details.email}</p>
               <p>Role: {details.role}</p>
               <p>Team: {details.teamName}</p>
               <button onClick={null}>Edit</button>
            </div>
         </div>
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
      </div>
   )
}
