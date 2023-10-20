import React from 'react'
import { BrowserRouter } from 'react-router-dom'

function Routing() {
    return (
        <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
         
      </Route>
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default Routing
