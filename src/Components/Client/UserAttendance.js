import React from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';



const UserAttendance = () => {
  return (
     <Scanner onScan={(result) => console.log(result)} />
  )
}

export default UserAttendance