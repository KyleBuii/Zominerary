import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Hotbar from './Hotbar';
import Footer from './Footer';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Hotbar/>
        <Footer/>
    </StrictMode>
);