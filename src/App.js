import React from 'react';
import './App.scss';
import './styles/Shared.scss';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {WorksPage} from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import Vaterland from "./works/Vaterland";
import HeimatSchreiben from "./works/HeimatSchreiben";
import DerWertDerWahrheit from "./works/DerWertDerWahrheit";
import ProtestSelfie from "./works/ProtestSelfie";
import SchlimmstenfallsEineUtopie from "./works/SchlimmstenfallsEineUtopie";
import SpurenImSand from "./works/SpurenImSand";
import CriticalWhiteness from "./works/CriticalWhiteness";
import Solange from "./works/Solange";
import Negritude from "./works/Negritude";
import img from "./res/imgs/critical-whiteness.jpg";
import {Helmet} from "react-helmet/es/Helmet";
import {Navigation} from "./components/Navigation";
import {Layout} from "./components/Layout";

const CarouselIndex = React.createContext(0);


export default function App({children}) {

  console.log(CarouselIndex);

  CarouselIndex._currentValue = 2;
  console.log(CarouselIndex);

  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Michelle Akanji</title>
          <meta name='description'
                content='Reportagen, Features und Essays von Michelle Akanji, Kulturpublizistin in Zürich. '/>
          <meta property="og:image" content={img}/>
        </Helmet>

        <Navigation/>

        <CarouselIndex.Provider value={1}>
          <Layout children={children}>

            <Switch>
              <Route path='/works' component={WorksPage}/>
              <Route path='/contact' component={ContactPage}/>

              <Route path='/vaterland' component={Vaterland}/>
              <Route path='/der-wert-der-wahrheit' component={DerWertDerWahrheit}/>
              <Route path='/heimat-schreiben' component={HeimatSchreiben}/>
              <Route path='/protest-selfie' component={ProtestSelfie}/>
              <Route path='/schlimmstenfalls-eine-utopie' component={SchlimmstenfallsEineUtopie}/>
              <Route path='/spuren-im-sand' component={SpurenImSand}/>
              <Route path='/critical-whiteness' component={CriticalWhiteness}/>
              <Route path='/solange' component={Solange}/>
              <Route path='/w-wie-negritude' component={Negritude}/>

              <Redirect from='/' to='/works'/>
            </Switch>

          </Layout>
        </CarouselIndex.Provider>
      </div>
    </Router>
  );
}
