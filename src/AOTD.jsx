import { memo, useRef, useState } from 'react';
import Draggable from 'react-draggable';

//#region Symbols Farm
const symbolMale = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <circle cx='38' cy='62' r='25'/>
        <path d='M56 44 L78 22'/>
        <path d='M66 22 H78 V34'/>
    </g>
</svg>;
const symbolDiamond = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='6' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M20 50 L40 30 L60 50 L40 70 Z'/>
        <path d='M60 50 H78'/>
        <circle cx='84' cy='50' r='7'/>
    </g>
</svg>;
const symbolTriangle = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='6' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M15 32 H85 L50 78 Z'/>
        <path d='M38 55 L50 43 L62 55 L50 67 Z'/>
    </g>
</svg>;
const symbolFemale = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round'>
        <circle cx='50' cy='43' r='23'/>
        <path d='M50 66 V87'/>
        <path d='M40 78 H60'/>
    </g>
</svg>;
const symbolArrows = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <circle cx='50' cy='50' r='29'/>
        <path d='M27 30 L38 41'/>
        <path d='M73 30 L62 41'/>
        <path d='M27 70 L38 59'/>
        <path d='M73 70 L62 59'/>
    </g>
</svg>;
const symbolCircleDot = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7'>
        <circle cx='50' cy='50' r='29'/>
    </g>

    <circle cx='50' cy='50' r='8' fill='rgb(37, 44, 45)'/>
</svg>;
const symbolCross = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round'>
        <circle cx='50' cy='50' r='29'/>
        <path d='M50 21 V79'/>
        <path d='M21 50 H79'/>
    </g>
</svg>;
const symbolBar = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round'>
        <circle cx='50' cy='50' r='29'/>
        <path d='M21 50 H79'/>
    </g>
    <ellipse cx='50' cy='50' rx='10' ry='5' fill='rgb(37, 44, 45)'/>
</svg>;
const symbolHook = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round'>
        <circle cx='43' cy='48' r='27'/>
        <path d='M63 67 L77 81'/>
    </g>
</svg>;
const symbolThreeDots = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='6'>
        <circle cx='50' cy='30' r='11'/>
        <circle cx='28' cy='63' r='11'/>
        <circle cx='72' cy='63' r='11'/>
    </g>
</svg>;
const symbolPlatform = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='6' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M20 63 H80'/>
        <path d='M28 63 V53'/>
        <path d='M72 63 V53'/>
        <path d='M30 53 H38'/>
        <path d='M62 53 H70'/>
        <path d='M38 53 C38 35 62 35 62 53'/>
    </g>
</svg>;
const symbolStar = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='6' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M50 15 V85'/>
        <path d='M15 50 H85'/>
        <path d='M25 25 L75 75'/>
        <path d='M75 25 L25 75'/>
        <path d='M50 15 L44 21 M50 15 L56 21'/>
        <path d='M85 50 L79 44 M85 50 L79 56'/>
        <path d='M50 85 L44 79 M50 85 L56 79'/>
        <path d='M15 50 L21 44 M15 50 L21 56'/>
    </g>
</svg>;
//#endregion
//#region Symbols Lab
const symbolFeet = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M30 25 L70 50 L30 75'/>
    </g>
</svg>;
const symbolChunk = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 V75 H75'/>
    </g>
</svg>;
const symbolWidow = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M30 25 V75'/>
        <path d='M30 25 H70'/>
        <path d='M30 75 H70'/>
    </g>
</svg>;
const symbolEye = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M30 25 V75'/>
        <path d='M30 25 H70'/>
        <path d='M30 75 H70'/>
        <circle cx='55' cy='50' r='5' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;
const symbolLimb = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 V75 H75'/>
        <circle cx='50' cy='50' r='4' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;
//#endregion
//#region Symbols Cosmodrone
const symbolLaunch = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 V75 H75'/>
        <circle cx='50' cy='50' r='4' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;
const symbolEngine = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <rect x='25' y='25' width='50' height='50'/>
    </g>
</svg>;
const symbolRocket = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 H75 V75'/>
        <circle cx='50' cy='50' r='4' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;
const symbolWeapon = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 L50 75 L75 25'/>
        <circle cx='50' cy='43' r='5' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;
//#endregion
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

