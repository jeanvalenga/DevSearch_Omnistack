import React from 'react';

import './styles.css'

function DevItem({dev}){

    
    return(
        <li  className="dev-item">
           
              <header>
                  
                <img src={dev.avatar_url} alt={dev.name} />
                
                <div className="user-info">
                    
                  <strong>{dev.name}</strong>
                  
                  <span>{dev.techs.join(', ')}</span>
                  
                </div>
                <div className="div-delete">
                <button type="submit" className= "delete" ></button>
                </div>
              </header>
              
              <p>{dev.bio}</p>
              
              <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
              
            </li>
            
    );
}

export default DevItem;