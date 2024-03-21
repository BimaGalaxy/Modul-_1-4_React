import react from "react";
import Typewriter from "typewriter-effect";

// Bootrap Import
import 'bootstrap/dist/css/bootstrap.min.css';

import './Beranda.css';

// Import Google Fonts
const PoppinsFontLink = document.createElement("link");
PoppinsFontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap";
PoppinsFontLink.rel = "stylesheet";
document.head.appendChild(PoppinsFontLink);

class Beranda extends react.Component{
    render() {
        return(
                <body>
                    <div className="welcome" style={{ marginLeft: '100px' }}>
                        <Typewriter
                            options={{
                                strings: ["Welcome to my website!", "Hope you like it!"],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                deleteSpeed: 100,
                            }}
                        />
                        <h2>This is my first project using React.js </h2>
                    </div>
                </body>
        )
    }
}

export default Beranda;