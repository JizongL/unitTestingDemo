import React from 'react';

export default function Event(props) {   
    return <button onClick={() => props.onClick()}>Click me!</button>;
}