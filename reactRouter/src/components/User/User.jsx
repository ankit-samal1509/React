import React from 'react'
import {useParams} from 'react-router'

function User(){
    const {userId} = useParams()
    return(
        <h1 className = " bg-gray-500 text-white text-3xl text-center p-5">User : {userId}</h1>
        
        
    )

}

export default User