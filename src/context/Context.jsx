import React from 'react'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { ALL } from '../contants/api'

export const ContextApi = createContext({})

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null)


  
  const fetchData = async () => {
    setLoad(true)
    try {
      const response = await axios.get(`${ALL}/all`)
      setData(response.data)
    } catch (error) {
      setError(error.message)
    }
    finally {
      setLoad(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const api = {
    data
  }
  const states = {
   
    setError,
    setLoad,
    error,
    load
  }

  return (
    <div>
      <ContextApi.Provider value={{ states, api }}>
        {children}
      </ContextApi.Provider>

    </div>
  )
}

export default ContextProvider