import React from 'react'
import Listtask from './Listtask/Listtask'
import Mainpage from './Mainpage/Mainpage'
import Registertask from './Registertask/Registertask'

const Layout = () => {
  return (
    <>
     <Mainpage/>
     <Registertask/>
     <Listtask/>
    </>
   
    
  )
}

export default Layout