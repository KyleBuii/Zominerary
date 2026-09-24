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
    1: ichi,
    2: ni,
    3: san,
    4: yon,
};
const locationAccompliceItem = {
    spawn: {
        occupation: 'merchant',
        item: 'abacus',
        not: 'flower',
    },
    garden: {
        occupation: 'noble',
        item: 'hat',
        not: 'plum',
    },
    courtyard: {
        occupation: 'garderner',
        item: 'shears',
        not: 'pufferfish',
    },
};
const lastWordItem = {
    plant: ['plum', 'flower'],
    emesis: ['plum', 'pufferfish'],
    paralysis: ['flower', 'pufferfish'],
};
const posterWordItem = {
    mountain: 'horse',
    bird: 'brush',
    fish: 'whisk',
};
const zodiac = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'];

const Kowakujo = ({ isKnower }) => {
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
    const [currentNumbers, setCurrentNumbers] = useState([1, 2, 3, 4]);
    const [locationNumber, setLocationNumber] = useState({
        courtyard: 0,
        stables: 0,
        spawn: 0,
        garden: 0,
    });
    const [flagNumbers, setFlagNumbers] = useState([]);
    const [codeFlag, setCodeFlag] = useState([]);
    const [lastWord, setLastWord] = useState('');
    const [posterWord, setPosterWord] = useState('');
    const [symptomHours, setSymptonHours] = useState(0);
    const [zodiacAnimal, setZodiacAnimal] = useState('');

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

    const handleLocationNumber = (location, number) => {
        setCurrentNumbers((prev) => {
            return prev.filter((item) => item !== number);
        });
        setLocationNumber((prev) => {
            return {
                ...prev,
                [location]: codeClock[number - 1],
            }
        });
    };

    const handleFlagNumbers = (number) => {
        setFlagNumbers([...flagNumbers, number]);

        if (flagNumbers.length + 1 === 6) {
            const target = [...Object.values(locationNumber)];
            solveFlags(target, [...flagNumbers, number]);
        };
    };

    const solveFlags = (targetNumbers, numbers) => {
        const fulfillTargets = [];
        const currentNumbers = [...numbers];

        const findFulfillments = (fulfillNumbers, fulfillTarget) => {
            const results = [];

            if (fulfillNumbers.includes(fulfillTarget)) results.push([fulfillTarget]);

            for (let i = 0; i < fulfillNumbers.length; i++) {
                for (let j = i + 1; j < fulfillNumbers.length; j++) {
                    if (fulfillNumbers[i] + fulfillNumbers[j] === fulfillTarget) {
                        results.push([fulfillNumbers[i], fulfillNumbers[j]]);
                    };
                };
            };

            return results;
        };

        for (let num of targetNumbers) {
            const fulfilled = findFulfillments(currentNumbers, num);
            fulfillTargets.push(fulfilled);
        };

        const solveTargets = (targets, targetNumbers) => {
            const result = [];

            const solve = (targetIndex, availableNumbers) => {
                if (targetIndex === targets.length) return true;

                const combinations = targets[targetIndex];

                for (const combination of combinations) {
                    const remainingNumbers = [...availableNumbers];
                    let valid = true;

                    for (const number of combination) {
                        const index = remainingNumbers.indexOf(number);

                        if (index === -1) {
                            valid = false;
                            break;
                        };

                        remainingNumbers.splice(index, 1);
                    };

                    if (!valid) continue;

                    result[targetIndex] = combination;

                    if (solve(targetIndex + 1, remainingNumbers)) return true;
                };

                delete result[targetIndex];

                return false;
            };

            solve(0, targetNumbers);

            return result;
        };

        setCodeFlag(solveTargets(fulfillTargets, currentNumbers));
    };

    const handleSymptomHours = (hour) => {
        const zodiacElement = document.querySelector(`.zodiac-${zodiacAnimal}`);
        const nextElement = zodiacElement.parentElement.children[
            [...zodiacElement.parentElement.children].indexOf(zodiacElement) + hour
        ];
        nextElement.classList.add('dot');

        setSymptonHours(hour);
    };

    return (
        <section className='page'>
            {(isKnower)
                ? <>
                    <div className='title'>
                        <span>Paw</span>
                    </div>
                    {(locationPaw === '')
                        ? <div className='codes wrap'>
                            {locationsFissure.map((location) => {
                                return <button className='symbol long'
                                    onClick={() => handleLocationPaw(location)}
                                    key={`location-fissure-${location}`}>
                                    {location}
                                </button>
                            })}
                        </div>
                        : <></>}
                    <div className='codes'>
                        <button className='symbol long'>{locationPaw}</button>
                    </div>
                    <div className='title'>
                        <span>Mask</span>
                    </div>
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
                    <div>
                        <div className='codes'>
                            {selectedMasks.slice(0, 3).map((mask, maskIndex) => {
                                return <button className='symbol'
                                    key={`selected-masks-first-${mask}-${maskIndex}`}>
                                    {mapMasks[mask]}
                                </button>
                            })}
                        </div>
                        <div className='codes'>
                            {selectedMasks.slice(3, 7).map((mask, maskIndex) => {
                                return <button className='symbol'
                                    key={`selected-masks-second-${mask}-${maskIndex}`}>
                                    {mapMasks[mask]}
                                </button>
                            })}
                        </div>
                        <div className='codes'>
                            {selectedMasks.slice(7, 12).map((mask, maskIndex) => {
                                return <button className='symbol'
                                    key={`selected-masks-third-${mask}-${maskIndex}`}>
                                    {mapMasks[mask]}
                                </button>
                            })}
                        </div>
                    </div>
                    <div className='title'>
                        <span>Mystery Box</span>
                    </div>
                    {(locationMystery === '')
                        ? <div className='codes wrap'>
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
                        : <></>}
                    <div className='codes'>
                        <button className='symbol'>
                            {locationMystery}
                        </button>
                    </div>
                    {(locationAccomplice === '')
                        ? <>
                            <div className='title'>
                                <span>Accomplice</span>
                            </div>
                            <div className='codes'>
                                <button className='symbol long'
                                    onClick={() => handleLocationAccomplice('spawn')}>Spawn</button>
                                <button className='symbol long'
                                    onClick={() => handleLocationAccomplice('garden')}>Garden</button>
                                <button className='symbol long'
                                    onClick={() => handleLocationAccomplice('courtyard')}>Courtyard</button>
                            </div>
                        </>
                        : <></>}
                    <div className='title'>
                        <span>Lights Out</span>
                    </div>
                    <div>
                        <div className='codes wrap'>
                            <button className='symbol long'>100</button>
                            <button className='symbol long'>010</button>
                            <button className='symbol long'>001</button>
                            <button className='symbol long'>111</button>
                        </div>
                        <div className='codes wrap'>
                            <button className='symbol long'>1267</button>
                            <button className='symbol long'>123</button>
                            <button className='symbol long'>2347</button>
                            <button className='symbol long'>245</button>
                        </div>
                    </div>
                    {(codeClock.length >= 4)
                        ? <></>
                        : <>
                            <div className='title'>
                                <span>Clock</span>
                            </div>
                            <div className='codes wrap'>
                                {[...Array(6).keys()].map((number) => {
                                    return <button className='symbol'
                                        key={`clock-hours-${number}`}
                                        onClick={() => handlecodeClock(number + 1)}>
                                        {number + 1}
                                    </button>
                                })}
                            </div>
                        </>}
                    <div>
                        {(locationNumber.courtyard === 0)
                            ? <div>
                                <span>Courtyard:</span>
                                <div className='codes'>
                                    {currentNumbers.map((number) => {
                                        return <button className='symbols'
                                            key={`courtyard-symbol-${number}`}
                                            onClick={() => handleLocationNumber('courtyard', number)}>
                                            {mapNumbers[number]}
                                        </button>
                                    })}
                                </div>
                            </div>
                            : <></>}
                        {(locationNumber.stables === 0)
                            ? <div>
                                <span>Stables:</span>
                                <div className='codes'>
                                    {currentNumbers.map((number) => {
                                        return <button className='symbols'
                                            key={`stables-symbol-${number}`}
                                            onClick={() => handleLocationNumber('stables', number)}>
                                            {mapNumbers[number]}
                                        </button>
                                    })}
                                </div>
                            </div>
                            : <></>}
                        {(locationNumber.spawn === 0)
                            ? <div>
                                <span>Spawn:</span>
                                <div className='codes'>
                                    {currentNumbers.map((number) => {
                                        return <button className='symbols'
                                            key={`spawn-symbol-${number}`}
                                            onClick={() => handleLocationNumber('spawn', number)}>
                                            {mapNumbers[number]}
                                        </button>
                                    })}
                                </div>
                            </div>
                            : <></>}
                        {(locationNumber.garden === 0)
                            ? <div>
                                <span>Garden:</span>
                                <div className='codes'>
                                    {currentNumbers.map((number) => {
                                        return <button className='symbols'
                                            key={`garden-symbol-${number}`}
                                            onClick={() => handleLocationNumber('garden', number)}>
                                            {mapNumbers[number]}
                                        </button>
                                    })}
                                </div>
                            </div>
                            : <></>}
                    </div>
                    <div className='title'>
                        <span>Flag</span>
                    </div>
                    {(flagNumbers.length >= 6)
                        ? <></>
                        : <div className='codes wrap'>
                            {[...Array(6).keys()].map((number) => {
                                return <button className='symbol'
                                    key={`flag-numbers-${number}`}
                                    onClick={() => handleFlagNumbers(number + 1)}>
                                    {number + 1}
                                </button>
                            })}
                        </div>}
                    <div className='codes wrap'>
                        {Object.entries(locationNumber).map(([location, number], locationIndex) => {
                            return <div className=''
                                key={`input-flags-location-${location}`}>
                                <button className='symbol'
                                    style={{ width: '7rem' }}>
                                    {location.replace(/^./, (char) => char.toUpperCase())}
                                </button>
                                <div className='codes'>
                                    {codeFlag[locationIndex]?.map((flag, flagIndex) => {
                                        return <button className='symbol'
                                            key={`code-flags-flag-${flagIndex}`}>
                                            {flag}
                                        </button>
                                    })}
                                </div>
                            </div>
                        })}
                    </div>
                    {(zodiacAnimal === '') || (lastWord === '') || (symptomHours === 0)
                        ? <>
                            <div className='title'>
                                <span>Note</span>
                            </div>
                            {(zodiacAnimal === '')
                                ? <div className='codes wrap'>
                                    {(zodiac.map((animal) => {
                                        return <button className='symbol long'
                                            onClick={() => setZodiacAnimal(animal)}
                                            key={`zodiac-${animal}`}>
                                            {animal.replace(/^./, (char) => char.toUpperCase())}
                                        </button>
                                    }))}
                                </div>
                                : <></>}
                            {(lastWord === '')
                                ? <div className='codes'>
                                    <button className='symbol long'
                                        onClick={() => setLastWord('plant')}>Plant</button>
                                    <button className='symbol long'
                                        onClick={() => setLastWord('emesis')}>Emesis</button>
                                    <button className='symbol long'
                                        onClick={() => setLastWord('paralysis')}>Paralysis</button>
                                </div>
                                : <></>}
                            {(symptomHours === 0)
                                ? <div>
                                    <span>Hours:</span>
                                    <div className='codes'>
                                        <button className='symbol'
                                            onClick={() => handleSymptomHours(2)}>2</button>
                                        <button className='symbol'
                                            onClick={() => handleSymptomHours(3)}>3</button>
                                        <button className='symbol'
                                            onClick={() => handleSymptomHours(4)}>4</button>
                                    </div>
                                </div>
                                : <></>}
                        </>
                        : <></>}
                    {(posterWord === '')
                        ? <>
                            <div className='title'>
                                <span>Poster</span>
                            </div>
                            {(posterWord === '')
                                ? <div className='codes'>
                                    <button className='symbol long'
                                        onClick={() => setPosterWord('mountain')}>Mountain</button>
                                    <button className='symbol long'
                                        onClick={() => setPosterWord('bird')}>Bird</button>
                                    <button className='symbol long'
                                        onClick={() => setPosterWord('fish')}>Fish</button>
                                </div>
                                : <></>}
                        </>
                        : <></>}
                    <div className='title'>
                        <span>Solve</span>
                    </div>
                    <div>
                        <div className='big-image poster'></div>
                        <div className='codes image'>
                            <button className='symbol'>Comb</button>
                            <button className='symbol'>{locationAccompliceItem[locationAccomplice]?.item.replace(/^./, (char) => char.toUpperCase())}</button>
                            <button className='symbol'>{lastWordItem[lastWord]?.filter((item) => item === locationAccompliceItem[locationAccomplice]?.not)[0]?.replace(/^./, (char) => char.toUpperCase())}</button>
                            <button className='symbol'>{posterWordItem[posterWord]?.replace(/^./, (char) => char.toUpperCase())}</button>
                            <button className='symbol'>Medallion</button>
                        </div>
                    </div>
                    <div className='big-image zodiac'>
                        <span className='zodiac-rat'></span>
                        <span className='zodiac-ox'></span>
                        <span className='zodiac-tiger'></span>
                        <span className='zodiac-rabbit'></span>
                        <span className='zodiac-dragon'></span>
                        <span className='zodiac-snake'></span>
                        <span className='zodiac-horse'></span>
                        <span className='zodiac-goat'></span>
                        <span className='zodiac-monkey'></span>
                        <span className='zodiac-rooster'></span>
                        <span className='zodiac-dog'></span>
                        <span className='zodiac-pig'></span>
                    </div>
                </>
                : <>
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
                                    <div className='codes wrap'>
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
                            <li>
                                Grab
                                <span className='high-value-weapon'> Wonder Weapon</span>
                            </li>
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
                                {selectedMasks.slice(0, 3).map((mask, maskIndex) => {
                                    return <button className='symbol'
                                        key={`selected-masks-first-${mask}-${maskIndex}`}>
                                        {mapMasks[mask]}
                                    </button>
                                })}
                            </div>
                            <li>Round 2</li>
                            <div className='codes'>
                                {selectedMasks.slice(3, 7).map((mask, maskIndex) => {
                                    return <button className='symbol'
                                        key={`selected-masks-second-${mask}-${maskIndex}`}>
                                        {mapMasks[mask]}
                                    </button>
                                })}
                            </div>
                            <li>Round 3</li>
                            <div className='codes'>
                                {selectedMasks.slice(7, 12).map((mask, maskIndex) => {
                                    return <button className='symbol'
                                        key={`selected-masks-third-${mask}-${maskIndex}`}>
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
                            <li>Grab a Water Bucket at Onsen or Cat Cafe</li>
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
                                <div className='codes wrap'>
                                    <button className='symbol long'>100</button>
                                    <button className='symbol long'>010</button>
                                    <button className='symbol long'>001</button>
                                    <button className='symbol long'>111</button>
                                </div>
                                <div className='codes wrap'>
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
                            <li>Grab Pufferfish</li>
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
                                    <div className='codes wrap'>
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
                                        {currentNumbers.map((number) => {
                                            return <button className='symbols'
                                                key={`courtyard-symbol-${number}`}
                                                onClick={() => handleLocationNumber('courtyard', number)}>
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
                                        {currentNumbers.map((number) => {
                                            return <button className='symbols'
                                                key={`stables-symbol-${number}`}
                                                onClick={() => handleLocationNumber('stables', number)}>
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
                                        {currentNumbers.map((number) => {
                                            return <button className='symbols'
                                                key={`spawn-symbol-${number}`}
                                                onClick={() => handleLocationNumber('spawn', number)}>
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
                                        {currentNumbers.map((number) => {
                                            return <button className='symbols'
                                                key={`garden-symbol-${number}`}
                                                onClick={() => handleLocationNumber('garden', number)}>
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
                                    <div className='codes wrap'>
                                        {[...Array(6).keys()].map((number) => {
                                            return <button className='symbol'
                                                key={`flag-numbers-${number}`}
                                                onClick={() => handleFlagNumbers(number + 1)}>
                                                {number + 1}
                                            </button>
                                        })}
                                    </div>
                                </ul>}
                            <li>Input Flags</li>
                            <div className='codes wrap'>
                                {Object.entries(locationNumber).map(([location, number], locationIndex) => {
                                    return <div className=''
                                        key={`input-flags-location-${location}`}>
                                        <button className='symbol'
                                            style={{ width: '7rem' }}>
                                            {location.replace(/^./, (char) => char.toUpperCase())}
                                        </button>
                                        <div className='codes'>
                                            {codeFlag[locationIndex]?.map((flag, flagIndex) => {
                                                return <button className='symbol'
                                                    key={`code-flags-flag-${flagIndex}`}>
                                                    {flag}
                                                </button>
                                            })}
                                        </div>
                                    </div>
                                })}
                            </div>
                            <li>Travel to Storage Rooms</li>
                            <li>Grab Medallion</li>
                            <li>Put on Evidence Table</li>
                        </ol>
                    </div>
                    {/* Solve */}
                    <div>
                        <div className='title'>
                            <span>Solve</span>
                        </div>
                        <ul>
                            {(!locationAccomplice)
                                ? <div className='parent-note-bag'>
                                    <span className='note-bag'>
                                        !!!!!!!!!!!!!!!!!!!!!! MISSING LOCATION FOR ACCOMPLICE !!!!!!!!!!!!!!!!!!!!!!
                                    </span>
                                    {[...Array(10).keys()].map((number) => {
                                        return  <span className='note-bag'
                                            key={`missing-ceramic-${number}`}>
                                            !!! USE TRAP INTERACT WITH GHOST SPAWN GARDEN COURTYARD !!!
                                        </span>
                                    })}
                                    <span className='note-bag'>
                                        !!!!!!!!!!!!!!!!!!!!!! MISSING LOCATION FOR ACCOMPLICE !!!!!!!!!!!!!!!!!!!!!!
                                    </span>
                                    <div className='codes fill'>
                                        <button className='symbol'
                                            onClick={() => handleLocationAccomplice('spawn')}>Spawn</button>
                                        <button className='symbol'
                                            onClick={() => handleLocationAccomplice('garden')}>Garden</button>
                                        <button className='symbol'
                                            onClick={() => handleLocationAccomplice('courtyard')}>Courtyard</button>
                                    </div>
                                </div>
                                : <></>}
                        </ul>
                        <ul>
                            <li>Use Left Incense if needed</li>
                        </ul>
                        <ol>
                            <li>Look at the far left note.</li>
                            <ul>
                                {(zodiacAnimal === '')
                                    ? <>
                                        <li>What is the Time of Death?</li>
                                        <div className='codes wrap'>
                                            {(zodiac.map((animal) => {
                                                return <button className='symbol long'
                                                    onClick={() => setZodiacAnimal(animal)}
                                                    key={`zodiac-${animal}`}>
                                                    {animal.replace(/^./, (char) => char.toUpperCase())}
                                                </button>
                                            }))}
                                        </div>
                                    </>
                                    : <></>}
                                {(lastWord === '')
                                    ? <>
                                        <li>What is the last word?</li>
                                        <div className='codes'>
                                            <button className='symbol long'
                                                onClick={() => setLastWord('plant')}>Plant</button>
                                            <button className='symbol long'
                                                onClick={() => setLastWord('emesis')}>Emesis</button>
                                            <button className='symbol long'
                                                onClick={() => setLastWord('paralysis')}>Paralysis</button>
                                        </div>
                                    </>
                                    : <></>}
                            </ul>
                            <li>Look at the far right note.</li>
                            {(symptomHours === 0)
                                ? <ul>
                                    <li>What are symptom hours for {lastWordItem[lastWord]?.filter((item) => item === locationAccompliceItem[locationAccomplice]?.not)[0]?.replace(/^./, (char) => char.toUpperCase())}?</li>
                                    <div className='codes'>
                                        <button className='symbol'
                                            onClick={() => handleSymptomHours(2)}>2</button>
                                        <button className='symbol'
                                            onClick={() => handleSymptomHours(3)}>3</button>
                                        <button className='symbol'
                                            onClick={() => handleSymptomHours(4)}>4</button>
                                    </div>
                                </ul>
                                : <></>}
                            {(posterWord === '')
                                ? <>
                                    <li>What is on the poster?</li>
                                    <div className='codes'>
                                        <button className='symbol long'
                                            onClick={() => setPosterWord('mountain')}>Mountain</button>
                                        <button className='symbol long'
                                            onClick={() => setPosterWord('bird')}>Bird</button>
                                        <button className='symbol long'
                                            onClick={() => setPosterWord('fish')}>Fish</button>
                                    </div>
                                </>
                                : <></>}
                            <li>Input parts</li>
                            <div className='big-image poster'></div>
                            <div className='codes image'>
                                <button className='symbol'>Comb</button>
                                <button className='symbol'>{locationAccompliceItem[locationAccomplice]?.item.replace(/^./, (char) => char.toUpperCase())}</button>
                                <button className='symbol'>{lastWordItem[lastWord]?.filter((item) => item === locationAccompliceItem[locationAccomplice]?.not)[0]?.replace(/^./, (char) => char.toUpperCase())}</button>
                                <button className='symbol'>{posterWordItem[posterWord]?.replace(/^./, (char) => char.toUpperCase())}</button>
                                <button className='symbol'>Medallion</button>
                            </div>
                            <li>Move the hand</li>
                            <div className='big-image zodiac'>
                                <span className='zodiac-rat'></span>
                                <span className='zodiac-ox'></span>
                                <span className='zodiac-tiger'></span>
                                <span className='zodiac-rabbit'></span>
                                <span className='zodiac-dragon'></span>
                                <span className='zodiac-snake'></span>
                                <span className='zodiac-horse'></span>
                                <span className='zodiac-goat'></span>
                                <span className='zodiac-monkey'></span>
                                <span className='zodiac-rooster'></span>
                                <span className='zodiac-dog'></span>
                                <span className='zodiac-pig'></span>
                            </div>
                            <li>Use Right Incense</li>
                            <li>Follow Orange Orb</li>
                            <li>Interact with Orange Orb</li>
                            <li>Kill Mini-Boss</li>
                        </ol>
                    </div>
                </>}
        </section>
    );
};

export default memo(Kowakujo);