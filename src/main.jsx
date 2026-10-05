import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Footer from './Footer';
import Hotbar from './Hotbar';
import Background from './Background';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Hotbar/>
        <Footer/>
        <Background/>
    </StrictMode>
);