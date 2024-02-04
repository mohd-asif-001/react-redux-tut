import React from "react"
function User(props) {
    return(
        <>
        <h1>User component</h1>
        <h2>{props.data.name}</h2>
        <h2>{props.data.age}</h2>

        </>
    )
}
export default User