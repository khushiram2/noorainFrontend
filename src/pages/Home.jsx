import React from 'react'
import  EditDetailsModal  from "../components/EditDetailsModal.jsx";
import {openDialog} from "../utils/modalUtils.js"
const Home = () => {
  const dialogRef=React.useRef(null)
  return (
<>
      <button onClick={()=>openDialog(dialogRef)}>edit Details</button>
      <EditDetailsModal dialogRef={dialogRef} />
    </>
  )
}

export default Home
