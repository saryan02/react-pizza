import './App.css';
import './scss/app.scss'
import Head from "./components/Head";
import Home from "./pages/Home"
import {Routes, Route} from 'react-router-dom'

import React from 'react';


function App() {

    const Cart = React.lazy(() => import("./pages/Cart"));
    const FullPizza = React.lazy(()=>import("./pages/FullPizza"));
    const NotFound = React.lazy(()=>import("./pages/NotFound"));

    return (
        <div className="wrapper">
            <Head/>
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/cart' element={<React.Suspense fallback={<div>Загрузка...</div>}><Cart/></React.Suspense>}></Route>
                        <Route path='*'  element={<React.Suspense fallback={<div>Загрузка...</div>}><NotFound/></React.Suspense>}></Route>
                        <Route path="/pizza/:id"  element={<React.Suspense fallback={<div>Загрузка...</div>}><FullPizza/></React.Suspense>}></Route>
                    </Routes>

                </div>

        </div>
    );
}

export default App;
