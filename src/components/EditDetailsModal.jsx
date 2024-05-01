import React, { useRef } from 'react';
import { openDialog,closeDialog } from "../utils/modalUtils.js";
const EditDetailsModal = ({dialogRef}) => {
  const [editedDetails, seteditedDetails] = React.useState({})
  const handlechange=()=>{
    const {name,value}=e.target
seteditedDetails({
      ...editedDetails,
      name:value
    })
  }
const handleSubmit=()=>{
    console.log(editedDetails)
  }
  return (
    <div>
      <dialog ref={dialogRef}>
        <p>EDIT DETAILS</p>
        <div>
          <label>Plot No.</label>
          <input name="plotno." />
        </div>
        <div>
          <label>street</label>
          <input name="street" />
        </div>
        <div>
          <label>city</label>
          <input name="city" />
        </div>
        <div>
          <label>Postal code</label>
          <input name="postalcode"/>
        </div>
        <div>
          <label>state</label>
          <input name="state" />
        </div>
        <div>
          <label>country</label>
          <input name="country" />
        </div>
        <div>
          <label>Status</label> 
          <span>sold</span>
          <input type="radio" name="soldstatus" />
          <span>unsold</span>
          <input type="radio" name="soldstatus" />
        </div>
        <button onClick={handleSubmit}>submit</button>
               <button onClick={()=>closeDialog(dialogRef)}>Close</button>
      </dialog>
    </div>
  );
};

export default EditDetailsModal;




















