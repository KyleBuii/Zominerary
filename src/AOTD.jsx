import { memo, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { symbolChunk, symbolCircle, symbolCircleDot, symbolCross, symbolEngine, symbolEye, symbolFeet, symbolFemale, symbolHalfCircle, symbolHook, symbolLaunch, symbolLimb, symbolLine, symbolMale, symbolRocket, symbolStar, symbolThreeCircles, symbolTriangle, symbolUmbrella, symbolWeapon, symbolWidow } from './Symbols.jsx';

const mapSymbolLab = {
    feet  : symbolFeet,
    chunk : symbolChunk,
    widow : symbolWidow,
    eye   : symbolEye,
    limb  : symbolLimb,
};
const mapSymbolLabNumber = {
    feet  : 1,
    chunk : 2,
    widow : 3,
    eye   : 4,
    limb  : 5,
};
const mapSymbolLabMissing = {
    2: 'Use Tessie Beam on Purple Crystal',
    4: 'Use Trap on Ravager',
    5: 'Use Tessie Beam to kill Zursa',
};
const mapSymbolSoulsCosmodrone = {
    launch: [11, 0 , 20, 13, 2 , 7 ],
    rocket: [17, 14, 2 , 10, 4 , 19],
    engine: [4 , 13, 6 , 8 , 13, 4 ],
    weapon: [22, 4 , 0 , 15, 14, 13],
};
const lakeSoulsLocations = ['tool', 'front', 'back', 'shed'];

const AOTD = ({ isSolo, isKnower }) => {
    const [isSideOpen, setIsSideOpen] = useState(false);
    const [selectedPerk, setSelectedPerk] = useState('');
    const [canXKlaus, setCanXKlaus] = useState('');
    const [codeFarm, setCodeFarm] = useState([-1, -1, -1]);
    const [codeLab, setCodeLab] = useState([]);
    const [codeLabInteract, setCodeLabInteract] = useState([]);
    const [hasChunk, setHasChunk] = useState(false);
    const [hasEye, setHasEye] = useState(false);
    const [hasLimb, setHasLimb] = useState(false);
    const [codeSoulsCosmodrone, setCodeSoulsCosmodrone] = useState([]);
    const [codeSoulsLake, setCodeSoulsLake] = useState([]);

    const refSideActivities = useRef(null);

    const handleCodeFarmClick = (index, symbol) => {
        setCodeFarm((prev) => {
            const newCodes = [...prev];
            newCodes[index] = symbol;
            return newCodes;
        });
    };

    const handleCodeLabClick = (symbolName) => {
        setCodeLab([...codeLab, mapSymbolLab[symbolName]]);
        setCodeLabInteract([...codeLabInteract, mapSymbolLabNumber[symbolName]]);
    };

    const handleCodeSoulsCosmodrone = (symbol) => {
        setCodeSoulsCosmodrone([...mapSymbolSoulsCosmodrone[symbol]]);
    };

    const handleCodeSoulsLake = (number) => {
        setCodeSoulsLake([...codeSoulsLake, number]);
    };

    return (
        <section className='page'>
            <span className='main-title title-aotd'>Ashes of the Damned</span>
            {(isKnower)
                ? <>
                    <div className='title'>
                        <span>Farm</span>
                    </div>
                    <div>
                        {(codeFarm[0] != -1) && (codeFarm[1] != -1) && (codeFarm[2] != -1)
                            ? <></>
                            : <div className='choices-code'>
                                {(codeFarm[0] != -1)
                                    ? <></>
                                    : <div className='choices'>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(0, symbolMale)}>
                                            {symbolMale}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(0, symbolUmbrella)}>
                                            {symbolUmbrella}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(0, symbolTriangle)}>
                                            {symbolTriangle}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(0, symbolFemale)}>
                                            {symbolFemale}
                                        </button>
                                    </div>}
                                {(codeFarm[1] != -1)
                                    ? <></>
                                    : <div className='choices'>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(1, symbolCircle)}>
                                            {symbolCircle}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(1, symbolCircleDot)}>
                                            {symbolCircleDot}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(1, symbolCross)}>
                                            {symbolCross}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(1, symbolLine)}>
                                            {symbolLine}
                                        </button>
                                    </div>}
                                {(codeFarm[2] != -1)
                                    ? <></>
                                    : <div className='choices'>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(2, symbolHook)}>
                                            {symbolHook}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(2, symbolThreeCircles)}>
                                            {symbolThreeCircles}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(2, symbolHalfCircle)}>
                                            {symbolHalfCircle}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(2, symbolStar)}>
                                            {symbolStar}
                                        </button>
                                    </div>}
                            </div>}
                        <div className='codes'>
                            {codeFarm.map((symbol, symbolIndex) => {
                                return <button className='symbol'
                                    key={`symbol-code-farm-${symbolIndex}`}>
                                    {symbol}
                                </button>
                            })}
                        </div>
                    </div>
                    <div className='title'>
                        <span>Lab</span>
                    </div>
                    <div>
                        {(codeLab.length >= 3)
                            ? <></>
                            : <div className='codes'>
                                <button className='symbol'
                                    onClick={() => handleCodeLabClick('feet')}>{symbolFeet}</button>
                                <button className='symbol'
                                    onClick={() => handleCodeLabClick('chunk')}>{symbolChunk}</button>
                                <button className='symbol'
                                    onClick={() => handleCodeLabClick('widow')}>{symbolWidow}</button>
                                <button className='symbol'
                                    onClick={() => handleCodeLabClick('eye')}>{symbolEye}</button>
                                <button className='symbol'
                                    onClick={() => handleCodeLabClick('limb')}>{symbolLimb}</button>
                            </div>}
                        <div className='codes'>
                            {codeLab.map((symbol, symbolIndex) => {
                                return <button className='symbol'
                                    key={`symbol-code-lab-${symbolIndex}`}>
                                    {symbol}
                                </button>
                            })}
                        </div>
                        <div className='codes'>
                            {codeLabInteract.sort().map((symbol, symbolIndex) => {
                                return <button className='symbol'
                                    key={`symbol-code-lab-interact-${symbolIndex}`}>
                                    {symbol}
                                </button>
                            })}
                        </div>
                    </div>
                    <div className='title'>
                        <span>Cosmodrone</span>
                    </div>
                    <div>
                        {(codeSoulsCosmodrone.length === 0)
                            ? <div className='codes'>
                                <button className='symbol'
                                    onClick={() => handleCodeSoulsCosmodrone('launch')}>{symbolLaunch}</button>
                                <button className='symbol'
                                    onClick={() => handleCodeSoulsCosmodrone('rocket')}>{symbolRocket}</button>
                                <button className='symbol'
                                    onClick={() => handleCodeSoulsCosmodrone('engine')}>{symbolEngine}</button>
                                <button className='symbol'
                                    onClick={() => handleCodeSoulsCosmodrone('weapon')}>{symbolWeapon}</button>
                            </div>
                            : <></>}
                        <div className='codes'>
                            {codeSoulsCosmodrone.map((number, numberIndex) => {
                                return <button className='symbol'
                                    key={`symbol-code-souls-cosmodrone-${numberIndex}`}>
                                    {number}
                                </button>
                            })}
                        </div>
                    </div>
                    <div className='title'>
                        <span>Lake</span>
                    </div>
                    {(codeSoulsLake.length >= 4)
                        ? <></>
                        : <div className='codes wrap'>
                            <button className='image'
                                style={{ backgroundImage: 'url(/aotd/lake-souls-front.webp)' }}
                                onClick={(event) => {
                                    event.currentTarget.style.display = 'none';
                                    handleCodeSoulsLake(1);
                                }}></button>
                            <button className='image'
                                style={{ backgroundImage: 'url(/aotd/lake-souls-back.webp)' }}
                                onClick={(event) => {
                                    event.currentTarget.style.display = 'none';
                                    handleCodeSoulsLake(2);
                                }}></button>
                            <button className='image'
                                style={{ backgroundImage: 'url(/aotd/lake-souls-tool.webp)' }}
                                onClick={(event) => {
                                    event.currentTarget.style.display = 'none';
                                    handleCodeSoulsLake(3);
                                }}></button>
                            <button className='image'
                                style={{ backgroundImage: 'url(/aotd/lake-souls-shed.webp)' }}
                                onClick={(event) => {
                                    event.currentTarget.style.display = 'none';
                                    handleCodeSoulsLake(4);
                                }}></button>
                        </div>}
                    <div className='big-image lake'>
                        <span>{codeSoulsLake.indexOf(1) + 1}</span>
                        <span>{codeSoulsLake.indexOf(2) + 1}</span>
                        <span>{codeSoulsLake.indexOf(3) + 1}</span>
                        <span>{codeSoulsLake.indexOf(4) + 1}</span>
                    </div>
                </>
                : <>
                    {(hasChunk && hasEye && hasLimb)
                        ? <></>
                        : <Draggable nodeRef={refSideActivities}
                            cancel='button, .collapsible'>
                            <div ref={refSideActivities}
                                className={`side-activities ${(isSideOpen) ? 'close' : ''}`}>
                                <span className='collapsible'
                                    onClick={() => setIsSideOpen(!isSideOpen)}>
                                    Side Activities
                                </span>
                                <ul className='side-activity-list'>
                                    {(!hasChunk)
                                        ? <li>
                                            <div className='side-activity'>
                                                <span>{mapSymbolLabMissing[2]}</span>
                                                <button className='symbol'
                                                    onClick={() => setHasChunk(true)}>Done</button>
                                            </div>
                                        </li>
                                        : <></>}
                                    {(!hasEye)
                                        ? <li>
                                            <div className='side-activity'>
                                                <span>{mapSymbolLabMissing[4]}</span>
                                                <button className='symbol'
                                                    onClick={() => setHasEye(true)}>Done</button>
                                            </div>
                                        </li>
                                        : <></>}
                                    {(!hasLimb)
                                        ? <li>
                                            <div className='side-activity'>
                                                <span>{mapSymbolLabMissing[5]}</span>
                                                <button className='symbol'
                                                    onClick={() => setHasLimb(true)}>Done</button>
                                            </div>
                                        </li>
                                        : <></>}
                                </ul>
                            </div>
                        </Draggable>}
                    {(selectedPerk === '')
                        ? <div className='popup'>
                            <span className='title'>Free Perk Choice</span>
                            <div className='choices'>
                                <button className='symbol' 
                                    onClick={() => setSelectedPerk('speed-cola')}>Speed Cola</button>
                                <button className='symbol' 
                                    onClick={() => setSelectedPerk('juggernaut')}>Juggernaut</button>
                                <button className='symbol' 
                                    onClick={() => setSelectedPerk('quick-revive')}>Quick Revive</button>
                                <button className='symbol' 
                                    onClick={() => setSelectedPerk('stamin-up')}>Stamin-Up</button>                </div>
                            </div>
                        : <></>}
                    {/* Starting Room */}
                    <div>
                        <div className='title'>
                            <span>Starting Room</span>
                            <div className='note'>
                                <span>[</span>
                                <div className='subnote'>
                                    <span>1R</span>
                                    <span className='normal'>= Every Round</span>
                                </div>
                                <div className='subnote'>
                                    <span>Lake</span>
                                    <span className='normal'>= Blackwater Lake</span>
                                </div>
                                <span>]</span>
                            </div>
                        </div>
                        <ul>
                            <img className='big-image'
                                src='/aotd/labled-spawn.webp'
                                alt='Labled spawn'
                                decoding='async'
                                loading='lazy'/>
                            {(selectedPerk.match(/juggernaut|quick-revive/)) ? <li>Free Perk Part</li> : <></>}
                            <ul>
                                {(selectedPerk === 'juggernaut') ? <li>Juggernaut — Leaf</li> : <></>}
                                {(selectedPerk === 'quick-revive') ? <li>Quick Revive — Toilet Cleaner</li> : <></>}
                            </ul>
                            <li>Hit vending machine [1R]</li>
                            <ul>
                                <li>Melee Macchiato breaks it</li>
                            </ul>
                            <li>Spray plants with Canister [1R]</li>
                            <ul>
                                <li>Toxic Growth speeds up process</li>
                            </ul>
                            {(isSolo)
                                ? <li>
                                    For later step, look for
                                    <span className='tomahawk'> Tomahawk</span>
                                </li>
                                : <li>
                                    For later step, look for
                                    <span className='tomahawk'> Tomahawk </span>
                                    —
                                    <span className='molotov'> Molotov </span>
                                    —
                                    <span className='stun'> Stun </span>
                                </li>}
                        </ul>
                        <ol>
                            <li>Travel to Server Room</li>
                            {(isSolo)
                                ? <></>
                                : <ul>
                                    <li>
                                        <span className='stun'>Stuns</span> in this room
                                    </li>
                                </ul>}
                            <li>Grab and Install T.E.D.D.'s Head</li>
                            <li>Drive to Lake</li>
                            <ul>
                                <li>
                                    Don't activate
                                    <span className='high-value-target'> Uber Klaus</span>
                                </li>
                                <li>Drive over Green Spores to heal Tessie</li>
                            </ul>
                        </ol>
                    </div>
                    {/* The Jar */}
                    <div>
                        <div className='title'>
                            <span>The Jar</span>
                            <div className='note'>
                                <span>[</span>
                                <div className='subnote'>
                                    <span>Lake</span>
                                    <span className='normal'>= Blackwater Lake</span>
                                </div>
                                <div className='subnote'>
                                    <span>Plaza</span>
                                    <span className='normal'>= Janus Towers Plaza</span>
                                </div>
                                <span>]</span>
                            </div>
                        </div>
                        <ul>
                            <img className='big-image'
                                src='/aotd/labled-lake.webp'
                                alt='Labled lake'
                                decoding='async'
                                loading='lazy'/>
                            <li><span className='note-plants'>Don't forget to grow plants if you have Toxic Growth!</span></li>
                            {(selectedPerk.match(/speed-cola|quick-revive/)) ? <li>Free Perk Part</li> : <></>}
                            <ul>
                                {(selectedPerk === 'speed-cola') ? <li>Speed Cola — Herb</li> : <></>}
                                {(selectedPerk === 'quick-revive') ? <li>Quick Revive — Fish</li> : <></>}
                            </ul>
                            {(isSolo) ? <></> : <li>Extra Canister at Lake</li>}
                            <li>
                                <span className='tomahawk'>Tomahawk </span>
                                Side Easter Egg
                            </li>
                        </ul>
                        <ol>
                            <li>Turn on power</li>
                            <li>Grab Jar</li>
                            <li>Drive to Farm through Plaza</li>
                            <ul>
                                <li>
                                    Don't activate
                                    <span className='high-value-target'> Uber Klaus</span>
                                </li>
                            </ul>
                        </ol>
                    </div>
                    {/* Feet */}
                    <div>
                        <div className='title'>
                            <span>Feet</span>
                            <div className='note'>
                                <span>[</span>
                                <div className='subnote'>
                                    <span>Plaza</span>
                                    <span className='normal'>= Janus Towers Plaza</span>
                                </div>
                                <span>]</span>
                            </div>
                        </div>
                        <ul>
                            <img className='big-image'
                                src='/aotd/labled-farm.webp'
                                alt='Labled farm'
                                decoding='async'
                                loading='lazy'/>
                            {(selectedPerk.match(/juggernaut|stamin-up/)) ? <li>Free Perk Part</li> : <></>}
                            <ul>
                                {(selectedPerk === 'juggernaut') ? <li>Juggernaut — Jar</li> : <></>}
                                {(selectedPerk === 'stamin-up') ? <li>Stamin-Up — Box of Ingredients</li> : <></>}
                            </ul>
                            {(isSolo) ? <></> : <li>Extra Canister at Farm</li>}
                        </ul>
                        <ol>
                            <li>Place Jar</li>
                            <li>Turn on power</li>
                            <li>
                                <span className='tomahawk'>Tomahawk </span>
                                Foot
                            </li>
                            {(isSolo)
                                ? <></>
                                : <>
                                    <li>
                                        <span className='molotov'>Molotov </span>
                                        Foot
                                    </li>
                                    <li>Grab Foot</li>
                                </>}
                            {(canXKlaus === '')
                                ? <>
                                    <li>
                                        Can you kill
                                        <span className='high-value-target'> Uber Klaus</span>
                                        ?
                                    </li>
                                    <span className='choices-list-item'>
                                        <div className='choices'>
                                            <button className='symbol'
                                                onClick={() => setCanXKlaus('yes')}>
                                                Yes
                                            </button>
                                            <button className='symbol'
                                                onClick={() => setCanXKlaus('no')}>
                                                No
                                            </button>
                                        </div>
                                    </span>
                                </>
                                : (canXKlaus === 'no')
                                    ? <li>
                                        <span className='coward'>Coward.</span>
                                    </li>
                                    : <></>}
                            {(canXKlaus === 'yes')
                                ? <>
                                    <li>Jump pad to Plaza</li>
                                    {(codeFarm[0] != -1) && (codeFarm[1] != -1) && (codeFarm[2] != -1)
                                        ? <></>
                                        : <ul className='choices-code'>
                                            <li>Look at the roofs at Farm, what symbols do you see?</li>
                                            {(codeFarm[0] != -1)
                                                ? <></>
                                                : <div className='choices'>
                                                    <button className='symbol'
                                                        onClick={() => handleCodeFarmClick(0, symbolMale)}>
                                                        {symbolMale}
                                                    </button>
                                                    <button className='symbol'
                                                        onClick={() => handleCodeFarmClick(0, symbolUmbrella)}>
                                                        {symbolUmbrella}
                                                    </button>
                                                    <button className='symbol'
                                                        onClick={() => handleCodeFarmClick(0, symbolTriangle)}>
                                                        {symbolTriangle}
                                                    </button>
                                                    <button className='symbol'
                                                        onClick={() => handleCodeFarmClick(0, symbolFemale)}>
                                                        {symbolFemale}
                                                    </button>
                                                </div>}
                                            {(codeFarm[1] != -1)
                                                ? <></>
                                                : <div className='choices'>
                                                    <button className='symbol'
                                                        onClick={() => handleCodeFarmClick(1, symbolCircle)}>
                                                        {symbolCircle}
                                                    </button>
                                                    <button className='symbol'
                                                        onClick={() => handleCodeFarmClick(1, symbolCircleDot)}>
                                                        {symbolCircleDot}
                                                    </button>
                                                    <button className='symbol'
                                                        onClick={() => handleCodeFarmClick(1, symbolCross)}>
                                                        {symbolCross}
                                                    </button>
                                                    <button className='symbol'
                                                        onClick={() => handleCodeFarmClick(1, symbolLine)}>
                                                        {symbolLine}
                                                    </button>
                                                </div>}
                                            {(codeFarm[2] != -1)
                                                ? <></>
                                                : <div className='choices'>
                                                    <button className='symbol'
                                                        onClick={() => handleCodeFarmClick(2, symbolHook)}>
                                                        {symbolHook}
                                                    </button>
                                                    <button className='symbol'
                                                        onClick={() => handleCodeFarmClick(2, symbolThreeCircles)}>
                                                        {symbolThreeCircles}
                                                    </button>
                                                    <button className='symbol'
                                                        onClick={() => handleCodeFarmClick(2, symbolHalfCircle)}>
                                                        {symbolHalfCircle}
                                                    </button>
                                                    <button className='symbol'
                                                        onClick={() => handleCodeFarmClick(2, symbolStar)}>
                                                        {symbolStar}
                                                    </button>
                                                </div>}
                                        </ul>}
                                    <img className='big-image'
                                        src='/aotd/labled-spawn.webp'
                                        alt='Labled exit spawn'
                                        decoding='async'
                                        loading='lazy'/>
                                    <li>
                                        Activate
                                        <span className='high-value-target'> Uber Klaus</span>
                                    </li>
                                    <li>Jump pad to Farm</li>
                                    <li>Shoot free Insta-Kill</li>
                                    <li>
                                        Kill
                                        <span className='high-value-target'> Uber Klaus</span>
                                    </li>
                                    <li>Grab Stabilizer Chip</li>
                                </>
                                : <></>}
                            <li>Drive to Ashwood</li>
                        </ol>
                    </div>
                    {/* Carcass */}
                    <div>
                        <div className='title'>
                            <span>Carcass</span>
                            <div className='note'>
                                <span>[</span>
                                <div className='subnote'>
                                    <span>PAP</span>
                                    <span className='normal'>= Pack-a-Punch</span>
                                </div>
                                <span>]</span>
                            </div>
                        </div>
                        <ul>
                            <img className='big-image'
                                src='/aotd/labled-ashwood.webp'
                                alt='Labled ashwood'
                                decoding='async'
                                loading='lazy'/>
                            {(selectedPerk.match(/stamin-up|speed-cola/)) ? <li>Free Perk Part</li> : <></>}
                            <ul>
                                {(selectedPerk === 'stamin-up') ? <li>Stamin-Up — Bag of Beans</li> : <></>}
                                {(selectedPerk === 'speed-cola') ? <li>Speed Cola — Nuts</li> : <></>}
                            </ul>
                            {(isSolo) ? <></> : <li>Extra Canister at Ashwood</li>}
                        </ul>
                        <ol>
                            {(isSolo)
                                ? <li>
                                    Grab
                                    <span className='stun'> Stuns</span>
                                </li>
                                : <></>}
                            <li>Turn on power</li>
                            <li>Install PAP</li>
                            {(selectedPerk === 'quick-revive')
                                ? <>
                                    <li>Jump pad to Cosmodrone</li>
                                    <li>Free Perk Part</li>
                                    <ul>
                                        <li>Quick Revive — Syringe</li>
                                    </ul>
                                </>
                                : <></>}
                            <li>Jump pad to Exit 115</li>
                            <ul>
                                <li>Vending machine here</li>
                            </ul>
                            <img className='big-image'
                                src='/aotd/labled-exit-115.webp'
                                alt='Labled exit 114'
                                decoding='async'
                                loading='lazy'/>
                            <li>Shoot free Bonus Points</li>
                            {(selectedPerk.match(/juggernaut|stamin-up|speed-cola/)) ? <li>Free Perk Part</li> : <></>}
                            <ul>
                                {(selectedPerk === 'juggernaut') ? <li>Juggernaut — Eggs</li> : <></>}
                                {(selectedPerk === 'stamin-up') ? <li>Stamin-Up — Gasoline</li> : <></>}
                                {(selectedPerk === 'speed-cola') ? <li>Speed Cola — Unknown Ingredient 2</li> : <></>}
                            </ul>
                            <li>Get Freezer Key</li>
                            <li>Grab Carcass</li>
                            <li>Jump pad to Ashwood</li>
                            <li>Install Carcass on Tessie</li>
                        </ol>
                    </div>
                    {/* UBERKLAUS */}
                    {(canXKlaus === 'yes')
                        ? <></>
                        : <div>
                            <div className='title'>
                                <span>UBERKLAUS</span>
                                <div className='note'>
                                    <span>[</span>
                                    <div className='subnote'>
                                        <span>Plaza</span>
                                        <span className='normal'>= Janus Towers Plaza</span>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <ul>
                                <img className='big-image'
                                    src='/aotd/labled-spawn.webp'
                                    alt='Labled spawn'
                                    decoding='async'
                                    loading='lazy'/>
                            </ul>
                            <ol>
                                <li>Drive to Farm</li>
                                <li>Grab Jar</li>
                                <li>Jump pad to Plaza</li>
                                {(codeFarm[0] != -1) && (codeFarm[1] != -1) && (codeFarm[2] != -1)
                                    ? <></>
                                    : <ul className='choices-code'>
                                        <li>Look at the roofs at Farm, what symbols do you see?</li>
                                        {(codeFarm[0] != -1)
                                            ? <></>
                                            : <div className='choices'>
                                                <button className='symbol'
                                                    onClick={() => handleCodeFarmClick(0, symbolMale)}>
                                                    {symbolMale}
                                                </button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeFarmClick(0, symbolUmbrella)}>
                                                    {symbolUmbrella}
                                                </button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeFarmClick(0, symbolTriangle)}>
                                                    {symbolTriangle}
                                                </button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeFarmClick(0, symbolFemale)}>
                                                    {symbolFemale}
                                                </button>
                                            </div>}
                                        {(codeFarm[1] != -1)
                                            ? <></>
                                            : <div className='choices'>
                                                <button className='symbol'
                                                    onClick={() => handleCodeFarmClick(1, symbolCircle)}>
                                                    {symbolCircle}
                                                </button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeFarmClick(1, symbolCircleDot)}>
                                                    {symbolCircleDot}
                                                </button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeFarmClick(1, symbolCross)}>
                                                    {symbolCross}
                                                </button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeFarmClick(1, symbolLine)}>
                                                    {symbolLine}
                                                </button>
                                            </div>}
                                        {(codeFarm[2] != -1)
                                            ? <></>
                                            : <div className='choices'>
                                                <button className='symbol'
                                                    onClick={() => handleCodeFarmClick(2, symbolHook)}>
                                                    {symbolHook}
                                                </button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeFarmClick(2, symbolThreeCircles)}>
                                                    {symbolThreeCircles}
                                                </button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeFarmClick(2, symbolHalfCircle)}>
                                                    {symbolHalfCircle}
                                                </button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeFarmClick(2, symbolStar)}>
                                                    {symbolStar}
                                                </button>
                                            </div>}
                                    </ul>}
                                <li>
                                    Activate
                                    <span className='high-value-target'> Uber Klaus</span>
                                </li>
                                <li>Jump pad to Farm</li>
                                <li>Shoot free Insta-Kill</li>
                                <li>
                                    Kill
                                    <span className='high-value-target'> Uber Klaus</span>
                                </li>
                                <li>Grab Stabilizer Chip</li>
                                <li>Jump pad to Ashwood</li>
                            </ol>
                        </div>}
                    {/* Do a Barrel Roll */}
                    <div>
                        <div className='title'>
                            <span>Do a Barrel Roll</span>
                            <div className='note'>
                                <span>[</span>
                                <div className='subnote'>
                                    <span>Lake</span>
                                    <span className='normal'>= Blackwater Lake</span>
                                </div>
                                <span>]</span>
                            </div>
                        </div>
                        <ul>
                            <img className='big-image'
                                src='/aotd/labled-ashwood.webp'
                                alt='Labled ashwood'
                                decoding='async'
                                loading='lazy'/>
                        </ul>
                        <ol>
                            <li>Travel to Ashwood Sheriff's Office</li>
                            <li>
                                <span className='stun'>Stun </span>
                                Klaus
                            </li>
                            {(canXKlaus === 'no') ? <li>Teleport Tessie</li> : <></>}
                            <li>Drive to Cosmodrone</li>
                            <img className='big-image'
                                src='/aotd/labled-cosmodrone.webp'
                                alt='Labled cosmodrone'
                                decoding='async'
                                loading='lazy'/>
                            <li>Command Klaus on the Panel</li>
                            <li>Interact with Panel</li>
                            <li>Get Barrel</li>
                            <li>Put Barrel on top of Tessie</li>
                            <li>Buy Wisp Tea</li>
                            <li>Jump pad to Ashwood</li>
                            <li>Put Wisp in Mirror</li>
                            <li>Teleport Tessie</li>
                            {(isSolo) ? <li>Grab <span className='molotov'>Molotov</span></li> : <></>}
                            <li>Grab Barrel</li>
                            <li>Put Barrel in Ashwood pump</li>
                            <li>Put Barrel in Lake pump</li>
                            <li>Put Barrel in Farm pump</li>
                            {(canXKlaus === 'yes') ? <li>Grab Jar</li> : <></>}
                            {(isSolo) ? <li><span className='molotov'>Molotov </span> foot</li> : <></>}
                            {(isSolo) ? <li>Grab feet</li> : <></>}
                            <li>Put Barrel at Cube</li>
                            <li>Input code</li>
                            <div className='codes'>
                                {codeFarm.map((symbol, symbolIndex) => {
                                    return <button className='symbol'
                                        key={`symbol-code-farm-${symbolIndex}`}>
                                        {symbol}
                                    </button>
                                })}
                            </div>
                            <li>
                                Grab
                                <span className='high-value-weapon'> Wonder Weapon</span>
                            </li>
                            <li>Jump pad to Ashwood</li>
                        </ol>
                    </div>
                    {/* Cocaine & Blood */}
                    <div>
                        <div className='title'>
                            <span>Cocaine & Blood</span>
                        </div>
                        <ul>
                            <img className='big-image'
                                src='/aotd/labled-cosmodrone.webp'
                                alt='Labled cosmodrone'
                                decoding='async'
                                loading='lazy'/>
                        </ul>
                        <ol>
                            <li>
                                Shoot Mirror with
                                <span className='high-value-weapon'> Wonder Weapon</span>
                            </li>
                            <li>Grab Powder</li>
                            <li>Drive to Cosmodrone</li>
                            <li>Travel to Yuri's Lab</li>
                            <li>Put Powder</li>
                            {(codeLab.length >= 3)
                                ? <></>
                                : <ul>
                                    <li>Look at the first symbol only, what are the symbols?</li>
                                    <div className='codes'>
                                        <button className='symbol'
                                            onClick={() => handleCodeLabClick('feet')}>{symbolFeet}</button>
                                        <button className='symbol'
                                            onClick={() => handleCodeLabClick('chunk')}>{symbolChunk}</button>
                                        <button className='symbol'
                                            onClick={() => handleCodeLabClick('widow')}>{symbolWidow}</button>
                                        <button className='symbol'
                                            onClick={() => handleCodeLabClick('eye')}>{symbolEye}</button>
                                        <button className='symbol'
                                            onClick={() => handleCodeLabClick('limb')}>{symbolLimb}</button>
                                    </div>
                                </ul>}
                            {((codeLabInteract.includes(2) && !hasChunk)
                                || (codeLabInteract.includes(4) && !hasEye)
                                || (codeLabInteract.includes(5) && !hasLimb))
                                ? <>
                                    <li>Get missing parts</li>
                                    <ul>
                                        {(codeLabInteract.includes(2) && !hasChunk)
                                            ? <li>
                                                {mapSymbolLabMissing[2]}
                                            </li>
                                            : <></>}
                                        {(codeLabInteract.includes(4) && !hasEye)
                                            ? <li>
                                                {mapSymbolLabMissing[4]}
                                            </li>
                                            : <></>}
                                        {(codeLabInteract.includes(5) && !hasLimb)
                                            ? <li>
                                                {mapSymbolLabMissing[5]}
                                            </li>
                                            : <></>}
                                    </ul>
                                </>
                                : <></>}
                            <li>Input code</li>
                            <div className='codes'>
                                {codeLab.map((symbol, symbolIndex) => {
                                    return <button className='symbol'
                                        key={`symbol-code-lab-${symbolIndex}`}>
                                        {symbol}
                                    </button>
                                })}
                            </div>
                            <div className='codes'>
                                {codeLabInteract.sort().map((symbol, symbolIndex) => {
                                    return <button className='symbol'
                                        key={`symbol-code-lab-interact-${symbolIndex}`}>
                                        {symbol}
                                    </button>
                                })}
                            </div>
                            <ul>
                                <li>Ignore Powder</li>
                            </ul>
                            <li>Put Blood</li>
                        </ol>
                    </div>
                    {/* Yellow Green Red */}
                    <div>
                        <div className='title'>
                            <span>Yellow Green Red</span>
                        </div>
                        <ol>
                            <li>Get Yellow Key</li>
                            <ul>
                                <li>Ashwood &#8596; Cosmodrone</li>
                            </ul>
                            <img className='big-image'
                                src='/aotd/yellow-key-1-2.webp'
                                alt='Yellow key spots 1 and 2'
                                decoding='async'
                                loading='lazy'/>
                            <img className='big-image stacked'
                                src='/aotd/yellow-key-3.webp'
                                alt='Yellow key spot 3'
                                decoding='async'
                                loading='lazy'/>
                            <li>Put in Cube</li>
                            <li>Get Green Key</li>
                            <ul>
                                <li>Ashwood &#8596; Farm</li>
                            </ul>
                            <img className='big-image'
                                src='/aotd/green-key-1-2.webp'
                                alt='Green key spots 1 and 2'
                                decoding='async'
                                loading='lazy'/>
                            <img className='big-image stacked'
                                src='/aotd/green-key-3.webp'
                                alt='Green key spot 3'
                                decoding='async'
                                loading='lazy'/>
                            <li>Put in Cube</li>
                            <li>Get Red Key</li>
                            <ul>
                                <li>Ashwood &#8596; Exit 115</li>
                            </ul>
                            <img className='big-image'
                                src='/aotd/red-key-1-2.webp'
                                alt='Red key spots 1 and 2'
                                decoding='async'
                                loading='lazy'/>
                            <img className='big-image stacked'
                                src='/aotd/red-key-3.webp'
                                alt='Red key spot 3'
                                decoding='async'
                                loading='lazy'/>
                            <li>Put in Cube</li>
                            <li>Grab Turret</li>
                            <li>Install Turret on Tessie</li>
                        </ol>
                    </div>
                    {/* The Souls That Were Lost */}
                    <div>
                        <div className='title'>
                            <span>The Souls That Were Lost</span>
                            <div className='note'>
                                <span>[</span>
                                <div className='subnote'>
                                    <span>Lake</span>
                                    <span className='normal'>= Blackwater Lake</span>
                                </div>
                                <span>]</span>
                            </div>
                        </div>
                        <ol>
                            <li>Shoot floating Clock with Turret</li>
                            <li>Shoot one of the Clock's side to turn Purple</li>
                            <li>Jump pad to Cosmodrone</li>
                            <img className='big-image'
                                src='/aotd/labled-cosmodrone.webp'
                                alt='Labled cosmodrone'
                                decoding='async'
                                loading='lazy'/>
                            <li>Shoot a Tower</li>
                            <li>Jump pad to Ashwood</li>
                            <li>Turn Purple</li>
                            <li>Jump pad to Farm</li>
                            <img className='big-image'
                                src='/aotd/labled-farm.webp'
                                alt='Labled farm'
                                decoding='async'
                                loading='lazy'/>
                            <li>Look at the Clock on the wall</li>
                            <li>Stand on the hour shown</li>
                            <li>Shoot the head once the eyes glow</li>
                            <li>Grab parts</li>
                            <li>Place and activate the parts</li>
                            <li>Protect the parts</li>
                            <ul>
                                <li>Can use free Nuke at Ashwood to skip ~30s</li>
                            </ul>
                            <li>Jump pad to Ashwood</li>
                            <li>
                                <span className='note-clock'>Shoot Clock with Turret when needed</span>
                            </li>
                            <li>Turn Purple</li>
                            <li>Drive to Exit 115</li>
                            <img className='big-image'
                                src='/aotd/labled-exit-115.webp'
                                alt='Labled exit 115'
                                decoding='async'
                                loading='lazy'/>
                            <li>Put Tessie against the Truck</li>
                            <li>Jump pad to Cosmodrone</li>
                            <li>Shoot last Tower</li>
                            <li>Read monitor</li>
                            {(codeSoulsCosmodrone.length === 0)
                                ? <ul>
                                    <li>Look at the first monitor only, what is the symbol?</li>
                                    <div className='codes'>
                                        <button className='symbol'
                                            onClick={() => handleCodeSoulsCosmodrone('launch')}>{symbolLaunch}</button>
                                        <button className='symbol'
                                            onClick={() => handleCodeSoulsCosmodrone('rocket')}>{symbolRocket}</button>
                                        <button className='symbol'
                                            onClick={() => handleCodeSoulsCosmodrone('engine')}>{symbolEngine}</button>
                                        <button className='symbol'
                                            onClick={() => handleCodeSoulsCosmodrone('weapon')}>{symbolWeapon}</button>
                                    </div>
                                </ul>
                                : <></>}
                            <li>Input code</li>
                            <div className='codes'>
                                {codeSoulsCosmodrone.map((number, numberIndex) => {
                                    return <button className='symbol'
                                        key={`symbol-code-souls-cosmodrone-${numberIndex}`}>
                                        {number}
                                    </button>
                                })}
                            </div>
                            <li>Call Klaus</li>
                            <li>Jump pad to Ashwood</li>
                            <li>Turn Purple</li>
                            <li>Teleport to Tessie</li>
                            <li>Shoot Clock on top of Service Station</li>
                            <li>Put Klaus on the Mechanic</li>
                            <li>Actviate the Cashier by Meleeing the Cash Register</li>
                            <li>Dunk the Cashier</li>
                            <li>Activate the Trucker</li>
                            <li>Dunk the Trucker</li>
                            <li>Activate the Mechanic</li>
                            <li>Dunk the Mechanic</li>
                            <li>Jump pad to Ashwood</li>
                            <li>Jump pad to Lake</li>
                            <img className='big-image'
                                src='/aotd/labled-lake.webp'
                                alt='Labled lake'
                                decoding='async'
                                loading='lazy'/>
                            <li>Interact with Soul in the back</li>
                            <li>Shoot Projector</li>
                            <li>Read Pictures</li>
                            {(codeSoulsLake.length >= 4)
                                ? <></>
                                : <ul>
                                    <li>Click the pictures in order.</li>
                                    <div className='codes wrap'>
                                        <div className='side-activity horizontal'>
                                            <button className='image'
                                                style={{ backgroundImage: 'url(/aotd/lake-souls-tool.webp)' }}
                                                onClick={(event) => {
                                                    event.currentTarget.style.display = 'none';
                                                    handleCodeSoulsLake(3);
                                                }}></button>
                                            <button className='symbol long'>Tool</button>
                                        </div>
                                        <div className='side-activity horizontal'>
                                            <button className='image'
                                                style={{ backgroundImage: 'url(/aotd/lake-souls-front.webp)' }}
                                                onClick={(event) => {
                                                    event.currentTarget.style.display = 'none';
                                                    handleCodeSoulsLake(1);
                                                }}></button>
                                            <button className='symbol long'>Front</button>
                                        </div>
                                        <div className='side-activity horizontal'>
                                            <button className='image'
                                                style={{ backgroundImage: 'url(/aotd/lake-souls-back.webp)' }}
                                                onClick={(event) => {
                                                    event.currentTarget.style.display = 'none';
                                                    handleCodeSoulsLake(2);
                                                }}></button>
                                            <button className='symbol long'>Back</button>
                                        </div>
                                        <div className='side-activity horizontal'>
                                            <button className='image'
                                                style={{ backgroundImage: 'url(/aotd/lake-souls-shed.webp)' }}
                                                onClick={(event) => {
                                                    event.currentTarget.style.display = 'none';
                                                    handleCodeSoulsLake(4);
                                                }}></button>
                                            <button className='symbol long'>Shed</button>
                                        </div>
                                    </div>
                                </ul>}
                            <li>Shoot Reels</li>
                            <div className='big-image lake'>
                                <span>{codeSoulsLake.indexOf(1) + 1}</span>
                                <span>{codeSoulsLake.indexOf(2) + 1}</span>
                                <span>{codeSoulsLake.indexOf(3) + 1}</span>
                                <span>{codeSoulsLake.indexOf(4) + 1}</span>
                            </div>
                            <div className='spread'>
                                {lakeSoulsLocations.map((location) => {
                                    return <button className='symbol long'
                                        key={`lake-souls-location-${location}`}>
                                        {location.replace(/^./, (char) => char.toUpperCase())}
                                    </button>
                                })}
                            </div>
                            <li>Activate Box and put Klaus on it</li>
                        </ol>
                    </div>
                </>}
        </section>
    );
};

export default memo(AOTD);