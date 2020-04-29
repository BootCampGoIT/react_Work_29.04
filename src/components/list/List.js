import React from 'react'
import ListItem from './listItem/ListItem';

const List = ({ users, deleteItem }) => {
    return (
        <ul style={{ listStyle: "none", display: "flex" }}>
            {users.map(user => <ListItem key={user.id} user={user} deleteItem={deleteItem} />)}
        </ul>
    );
}

export default List;