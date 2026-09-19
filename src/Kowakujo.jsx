import { memo, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { maskWoman, maskRed, maskHorn, maskHair, maskOni, ichi, ni, san, yon } from './Symbols.jsx';

const locationsMystery = [
    'Spawn',
    'Stables',
    'Tea Garden',
    'Flower Garden',
    'Kitchens',
    'Courtyard',
    'Storage Rooms Inside',
    'Storage Rooms Roof',
    'Onsen',
];
const locationsFissure = [
    'Flower Garden',
    'Training Area',
    'Stables',
    'Kitchens',
];
const mapMasks = {
    woman: maskWoman,
    red: maskRed,
    horn: maskHorn,
    hair: maskHair,
    oni: maskOni,
};
const mapNumbers = {
    ichi: ichi,
    ni: ni,
    san: san,
    yon: yon,
};

const Kowakujo = () => {
    const [isSideOpen, setIsSideOpen] = useState(false);
    const [hasShard, setHasShard] = useState(false);
    const [locations, setLocations] = useState([...locationsMystery]);
    const [locationMystery, setLocationMystery] = useState('');
    const [locationPaw, setLocationPaw] = useState('');
    const [isBagCooked, setIsBagCooked] = useState(false);
    const [confirmedDead, setConfirmedDead] = useState('');
    const [selectedMasks, setSelectedMasks] = useState([]);
    const [locationAccomplice, setLocationAccomplice] = useState('');
    const [codeClock, setCodeClock] = useState([]);
    const [currentNumbers, setCurrentNumbers] = useState(['ichi', 'ni', 'san', 'yon']);
    const [locationNumber, setLocationNumber] = useState({
        courtyard: 0,
        stables: 0,
        spawn: 0,
        garden: 0,
    });
    const [flagNumbers, setFlagNumbers] = useState([]);

    const refSideActivities = useRef(null);

    const removeLocation = (location) => {
        setLocations((prev) => {
            return prev.filter((item) => item !== location);
        });
    };

    const handleLocationMystery = (location) => {
        setLocationMystery(location);
    };

    const handleLocationPaw = (location) => {
        setLocationPaw(location);
    };

    const handleSelectMask = (mask) => {
        setSelectedMasks([...selectedMasks, mask]);
    };

    const handleLocationAccomplice = (location) => {
        setLocationAccomplice(location);
    };

    const handlecodeClock = (hour) => {
        setCodeClock([...codeClock, hour]);
    };

    const handleLocationNumber = (location, index, number) => {
        setCurrentNumbers((prev) => {
            return prev.filter((item) => item !== number);
        });
        setLocationNumber((prev) => {
            return {
                ...prev,
                [location]: codeClock[index - 1],
            }
        });
    };

    const handleFlagNumbers = (number) => {
        setFlagNumbers([...flagNumbers, number]);
    };

    return (
        <section className='page'>
            {(hasShard && isBagCooked && (locationMystery !== ''))
                ? <></>
                : <Draggable nodeRef={refSideActivities}
                    cancel='button, .collapsible'>
                    <div ref={refSideActivities}
                        className={`side-activities ${(isSideOpen) ? 'open' : ''}`}>
                        <span className='collapsible'
                            onClick={() => setIsSideOpen(!isSideOpen)}>
                            Side Activities
                        </span>
                        <ul className='side-activity-list'>
                            {(!hasShard)
                                ? <li>
                                    <div className='side-activity'>
                                        <span>Stables: Explosive when Lava is hard</span>
                                        <button className='symbol'
                                            onClick={() => setHasShard(true)}>Done</button>
                                    </div>
                                </li>
                                : <></>}
                            {(locationMystery === '')
                                ? <li>
                                    <div className='side-activity horizontal'>
                                        <span>Where is the Mystery Box Coin?</span>
                                        <div className='side-activity horizontal'>
                                            {locations.map((location) => {
                                                return <div className='side-activity'
                                                    key={`location-mystery-box-coin-${location}`}>
                                                    <button className='symbol long'
                                                        style={{ flexWrap: 'wrap' }}
                                                        onClick={() => handleLocationMystery(location)}>
                                                        {location}
                                                    </button>
                                                    <button className='symbol'
                                                        onClick={() => removeLocation(location)}>X</button>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </li>
                                : <></>}
                            {(locationAccomplice === '')
                                ? <li>
                                    <div className='side-activity horizontal'>
                                        <span>Where is the Accomplice?</span>
                                        <div className='side-activity horizontal'>
                                            <button className='symbol'
                                                onClick={() => handleLocationAccomplice('spawn')}>Spawn</button>
                                            <button className='symbol'
                                                onClick={() => handleLocationAccomplice('garden')}>Garden</button>
                                            <button className='symbol'
                                                onClick={() => handleLocationAccomplice('courtyard')}>Courtyard</button>
                                        </div>
                                    </div>
                                </li>
                                : <></>}
                            {(!isBagCooked)
                                ? <li>
                                    <div className='side-activity'>
                                        <span>Is the bag cooked?</span>
                                        <button className='symbol'
                                            onClick={() => setIsBagCooked(true)}>Yes</button>
                                    </div>
                                </li>
                                : <></>}
                        </ul>
                    </div>
                </Draggable>}
            {/* Starting Room */}
            <div>
                <div className='title'>
                    <span>Starting Room</span>
                    <div className='note'>
                    </div>
                </div>
                <ul>
                    <li>
                        Look for
                        <span className='impact'> Impact </span>
                        —
                        <span className='semtex'> Semtex </span>
                        —
                        <span className='c4'> C4 </span>
                    </li>
                </ul>
                <ol>
                    <li>Grab Carrot 1/4</li>
                    <li>Travel to Staging Area</li>
                    <ul>
                        <li>Check for Bell</li>
                    </ul>
                </ol>
            </div>
            {/* Capture the Flag 1/2 */}
            <div>
                <div className='title'>
                    <span>Capture the Flag 1/2</span>
                </div>
                <ol>
                    <li>Travel to Stables</li>
                    <ul>
                        <li>Check for Bell</li>
                    </ul>
                    <li>
                        <span className='note-rocks'>
                            Shoot floating rocks when you pass by them!
                        </span>
                    </li>
                    <li>Travel to Training Area</li>
                    <li>Check for Bell</li>
                    <li>Capture the Flag</li>
                    <li>Travel back to Spawn</li>
                    <li>Travel to Gate House</li>
                    <ul>
                        <li>Check for Cat Statue</li>
                    </ul>
                </ol>
            </div>
            {/* Capture the Flag 2/2 */}
            <div>
                <div className='title'>
                    <span>Capture the Flag 2/2</span>
                    <div className='note'>
                        <span>[</span>
                        <div className='subnote'>
                            <span>Garden</span>
                            <span className='normal'>= Flower Garden</span>
                        </div>
                        <span>]</span>
                    </div>
                </div>
                <ol>
                    <li>Travel to Garden</li>
                    <li>Grab Flower</li>
                    <li>Grab Carrot 2/4</li>
                    <li>
                        <span className='note-rocks'>
                            Shoot floating rocks when you pass by them!
                        </span>
                    </li>
                    <li>Travel to Kitchens</li>
                    <li>Check for Cat Statue</li>
                    <li>Grab Upgrade Cat Bomb 1/3</li>
                    <li>Hit Apple</li>
                    <li>Grab Carrot 3/4</li>
                    <li>Grab Upgrade Cat Bomb 2/3</li>
                    <li>Capture the Flag</li>
                    <li>Travel to Courtyard</li>
                </ol>
            </div>
            {/* Power */}
            <div>
                <div className='title'>
                    <span>Power</span>
                    <div className='note'>
                        <span>[</span>
                        <div className='subnote'>
                            <span>PHD</span>
                            <span className='normal'>= PHD Flopper</span>
                        </div>
                        <div className='subnote'>
                            <span>PAP</span>
                            <span className='normal'>= Pack-a-Punch</span>
                        </div>
                        <span>]</span>
                    </div>
                </div>
                <ol>
                    <li>Travel to Storage Rooms</li>
                    <li>Buy PHD</li>
                    <li>Travel to Workshop</li>
                    <li>Grab Doll</li>
                    <li>Grab Carrot 4/4</li>
                    <li>Travel to War Room</li>
                    <li>Craft Cat Bomb</li>
                    <li>Grab Ceramic</li>
                    <li>Grab Paper</li>
                    <li>Turn on PAP</li>
                    <li>Travel to Tenshu Entrance</li>
                    <li>Grab Upgrade Cat Bomb 3/3</li>
                    <li>Upgrade Cat Bomb</li>
                </ol>
            </div>
            {/* Animal Violence */}
            <div>
                <div className='title'>
                    <span>Animal Violence</span>
                </div>
                <ol>
                    <li>Get Cage</li>
                    <li>Throw Cage in Lava</li>
                    <li>Look for Fissure</li>
                    {(locationPaw === '')
                        ? <ul>
                            <li>Where is the Fissure?</li>
                            <div className='codes'>
                                {locationsFissure.map((location) => {
                                    return <button className='symbol long'
                                        onClick={() => handleLocationPaw(location)}
                                        key={`location-fissure-${location}`}>
                                        {location}
                                    </button>
                                })}
                            </div>
                        </ul>
                        : <></>}
                    <li>Buy Depth Perception</li>
                    <li>Spill Blood on Paw Prints</li>
                    <div className='codes'>
                        <button className='symbol long'>{locationPaw}</button>
                    </div>
                    <li>Kill Abomination</li>
                    <li>Ping Cat</li>
                    <li>Sneakily Grab Cat</li>
                    <li>Travel to War Room</li>
                    <li>Hit Cat Cube</li>
                    <li>Grab Wonder Weapon</li>
                </ol>
            </div>
            {/* Light the Way */}
            <div>
                <div className='title'>
                    <span>Light the Way</span>
                </div>
                <ol>
                    <li>Light Lanterns</li>
                    <ul>
                        <li>Get Bag</li>
                    </ul>
                    <li>Travel to War Room</li>
                    <li className='note-dead'>HE'S DEAD</li>
                    {(confirmedDead === '')
                        ? <div className='codes'>
                            <button className='symbol'
                                onClick={() => setConfirmedDead('(˶ㅠ︿ㅠ)')}>Uh oh</button>
                            <button className='symbol'
                                onClick={() => setConfirmedDead('?')}>Yippee!</button>
                        </div>
                        : <span>{confirmedDead}</span>}
                </ol>
            </div>
            {/* Mask */}
            <div>
                <div className='title'>
                    <span>Mask</span>
                </div>
                <ol>
                    <li>Kite to the right</li>
                    <li>Grab Mask</li>
                    <li>Kite back</li>
                    <li>Go to Storage Rooms</li>
                    <li>Place Mask</li>
                    <li>Begin Game</li>
                    <li>What masks?</li>
                    {(selectedMasks.length >= 12)
                        ? <></>
                        : <div className='codes'>
                            <button className='symbol'
                                onClick={() => handleSelectMask('horn')}>
                                {maskHorn}
                            </button>
                            <button className='symbol'
                                onClick={() => handleSelectMask('red')}>
                                {maskRed}
                            </button>
                            <button className='symbol'
                                onClick={() => handleSelectMask('woman')}>
                                {maskWoman}
                            </button>
                            <button className='symbol'
                                onClick={() => handleSelectMask('hair')}>
                                {maskHair}
                            </button>
                            <button className='symbol'
                                onClick={() => handleSelectMask('oni')}>
                                {maskOni}
                            </button>
                        </div>}
                    <li>Round 1</li>
                    <div className='codes'>
                        {selectedMasks.slice(0, 3).map((mask) => {
                            return <button className='symbol'
                                key={`selected-masks-first-${mask}`}>
                                {mapMasks[mask]}
                            </button>
                        })}
                    </div>
                    <li>Round 2</li>
                    <div className='codes'>
                        {selectedMasks.slice(3, 7).map((mask) => {
                            return <button className='symbol'
                                key={`selected-masks-first-${mask}`}>
                                {mapMasks[mask]}
                            </button>
                        })}
                    </div>
                    <li>Round 3</li>
                    <div className='codes'>
                        {selectedMasks.slice(7, 12).map((mask) => {
                            return <button className='symbol'
                                key={`selected-masks-first-${mask}`}>
                                {mapMasks[mask]}
                            </button>
                        })}
                    </div>
                    <li>Interact with Blue Mask</li>
                </ol>
            </div>
            {/* Suspect */}
            <div>
                <div className='title'>
                    <span>Suspect</span>
                </div>
                <ol>
                    <li>Get Suspect Items [3]</li>
                    <li>Put on Evidence Table</li>
                </ol>
            </div>
            {/* Accomplice */}
            <div>
                <div className='title'>
                    <span>Accomplice</span>
                    <div className='note'>
                        <span>[</span>
                        <div className='subnote'>
                            <span>Garden</span>
                            <span className='normal'>= Flower Garden</span>
                        </div>
                        <span>]</span>
                    </div>
                </div>
                <ol>
                    <li>Get Coin on Mystery Box</li>
                    <ul>
                        <li>Throw Cat Bomb first</li>
                        <div className='codes'>
                            <button className='symbol'>
                                {locationMystery}
                            </button>
                        </div>
                    </ul>
                    <li>Travel to Spawn</li>
                    <li>Interact with Coin Purse</li>
                    <li>Get a Water Bucket at Onsen or Cat Cafe</li>
                    <li>Carefully Travel to Garden</li>
                    <li>Water the Plants [3]</li>
                    <li>Kill Gardener</li>
                    <ul>
                        <li>Shoot glowing plants</li>
                    </ul>
                    <li>Grab Shears</li>
                    <li>Travel to Kitchens</li>
                    <li>Activate Apple Zombie</li>
                    <li>Bring to Staging Area</li>
                    <li>Kill in front of Window next to Lantern</li>
                    <li>Kill Merchant</li>
                    <li>Grab Abacus</li>
                    <li>Travel to Training Area</li>
                    <li>Throw 3 Decoys at Window</li>
                    <li>Kill Noble</li>
                    <li>Grab Hat</li>
                    <li>Put on Evidence Table</li>
                </ol>
            </div>
            {/* Poison */}
            <div>
                <div className='title'>
                    <span>Poison</span>
                </div>
                <ol>
                    <li>Travel to Storage Rooms</li>
                    <li>Melee scrolls</li>
                    <li>Solve Lights Out</li>
                    <ul>
                        <li>Chase the Lights</li>
                        <div className='codes'>
                            <button className='symbol long'>100</button>
                            <button className='symbol long'>010</button>
                            <button className='symbol long'>001</button>
                            <button className='symbol long'>111</button>
                        </div>
                        <div className='codes'>
                            <button className='symbol long'>1267</button>
                            <button className='symbol long'>123</button>
                            <button className='symbol long'>2347</button>
                            <button className='symbol long'>245</button>
                        </div>
                    </ul>
                    <li>Grab Pestle and Note</li>
                    <li>Travel to Kitchens</li>
                    <li>Put Pestle in Bowl</li>
                    <li>Get Toxic kills</li>
                    <li>Interact with Blue Bowl</li>
                    <li>Get Plum</li>
                    <li>Get Pufferfish</li>
                    {(!isBagCooked)
                        ? <>
                            <li className='parent-note-bag'>
                                <span className='note-bag'>
                                    !!!!!! BAG IS NOT COOKED !!!!!!
                                </span>
                                {[...Array(10).keys()].map((number) => {
                                    return <span className='note-bag'
                                        key={`cook-the-bag-${number}`}>
                                        !!!!!!!!!! COOK THE BAG !!!!!!!!!!
                                    </span>
                                })}
                                <span className='note-bag'>
                                    !!!!!! BAG IS NOT COOKED !!!!!!
                                </span>
                                <div className='codes'>
                                    <button className='symbol'
                                        style={{ width: '21.8rem' }}
                                        onClick={() => setIsBagCooked(true)}>
                                        OKAY IT'S DONE
                                    </button>
                                </div>
                            </li>
                        </>
                        : <></>}
                    <li>Melee Cherry Blossom Tree</li>
                    <li>Travel to Tenshu Entrance</li>
                    <li>Place Flower and Ash</li>
                    <li>Twirl.</li>
                    <li>Put on Evidence Table</li>
                </ol>
            </div>
            {/* Location */}
            <div>
                <div className='title'>
                    <span>Location</span>
                </div>
                <ol>
                    <li>Pick up Ceramic</li>
                    <li>Travel to Tea Garden</li>
                    <li>Craft Bowl</li>
                    <li>Interact with Blue Bowl</li>
                    <li>Travel to Cat Cafe</li>
                    <li>Place on Serving Tray</li>
                    <li>Grab Whisk and Bowl</li>
                    <li>Travel to Collapsing Study</li>
                    <li>Place on Serving Tray</li>
                    <li>Grab Brush and Bowl</li>
                    <li>Travel to War Room</li>
                    <li>Place on Serving Tray</li>
                    <li>Kill Dog</li>
                    <li>Grab Horse</li>
                    <li>Put on Evidence Table</li>
                </ol>
            </div>
            {/* Motive */}
            <div>
                <div className='title'>
                    <span>Motive</span>
                </div>
                <ol>
                    {(!hasShard)
                        ? <div className='parent-note-bag'>
                            <span className='note-bag'>
                                !!! MISSING SHARD !!!!!!!!!!!!!!! MISSING SHARD !!!
                            </span>
                            {[...Array(10).keys()].map((number) => {
                                return  <span className='note-bag'
                                    key={`missing-ceramic-${number}`}>
                                    !!! EXPLOSIVE WHEN LAVA IS HARD AT STABLES !!!
                                </span>
                            })}
                            <span className='note-bag'>
                                !!! MISSING SHARD !!!!!!!!!!!!!!! MISSING SHARD !!!
                            </span>
                            <div className='codes'>
                                <button className='symbol'
                                    style={{ width: '40rem' }}
                                    onClick={() => setHasShard(true)}>
                                    OKAY IT'S DONE
                                </button>
                            </div>
                        </div>
                        : <></>}
                    <li>Travel to Storage Rooms</li>
                    <li>Interact with Clock</li>
                    {(codeClock.length >= 4)
                        ? <></>
                        : <ul>
                            <li>What are the hours?</li>
                            <div className='codes'>
                                {[...Array(6).keys()].map((number) => {
                                    return <button className='symbol'
                                        key={`clock-hours-${number}`}
                                        onClick={() => handlecodeClock(number + 1)}>
                                        {number + 1}
                                    </button>
                                })}
                            </div>
                        </ul>}
                    <li>Travel to Courtyard</li>
                    {(locationNumber.courtyard === 0)
                        ? <ul>
                            <li>What symbol?</li>
                            <div className='codes'>
                                {currentNumbers.map((number, index) => {
                                    return <button className='symbols'
                                        key={`courtyard-symbol-${number}`}
                                        onClick={() => handleLocationNumber('courtyard', index + 1, number)}>
                                        {mapNumbers[number]}
                                    </button>
                                })}
                            </div>
                        </ul>
                        : <></>}
                    <li>Travel to Stables</li>
                    {(locationNumber.stables === 0)
                        ? <ul>
                            <li>What symbol?</li>
                            <div className='codes'>
                                {currentNumbers.map((number, index) => {
                                    return <button className='symbols'
                                        key={`courtyard-symbol-${number}`}
                                        onClick={() => handleLocationNumber('stables', index + 1, number)}>
                                        {mapNumbers[number]}
                                    </button>
                                })}
                            </div>
                        </ul>
                        : <></>}
                    <li>Travel to Spawn</li>
                    {(locationNumber.spawn === 0)
                        ? <ul>
                            <li>What symbol?</li>
                            <div className='codes'>
                                {currentNumbers.map((number, index) => {
                                    return <button className='symbols'
                                        key={`courtyard-symbol-${number}`}
                                        onClick={() => handleLocationNumber('spawn', index + 1, number)}>
                                        {mapNumbers[number]}
                                    </button>
                                })}
                            </div>
                        </ul>
                        : <></>}
                    <li>Travel to Garden</li>
                    {(locationNumber.garden === 0)
                        ? <ul>
                            <li>What symbol?</li>
                            <div className='codes'>
                                {currentNumbers.map((number, index) => {
                                    return <button className='symbols'
                                        key={`courtyard-symbol-${number}`}
                                        onClick={() => handleLocationNumber('garden', index + 1, number)}>
                                        {mapNumbers[number]}
                                    </button>
                                })}
                            </div>
                        </ul>
                        : <></>}
                    <li>Do Assault Wave</li>
                    <li>Travel to Staging Area</li>
                    {(flagNumbers.length >= 6)
                        ? <></>
                        : <ul>
                            <li>What flag numbers?</li>
                            <div className='codes'>
                                {[...Array(6).keys()].map((number) => {
                                    return <button className='symbol'
                                        key={`flag-numbers-${number}`}
                                        onClick={() => handleFlagNumbers(number + 1)}>
                                        {number + 1}
                                    </button>
                                })}
                            </div>
                        </ul>}
                </ol>
            </div>
        </section>
    );
};

export default memo(Kowakujo);