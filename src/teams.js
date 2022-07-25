import React from 'react'

export default function Team(props) {
   const { details } = props

   if (!details) {
      return <h3>Fetching Team Details...</h3>
   }

   return (
      <div className='team container'>
         <h2>{details.teamName}</h2>
         <div className='member container'>
            <h3>{details.name}</h3>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
         </div>
      </div>
   )
}
