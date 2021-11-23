import React, { useEffect, useState } from 'react'
import ApiService from './ApiService/service'

const App = () => {
  const [list, setList] = useState()

  useEffect(()=>{
    const loadAll = async () => {
      try {
        const response = await ApiService.getHomeList()
        console.log(response)
        setList(response)
      } catch (error) {
        console.log(error)
      }
    }
    loadAll();
  }, [])
  return(
    <>
      <div>Qualquer coisa</div>
      {list && list.map((item, key) => (
        <p key={key}>{item.title}</p>
      ))}
    </>
  )
}

export default App