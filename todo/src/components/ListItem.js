import React from 'react'

const ListItem = props => {
    const {
        data,
        markComplete

    } = props

    return (
        <li
            id={data.id}
            className={data.completed ? 'completed' : ''}
            onClick={markComplete}
        >
            {data.item}
        </li>
    )
}

export default ListItem