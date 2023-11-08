import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contact, Landing, Service, Work } from '../Pages';

const index = (
    <Router>
        <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/service' element={<Service />} />
            <Route exact path='/work' element={<Work />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/about' element={<About />} />
        </Routes>
    </Router>
)

export default index