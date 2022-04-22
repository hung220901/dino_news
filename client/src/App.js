import React, { Fragment } from 'react';
import Footer from './components/Footer'
import Header from './components/Header';
import TopNews from './components/HomePage/TopNews'
import LatestNews from './components/HomePage/LatestNews'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Auth/Login'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={
            <Fragment>
              <Header></Header>
              <TopNews></TopNews>
              <LatestNews></LatestNews>
              <Footer></Footer>
            </Fragment>
          } />
          <Route path="/login" element={
            <Fragment>
              <Login></Login>
            </Fragment>
          } />

          <Route path='/news-detail/:id' element={
            <Fragment>

            </Fragment>
          }/>
          <Route path='*' element={
            <div>
              <h1 style={{textAlign:'center',transform:'translate(-50%,-50%)', top:'20%',left:'50%',position:'absolute'}}>Page Not Found</h1>
            </div>
          }/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
