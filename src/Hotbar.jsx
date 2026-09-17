import { memo, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import AOTD from './AOTD';
import Astra from './Astra';
import Boarding from './Boarding';
import './Hotbar.scss';
import Kowakujo from './Kowakujo';
import Paradox from './Paradox';
import Rex from './Rex';
import Totenreich from './Totenreich';

const Hotbar = () => {
    const [activeButton, setActiveButton] = useState('aotd');
    const [isSolo, setIsSolo] = useState(false);

    const handleClick = (name) => {
        if (name === activeButton) return;
        setActiveButton(name);
    };

    return (
        <BrowserRouter>
            <section className='hotbar'>
                <Link to={'/aotd'}>
                    <div className={`aotd ${(activeButton === 'aotd') ? 'active' : ''}`}
                        onClick={() => handleClick('aotd')}>
                        <span className='button-text'>Ashes of the Damned</span>
                        <span className='truck-top'></span>
                        <span className='truck'></span>
                        <span className='wheel left'></span>
                        <span className='wheel right'></span>
                        <span className='abomination'>
                            <span className='laser'></span>
                        </span>
                        <span className='stop-lights'></span>
                    </div>
                </Link>
                <Link to={'/astra'}>
                    <div className={`astra ${(activeButton === 'astra') ? 'active' : ''}`}
                        onClick={() => handleClick('astra')}>
                        <span className='button-text'>Astra Malorum</span>
                        <div className='ufo'>
                            <span className='pit'></span>
                            <span className='dome'></span>
                            <span className='saucer'></span>
                            <span className='dome bottom'>
                                <span className='dome-spot'></span>
                                <span className='dome-spot'></span>
                                <span className='dome-spot'></span>
                                <span className='pit bottom'>
                                    <span className='beam'></span>
                                </span>
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to={'/paradox'}>
                    <div className={`paradox ${(activeButton === 'paradox' ? 'active' : '')}`}
                        onClick={() => handleClick('paradox')}>
                        <span className='button-text'>Paradox Junction</span>
                        <div className='nuke'>
                            <span className='triangle'></span>
                            <span className='triangle'></span>
                            <span className='triangle'></span>
                        </div>
                        <div className='fire'>
                            <div className='fire-left'>
                                <div className='main-fire'></div>
                                <div className='particle-fire'></div>
                            </div>
                            <div className='fire-center'>
                                <div className='main-fire'></div>
                                <div className='particle-fire'></div>
                            </div>
                            <div className='fire-right'>
                                <div className='main-fire'></div>
                                <div className='particle-fire'></div>
                            </div>
                            <div className='fire-bottom'>
                                <div className='main-fire'></div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/totenreich'}>
                    <div className={`totenreich ${(activeButton === 'totenreich' ? 'active' : '')}`}
                        onClick={() => handleClick('totenreich')}>
                        <span className='button-text'>Totenreich</span>
                        <div className='lantern'>
                            <div className='chain'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className='ring'></div>
                            <div className='roof'>
                                <div className='eyebrow'></div>
                                <div className='face'>
                                    <div className='eye'></div>
                                    <div className='eye'></div>
                                </div>
                                <div className='mouth'></div>
                            </div>
                            <div className='star'></div>
                            <div className='globe'></div>
                            <div className='roof bottom'>
                                <div className='mouth bottom'></div>
                            </div>
                            <div className='star bottom'></div>
                        </div>
                    </div>
                </Link>
                <Link to={'/kowakujo'}>
                    <div className={`kowakujo ${(activeButton === 'kowakujo' ? 'active' : '')}`}
                        onClick={() => handleClick('kowakujo')}>
                        <span className='button-text'>Kowakujo</span>
                        <div className='paw'>
                            <div className='inner'></div>
                            <div className='bottom'></div>
                        </div>
                        <div className='paw'>
                            <div className='inner'></div>
                            <div className='bottom'></div>
                        </div>
                        <div className='paw'>
                            <div className='inner'></div>
                            <div className='bottom'></div>
                        </div>
                    </div>
                </Link>
                <Link to={'/rex'}>
                    <div className={`rex ${(activeButton === 'rex') ? 'active' : ''}`}
                        onClick={() => handleClick('rex')}>
                        <span className='button-text'>Rex Infernus</span>
                        <div className='house'>
                            <div className='front'>
                                <div className='crack-wrapper'>
                                    <div className='crack'></div>
                                </div>
                                <div className='ball'></div>
                                <div className='roof small'></div>
                                <div className='base small'></div>
                                <div className='door'></div>
                                <div className='windows'>
                                    <div className='window'></div>
                                    <div className='window'></div>
                                </div>
                            </div>
                            <div className='back'>
                                <div className='roof'></div>
                                <div className='chimmney'></div>
                                <div className='base'></div>
                                <div className='windows'>
                                    <div className='window'></div>
                                    <div className='window'></div>
                                </div>
                                <div className='windows right'>
                                    <div className='window'></div>
                                    <div className='window'></div>
                                </div>
                            </div>
                        </div>
                        <div className='symbol quarter'></div>
                        <div className='symbol eighth'>
                            <div></div>
                        </div>
                        <div className='symbol sharp'>
                            <div></div>
                        </div>
                        <div className='symbol double'>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </Link>
            </section>
            <Routes>
                <Route path='/'
                    element={
                        <Boarding setterSolo={setIsSolo}/>
                    }
                />
                <Route path='/aotd'
                    element={
                        <AOTD isSolo={isSolo}/>
                    }/>
                <Route path='/astra'
                    element={
                        <Astra/>
                    }/>
                <Route path='/paradox'
                    element={
                        <Paradox/>
                    }/>
                <Route path='/totenreich'
                    element={
                        <Totenreich/>
                    }/>

                <Route path='/kowakujo'
                    element={
                        <Kowakujo/>
                    }/>

                <Route path='/rex'
                    element={
                        <Rex/>
                    }/>
            </Routes>
        </BrowserRouter>
    );
};

export default memo(Hotbar);