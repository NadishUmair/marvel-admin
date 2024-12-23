import React from 'react'
import SideDrawer from './sideDrawer'
import UsersComponent from './usersComponent';

const DashboardComponent = () => {
  return (
   <section className='h-[90vh] flex '>
   

    <SideDrawer/>
    <UsersComponent/>
   </section>
  )
}

export default DashboardComponent;