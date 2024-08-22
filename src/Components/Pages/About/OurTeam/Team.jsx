
import React, { useEffect, useState } from 'react';
import AgentCard from './AgentCard';

const Team = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch("user.json")
            .then(res => res.json())
            .then(data => setTeam(data)
            )
    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center my-10'>
            {
                team.map(agent =>
                    <AgentCard key={agent.username} agent={agent}></AgentCard>
                )
            }
        </div>
    );
}

export default Team;