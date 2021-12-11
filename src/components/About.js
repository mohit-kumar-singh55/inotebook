import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';

export const About = () => {
    const a = useContext(noteContext);

    useEffect(() => {                                           // right now it is working as "componentDidMount()"
        a.update();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            This is About {a.state.name} and he is {a.state.age} old
        </div>
    )
}
