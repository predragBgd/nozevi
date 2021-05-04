import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FixedBlades } from './fixedBlades';
import { FoldingBldes } from './foldingBlades';
import { Footer } from './footer';
import { Header } from './header';
import './index.css';
import { MainPage } from './mainPage';
import { ShopFoldingBlades } from './shop';

const App = () => {
  return(
    <div>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path= "/fixedBlades" component={FixedBlades}/>
          <Route path= "/foldingBlades" component={FoldingBldes}/>
          <Route path= "/shop" component={ShopFoldingBlades}/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);