import { memo, useState } from 'react';
import { useNavigate } from 'react-router';

const Boarding = ({ setterSolo, setterKnower }) => {
    const [setted, setSetted] = useState({
        solo: false,
        knower: false,
    });

    const navigate = useNavigate();

    const handleAnswer = (type, boolean) => {
        setSetted((prev) => {
            const newSetted = { ...prev, [type]: true };
            if (Object.values(newSetted).every(Boolean)) navigate('aotd');
            return newSetted;
        });

        if (type === 'solo') setterSolo(boolean);
        if (type === 'knower') setterKnower(boolean);
    };

    return (
        <section className='boarding'>
            {(setted.solo)
                ? <></>
                : <>
                    <span className='title'>Are you solo?</span>
                    <div className='choices'>
                        <button className='symbol'
                            onClick={() => handleAnswer('solo', true)}>Yes</button>
                        <button className='symbol'
                            onClick={() => handleAnswer('solo', false)}>No</button>
                    </div>
                </>}
            {(setted.knower)
                ? <></>
                : <>
                    <span className='title'>Do you know what to do?</span>
                    <div className='choices'>
                        <button className='symbol'
                            onClick={() => handleAnswer('knower', true)}>Yes</button>
                        <button className='symbol'
                            onClick={() => handleAnswer('knower', false)}>No</button>
                    </div>
                </>}
        </section>
    );
};

export default memo(Boarding);