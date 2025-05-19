import { Button } from '@/components/ui/button'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-gray-800 p-4'>
        <h1 className='text-white'>Hello!</h1>
        <Button>Logout</Button>
    </div>
  )
}

export default Navbar