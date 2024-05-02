import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {user}=useParams();
  return (
    <div>Details: {user}</div>
  )
}

export default Details
