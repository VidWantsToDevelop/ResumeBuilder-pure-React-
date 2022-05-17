import React, { useEffect, useContext, useState } from 'react'
import { dataFile } from './data'
const MyContext = React.createContext()

const MyProvider = ({ children }) => {
  const [test, setTest] = useState('Hello world of React JS')
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState(dataFile)
  return (
    <MyContext.Provider
      value={{
        test,
        isOpen,
        setIsOpen,
        dataFile,
        setData,
        data,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export const useMyContext = () => {
  return useContext(MyContext)
}

export { MyProvider, MyContext }
