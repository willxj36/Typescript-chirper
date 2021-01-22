import React from 'react';

const Navbar = ({ showNewChirp }: NavbarProps) => {

    return(
        <div className="navbar bg-success">
            <button className="btn btn-dark btn-lg">Log In</button> 
            <span className="text-strong">Welcome, *username*</span>
            <button onClick={showNewChirp} className="btn btn-dark btn-lg">New Chirp</button>
        </div>
    ) //log in and username non-functional, just for appearances at this point

}

interface NavbarProps {
    showNewChirp(event: React.MouseEvent<HTMLButtonElement>): void
}

export default Navbar;