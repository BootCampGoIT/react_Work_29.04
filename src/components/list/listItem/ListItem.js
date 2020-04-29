import React from 'react'

const liStyle = {
    border: "1px solid black",
    width: '200px',
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: "center"
}

const ListItem = ({ user: { id, email, login, password }, deleteItem }) => {
    return (
        <li style={liStyle}>
            <h2>{email}</h2>
            <p>{login}</p>
            <p>{password}</p>
            <button id={id} onClick={deleteItem}>Delete</button>
        </li>
    );
}

export default ListItem;