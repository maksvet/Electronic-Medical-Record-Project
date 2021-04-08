import React from 'react'
import { Button } from 'react-bootstrap'
import Navbar from "./Navigation"


const Header = () => {
    return (
        <div>
            <Navbar />
            <h1>Hello World!</h1>
            <Button variant="primary">Primary</Button>
        </div>
    )
}

export default Header

