import React from 'react'
import SideDrawer from './sideDrawer'

const SendNotifications = () => {
  return (
     <section className='flex justify-between'>
        <SideDrawer page={"notification"}/>
        <div className='w-[80%] '>
             notifications
        </div>
     </section>
  )
}

export default SendNotifications