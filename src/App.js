import React, { useEffect, useState } from 'react'
import ApiService from './ApiService/service'

const App = () => {
  useEffect(()=>{
    const load = async () => {
      try {
        const response = await ApiService.getFilmes()
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    load();
  })
  return(
    <div>Qualquer coisa</div>
  )
}

export default App