import React, {useState, useEffect} from 'react'

function Auth(){

    const getDataFromServer = () => {
        fetch('/api/data', 'CONSOLE')
        .then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getDataFromServer()
    }, [])

    return (
        <div>
            Auth Component
        </div>
    )
}

export default Auth;