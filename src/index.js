import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App'
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
const root = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
      <ToastContainer 
        position='bottom-left'
        autoClose={2000}
        />
    </BrowserRouter>
    ,root)

}

if(module.hot){
  module.hot.accept('./app/layout/App',()=>{setTimeout(render)})
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
render()
