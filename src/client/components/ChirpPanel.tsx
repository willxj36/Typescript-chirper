import React from 'react';

const ChirpPanel = ({ chirps }: ChirpPanelProps) => {

    return(
        <div className="container col m-4">
            
        </div>
    )
}

interface ChirpPanelProps {
    chirps: [number, {name: string, text: string}][];
}

export default ChirpPanel