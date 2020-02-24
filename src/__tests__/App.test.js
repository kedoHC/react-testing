

import React from 'react'
import ReactDom from 'react-dom'
import App from '../App'

it("shows component 1", ()=>{

    const div = document.createElement("div")

    ReactDom.render(<App />, div)

    expect(div.innerHTML).toContain("Componente 1")
    
    ReactDom.unmountComponentAtNode( div )

})