import React from 'react';
import linkedin from "../Images/Misc/Linkedin.svg"
import mail from "../Images/Misc/Mail.svg"
import "./SoMeNav.css"

const soMeNav = () =>{
    return(
        <div className="SoMeNav">
            <a className="SoMeNavLink" href="https://www.linkedin.com/in/thomasbjorksund" target="_blank" rel="noopener noreferrer" >
                Linkedin
                {/* <img src={linkedin} alt="Link to linked in" /> */}
            </a>
             <a className="SoMeNavLink" href="mailto:thomas.bjorksund@axakon.se?subject=Want to connect with you&body=Hi Thomas!" > 
                 Email
                 {/* <img src={mail} alt="Link to send a mail" /> */}
            </a>

        </div>
    );
};

export default soMeNav