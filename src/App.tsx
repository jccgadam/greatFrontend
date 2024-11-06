import './App.css';
import {Routes, Route} from 'react-router-dom';
import {
    TabPage,
    ProgressbarPage,
    ModalPage,
    GenerateTableComponent,
    HolyGrailComponent,
    AccordionPage,
    ContactFormComponent,
    AuthCodeInputPage
} from './Projects';
import React from 'react';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/tabpage' element={<TabPage/>}/>
                <Route path='/progressbar' element={<ProgressbarPage/>}/>
                <Route path='/modal' element={<ModalPage/>}/>
                <Route path='/generatetable' element={<GenerateTableComponent/>}/>
                <Route path='/HolyGrailComponent' element={<HolyGrailComponent/>}/>
                <Route path='/AccordionPage' element={<AccordionPage/>}/>
                <Route path='/ContactForm' element={<ContactFormComponent/>}/>
                <Route path='/authCodeInput' element={<AuthCodeInputPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
