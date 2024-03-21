    import React, {Component} from 'react';
    import {Routes, Route} from 'react-router-dom';

    import Beranda from './Components/content/beranda';
    import TentangSaya from './Components/content/tentangSaya';
    import Karya from './Components/content/karya';
    import Kontak from './Components/content/kontak';
    import Gallery from "./Components/content/gallery";

    class Utama extends Component {
        render() {
            return (
                <Routes>
                    <Route exact path="/" element={<Beranda/>}/>
                    <Route path="/tentangSaya" element={<TentangSaya/>}/>
                    <Route path="/karya" element={<Karya/>}/>
                    <Route path="/kontak" element={<Kontak/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                </Routes>
            )
        }
    }

    export default Utama;