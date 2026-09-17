import { memo } from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <span>Call of Duty and related game content are trademarks and copyright of Activision and unrelated to Zominerary</span>
            <div>
                <span>Created by <a href='https://github.com/KyleBuii' referrerPolicy='no-referrer'>Kyle Bui</a></span>
                &#8226;
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