// React Import
import React, {Component} from "react";
import Utama from "./utama";
import Footer from "./Components/footer";
import NavbarComponent from "./Components/navbar";

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return(
        <>
            <NavbarComponent/>
            <Utama/>
            <Footer/>
        </>
    )
  }
}

export default App;