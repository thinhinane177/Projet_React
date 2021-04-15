import React from 'react';

// NavLink permet en cliquant d'aller en page en page
 import{ NavLink} from "react-router-dom"

const Navigation = () => {
   
    return ( 
        <div className="navigation">

            <NavLink exact to="/"  activeClassName = "nav-active">
                Acceuil
            </NavLink>
            <NavLink exact to="about" activeClassName = "nav-active">
             A propos
            </NavLink>

        </div>






    ); 
       
};

export default Navigation;