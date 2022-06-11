import React from 'react'
import Header from './Container/Header'
import Filter from './Container/Filter'
import Card from './Container/Card'
const Homer = () => {
  return (
    <div>
      <Header/>
      <center>
        <Filter/>
        <Card/>
      </center>
    </div>
  )
}

export default Homer