const AOTD = ({ isSolo }) => {
    const [isSideOpen, setIsSideOpen] = useState(false);
    const [selectedPerk, setSelectedPerk] = useState('');
    const [canXKlaus, setCanXKlaus] = useState('');
    const [codeFarm, setCodeFarm] = useState([]);
    const [codeLab, setCodeLab] = useState([]);
    const [codeLabInteract, setCodeLabInteract] = useState([]);
    const [hasChunk, setHasChunk] = useState(false);
    const [hasEye, setHasEye] = useState(false);
    const [hasLimb, setHasLimb] = useState(false);
    const [codeSoulsCosmodrone, setCodeSoulsCosmodrone] = useState([]);
    const [codeSoulsLake, setCodeSoulsLake] = useState([]);

    const refSideActivities = useRef(null);

    const handleCodeFarmClick = (symbol) => {
        setCodeFarm([...codeFarm, symbol]);
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
            {(hasChunk && hasEye && hasLimb)
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
                            {(!hasChunk)
                                ? <li>
                                    <div className='side-activity'>
                                        <span>{mapSymbolLabMissing[2]}</span>
                                        <button onClick={() => setHasChunk(true)}>Done</button>
                                    </div>
                                </li>
                                : <></>}
                            {(!hasEye)
                                ? <li>
                                    <div className='side-activity'>
                                        <span>{mapSymbolLabMissing[4]}</span>
                                        <button onClick={() => setHasEye(true)}>Done</button>
                                    </div>
                                </li>
                                : <></>}
                            {(!hasLimb)
                                ? <li>
                                    <div className='side-activity'>
                                        <span>{mapSymbolLabMissing[5]}</span>
                                        <button onClick={() => setHasLimb(true)}>Done</button>
                                    </div>
                                </li>
                                : <></>}
                        </ul>
                    </div>
                </Draggable>}
            {(selectedPerk === '')
                ? <div className='popup'>
                    <span>What free perk?</span>
                    <div className='choices'>
                        <button onClick={() => setSelectedPerk('speed-cola')}>Speed Cola</button>
                        <button onClick={() => setSelectedPerk('juggernaut')}>Juggernaut</button>
                        <button onClick={() => setSelectedPerk('quick-revive')}>Quick Revive</button>
                        <button onClick={() => setSelectedPerk('stamin-up')}>Stamin-Up</button>                </div>
                    </div>
                : <></>}
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
                            Look for
                            <span className='tomahawk'> Tomahawk</span>
                        </li>
                        : <li>
                            Look for
                            <span className='tomahawk'> Tomahawk </span>
                            —
                            <span className='molotov'> Molotov </span>
                            —
                            <span className='stun'> Stun </span>
                        </li>}
                </ul>
                <ol>
                    <li>Install T.E.D.D.'s Head</li>
                    {(isSolo)
                        ? <></>
                        : <ul>
                            <li>
                                <span className='stun'>Stuns</span> in this room
                            </li>
                        </ul>}
                    <li>Drive to Lake</li>
                    <ul>
                        <li>Don't activate Uber Klaus</li>
                        <li>Driving over Green Spores heal Tessie and gives Essence or Salvage</li>
                    </ul>
                </ol>
            </div>
            <div>
                <div className='title'>
                    <span>The Jar</span>
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
                    <li><span className='note-plants'>Don't forget to grow plants if Toxic Growth!</span></li>
                    {(selectedPerk.match(/speed-cola|quick-revive/)) ? <li>Free Perk Part</li> : <></>}
                    <ul>
                        {(selectedPerk === 'speed-cola') ? <li>Speed Cola — Herb</li> : <></>}
                        {(selectedPerk === 'quick-revive') ? <li>Quick Revive — Fish</li> : <></>}
                    </ul>
                    {(isSolo) ? <></> : <li>Canister [1]</li>}
                    <li>Tomahawk Side Easter Egg</li>
                </ul>
                <ol>
                    <li>Turn on power</li>
                    <li>Grab Jar</li>
                    <li>Drive to Farm through Plaza</li>
                    <ul>
                        <li>Don't activate Uber Klaus</li>
                    </ul>
                </ol>
            </div>
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
                    {(selectedPerk.match(/juggernaut|stamin-up/)) ? <li>Free Perk Part</li> : <></>}
                    <ul>
                        {(selectedPerk === 'juggernaut') ? <li>Juggernaut — Jar</li> : <></>}
                        {(selectedPerk === 'stamin-up') ? <li>Stamin-Up — Box of Ingredients</li> : <></>}
                    </ul>
                    {(isSolo) ? <></> : <li>Canister [1]</li>}
                </ul>
                <ol>
                    <li>Place Jar</li>
                    <li>Turn on power</li>
                    <li>Tomahawk Foot</li>
                    {(isSolo)
                        ? <></>
                        : <>
                            <li>Molotov Foot</li>
                            <li>Grab Foot</li>
                        </>}
                    {(canXKlaus === '')
                        ? <>
                            <li>Can you kill Uber Klaus?</li>
                            <span className='choices-list-item'>
                                <div className='choices'>
                                    <button onClick={() => setCanXKlaus('yes')}>Yes</button>
                                    <button onClick={() => setCanXKlaus('no')}>No</button>
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
                        {(codeFarm.length >= 3)
                            ? <></>
                            : <ul className='choices-code'>
                                <li>What are the symbols?</li>
                                {(codeFarm.length >= 1)
                                    ? <></>
                                    : <div className='choices'>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolMale)}>
                                            {symbolMale}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolDiamond)}>
                                            {symbolDiamond}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolTriangle)}>
                                            {symbolTriangle}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolFemale)}>
                                            {symbolFemale}
                                        </button>
                                    </div>}
                                {(codeFarm.length >= 2)
                                    ? <></>
                                    : <div className='choices'>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolArrows)}>
                                            {symbolArrows}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolCircleDot)}>
                                            {symbolCircleDot}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolCross)}>
                                            {symbolCross}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolBar)}>
                                            {symbolBar}
                                        </button>
                                    </div>}
                                {(codeFarm.length >= 3)
                                    ? <></>
                                    : <div className='choices'>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolHook)}>
                                            {symbolHook}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolThreeDots)}>
                                            {symbolThreeDots}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolPlatform)}>
                                            {symbolPlatform}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolStar)}>
                                            {symbolStar}
                                        </button>
                                    </div>}
                            </ul>}
                            <li>Activate Uber Klaus</li>
                            <li>Jump pad to Farm</li>
                            <li>Shoot free Insta-Kill</li>
                            <li>Grab Stabilizer Chip</li>
                        </>
                        : <></>}
                    <li>Drive to Ashwood</li>
                </ol>
            </div>
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
                    {(selectedPerk.match(/stamin-up|speed-cola/)) ? <li>Free Perk Part</li> : <></>}
                    <ul>
                        {(selectedPerk === 'stamin-up') ? <li>Stamin-Up — Bag of Beans</li> : <></>}
                        {(selectedPerk === 'speed-cola') ? <li>Speed Cola — Nuts</li> : <></>}
                    </ul>
                    {(isSolo) ? <></> : <li>Canister [1]</li>}
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
                    <li>Install Carcass</li>
                </ol>
            </div>
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
                    <ol>
                        <li>Drive to Farm</li>
                        <li>Grab Jar</li>
                        <li>Jump pad to Plaza</li>
                        {(codeFarm.length >= 3)
                            ? <></>
                            : <ul className='choices-code'>
                                <li>What are the symbols?</li>
                                {(codeFarm.length >= 1)
                                    ? <></>
                                    : <div className='choices'>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolMale)}>
                                            {symbolMale}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolDiamond)}>
                                            {symbolDiamond}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolTriangle)}>
                                            {symbolTriangle}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolFemale)}>
                                            {symbolFemale}
                                        </button>
                                    </div>}
                                {(codeFarm.length >= 2)
                                    ? <></>
                                    : <div className='choices'>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolArrows)}>
                                            {symbolArrows}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolCircleDot)}>
                                            {symbolCircleDot}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolCross)}>
                                            {symbolCross}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolBar)}>
                                            {symbolBar}
                                        </button>
                                    </div>}
                                {(codeFarm.length >= 3)
                                    ? <></>
                                    : <div className='choices'>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolHook)}>
                                            {symbolHook}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolThreeDots)}>
                                            {symbolThreeDots}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolPlatform)}>
                                            {symbolPlatform}
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleCodeFarmClick(symbolStar)}>
                                            {symbolStar}
                                        </button>
                                    </div>}
                            </ul>}
                        <li>Activate Uber Klaus</li>
                        <li>Jump pad to Farm</li>
                        <li>Shoot free Insta-Kill</li>
                        <li>Grab Stabilizer Chip</li>
                        <li>Jump pad to Ashwood</li>
                    </ol>
                </div>}
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
                <ol>
                    <li>Stun Klaus</li>
                    {(canXKlaus === 'no') ? <li>Teleport Tessie</li> : <></>}
                    <li>Drive to Cosmodrone</li>
                    <li>Activate Barrel</li>
                    <li>Put Barrel on top of Tessie</li>
                    <li>Buy Wisp Tea</li>
                    <li>Jump pad to Ashwood</li>
                    <li>Put Wisp in Mirror</li>
                    <li>Teleport Tessie</li>
                    {(isSolo) ? <li>Grab Molotov</li> : <></>}
                    <li>Grab Barrel</li>
                    <li>Put Barrel in Ashwood pump</li>
                    <li>Put Barrel in Lake pump</li>
                    <li>Put Barrel in Farm pump</li>
                    {(canXKlaus === 'yes') ? <li>Grab Jar</li> : <></>}
                    {(isSolo) ? <li>Molotov foot</li> : <></>}
                    {(isSolo) ? <li>Grab feet</li> : <></>}
                    <li>Put Barrel at Cube</li>
                    <li>Input code</li>
                    <div className='codes'>
                        {codeFarm.map((symbol) => {
                            return <button className='symbol'>
                                {symbol}
                            </button>
                        })}
                    </div>
                    <li>Grab Wonder Weapon</li>
                    <li>Jump pad to Ashwood</li>
                </ol>
            </div>
            <div>
                <div className='title'>
                    <span>Cocaine & Blood</span>
                </div>
                <ol>
                    <li>Shoot mirror with Wonder Weapon</li>
                    <li>Grab Powder</li>
                    <li>Drive to Cosmodrone</li>
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
                        {codeLab.map((symbol) => {
                            return <button className='symbol'>
                                {symbol}
                            </button>
                        })}
                    </div>
                    <div className='codes'>
                        {codeLabInteract.sort().map((symbol) => {
                            return <button className='symbol'>
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
            <div>
                <div className='title'>
                    <span>Yellow Green Red</span>
                </div>
                <ol>
                    <li>Get Yellow Key</li>
                    <ul>
                        <li>Ashwood — Cosmodrone</li>
                    </ul>
                    <li>Put in Cube</li>
                    <li>Get Green Key</li>
                    <ul>
                        <li>Ashwood — Farm</li>
                    </ul>
                    <li>Put in Cube</li>
                    <li>Get Red Key</li>
                    <ul>
                        <li>Ashwood — Exit 115</li>
                    </ul>
                    <li>Put in Cube</li>
                    <li>Grab Turret</li>
                    <li>Install Turret</li>
                </ol>
            </div>
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
                    <li>Shoot Clock with Turret</li>
                    <li>Turn Purple</li>
                    <li>Jump pad to Cosmodrone</li>
                    <li>Shoot a Tower</li>
                    <li>Jump pad to Ashwood</li>
                    <li>Turn Purple</li>
                    <li>Jump pad to Farm</li>
                    <li>Shoot Clock</li>
                    <li>Stand on the time shown</li>
                    <li>Shoot the head once turned</li>
                    <li>Grab parts</li>
                    <li>Place and activate the parts</li>
                    <li>Protect the parts</li>
                    <ul>
                        <li>Can use free Nuke to skip ~30s at Ashwood</li>
                    </ul>
                    <li>Jump pad to Ashwood</li>
                    <li>
                        <span className='note-clock'>Shoot Clock with Turret when needed</span>
                    </li>
                    <li>Turn Purple</li>
                    <li>Drive to Exit 115</li>
                    <li>Put Tessie against the Truck</li>
                    <li>Jump pad to Cosmodrone</li>
                    <li>Shoot last Tower</li>
                    <li>Read screen</li>
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
                        {codeSoulsCosmodrone.map((number) => {
                            return <button className='symbol'>{number}</button>
                        })}
                    </div>
                    <li>Call Klaus</li>
                    <li>Jump pad to Ashwood</li>
                    <li>Turn Purple</li>
                    <li>Teleport to Tessie</li>
                    <li>Shoot Clock</li>
                    <li>Put Klaus on the Mechanic</li>
                    <li>Dunk the Cashier</li>
                    <li>Dunk the Trucker</li>
                    <li>Dunk the Mechanic</li>
                    <li>Jump pad to Ashwood</li>
                    <li>Jump pad to Lake</li>
                    <li>Shoot Projector</li>
                    <li>Read Pictures</li>
                    {(codeSoulsLake.length >= 4)
                        ? <></>
                        : <ul>
                            <li>Click the pictures in order.</li>
                            <div className='codes'>
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
                            </div>
                        </ul>}
                    <li>Shoot Reels</li>
                    <div className='lake'>
                        <span>{codeSoulsLake.indexOf(1) + 1}</span>
                        <span>{codeSoulsLake.indexOf(2) + 1}</span>
                        <span>{codeSoulsLake.indexOf(3) + 1}</span>
                        <span>{codeSoulsLake.indexOf(4) + 1}</span>
                    </div>
                    <li>Activate Box and put Klaus on it</li>
                </ol>
            </div>
        </section>
    );
};

export default memo(AOTD);