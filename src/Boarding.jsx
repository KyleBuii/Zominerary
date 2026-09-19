import { memo, useState } from 'react';
import { useNavigate } from 'react-router';

const Boarding = ({ setterSolo, setterKnower }) => {
    const [settedSolo, setSettedSolo] = useState(false);
    const [settedKnower, setSettedKnower] = useState(false);

    const navigate = useNavigate();

    const handleSolo = (boolean) => {
        setSettedSolo(true);
        setterSolo(boolean);

        if (settedKnower) navigate('aotd');
    };

    const handleKnower = (boolean) => {
        setSettedKnower(true);
        setterKnower(boolean);

        if (settedSolo) navigate('aotd');
    };

    return (
        <section className='boarding'>
            {(settedSolo)
                ? <></>
                : <>
                    <span>Are you solo?</span>
                    <div className='choices'>
                        <button className='symbol'
                            onClick={() => handleSolo(true)}>Yes</button>
                        <button className='symbol'
                            onClick={() => handleSolo(false)}>No</button>
                    </div>
                </>}
            {(settedKnower)
                ? <></>
                : <>
                    <span>Do you know what to do?</span>
                    <div className='choices'>
                        <button className='symbol'
                            onClick={() => handleKnower(true)}>Yes</button>
                        <button className='symbol'
                            onClick={() => handleKnower(false)}>No</button>
                    </div>
                </>}
        </section>
    );
};

export default memo(Boarding);