import React, { useEffect, useState } from 'react';
import AgentCardLayout from './AgentCardLayout';

function TeamLayout() {
    const [agent, setAgent] = useState([]);
    useEffect(() => {
        fetch("user.json")
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => setAgent(data))
            .catch(error => console.error("Fetch error:", error));
    }, []);


    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center my-10'>

            {
              agent.map(person=><AgentCardLayout key={person.id} person={person}></AgentCardLayout>)
            }
        </div>
    )
}

export default TeamLayout;