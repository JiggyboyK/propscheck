import React from 'react'


const profile = (props) => {
    return (
        <div className = "profile-section">
            <header className="profile">
                <div className= "profile-img">{props.children}</div>
                <h3 style={{color: "green"}}>
                The profile user name is {props.fullname} 
                </h3>
                <h4>My job: I love to work as a {props.profession}</h4>
                <h4>My bio: <span>{props.bio}</span></h4>    
                <button type="button"
                onClick={props.handleName}style={{backgroundColor: 'blue', fontFamily='monospace', fontWeight='bold',color='white', cursor='pointer'}}> See username 
                    </button>       
                </header>
        </div>
    );
};