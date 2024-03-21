import react from "react";
import './tentangSaya.css'

class TentangSaya extends react.Component{
    render() {
        return(
            <body>
                <div className="about-me">
                    <h2>Tentang Saya</h2>
                    <hr style={{ border: "none" }}/>
                    <h3>Nama</h3>
                    <p>Bima Galaxy Putra</p>
                    <hr style={{ border: "none" }}/>
                    <h3>Pendidikan</h3>
                    <ul>
                        <li>MI KH. Hasyim Asy'ari Malang</li>
                        <li>MTsN 2 Kota malang</li>
                        <li>SMK Telkom Malang (Now)</li>
                    </ul>
                    <hr style={{ border: "none" }}/>
                    <h3>Pengalaman</h3>
                    <ul>
                        <li>Mengikuti program Digiup, Junior Web Developer - Desember 2022</li>
                        <li>Pernah mengikuti lomba CTF Wreck-It 3.0 POLTEKSSN - April 2023</li>
                    </ul>
                </div>
            </body>
        )
    }
}

export default TentangSaya;