import React, { useEffect, useState } from 'react';
import $ from 'jquery';

const url = 'http://localhost:3000/api/chirps';

const AdminOptions: React.FC<AdminOptionsProps> = ({ id }) => {

    const [chirp, setChirp] = useState({name: null, text: null});
    const [chirpName, setChirpName] = useState('');
    const [chirpText, setChirpText] = useState('');

    useEffect(() => {
        async () => { //gotta figure out what's going on here
            let currentChirp = await $.get(`${url}/${id}`);
            let parsedChirp = JSON.parse(currentChirp);
            console.log(parsedChirp);
            setChirp(parsedChirp);
        }
    }, []);

    return (
        <div className="card border border-success shadow rounded m-4">
            <div className="card-body">
                <input type="text" name="nameEdit" defaultValue={chirp.name} id="nameEdit" className="form-control m-3"/>
                <input type="text" name="textEdit" defaultValue={chirp.text} id="textEdit" className="form-control m-3"/>
            </div>
            <div className="card-footer">
                //buttons for edit and delete
            </div>
        </div>
    )
}

interface AdminOptionsProps {
    id: string
}

export default AdminOptions;