import { memo } from 'react';
import { useNavigate } from 'react-router';

const Boarding = ({ setterSolo }) => {
    const navigate = useNavigate();

    const handleClick = (boolean) => {
        setterSolo(boolean);
        navigate('aotd');
    };

    return (
        <section className='boarding'>
            <span>Are you solo?</span>
            <div className='choices'>
                <button onClick={() => handleClick(true)}>Yes</button>
                <button onClick={() => handleClick(false)}>No</button>
            </div>
        </section>
    );
};

export default memo(Boarding);