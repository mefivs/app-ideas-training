import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BackButton from './components/BackButton';
import Bin2Dec from './pages/Bin2Dec';
import BorderRadiusPreviewer from './pages/BorderRadiusPreviewer';

import Home from './pages/Home';

function NavigationRoutes() {


    return (
        <BrowserRouter>
                <BackButton />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bin2dec' element={<Bin2Dec />} />
                <Route path='/border-radius-previewer' element={<BorderRadiusPreviewer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default NavigationRoutes;