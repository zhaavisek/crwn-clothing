import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInAndSignUpPages from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/shop" component={ShopPage}/>
      <Route exact path='/signin' component={SignInAndSignUpPages}/>
      </Switch>
    </div>
  );
}

export default App;
