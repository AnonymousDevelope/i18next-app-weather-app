import React from 'react'
import './Alert.css'

const Alert = ({ children }) => {
    return (
        <>
            <div className="alert p-3 mx-auto mt-4" >
                {children}
            </div>
        </>
    )
}

export default Alert