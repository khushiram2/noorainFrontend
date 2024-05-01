import React, { useRef } from 'react';
import {openDialog,closeDialog } from "../utils/modalUtils.js";
const ForgetPasswordDialog = ({dialogRef}) => {
  const [email,setEmail]=React.useState("")
  const handleEmailChange=(e)=>{
    setEmail(e.target.value)
  }
  const handleOtpSubmission=()=>{

  }
  const 
  return (
    <div>
      <dialog ref={dialogRef}>
      {(
        <>
            <p>please enter your email</p>
            <input type="email" onChange={handleEmailChange} />
            <button onClick={()=>console.log(email)} > submit </button>
            <button onClick={()=>closeDialog(dialogRef)}>Close</button>
        </>
      ):(
          <>
             <p>Please enter the otp sent to your number</p>
             <input/>
              <input/>
              <input/>
              <input/>
              <input/>
              <input/>
              <button onClick={handleOtpSubmission}  >send</button>
          </>
        )}
        </dialog>
    </div>
  );
};

export default ForgetPasswordDialog;





