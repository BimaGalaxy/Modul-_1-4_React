import react from "react";
import Typewriter from "typewriter-effect";

class Kontak extends react.Component{
    render() {
        return(
            <body>
            <div className="welcome" style={{ marginLeft: '100px' }}>
                <Typewriter
                    options={{
                        strings: ["Ini Kontakku", "082232826073"],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 100,
                    }}
                />
            </div>
            </body>
        )
    }
}

export default Kontak;