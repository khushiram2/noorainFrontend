import CreateAppContext from "./CreateAppContext.jsx";

import React from 'react'

const ConetxtProvider= ({children}) => {
  const [login, setLogin] = React.useState(null)

  const values={
    login,
    setLogin
  }
  
  return (
    <CreateAppContext.Provider value={values}>
    {children}
    </CreateAppContext.Provider>
  )
}

export default ConetxtProvider



