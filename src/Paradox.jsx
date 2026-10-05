import { memo, useState } from 'react';

const mapCorruptedWall = {
    yellow: {
        name: 'Yellow House Garage',
        nameImage: 'labled-yellow-house-garage',
    },
    green: {
        name: 'Green House Upstairs',
        nameImage: 'labled-green-house',
    },
    trinity: {
        name: 'Trinity Ave',
        nameImage: 'labled-trinity-ave-2',
    },
};

const Paradox = () => {
    const [corruptedWall, setCorruptedWall] = useState('');
    const [mannequin, setMannequin] = useState(-1);

    return (
        <section className='page'>
            <div className='main-title title-paradox'>
                <span>Paradox</span>
                <span>Junction</span>
            </div>
            {/* Starting Room */}
            <div>
                <div className='title'>
                    <span>Starting Room</span>
                </div>
                <ol>
                    <li>Shoot Clock Hands</li>
                    <img className='clock'
                        src='/paradox/clock-spawn.webp'
                        alt='Clock spawn'
                        decoding='async'
                        loading='lazy'/>
                </ol>
            </div>
            {/* Listening Exam */}
            <div>
                <div className='title'>
                    <span>Listening Exam</span>
                </div>
                <ol>
                    <li><span className='note-do-all'>DO ALL THE STEPS BELLOW BEFORE ROUND 6</span></li>
                    <li>Fill Cyst making Noises</li>
                    <li>Grab Barrel</li>
                    <li>Travel to Yellow House Backyard</li>
                    <img className='big-image'
                        src='/paradox/labled-yellow-house-backyard.webp'
                        alt='Labled yellow house backyard'
                        decoding='async'
                        loading='lazy'/>
                    <li>Grab Truck Keys</li>
                    <li>Travel to Yellow House Upstairs</li>
                    <li>Grab SO3</li>
                    <li>
                        Find Corrupted Wall making Noises
                        {(corruptedWall === '')
                            ? <ul>
                                <li>Which Corrupted Wall?</li>
                                <div className='codes wrap'>
                                    <div className='side-activity horizontal'>
                                        <button className='image corrupted-wall-yellow'
                                            onClick={() => setCorruptedWall('yellow')}></button>
                                        <button className='symbol long'>Yellow House Garage</button>
                                    </div>
                                    <div className='side-activity horizontal'>
                                        <button className='image corrupted-wall-green'
                                            onClick={() => setCorruptedWall('green')}></button>
                                        <button className='symbol long'>Green House Upstairs</button>
                                    </div>
                                    <div className='side-activity horizontal'>
                                        <button className='image corrupted-wall-trinity'
                                            onClick={() => setCorruptedWall('trinity')}></button>
                                        <button className='symbol long'>Trinity Ave</button>
                                    </div>
                                </div>
                            </ul>
                            : <></>}
                    </li>
                    <li>Travel to Green House</li>
                    <img className='big-image'
                        src='/paradox/labled-green-house.webp'
                        alt='Labled green house'
                        decoding='async'
                        loading='lazy'/>
                    <li>Get Solution in the Sink</li>
                    <li>
                        Find Mannequin making Noises
                        {(mannequin === -1)
                            ? <ul>
                                <li>Where is the Mannequin?</li>
                                <div className='map-container'>
                                    <img className='map'
                                        src='/paradox/map-mannequin.webp'
                                        alt='Map mannequin'
                                        decoding='async'
                                        loading='lazy'/>
                                    <div className='map-buttons'>
                                        {[...Array(12).keys()].map((number) => {
                                            return <button className={`map-button-${number}`}
                                                onClick={() => setMannequin(number)}
                                                key={`map-button-${number}`}></button>
                                        })}
                                    </div>
                                </div>
                            </ul>
                            : <></>}
                    </li>
                    <li><span className='note-do-all'>DO ALL THE STEPS ABOVE BEFORE ROUND 6</span></li>
                </ol>
            </div>
            {/* Back to the Past */}
            <div>
                <div className='title'>
                    <span>Back to the Past</span>
                </div>
                <ol>
                    <li>Teleport to the Past by ending Round 6</li>
                    <li>Travel to Spawn</li>
                    <li>Loot Clock rewards</li>
                    <li>Buy Depth Perception</li>
                    <li>Buy Brain Rot</li>
                    <li>Install Truck Keys</li>
                    <li>Pour Solution on Mannequin</li>
                    <div className='map-container'>
                        <img className='map'
                            src='/paradox/map-mannequin.webp'
                            alt='Map mannequin'
                            decoding='async'
                            loading='lazy'/>
                        <div className='map-buttons'>
                            <button className={`map-button-${(mannequin === -1) ? 0 : mannequin} active`}></button>
                        </div>
                    </div>
                    <li>Turn on PAP</li>
                    <li>Explode Corrupted Wall</li>
                    {(corruptedWall === '')
                        ? <></>
                        : <div className='codes'>
                            <div className='side-activity horizontal'>
                                <button className={`image corrupted-wall-${corruptedWall}`}></button>
                                <button className='symbol long'>{mapCorruptedWall[corruptedWall].name}</button>
                            </div>
                        </div>}
                    <li>Travel to Yellow House Backyard</li>
                    <img className='big-image'
                        src='/paradox/labled-yellow-house-backyard.webp'
                        alt='Labled yellow house backyard'
                        decoding='async'
                        loading='lazy'/>
                    <li>Shoot and Grab Swing Seat</li>
                </ol>
            </div>
            {/* Back to the Future */}
            <div>
                <div className='title'>
                    <span>Back to the Future</span>
                </div>
                <ol>
                    <li>Teleport to the Future</li>
                    <li>Find and Interact with RC-XD Controller</li>
                    <div className='codes wrap'>
                        <div className='side-activity horizontal'>
                            <button className='image'
                                style={{
                                    backgroundImage: 'url(/paradox/labled-yellow-house-garage.webp)'
                                }}></button>
                            <button className='symbol long'>Yellow House Garage</button>
                        </div>
                        <div className='side-activity horizontal'>
                            <button className='image'
                                style={{
                                    backgroundImage: 'url(/paradox/labled-trinity-ave-2.webp)',
                                    backgroundPosition: 'left'
                                }}></button>
                            <button className='symbol long'>Trinity Ave</button>
                        </div>
                        <div className='side-activity horizontal'>
                            <button className='image'
                                style={{
                                    backgroundImage: 'url(/paradox/labled-green-house-backyard.webp)'
                                    , backgroundPosition: 'left'
                                }}
                                onClick={() => setCorruptedWall('green')}></button>
                            <button className='symbol long'>Green House Backyard</button>
                        </div>
                    </div>
                    <li>Use the Ramp to Jump over the Fence and Blow up the Door</li>
                    <img className='big-image'
                        src='/paradox/labled-rcxd.webp'
                        alt='Labled rcxd'
                        decoding='async'
                        loading='lazy'/>
                    <li>Travel to Trinity Ave</li>
                    <img className='big-image'
                        src='/paradox/labled-trinity-ave-1.webp'
                        alt='Labled trinity ave 1'
                        decoding='async'
                        loading='lazy'/>
                    <li>Grab the Chalk</li>
                    <li>Travel to Yellow House Backyard</li>
                    <img className='big-image'
                        src='/paradox/labled-yellow-house-backyard.webp'
                        alt='Labled yellow house backyard'
                        decoding='async'
                        loading='lazy'/>
                    <li>Place Swing Seat</li>
                    <li>Grab The Stock</li>
                    {(corruptedWall === '')
                        ? <></>
                        : <div className='codes'>
                            <div className='side-activity horizontal'>
                                <button className={`image corrupted-wall-${corruptedWall}`}></button>
                                <button className='symbol long'>{mapCorruptedWall[corruptedWall].name}</button>
                            </div>
                        </div>}
                    <li>Grab The Hammer</li>
                    <div className='map-container'>
                        <img className='map'
                            src='/paradox/map-mannequin.webp'
                            alt='Map mannequin'
                            decoding='async'
                            loading='lazy'/>
                        <div className='map-buttons'>
                            <button className={`map-button-${(mannequin === -1) ? 0 : mannequin} active`}></button>
                        </div>
                    </div>
                    <li>Travel to Spawn</li>
                    <img className='big-image'
                        src='/paradox/labled-spawn.webp'
                        alt='Labled spawn'
                        decoding='async'
                        loading='lazy'/>
                    <li>Go in the Truck</li>
                    <li>Craft Wonder Weapon</li>
                </ol>
            </div>
            {/* Torture */}
            <div>
                <div className='title'>
                    <span>Torture</span>
                </div>
                <ol>
                    <li>Travel to Yellow House Garage</li>
                    <img className='big-image'
                        src='/paradox/labled-yellow-house-garage.webp'
                        alt='Labled spawn'
                        decoding='async'
                        loading='lazy'/>
                    <li>Interact with Red Tool Box</li>
                    <li>Grab Seeds</li>
                    <li>Find Headphones</li>
                    <div className='codes wrap'>
                        <div className='side-activity horizontal'>
                            <button className='image headphones-yellow'></button>
                            <button className='symbol long'>Yellow House Backyard</button>
                        </div>
                        <div className='side-activity horizontal'>
                            <button className='image headphones-green'></button>
                            <button className='symbol long'>Green House Upstairs</button>
                        </div>
                        <div className='side-activity horizontal'>
                            <button className='image headphones-spawn'></button>
                            <button className='symbol long'>Spawn</button>
                        </div>
                    </div>
                    <li>Find Tortured Zombie
                        <ul>
                            <li>Green House Backyard</li>
                            <li>Yellow House Backyard</li>
                            <li>Trinity Ave</li>
                        </ul>
                    </li>
                    <li>Bring and Kill Tortured Zombie at Truck</li>
                    <li>Travel to Green House Backyard</li>
                    <li>Use Brain Rot on Piano Teacher</li>
                    <li>Wait for Piano Teacher to go to the Piano</li>
                    <img className='big-image'
                        src='/paradox/labled-green-house.webp'
                        alt='Labled green house'
                        decoding='async'
                        loading='lazy'/>
                    <li>Teleport to Past</li>
                    <li>Travel to Trinity Ave</li>
                    <li>Plant Seeds</li>
                    <li>Get Kills with Wonder Weapon</li>
                    <li>Teleport to Future</li>
                    <li>Travel to Trinity Ave</li>
                    <img className='big-image'
                        src='/paradox/labled-trinity-ave-1.webp'
                        alt='Labled trinity ave 1'
                        decoding='async'
                        loading='lazy'/>
                    <li>Tomahawk the Tree 3 times</li>
                    <li>Grab Firewood</li>
                    <li>Shoot the top of the Speaker Pole</li>
                    <li>Activate Wisp Tea</li>
                    <li>Grab Goggles</li>
                    <li><span className='note-tortured-zombie'>DO TORTURED ZOMBIE IF YOU SEE ONE</span></li>
                </ol>
            </div>
        </section>
    );
};

export default memo(Paradox);