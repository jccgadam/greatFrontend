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
    AuthCodeInputPage,
    DataTablePage
} from './Projects';
import React from 'react';
import {AuthCodeInputItemComponent} from "./Projects/AuthCodeInput/AuthCodeInputItemComponent";

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
                <Route path='/dataTablePage' element={<DataTablePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
