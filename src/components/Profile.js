import React from 'react'

export default function Profile(props) {
    return (
        <div>
            <p>{props.person.name}<b>{props.person.age}</b></p>
        </div>
    )
}
