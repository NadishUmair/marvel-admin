import React from 'react'
import SideDrawer from './sideDrawer';

const EditAdminProfile = () => {
  return (
    <section className='flex justify-between'>
        <SideDrawer page={"editAdmin"}/>
        <div className='w-[80%] '>
            Edit Admin
        </div>
    </section>
  )
}

export default EditAdminProfile;