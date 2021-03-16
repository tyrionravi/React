import React from 'react'

function NameList(){
    const names = ['Bruce', 'Clark', 'Diana'] 
    const namelist = names.map(name=><h2>{name}</h2>)
    return(
        <div>{namelist}</div>
    )
}
export default NameList