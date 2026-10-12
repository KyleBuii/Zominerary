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

const AOTD = ({ isSolo, isKnower, showSolver }) => {
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

    const handleCodeSoulsLake = (event, location) => {
        event.currentTarget.parentElement.style.display = 'none';
        setCodeSoulsLake([...codeSoulsLake, location]);
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
                                    Reminders
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
                            <span className='title'>Free Perk Side Easter Egg</span>
                            <div className='choices'>
                                <button className='symbol item'
                                    onClick={() => setSelectedPerk('speed-cola')}>
                                    <span>Speed Cola</span>
                                    <img className='perk'
                                        src='/perks/speed-cola.webp'
                                        alt='Perk speed cola'
                                        decoding='async'
                                        loading='lazy'/>
                                </button>
                                <button className='symbol item'
                                    onClick={() => setSelectedPerk('juggernog')}>
                                    <span>Juggernog</span>
                                    <img className='perk'
                                        src='/perks/juggernog.webp'
                                        alt='Perk juggernog'
                                        decoding='async'
                                        loading='lazy'/>
                                </button>
                                <button className='symbol item'
                                    onClick={() => setSelectedPerk('quick-revive')}>
                                    <span>Quick Revive</span>
                                    <img className='perk'
                                        src='/perks/quick-revive.webp'
                                        alt='Perk quick revive'
                                        decoding='async'
                                        loading='lazy'/>
                                </button>
                                <button className='symbol item'
                                    onClick={() => setSelectedPerk('stamin-up')}>
                                    <span>Stamin-Up</span>
                                    <img className='perk'
                                        src='/perks/stamin-up.webp'
                                        alt='Perk stamin up'
                                        decoding='async'
                                        loading='lazy'/>
                                </button>
                            </div>
                        </div>
                        : <></>}
                    {/* Starting Room */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Starting Room</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/aotd/labled-spawn.webp'
                            alt='Labled spawn'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <div>
                                <span>Tips & Tricks</span>
                                <div className='note'>
                                    <span>[</span>
                                    <div className='subnote'>
                                        <span>1R</span>
                                        <span className='normal'>= Every Round</span>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <ul>
                            {(selectedPerk.match(/juggernog|quick-revive/)) ? <li>Free Perk Part</li> : <></>}
                            <ul>
                                {(selectedPerk === 'juggernog') ? <li>Juggernog — Leaf</li> : <></>}
                                {(selectedPerk === 'quick-revive') ? <li>Quick Revive — Toilet Cleaner</li> : <></>}
                            </ul>
                            <li>Hit Vending Machine at Pickup Area [1R]</li>
                            <ul>
                                <li>
                                    <div className='image-list'>
                                        <span>Melee Macchiato Breaks it</span>
                                        <img className='perk'
                                            src='/perks/melee-macchiato.webp'
                                            alt='Perk melee macchiato'
                                            decoding='async'
                                            loading='lazy'/>
                                    </div>
                                </li>
                            </ul>
                            <li>Spray Plants with Canister [1R]</li>
                            <ul>
                                <li>
                                    <div className='image-list'>
                                        <div><span className='toxic-growth'>Toxic Growth</span> Speeds up the Process</div>
                                        <img className='field-upgrade'
                                            src='/field-upgrades/toxic-growth.webp'
                                            alt='Field upgrade toxic growth'
                                            decoding='async'
                                            loading='lazy'/>
                                    </div>
                                </li>
                            </ul>
                            <img className='big-image'
                                src='/aotd/plants-spawn.webp'
                                alt='Plants spawn'
                                decoding='async'
                                loading='lazy'/>
                            {(isSolo)
                                ? <li>
                                    For Later Step, Look for
                                    <span className='tomahawk'> Tomahawk</span>
                                </li>
                                : <li>
                                    <span className='optional'>[Optional] </span>
                                    For Later Steps, Look for
                                    <span className='tomahawk'> Tomahawk </span>
                                    —
                                    <span className='molotov'> Molotov </span>
                                    —
                                    <span className='stun'> Stun </span>
                                </li>}
                        </ul>
                        <div className='sub-title'>
                            <div>
                                <span>Steps</span>
                                <div className='note'>
                                    <span>[</span>
                                    <div className='subnote'>
                                        <span>Lake</span>
                                        <span className='normal'>= Blackwater Lake</span>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <ol>
                            <li>Grab and Install T.E.D.D.'s Head</li>
                            {(isSolo)
                                ? <></>
                                : <ul>
                                    <li>
                                        <span className='stun'>Stuns</span> in this Room
                                    </li>
                                </ul>}
                            <li>Drive to Lake</li>
                            <ul>
                                <li>
                                    Don't activate
                                    <span className='high-value-target'> Uber Klaus </span>
                                    by Getting Close
                                </li>
                                <li>Drive over Green Spores to Heal Tessie</li>
                            </ul>
                        </ol>
                    </div>
                    {/* The Jar */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>The Jar</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/aotd/labled-lake.webp'
                            alt='Labled lake'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <div>
                                <span>Tips & Tricks</span>
                                <div className='note'>
                                    <span>[</span>
                                    <div className='subnote'>
                                        <span>Lake</span>
                                        <span className='normal'>= Blackwater Lake</span>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <ul>
                            <li>
                                <div className='image-list'>
                                    <div><span className='note-plants'>Don't forget to Grow Plants with Toxic Growth</span></div>
                                    <img className='field-upgrade'
                                        src='/field-upgrades/toxic-growth.webp'
                                        alt='Field upgrade toxic growth'
                                        decoding='async'
                                        loading='lazy'/>
                                </div>
                            </li>
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
                            <ul>
                                <li>Interact with Trophy on Shelf [Right Arrow on Picture]</li>
                                <li>Grab <span className='tomahawk'>Tomahawk</span> on Barrel [Left Arrow on Picture]</li>
                                <li>Travel to the Front of the House</li>
                                <li>Look Outside the Fence, there should be Targets</li>
                                <li><span className='tomahawk'>Tomahawk</span> Targets</li>
                            </ul>
                        </ul>
                        <div className='sub-title'>
                            <div>
                                <span>Steps</span>
                                <div className='note'>
                                    <span>[</span>
                                    <div className='subnote'>
                                        <span>Plaza</span>
                                        <span className='normal'>= Janus Towers Plaza</span>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <ol>
                            <li>Turn on Power by Shooting Infestations on the Pump</li>
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
                            <span></span>
                            <span>Feet</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/aotd/labled-farm.webp'
                            alt='Labled farm'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <div>
                                <span>Tips & Tricks</span>
                            </div>
                            <div></div>
                        </div>
                        <ul>
                            {(selectedPerk.match(/juggernog|stamin-up/)) ? <li>Free Perk Part</li> : <></>}
                            <ul>
                                {(selectedPerk === 'juggernog') ? <li>Juggernog — Jar</li> : <></>}
                                {(selectedPerk === 'stamin-up') ? <li>Stamin-Up — Box of Ingredients</li> : <></>}
                            </ul>
                            {(isSolo) ? <></> : <li>Extra Canister at Farm</li>}
                        </ul>
                        <div className='sub-title'>
                            <div>
                                <span>Steps</span>
                                <div className='note'>
                                    <span>[</span>
                                    <div className='subnote'>
                                        <span>Plaza</span>
                                        <span className='normal'>= Janus Towers Plaza</span>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <ol>
                            <li>Place Jar</li>
                            <li>Turn on Power</li>
                            <li>
                                <span className='tomahawk'>Tomahawk </span>
                                the Left Foot of the Hanging Zombie
                            </li>
                            {(isSolo)
                                ? <></>
                                : <>
                                    <li>
                                        <span className='molotov'>Molotov </span>
                                        the Foot on the Ground
                                    </li>
                                    <li>Grab Foot</li>
                                </>}
                            {(canXKlaus === '')
                                ? <>
                                    <li>
                                        <span className='optional'>[Optional] </span>
                                        Can you Kill
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
                                        <span className='coward'>Mhhh</span>
                                    </li>
                                    : <></>}
                            {(canXKlaus === 'yes')
                                ? <>
                                    <li>Jump Pad to Plaza</li>
                                    {(codeFarm[0] != -1) && (codeFarm[1] != -1) && (codeFarm[2] != -1)
                                        ? <></>
                                        : <ul className='choices-code'>
                                            <li>Look at the Roofs at Farm, what Symbols?</li>
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
                                    <li>Jump Pad to Farm</li>
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
                            <span></span>
                            <span>Carcass</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/aotd/labled-ashwood.webp'
                            alt='Labled ashwood'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <span>Tips & Tricks</span>
                            <div></div>
                        </div>
                        <ul>
                            {(selectedPerk.match(/stamin-up|speed-cola/)) ? <li>Free Perk Part</li> : <></>}
                            <ul>
                                {(selectedPerk === 'stamin-up') ? <li>Stamin-Up — Bag of Beans</li> : <></>}
                                {(selectedPerk === 'speed-cola') ? <li>Speed Cola — Nuts</li> : <></>}
                            </ul>
                            {(isSolo) ? <></> : <li>Extra Canister at Ashwood</li>}
                        </ul>
                        <div className='sub-title'>
                            <div>
                                <span>Steps</span>
                                <div className='note'>
                                    <span>[</span>
                                    <div className='subnote'>
                                        <span>PAP</span>
                                        <span className='normal'>= Pack-a-Punch</span>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <ol>
                            {(isSolo)
                                ? <li>
                                    Grab
                                    <span className='stun'> Stuns</span>
                                </li>
                                : <></>}
                            <li>Turn on Power</li>
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
                            <li>Jump Pad to Exit 115</li>
                            <img className='big-image'
                                src='/aotd/labled-exit-115.webp'
                                alt='Labled exit 114'
                                decoding='async'
                                loading='lazy'/>
                            <img className='big-image'
                                src='/aotd/inside-exit-115.webp'
                                alt='Inside exit 114'
                                decoding='async'
                                loading='lazy'/>
                            {(selectedPerk.match(/juggernog|stamin-up|speed-cola/)) ? <li>Free Perk Part</li> : <></>}
                            <ul>
                                {(selectedPerk === 'juggernog') ? <li>Juggernog — Eggs</li> : <></>}
                                {(selectedPerk === 'stamin-up') ? <li>Stamin-Up — Gasoline</li> : <></>}
                                {(selectedPerk === 'speed-cola') ? <li>Speed Cola — Unknown Ingredient 2</li> : <></>}
                            </ul>
                            <li>Drink Free Perk</li>
                            <li>
                                Get Freezer Key from
                                <span className='high-value-target'> Cook</span>
                            </li>
                            <li>Open Freezer</li>
                            <li>Grab Carcass</li>
                            <li>Jump Pad to Ashwood</li>
                            <li>Install Carcass on Tessie</li>
                            <img className='big-image'
                                src='/aotd/labled-ashwood.webp'
                                alt='Labled ashwood'
                                decoding='async'
                                loading='lazy'/>
                        </ol>
                    </div>
                    {/* UBERKLAUS */}
                    {(canXKlaus === 'yes')
                        ? <></>
                        : <div>
                            <div className='title'>
                                <span></span>
                                <span>UBERKLAUS</span>
                                <span></span>
                            </div>
                            <img className='big-image'
                                src='/aotd/labled-farm.webp'
                                alt='Labled farm'
                                decoding='async'
                                loading='lazy'/>
                            <div className='sub-title'>
                                <div>
                                    <span>Steps</span>
                                    <div className='note'>
                                        <span>[</span>
                                        <div className='subnote'>
                                            <span>Plaza</span>
                                            <span className='normal'>= Janus Towers Plaza</span>
                                        </div>
                                        <span>]</span>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <ol>
                                <li>Drive to Farm</li>
                                <li>Grab Jar</li>
                                <li>Jump Pad to Plaza</li>
                                {(codeFarm[0] != -1) && (codeFarm[1] != -1) && (codeFarm[2] != -1)
                                    ? <></>
                                    : <ul className='choices-code'>
                                        <li>Look at the Roofs at Farm, what Symbols?</li>
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
                                <img className='big-image'
                                    src='/aotd/labled-spawn.webp'
                                    alt='Labled spawn'
                                    decoding='async'
                                    loading='lazy'/>
                                <li>Jump Pad to Farm</li>
                                <li>Shoot free Insta-Kill</li>
                                <li>
                                    Kill
                                    <span className='high-value-target'> Uber Klaus</span>
                                </li>
                                <li>Grab Stabilizer Chip</li>
                                <li>Jump Pad to Ashwood</li>
                            </ol>
                        </div>}
                    {/* Do a Barrel Roll */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Do a Barrel Roll</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/aotd/labled-ashwood.webp'
                            alt='Labled ashwood'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <div>
                                <span>Steps</span>
                                <div className='note'>
                                    <span>[</span>
                                    <div className='subnote'>
                                        <span>Lake</span>
                                        <span className='normal'>= Blackwater Lake</span>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <ol>
                            <li>Travel to Klaus's Location</li>
                            <li>
                                Throw 2~
                                <span className='stun'> Stuns </span>
                                at Klaus
                            </li>
                            {(canXKlaus === 'no') ? <li>Teleport Tessie</li> : <></>}
                            <li>Drive to Cosmodrone</li>
                            <img className='big-image'
                                src='/aotd/labled-cosmodrone.webp'
                                alt='Labled cosmodrone'
                                decoding='async'
                                loading='lazy'/>
                            <img className='big-image'
                                src='/aotd/panel-cosmodrone.webp'
                                alt='Panel cosmodrone'
                                decoding='async'
                                loading='lazy'/>
                            <li>Command Klaus on Panel</li>
                            <li>Interact with Panel</li>
                            <li>Stand in Red Circle</li>
                            <li>Once Completed, Grab Barrel</li>
                            <li>Put Barrel on Top of Tessie</li>
                            <li>
                                <div className='image-list'>
                                    <span>Buy Wisp Tea</span>
                                    <img className='perk'
                                        src='/perks/wisp-tea.webp'
                                        alt='Perk wisp tea'
                                        decoding='async'
                                        loading='lazy'/>
                                </div>
                            </li>
                            <li>Jump Pad to Ashwood</li>
                            <img className='big-image'
                                src='/aotd/labled-ashwood.webp'
                                alt='Labled ashwood'
                                decoding='async'
                                loading='lazy'/>
                            <li>Put Wisp in Mirror</li>
                            <li>Teleport Tessie</li>
                            {(isSolo) ? <li>Grab <span className='molotov'>Molotov</span></li> : <></>}
                            <li>Grab Barrel</li>
                            <li>Put Barrel in Ashwood Pump</li>
                            <li>Put Barrel in Lake Pump</li>
                            <li>Put Barrel in Farm Pump</li>
                            {(canXKlaus === 'yes') ? <li>Grab Jar</li> : <></>}
                            {(isSolo) ? <li><span className='molotov'>Molotov </span> foot</li> : <></>}
                            {(isSolo) ? <li>Grab feet</li> : <></>}
                            <li>Put Barrel at Cube</li>
                            <li>Input Code</li>
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
                            <li>Jump Pad to Ashwood</li>
                        </ol>
                    </div>
                    {/* Cocaine & Blood */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Cocaine & Blood</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/aotd/labled-cosmodrone.webp'
                            alt='Labled cosmodrone'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <div>
                                <span>Steps</span>
                            </div>
                            <div></div>
                        </div>
                        <ol>
                            <li>
                                Shoot Mirror with
                                <span className='high-value-weapon'> Wonder Weapon</span>
                            </li>
                            <li>Grab Powder</li>
                            <li>Drive to Cosmodrone</li>
                            <li>Travel to Yuri's Lab</li>
                            <li>Place Powder</li>
                            {(codeLab.length >= 3)
                                ? <></>
                                : <ul>
                                    <li>Look at the First Symbol only, what Symbols?</li>
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
                                    <li>Get Missing Parts</li>
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
                            <li>Input Code</li>
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
                            <li>Add Blood</li>
                            <li><span className='note-dont-die'>Don't Die</span></li>
                        </ol>
                    </div>
                    {/* Yellow Green Red */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Yellow Green Red</span>
                            <span></span>
                        </div>
                        <div className='sub-title'>
                            <div>
                                <span>Steps</span>
                            </div>
                            <div></div>
                        </div>
                        <ol>
                            <li>
                                Get Yellow Key by Shooting
                                <span className='high-value-weapon'> Wonder Weapon </span>
                                at the Key then Reloading
                            </li>
                            <ul>
                                <li>Ashwood &#8596; Cosmodrone</li>
                            </ul>
                            <img className='big-image'
                                src='/aotd/yellow-key-1-2.webp'
                                alt='Yellow key spots 1 and 2'
                                decoding='async'
                                loading='lazy'/>
                            <img className='big-image'
                                src='/aotd/yellow-key-3.webp'
                                alt='Yellow key spot 3'
                                decoding='async'
                                loading='lazy'/>
                            <li>Put in Cube</li>
                            <img className='big-image'
                                src='/aotd/labled-ashwood.webp'
                                alt='Labled ashwood'
                                decoding='async'
                                loading='lazy'/>
                            <li>Get Green Key</li>
                            <ul>
                                <li>Ashwood &#8596; Farm</li>
                            </ul>
                            <img className='big-image'
                                src='/aotd/green-key-1-2.webp'
                                alt='Green key spots 1 and 2'
                                decoding='async'
                                loading='lazy'/>
                            <img className='big-image'
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
                            <img className='big-image'
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
                            <span></span>
                            <span>The Souls That Were Lost</span>
                            <span></span>
                        </div>
                        <div className='sub-title'>
                            <div>
                                <span>Steps</span>
                                <div className='note'>
                                    <span>[</span>
                                    <div className='subnote'>
                                        <span>Lake</span>
                                        <span className='normal'>= Blackwater Lake</span>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <ol>
                            <li>Shoot Floating Clock at Ashwood with Turret</li>
                            <li>
                                Shoot 1 Side of Floating Clock with
                                <span className='high-value-weapon'> Wonder Weapon </span>
                                and Reload to Turn Purple
                            </li>
                            <li>Jump Pad to Cosmodrone</li>
                            <img className='big-image'
                                src='/aotd/labled-cosmodrone.webp'
                                alt='Labled cosmodrone'
                                decoding='async'
                                loading='lazy'/>
                            <li>Shoot 1 Tower</li>
                            <li>Jump Pad to Ashwood</li>
                            <li>Turn Purple</li>
                            <li>Jump Pad to Farm</li>
                            <img className='big-image'
                                src='/aotd/labled-farm.webp'
                                alt='Labled farm'
                                decoding='async'
                                loading='lazy'/>
                            <li>Look at the Clock on Wall</li>
                            <li>Look at the Floor near the Table</li>
                            <li>Stand on the Hour Shown</li>
                            <li>Shoot the Head once the Eyes Glow</li>
                            <li>Grab Parts</li>
                            <li>Place and Activate the Parts</li>
                            <li>Protect the Parts</li>
                            <ul>
                                <li>Can use free Nuke at Ashwood to Skip ~30s</li>
                            </ul>
                            <li>Once Completed, Jump Pad to Ashwood</li>
                            <li><span className='note-clock'>Shoot Clock with Turret when Needed</span></li>
                            <li>Turn Purple</li>
                            <li>Drive to Exit 115</li>
                            <img className='big-image'
                                src='/aotd/labled-exit-115.webp'
                                alt='Labled exit 115'
                                decoding='async'
                                loading='lazy'/>
                            <li>Put Tessie against Truck</li>
                            <li>Jump Pad to Cosmodrone</li>
                            <img className='big-image'
                                src='/aotd/labled-cosmodrone.webp'
                                alt='Labled cosmodrone'
                                decoding='async'
                                loading='lazy'/>
                            <li>Shoot Last Tower</li>
                            <li>Read Monitor</li>
                            {(codeSoulsCosmodrone.length === 0)
                                ? <ul>
                                    <li>Look at the First Monitor, what is the First Symbol?</li>
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
                            <img className='big-image'
                                src='/aotd/monitor-cosmodrone.webp'
                                alt='Monitor cosmodrone'
                                decoding='async'
                                loading='lazy'/>
                            <li>Input Code</li>
                            <div className='codes'>
                                {codeSoulsCosmodrone.map((number, numberIndex) => {
                                    return <button className='symbol'
                                        key={`symbol-code-souls-cosmodrone-${numberIndex}`}>
                                        {number}
                                    </button>
                                })}
                            </div>
                            <li>Jump Pad to Ashwood</li>
                            <li>Turn Purple</li>
                            <li>Teleport to Tessie</li>
                            <img className='big-image'
                                src='/aotd/labled-exit-115.webp'
                                alt='Labled exit 115'
                                decoding='async'
                                loading='lazy'/>
                            <li>Summon Klaus in the Building Under the Clock</li>
                            <li>Once Summoned, Shoot Clock on Top of Service Station</li>
                            <li>Command Klaus on Mechanic</li>
                            <li>Actviate the Cashier by Meleeing the Cash Register</li>
                            <img className='big-image'
                                src='/aotd/inside-exit-115.webp'
                                alt='Inside exit 115'
                                decoding='async'
                                loading='lazy'/>
                            <li>Bring the Cashier to the Purple Lightning</li>
                            <img className='big-image'
                                src='/aotd/souls-exit-115.webp'
                                alt='Souls exit 115'
                                decoding='async'
                                loading='lazy'/>
                            <li>Activate the Trucker by Getting Close</li>
                            <li>Bring the Trucker to the Pink Lightning</li>
                            <li>Activate the Mechanic by Getting Close</li>
                            <li>Bring the Mechanic to the Yellow Lightning</li>
                            <li>Jump Pad to Ashwood</li>
                            <img className='big-image'
                                src='/aotd/labled-ashwood.webp'
                                alt='Labled ashwood'
                                decoding='async'
                                loading='lazy'/>
                            <li>Jump Pad to Lake</li>
                            <img className='big-image'
                                src='/aotd/labled-lake.webp'
                                alt='Labled lake'
                                decoding='async'
                                loading='lazy'/>
                            <li>Interact with Soul near Mystery Box</li>
                            <li>Shoot Projector</li>
                            <li>Look at the Screen</li>
                            {(codeSoulsLake.length >= 4)
                                ? <></>
                                : <ul>
                                    <li>Click the Pictures in Order</li>
                                    <div className='codes wrap'>
                                        <div className='side-activity horizontal'>
                                            <button className='image'
                                                style={{ backgroundImage: 'url(/aotd/lake-souls-tool.webp)' }}
                                                onClick={(event) => handleCodeSoulsLake(event, 'tool')}></button>
                                            <button className='symbol long'>Tool</button>
                                        </div>
                                        <div className='side-activity horizontal'>
                                            <button className='image'
                                                style={{ backgroundImage: 'url(/aotd/lake-souls-front.webp)' }}
                                                onClick={(event) => handleCodeSoulsLake(event, 'front')}></button>
                                            <button className='symbol long'>Front</button>
                                        </div>
                                        <div className='side-activity horizontal'>
                                            <button className='image'
                                                style={{ backgroundImage: 'url(/aotd/lake-souls-back.webp)' }}
                                                onClick={(event) => handleCodeSoulsLake(event, 'back')}></button>
                                            <button className='symbol long'>Back</button>
                                        </div>
                                        <div className='side-activity horizontal'>
                                            <button className='image'
                                                style={{ backgroundImage: 'url(/aotd/lake-souls-shed.webp)' }}
                                                onClick={(event) => handleCodeSoulsLake(event, 'shed')}></button>
                                            <button className='symbol long'>Shed</button>
                                        </div>
                                    </div>
                                </ul>}
                            <li>Shoot Reels</li>
                            <div className='codes wrap'>
                                {codeSoulsLake.map((location) => {
                                    return <div className='side-activity horizontal'
                                        key={`lake-souls-location-${location}`}>
                                        <button className='image'
                                            style={{ backgroundImage: `url(/aotd/lake-souls-${location}.webp)` }}></button>
                                        <button className='symbol long'>
                                            {location.replace(/^./, (char) => char.toUpperCase())}
                                        </button>
                                    </div>
                                })}
                            </div>
                            <li>Activate Box and Put Klaus on it</li>
                        </ol>
                    </div>
                </>}
        </section>
    );
};

export default memo(AOTD);