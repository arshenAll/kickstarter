import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import MainPage from './MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MainPage />
  {/*    < BriefDescr/>
    <FundNowOr/>
    <FundedBy/>
    <LongSection/>
    <UpdatesEtc/>
    <Progress/>
  <Comments/>
    <Footer/>  */}
  </React.StrictMode>
);


reportWebVitals();
