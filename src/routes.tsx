import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BackButton } from './components/BackButton';
import { ColorModeChanger } from './components/ColorModeChanger';
import { Bin2Dec } from './pages/Bin2Dec';
import { BorderRadiusPreviewer } from './pages/BorderRadiusPreviewer';
import { Calculator } from './pages/Calculator';
import { ChristmasLights } from './pages/ChristmasLights';

import Home from './pages/Home';

function NavigationRoutes() {


    return (
        <BrowserRouter>
            <BackButton />
            <ColorModeChanger />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bin2dec' element={<Bin2Dec />} />
                <Route path='/border-radius-previewer' element={<BorderRadiusPreviewer />} />
                <Route path='/calculator' element={<Calculator />} />
                <Route path='/christmas-lights' element={<ChristmasLights />} />
            </Routes>
        </BrowserRouter>
    )
}

export default NavigationRoutes;