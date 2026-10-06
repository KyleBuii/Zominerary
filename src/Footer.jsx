import { memo } from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <span>Call of Duty and related game content are trademarks and copyright of Activision and unrelated to Zominerary</span>
            <div>
                <span>Background images from pngtree</span>
                <span>&#8226;</span>
                <div>
                    <a href='https://pngtree.com/freepng/starry-night-sky-a-outer-space-transparent-background-with-a-star-field-texture-overlay_15229671.html'>Sky</a>
                    <span>&#8226;</span>
                    <a href='https://pngtree.com/freepng/white-fog-background_7961573.html'>Fog</a>
                    <span>&#8226;</span>
                    <a href='https://pngtree.com/freepng/illustration-of-forest-landscape_7324063.html'>Forest</a>
                </div>
            </div>
            <span></span>
            <div>
                <span>Created by <a href='https://github.com/KyleBuii' referrerPolicy='no-referrer'>Kyle Bui</a></span>
                <span>&#8226;</span>
                <span className='icon-link'
                    onClick={() => { window.location.href = 'https://github.com/KyleBuii/Zominerary'; }}>
                    <FaGithub/>
                </span>
            </div>
            <span>&#169; {new Date().getFullYear()} Zominerary. All rights reserved.</span>
        </footer>
    );
};

export default memo(Footer);