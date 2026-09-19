import { memo, useState } from 'react';

const mapNote = {
    switch   : 3,
    replaced : 6,
    couldnt  : 7,
    pzgr     : 9,
};

const Totenreich = () => {
    const [codeNote, setCodeNote] = useState('');

    const handleCodeNote = (note) => {
        setCodeNote(note);
    };

    return (
        <section className='page'>
            <div>
                <div className='title'>
                    <span>Starting Room</span>
                    <div className='note'>
                        <span>[</span>
                        <div className='subnote'>
                            <span>PAP</span>
                            <span className='normal'>= Pack-a-Punch</span>
                        </div>
                        <span>]</span>
                    </div>
                </div>
                <ol>
                    <li>Repair boxes</li>
                    <li>Enter Tyr's Head</li>
                    <li>Grab Admin Card</li>
                    <li>Travel to War Factory</li>
                    <li>Use Card</li>
                    <li>Grab Glock Drop</li>
                    <li>Travel to Fishery Island</li>
                    <li>Turn on PAP</li>
                </ol>
            </div>
            <div>
                <div className='title'>
                    <span>Crowbar</span>
                </div>
                <ol>
                    {(codeNote === '')
                        ? <>
                            <li>What is the second word on the note?</li>
                            <div className='codes'>
                                <button className='symbol'
                                    onClick={() => handleCodeNote('switch')}>
                                    Switch
                                </button>
                                <button className='symbol'
                                    onClick={() => handleCodeNote('replaced')}>
                                    Replaced
                                </button>
                                <button className='symbol'
                                    onClick={() => handleCodeNote('couldnt')}>
                                    Couldn
                                't</button>
                                <button className='symbol'
                                    onClick={() => handleCodeNote('pzgr')}>
                                    PzGR
                                </button>
                            </div>
                        </>
                        : <></>}
                    <li>Open the Box</li>
                    <div className='codes'>
                        <button className='symbol'>{mapNote[codeNote]}</button>
                    </div>
                    <li>Grab Flack Gun Round</li>
                </ol>
            </div>
        </section>
    );
};

export default memo(Totenreich);