import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

const footerStyle = {
    position: 'absolute',
    bottom: -165,
    width: '100%',
    backgroundColor: 'rgba(241, 241, 241, 0.9)',
}

export default function Footer() {

    const handleDitunggu = () => {
        alert("Mohon ditunggu!");
    };

    return (
        <MDBFooter className='text-center text-white' style={footerStyle}>
            <MDBContainer className='pt-4'>
                <section className='mb-4'>
                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        floating
                        size="lg"
                        className='text-dark m-1'
                        onClick={handleDitunggu}
                        href='https://www.facebook.com/profile.php?id=100042206773314'
                        role='button'
                    >
                        <MDBIcon fab icon="facebook" />
                    </MDBBtn>

                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        floating
                        size="lg"
                        className='text-dark m-1'
                        onClick={handleDitunggu}
                        href='https://www.instagram.com/bimagalaxy_/'
                        role='button'
                    >
                        <MDBIcon fab className='fa-instagram' />
                    </MDBBtn>

                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        floating
                        size="lg"
                        className='text-dark m-1'
                        onClick={handleDitunggu}
                        href='https://www.linkedin.com/in/bima-galaxy-099908271/'
                        role='button'
                    >
                        <MDBIcon fab className='fa-linkedin' />
                    </MDBBtn>

                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        floating
                        size="lg"
                        className='text-dark m-1'
                        onClick={handleDitunggu}
                        href='https://github.com/BimaGalaxy'
                        role='button'
                    >
                        <MDBIcon fab className='fa-github' />
                    </MDBBtn>
                </section>
            </MDBContainer>

            <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024:
                <a className='text-dark' href='https://mdbootstrap.com/'>
                    Bima Galaxy
                </a>
            </div>
        </MDBFooter>
    );
}