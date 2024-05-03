import { Route } from 'react-router-dom';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../routes/home/Home";
import Havo from "../routes/havo_sovutgic/Havo";
import Smart from "../routes/smartfonlar/Smart";
import Muz from "../routes/muzlatgiclar/Muz";
import Chang from "../routes/chanyutgiclar/Chang";
import Sevimly from './sevimly/Sevimly';

const Routes = () => {
    return (
        <>

            <Header />
            {/* //////////////////////////////////////////////////// */}

            <Route exact path="/">
                <Home />
            </Route >

            <div className="container">

                <Route path="/havo">
                    <Havo />
                </Route >

                <Route path="/smartfon">
                    <Smart />
                </Route >

                <Route path="/muzlatgich">
                    <Muz />
                </Route >

                <Route path="/changyutgich">
                    <Chang />
                </Route >

                <Route path="/sevimly">
                    <Sevimly />
                </Route >

            </div>

            {/* //////////////////////////////////////////////////// */}
            <Footer />

        </>
    )
}

export default Routes