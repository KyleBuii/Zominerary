import { memo, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { symbolArch, symbolC, symbolCDot, symbolCircle, symbolCircleDot, symbolCross, symbolFemale, symbolHalfCircle, symbolHCDot, symbolHL, symbolHook, symbolL, symbolLDot, symbolLeftArrow, symbolLine, symbolMale, symbolRightArrow, symbolSquare, symbolSquareDot, symbolStar, symbolThreeCircles, symbolTriangle, symbolUmbrella, symbolV, symbolVArch, symbolVArchDot, symbolVDot, symbolVHL, symbolVHLDot, symbolVL, symbolVLDot } from './Symbols.jsx';

const mapSymbolLab = {
    feet  : symbolRightArrow,
    chunk : symbolL,
    widow : symbolC,
    eye   : symbolCDot,
    limb  : symbolLDot,
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
    engine: [4 , 13, 6 , 8 , 13, 4 ],
    launch: [11, 0 , 20, 13, 2 , 7 ],
    rocket: [17, 14, 2 , 10, 4 , 19],
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
                        <span></span>
                        <span>Farm</span>
                        <span></span>
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
                        <span></span>
                        <span>Lab</span>
                        <span></span>
                    </div>
                    {(showSolver)
                        ? <div>
                            <div className='codes'>
                                <button className='symbol'>{symbolRightArrow}</button>
                                <button className='symbol'>{symbolHL}</button>
                                <button className='symbol'>{symbolLDot}</button>
                                <button className='symbol'>{symbolLeftArrow}</button>
                                <button className='symbol'>{symbolV}</button>
                                <button className='symbol long'>Tomahawk Feet</button>
                                <button className='symbol long'>Bones</button>
                            </div>
                            <div className='codes'>
                                <button className='symbol'>{symbolL}</button>
                                <button className='symbol'>{symbolCDot}</button>
                                <button className='symbol'>{symbolSquareDot}</button>
                                <button className='symbol'>{symbolL}</button>
                                <button className='symbol'>{symbolArch}</button>
                                <button className='symbol long'>Tessie Beam</button>
                                <button className='symbol long'>Chunk</button>
                            </div>
                            <div className='codes'>
                                <button className='symbol'>{symbolC}</button>
                                <button className='symbol'>{symbolLeftArrow}</button>
                                <button className='symbol'>{symbolSquareDot}</button>
                                <button className='symbol'>{symbolVHL}</button>
                                <button className='symbol'>{symbolVL}</button>
                                <button className='symbol long'>Jar</button>
                                <button className='symbol long'>Lantern</button>
                            </div>
                            <div className='codes'>
                                <button className='symbol'>{symbolCDot}</button>
                                <button className='symbol'>{symbolL}</button>
                                <button className='symbol'>{symbolLeftArrow}</button>
                                <button className='symbol'>{symbolLDot}</button>
                                <button className='symbol'>{symbolVL}</button>
                                <button className='symbol long'>Trap Ravager</button>
                                <button className='symbol long'>Eyes</button>
                            </div>
                            <div className='codes'>
                                <button className='symbol'>{symbolLDot}</button>
                                <button className='symbol'>{symbolVL}</button>
                                <button className='symbol'>{symbolHCDot}</button>
                                <button className='symbol'>{symbolVArch}</button>
                                <button className='symbol'>{symbolV}</button>
                                <button className='symbol long'>Beam Zursa</button>
                                <button className='symbol long'>Limb</button>
                            </div>
                        </div>
                        : <div>
                            {(codeLab.length >= 3)
                                ? <></>
                                : <div className='codes'>
                                    <button className='symbol'
                                        onClick={() => handleCodeLabClick('feet')}>{symbolRightArrow}</button>
                                    <button className='symbol'
                                        onClick={() => handleCodeLabClick('chunk')}>{symbolL}</button>
                                    <button className='symbol'
                                        onClick={() => handleCodeLabClick('widow')}>{symbolC}</button>
                                    <button className='symbol'
                                        onClick={() => handleCodeLabClick('eye')}>{symbolCDot}</button>
                                    <button className='symbol'
                                        onClick={() => handleCodeLabClick('limb')}>{symbolLDot}</button>
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
                        </div>}
                    <div className='title'>
                        <span></span>
                        <span>Cosmodrone</span>
                        <span></span>
                    </div>
                    {(showSolver)
                        ? <div>
                            <div className='codes'>
                                <button className='symbol'>{symbolSquare}</button>
                                <button className='symbol'>{symbolSquareDot}</button>
                                <button className='symbol'>{symbolVHL}</button>
                                <button className='symbol'>{symbolVL}</button>
                                <button className='symbol'>{symbolSquareDot}</button>
                                <button className='symbol'>{symbolSquare}</button>
                                <button className='symbol long'>Engine</button>
                            </div>
                            <div className='codes'>
                                <button className='symbol'>{symbolLDot}</button>
                                <button className='symbol'>{symbolHL}</button>
                                <button className='symbol'>{symbolLeftArrow}</button>
                                <button className='symbol'>{symbolSquareDot}</button>
                                <button className='symbol'>{symbolL}</button>
                                <button className='symbol'>{symbolArch}</button>
                                <button className='symbol long'>Launch</button>
                            </div>
                            <div className='codes'>
                                <button className='symbol'>{symbolVLDot}</button>
                                <button className='symbol'>{symbolCDot}</button>
                                <button className='symbol'>{symbolL}</button>
                                <button className='symbol'>{symbolVArchDot}</button>
                                <button className='symbol'>{symbolSquare}</button>
                                <button className='symbol'>{symbolRightArrow}</button>
                                <button className='symbol long'>Rocket</button>
                            </div>
                            <div className='codes'>
                                <button className='symbol'>{symbolVDot}</button>
                                <button className='symbol'>{symbolSquare}</button>
                                <button className='symbol'>{symbolHL}</button>
                                <button className='symbol'>{symbolVHLDot}</button>
                                <button className='symbol'>{symbolCDot}</button>
                                <button className='symbol'>{symbolSquareDot}</button>
                                <button className='symbol long'>Weapon</button>
                            </div>
                            {Object.entries(mapSymbolSoulsCosmodrone).map(([label, numbers]) => {
                                return <div className='codes'
                                    key={`${label}-numbers`}>
                                    {numbers.map((number, numberIndex) => {
                                        return <button className='symbol'
                                            key={`solver-symbol-code-souls-cosmodrone-${label}-${number}-${numberIndex}`}>
                                            {number}
                                        </button>
                                    })}
                                    <button className='symbol long'>
                                        {label.replace(/^./, (char) => char.toUpperCase())}
                                    </button>
                                </div>
                            })}
                        </div>
                        : <div>
                            {(codeSoulsCosmodrone.length === 0)
                                ? <div className='codes'>
                                    <button className='symbol'
                                        onClick={() => handleCodeSoulsCosmodrone('launch')}>{symbolLDot}</button>
                                    <button className='symbol'
                                        onClick={() => handleCodeSoulsCosmodrone('rocket')}>{symbolVLDot}</button>
                                    <button className='symbol'
                                        onClick={() => handleCodeSoulsCosmodrone('engine')}>{symbolSquare}</button>
                                    <button className='symbol'
                                        onClick={() => handleCodeSoulsCosmodrone('weapon')}>{symbolVDot}</button>
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
                        </div>}
                    <div className='title'>
                        <span></span>
                        <span>Lake</span>
                        <span></span>
                    </div>
                    {(codeSoulsLake.length >= 4)
                        ? <></>
                        : <div className='codes wrap'>
                            <div className='side-activity horizontal'>
                                <button className='image small'
                                    style={{ backgroundImage: 'url(/aotd/projector-tool.webp)' }}
                                    onClick={(event) => handleCodeSoulsLake(event, 'tool')}></button>
                                <button className='symbol fill'>Tool</button>
                            </div>
                            <div className='side-activity horizontal'>
                                <button className='image small'
                                    style={{ backgroundImage: 'url(/aotd/projector-front.webp)' }}
                                    onClick={(event) => handleCodeSoulsLake(event, 'front')}></button>
                                <button className='symbol fill'>Front</button>
                            </div>
                            <div className='side-activity horizontal'>
                                <button className='image small'
                                    style={{ backgroundImage: 'url(/aotd/projector-back.webp)' }}
                                    onClick={(event) => handleCodeSoulsLake(event, 'back')}></button>
                                <button className='symbol fill'>Back</button>
                            </div>
                            <div className='side-activity horizontal'>
                                <button className='image small'
                                    style={{ backgroundImage: 'url(/aotd/projector-shed.webp)' }}
                                    onClick={(event) => handleCodeSoulsLake(event, 'shed')}></button>
                                <button className='symbol fill'>Shed</button>
                            </div>
                        </div>}
                    <div className='codes wrap'>
                        {codeSoulsLake.map((location) => {
                            return <div className='side-activity horizontal'
                                key={`lake-souls-location-${location}`}>
                                <button className='image'
                                    style={{ backgroundImage: `url(/aotd/disc-${location}.webp)` }}></button>
                                <button className='symbol fill'>
                                    {location.replace(/^./, (char) => char.toUpperCase())}
                                </button>
                            </div>
                        })}
                    </div>
                </>
                : <>
                    {(showSolver || (hasChunk && hasEye && hasLimb))
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
                            src='/aotd/starting-room/spawn-tips-and-tricks.webp'
                            alt='Spawn tips and tricks starting room'
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
                            {(selectedPerk === 'juggernog')
                                ? <img className='big-image'
                                    src='/aotd/juggernog-spawn.webp'
                                    alt='Juggernog part spawn'
                                    decoding='async'
                                    loading='lazy'/>
                                : <></>}
                            {(selectedPerk === 'quick-revive')
                                ? <img className='big-image'
                                    src='/aotd/quick-revive-spawn.webp'
                                    alt='Quick revive part spawn'
                                    decoding='async'
                                    loading='lazy'/>
                                : <></>}
                            <li className='sticker-container'>
                                <span>Hit Vending Machine at Pickup Area [1R]</span>
                                <img className='sticker'
                                    style={{ top: '-65px' }}
                                    src='/aotd/vending-machine.webp'
                                    alt='Vending machine'
                                    decoding='async'
                                    loading='lazy'/>
                            </li>
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
                                src='/aotd/spawn-plants.webp'
                                alt='Spawn plants'
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
                            <li>Grab and Install T.E.D.D.'s Head to Tessie</li>
                            {(isSolo)
                                ? <></>
                                : <ul>
                                    <li>
                                        <span className='stun'>Stuns</span> in this Room
                                    </li>
                                </ul>}
                            <img className='big-image'
                                src='/aotd/starting-room/spawn-steps.webp'
                                alt='Spawn steps starting room'
                                decoding='async'
                                loading='lazy'/>
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
                            src='/aotd/the-jar/lake-tips-and-tricks.webp'
                            alt='Lake tips and tricks the jar'
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
                            {(selectedPerk === 'speed-cola')
                                ? <img className='big-image'
                                    src='/aotd/speed-cola-lake.webp'
                                    alt='Speed cola part lake'
                                    decoding='async'
                                    loading='lazy'/>
                                : <></>}
                            {(selectedPerk === 'quick-revive')
                                ? <img className='big-image'
                                    src='/aotd/quick-revive-lake.webp'
                                    alt='Quick revive part lake'
                                    decoding='async'
                                    loading='lazy'/>
                                : <></>}
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
                            <img className='big-image'
                                src='/aotd/side-easter-egg-tomahawk.webp'
                                alt='Side easter egg tomahawk'
                                decoding='async'
                                loading='lazy'/>
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
                            <img className='big-image'
                                src='/aotd/the-jar/lake-steps.webp'
                                alt='Lake steps the jar'
                                decoding='async'
                                loading='lazy'/>
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
                            src='/aotd/feet/farm-tips-and-tricks.webp'
                            alt='Farm tips and tricks feet'
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
                            {(selectedPerk === 'juggernog')
                                ? <img className='big-image'
                                    src='/aotd/juggernog-farm.webp'
                                    alt='Juggernog part farm'
                                    decoding='async'
                                    loading='lazy'/>
                                : <></>}
                            {(selectedPerk === 'stamin-up')
                                ? <img className='big-image'
                                    src='/aotd/stamin-up-farm.webp'
                                    alt='Stamin up part farm'
                                    decoding='async'
                                    loading='lazy'/>
                                : <></>}
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
                            <img className='big-image'
                                src='/aotd/feet/farm-steps.webp'
                                alt='Farm steps feet'
                                decoding='async'
                                loading='lazy'/>
                            <li>Turn on Power</li>
                            <li><span className='tomahawk'>Tomahawk </span>the Left Foot of the Hanging Zombie</li>
                            <img className='big-image'
                                src='/aotd/feet/farm-feet.webp'
                                alt='Farm feet'
                                decoding='async'
                                loading='lazy'/>
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
                                        src='/aotd/uberklaus/farm-steps.webp'
                                        alt='Farm steps uber klaus'
                                        decoding='async'
                                        loading='lazy'/>
                                    <li>Activate<span className='high-value-target'> Uber Klaus</span></li>
                                    <img className='big-image'
                                        src='/aotd/uberklaus/spawn-steps.webp'
                                        alt='Spawn steps uber klaus'
                                        decoding='async'
                                        loading='lazy'/>
                                    <li>Jump Pad to Farm</li>
                                    <li>Shoot Free Insta-Kill</li>
                                    <img className='big-image'
                                        src='/aotd/free-insta-kill.webp'
                                        alt='Free insta kill'
                                        decoding='async'
                                        loading='lazy'/>
                                    <li>
                                        Kill
                                        <span className='high-value-target'> Uber Klaus</span>
                                    </li>
                                    <li>Grab Stabilizer Chip</li>
                                    <li>Jump Pad to Ashwood</li>
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
                            src='/aotd/carcass/ashwood-tips-and-tricks.webp'
                            alt='Ashwood tips and tricks carcass'
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
                            {(selectedPerk === 'stamin-up')
                                ? <img className='big-image'
                                    src='/aotd/stamin-up-ashwood.webp'
                                    alt='Stamin up part ashwood'
                                    decoding='async'
                                    loading='lazy'/>
                                : <></>}
                            {(selectedPerk === 'speed-cola')
                                ? <img className='big-image'
                                    src='/aotd/speed-cola-ashwood.webp'
                                    alt='Speed cola part ashwood'
                                    decoding='async'
                                    loading='lazy'/>
                                : <></>}
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
                            <img className='big-image'
                                src='/aotd/carcass/ashwood-steps-1.webp'
                                alt='Ashwood steps carcass'
                                decoding='async'
                                loading='lazy'/>
                            {(selectedPerk === 'quick-revive')
                                ? <>
                                    <li>Jump pad to Cosmodrone</li>
                                    <li>Free Perk Part</li>
                                    <ul>
                                        <li>Quick Revive — Syringe</li>
                                    </ul>
                                    <img className='big-image'
                                        src='/aotd/quick-revive-cosmodrone.webp'
                                        alt='Quick revive part cosmodrone'
                                        decoding='async'
                                        loading='lazy'/>
                                </>
                                : <></>}
                            <li>Jump Pad to Exit 115</li>
                            {(selectedPerk.match(/juggernog|stamin-up|speed-cola/)) ? <li>Free Perk Part</li> : <></>}
                            <ul>
                                {(selectedPerk === 'juggernog') ? <li>Juggernog — Eggs</li> : <></>}
                                {(selectedPerk === 'stamin-up') ? <li>Stamin-Up — Gasoline</li> : <></>}
                                {(selectedPerk === 'speed-cola') ? <li>Speed Cola — Unknown Ingredient 2</li> : <></>}
                            </ul>
                            {(selectedPerk === 'juggernog')
                                ? <img className='big-image'
                                    src='/aotd/juggernog-exit-115.webp'
                                    alt='Juggernog part exit 115'
                                    decoding='async'
                                    loading='lazy'/>
                                : <></>}
                            {(selectedPerk === 'stamin-up')
                                ? <img className='big-image'
                                    src='/aotd/stamin-up-exit-115.webp'
                                    alt='Stamin up part farm'
                                    decoding='async'
                                    loading='lazy'/>
                                : <></>}
                            {(selectedPerk === 'speed-cola')
                                ? <img className='big-image'
                                    src='/aotd/speed-cola-exit-115.webp'
                                    alt='Speed cola part exit 115'
                                    decoding='async'
                                    loading='lazy'/>
                                : <></>}
                            <li>Drink Free Perk</li>
                            <img className='big-image'
                                src='/aotd/carcass/exit-115-inside-steps.webp'
                                alt='Inside exit 114 steps carcass'
                                decoding='async'
                                loading='lazy'/>
                            <li>
                                Get Freezer Key from
                                <span className='high-value-target'> Cook</span>
                            </li>
                            <li>Open Freezer</li>
                            <li>Grab Carcass</li>
                            <li>Jump Pad to Ashwood</li>
                            <img className='big-image'
                                src='/aotd/carcass/exit-115-steps.webp'
                                alt='Exit 115 steps carcass'
                                decoding='async'
                                loading='lazy'/>
                            <li>Install Carcass on Tessie</li>
                            <img className='big-image'
                                src='/aotd/carcass/ashwood-steps-2.webp'
                                alt='Ashwood steps 2 carass'
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
                                src='/aotd/uberklaus/farm-steps.webp'
                                alt='Farm steps uber klaus'
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
                                <li>Activate<span className='high-value-target'> Uber Klaus</span></li>
                                <img className='big-image'
                                    src='/aotd/uberklaus/spawn-steps.webp'
                                    alt='Spawn steps uber klaus'
                                    decoding='async'
                                    loading='lazy'/>
                                <li>Jump Pad to Farm</li>
                                <li>Shoot Free Insta-Kill</li>
                                <img className='big-image'
                                    src='/aotd/free-insta-kill.webp'
                                    alt='Free insta kill'
                                    decoding='async'
                                    loading='lazy'/>
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
                            src='/aotd/do-a-barrel-roll/ashwood-steps.webp'
                            alt='Ashwood steps do a barrel a roll'
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
                            <img className='big-image'
                                src='/aotd/klaus.webp'
                                alt='Klaus'
                                decoding='async'
                                loading='lazy'/>
                            <li>
                                Throw 2~
                                <span className='stun'> Stuns </span>
                                at Klaus
                            </li>
                            {(canXKlaus === 'no') ? <li>Teleport Tessie</li> : <></>}
                            <li>Drive to Cosmodrone</li>
                            <img className='big-image'
                                src='/aotd/do-a-barrel-roll/cosmodrone-steps.webp'
                                alt='Cosmodrone steps do a barrel roll'
                                decoding='async'
                                loading='lazy'/>
                            <li>Command Klaus on Panel</li>
                            <img className='big-image'
                                src='/aotd/cosmodrone-panel.webp'
                                alt='Panel cosmodrone'
                                decoding='async'
                                loading='lazy'/>
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
                                src='/aotd/do-a-barrel-roll/ashwood-steps-2.webp'
                                alt='Ashwood steps do a barrel rool'
                                decoding='async'
                                loading='lazy'/>
                            <li>Put Wisp in Mirror</li>
                            <img className='big-image'
                                src='/aotd/ashwood-mirror.webp'
                                alt='Ashwood mirror'
                                decoding='async'
                                loading='lazy'/>
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
                            <img className='big-image'
                                src='/aotd/farm-cube.webp'
                                alt='Farm cube'
                                decoding='async'
                                loading='lazy'/>
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
                            src='/aotd/cocaine-and-blood/cosmodrone-steps.webp'
                            alt='Cosmodrone steps cocaine and blood'
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
                            <img className='big-image'
                                src='/aotd/yuris-lab.webp'
                                alt='Yuris lab'
                                decoding='async'
                                loading='lazy'/>
                            <li>Interact with Powder Plate</li>
                            {(showSolver)
                                ? <>
                                    <li>Solve Code</li>
                                    <div className='codes'>
                                        <button className='symbol'>{symbolRightArrow}</button>
                                        <button className='symbol'>{symbolHL}</button>
                                        <button className='symbol'>{symbolLDot}</button>
                                        <button className='symbol'>{symbolLeftArrow}</button>
                                        <button className='symbol'>{symbolV}</button>
                                        <button className='symbol long'>Tomahawk Feet</button>
                                        <button className='symbol long'>Bones</button>
                                    </div>
                                    <div className='codes'>
                                        <button className='symbol'>{symbolL}</button>
                                        <button className='symbol'>{symbolCDot}</button>
                                        <button className='symbol'>{symbolSquareDot}</button>
                                        <button className='symbol'>{symbolL}</button>
                                        <button className='symbol'>{symbolArch}</button>
                                        <button className='symbol long'>Tessie Beam</button>
                                        <button className='symbol long'>Chunk</button>
                                    </div>
                                    <div className='codes'>
                                        <button className='symbol'>{symbolC}</button>
                                        <button className='symbol'>{symbolLeftArrow}</button>
                                        <button className='symbol'>{symbolSquareDot}</button>
                                        <button className='symbol'>{symbolVHL}</button>
                                        <button className='symbol'>{symbolVL}</button>
                                        <button className='symbol long'>Jar</button>
                                        <button className='symbol long'>Lantern</button>
                                    </div>
                                    <div className='codes'>
                                        <button className='symbol'>{symbolCDot}</button>
                                        <button className='symbol'>{symbolL}</button>
                                        <button className='symbol'>{symbolLeftArrow}</button>
                                        <button className='symbol'>{symbolLDot}</button>
                                        <button className='symbol'>{symbolVL}</button>
                                        <button className='symbol long'>Trap Ravager</button>
                                        <button className='symbol long'>Eyes</button>
                                    </div>
                                    <div className='codes'>
                                        <button className='symbol'>{symbolLDot}</button>
                                        <button className='symbol'>{symbolVL}</button>
                                        <button className='symbol'>{symbolHCDot}</button>
                                        <button className='symbol'>{symbolVArch}</button>
                                        <button className='symbol'>{symbolV}</button>
                                        <button className='symbol long'>Beam Zursa</button>
                                        <button className='symbol long'>Limb</button>
                                    </div>
                                </>
                                : <>
                                    {(codeLab.length >= 3)
                                        ? <></>
                                        : <>
                                            <li>Look at the Wall, What are the First Symbols in each Line?</li>
                                            <div className='codes'>
                                                <button className='symbol'
                                                    onClick={() => handleCodeLabClick('feet')}>{symbolRightArrow}</button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeLabClick('chunk')}>{symbolL}</button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeLabClick('widow')}>{symbolC}</button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeLabClick('eye')}>{symbolCDot}</button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeLabClick('limb')}>{symbolLDot}</button>
                                            </div>
                                        </>}
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
                                                    ? <>
                                                        <li>
                                                            {mapSymbolLabMissing[5]}
                                                        </li>
                                                        <ul>
                                                            <li>Force Spawn Zursa if Needed</li>
                                                            <li>Shoot all Skulls with <span className='high-value-weapon'>Wonder Weapon</span> and Reload For Each One</li>
                                                        </ul>
                                                        <img className='big-image'
                                                            src='/aotd/zursa-skull-1.webp'
                                                            alt='Zursa skull 1'
                                                            decoding='async'
                                                            loading='lazy'/>
                                                        <img className='big-image'
                                                            src='/aotd/zursa-skull-2.webp'
                                                            alt='Zursa skull 2'
                                                            decoding='async'
                                                            loading='lazy'/>
                                                        <img className='big-image'
                                                            src='/aotd/zursa-skull-3.webp'
                                                            alt='Zursa skull 3'
                                                            decoding='async'
                                                            loading='lazy'/>
                                                    </>
                                                    : <></>}
                                            </ul>
                                        </>
                                        : <></>}
                                    <li>Interact with Plates in Order</li>
                                    <div className='codes'>
                                        {codeLab.map((symbol, symbolIndex) => {
                                            return <button className='symbol'
                                                key={`symbol-code-lab-${symbolIndex}`}>
                                                {symbol}
                                            </button>
                                        })}
                                    </div>
                                    <div className='codes'>
                                        {codeLabInteract.map((symbol, symbolIndex) => {
                                            return <button className='symbol'
                                                key={`symbol-code-lab-interact-${symbolIndex}`}>
                                                {symbol}
                                            </button>
                                        })}
                                    </div>
                                    <ul>
                                        <li>Ignore Powder Plate</li>
                                    </ul>
                                </>}
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
                        <img className='big-image'
                            src='/aotd/yellow-green-red/ashwood-steps.webp'
                            alt='Ashwood steps yellow green red'
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
                            <li>Put in Diamond</li>
                            <img className='big-image'
                                src='/aotd/ashwood-cube.webp'
                                alt='Ashwood cube'
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
                            <li>Put in Diamond</li>
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
                            <li>Put in Diamond</li>
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
                        <img className='big-image'
                            src='/aotd/the-souls-that-were-lost/ashwood-steps.webp'
                            alt='Ashwood steps the souls that were lost'
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
                            <li>Shoot Floating Clock at Ashwood with Turret</li>
                            <img className='big-image'
                                src='/aotd/floating-clock.webp'
                                alt='Floating clock'
                                decoding='async'
                                loading='lazy'/>
                            <li>
                                Shoot 1 Side of Floating Clock with
                                <span className='high-value-weapon'> Wonder Weapon </span>
                                and Reload to Turn Purple
                            </li>
                            <li>Jump Pad to Cosmodrone</li>
                            <img className='big-image'
                                src='/aotd/the-souls-that-were-lost/cosmodrone-steps.webp'
                                alt='Cosmodrone steps the souls that were lost'
                                decoding='async'
                                loading='lazy'/>
                            <li>While Purple, Shoot 1 Tower</li>
                            <li>Jump Pad to Ashwood</li>
                            <li>Turn Purple</li>
                            <li>Jump Pad to Farm</li>
                            <img className='big-image'
                                src='/aotd/the-souls-that-were-lost/farm-steps.webp'
                                alt='Farm steps the souls that were lost'
                                decoding='async'
                                loading='lazy'/>
                            <li>Look at Clock on Wall</li>
                            <img className='big-image'
                                src='/aotd/farm-clock.webp'
                                alt='Farm steps the souls that were lost'
                                decoding='async'
                                loading='lazy'/>
                            <li>Look at Numbers on Floor</li>
                            <li>Stand on Equivalent Roman Numeral of Hour Shown on Clock</li>
                            <li>While Purple, Shoot Head once Eyes Glow</li>
                            <li>Grab Parts</li>
                            <img className='big-image'
                                src='/aotd/the-souls-that-were-lost/farm-part-1.webp'
                                alt='Farm part 1'
                                decoding='async'
                                loading='lazy'/>
                            <img className='big-image'
                                src='/aotd/the-souls-that-were-lost/farm-part-2.webp'
                                alt='Farm part 2'
                                decoding='async'
                                loading='lazy'/>
                            <img className='big-image'
                                src='/aotd/the-souls-that-were-lost/farm-part-3.webp'
                                alt='Farm part 3'
                                decoding='async'
                                loading='lazy'/>
                            <img className='big-image'
                                src='/aotd/the-souls-that-were-lost/farm-part-4.webp'
                                alt='Farm part 4'
                                decoding='async'
                                loading='lazy'/>
                            <li>Place and Activate Parts</li>
                            <img className='big-image'
                                src='/aotd/the-souls-that-were-lost/farm-part-spots.webp'
                                alt='Farm part spots'
                                decoding='async'
                                loading='lazy'/>
                            <li>Protect Parts</li>
                            <ul><li>Can use free Nuke at Ashwood to Skip ~30s</li></ul>
                            <img className='big-image'
                                src='/aotd/free-nuke.webp'
                                alt='Free nuke'
                                decoding='async'
                                loading='lazy'/>
                            <li>Once Completed, Jump Pad to Ashwood</li>
                            <li><span className='note-clock'>Shoot Clock with Turret when Needed</span></li>
                            <li>Turn Purple</li>
                            <li>Drive to Exit 115</li>
                            <img className='big-image'
                                src='/aotd/the-souls-that-were-lost/exit-115-steps.webp'
                                alt='Exit 115 steps the souls thats were lost'
                                decoding='async'
                                loading='lazy'/>
                            <li>Put Tessie against Truck</li>
                            <li>Jump Pad to Cosmodrone</li>
                            <img className='big-image'
                                src='/aotd/the-souls-that-were-lost/cosmodrone-steps.webp'
                                alt='Cosmodrone steps the souls that were lost'
                                decoding='async'
                                loading='lazy'/>
                            <li>Shoot Last Tower</li>
                            <li>Read Monitor</li>
                            {(showSolver)
                                ? <>
                                    <li>Solve Code</li>
                                    <div className='codes'>
                                        <button className='symbol'>{symbolSquare}</button>
                                        <button className='symbol'>{symbolSquareDot}</button>
                                        <button className='symbol'>{symbolVHL}</button>
                                        <button className='symbol'>{symbolVL}</button>
                                        <button className='symbol'>{symbolSquareDot}</button>
                                        <button className='symbol'>{symbolSquare}</button>
                                        <button className='symbol long'>Engine</button>
                                    </div>
                                    <div className='codes'>
                                        <button className='symbol'>{symbolLDot}</button>
                                        <button className='symbol'>{symbolHL}</button>
                                        <button className='symbol'>{symbolLeftArrow}</button>
                                        <button className='symbol'>{symbolSquareDot}</button>
                                        <button className='symbol'>{symbolL}</button>
                                        <button className='symbol'>{symbolArch}</button>
                                        <button className='symbol long'>Launch</button>
                                    </div>
                                    <div className='codes'>
                                        <button className='symbol'>{symbolVLDot}</button>
                                        <button className='symbol'>{symbolCDot}</button>
                                        <button className='symbol'>{symbolL}</button>
                                        <button className='symbol'>{symbolVArchDot}</button>
                                        <button className='symbol'>{symbolSquare}</button>
                                        <button className='symbol'>{symbolRightArrow}</button>
                                        <button className='symbol long'>Rocket</button>
                                    </div>
                                    <div className='codes'>
                                        <button className='symbol'>{symbolVDot}</button>
                                        <button className='symbol'>{symbolSquare}</button>
                                        <button className='symbol'>{symbolHL}</button>
                                        <button className='symbol'>{symbolVHLDot}</button>
                                        <button className='symbol'>{symbolCDot}</button>
                                        <button className='symbol'>{symbolSquareDot}</button>
                                        <button className='symbol long'>Weapon</button>
                                    </div>
                                    {Object.entries(mapSymbolSoulsCosmodrone).map(([label, numbers]) => {
                                        return <div className='codes'
                                            key={`${label}-numbers`}>
                                            {numbers.map((number, numberIndex) => {
                                                return <button className='symbol'
                                                    key={`solver-symbol-code-souls-cosmodrone-${label}-${number}-${numberIndex}`}>
                                                    {number}
                                                </button>
                                            })}
                                            <button className='symbol long'>
                                                {label.replace(/^./, (char) => char.toUpperCase())}
                                            </button>
                                        </div>
                                    })}
                                </>
                                : <>
                                    {(codeSoulsCosmodrone.length === 0)
                                        ? <>
                                            <li>What Symbol Appeared?</li>
                                            <div className='codes'>
                                                <button className='symbol'
                                                    onClick={() => handleCodeSoulsCosmodrone('launch')}>{symbolLDot}</button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeSoulsCosmodrone('rocket')}>{symbolVLDot}</button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeSoulsCosmodrone('engine')}>{symbolSquare}</button>
                                                <button className='symbol'
                                                    onClick={() => handleCodeSoulsCosmodrone('weapon')}>{symbolVDot}</button>
                                            </div>
                                        </>
                                        : <></>}
                                    <img className='big-image'
                                        src='/aotd/monitor-cosmodrone.webp'
                                        alt='Monitor cosmodrone'
                                        decoding='async'
                                        loading='lazy'/>
                                    <li>Shoot Red Dot on Monitors when Desired Number Appears</li>
                                    <div className='codes'>
                                        {codeSoulsCosmodrone.map((number, numberIndex) => {
                                            return <button className='symbol'
                                                key={`not-solver-symbol-code-souls-cosmodrone-${numberIndex}`}>
                                                {number}
                                            </button>
                                        })}
                                    </div>
                                </>}
                            <li>Jump Pad to Ashwood</li>
                            <li>Turn Purple</li>
                            <li>Teleport to Tessie</li>
                            <img className='big-image'
                                src='/aotd/the-souls-that-were-lost/exit-115-steps-2.webp'
                                alt='Exit 115 steps 2 the souls thats were lost'
                                decoding='async'
                                loading='lazy'/>
                            <li>Summon Klaus in Building Under Clock</li>
                            <li>Once Summoned, Shoot Clock on Top of Service Station</li>
                            <li>Command Klaus on Mechanic</li>
                            <li>Actviate Cashier by Meleeing Cash Register</li>
                            <img className='big-image'
                                src='/aotd/the-souls-that-were-lost/exit-115-inside-steps.webp'
                                alt='Exit 115 inside steps the souls that were lost'
                                decoding='async'
                                loading='lazy'/>
                            <li>Bring Cashier to Purple Lightning</li>
                            <img className='big-image'
                                src='/aotd/souls-exit-115.webp'
                                alt='Souls exit 115'
                                decoding='async'
                                loading='lazy'/>
                            <li>Activate Trucker by Getting Close</li>
                            <li>Bring Trucker to Pink Lightning</li>
                            <li>Activate Mechanic by Getting Close</li>
                            <li>Bring Mechanic to Yellow Lightning</li>
                            <li>Jump Pad to Ashwood</li>
                            <li>Jump Pad to Lake</li>
                            <li>Interact with Soul near Mystery Box</li>
                            <img className='big-image'
                                src='/aotd/lake-soul.webp'
                                alt='Lake soul'
                                decoding='async'
                                loading='lazy'/>
                            <li>Shoot Projector</li>
                            <img className='big-image'
                                src='/aotd/lake-projector.webp'
                                alt='Lake projector'
                                decoding='async'
                                loading='lazy'/>
                            <li>Look at Projected Screen</li>
                            <li>Click Pictures in Order</li>
                            {(codeSoulsLake.length >= 4)
                                ? <></>
                                : <div className='codes wrap'>
                                    <div className='side-activity horizontal'>
                                        <button className='image small'
                                            style={{ backgroundImage: 'url(/aotd/projector-tool.webp)' }}
                                            onClick={(event) => handleCodeSoulsLake(event, 'tool')}></button>
                                        <button className='symbol fill'>Tool</button>
                                    </div>
                                    <div className='side-activity horizontal'>
                                        <button className='image small'
                                            style={{ backgroundImage: 'url(/aotd/projector-front.webp)' }}
                                            onClick={(event) => handleCodeSoulsLake(event, 'front')}></button>
                                        <button className='symbol fill'>Front</button>
                                    </div>
                                    <div className='side-activity horizontal'>
                                        <button className='image small'
                                            style={{ backgroundImage: 'url(/aotd/projector-back.webp)' }}
                                            onClick={(event) => handleCodeSoulsLake(event, 'back')}></button>
                                        <button className='symbol fill'>Back</button>
                                    </div>
                                    <div className='side-activity horizontal'>
                                        <button className='image small'
                                            style={{ backgroundImage: 'url(/aotd/projector-shed.webp)' }}
                                            onClick={(event) => handleCodeSoulsLake(event, 'shed')}></button>
                                        <button className='symbol fill'>Shed</button>
                                    </div>
                                </div>}
                            <li>Shoot Reels</li>
                            <div className='codes wrap'>
                                {codeSoulsLake.map((location) => {
                                    return <div className='side-activity horizontal'
                                        key={`lake-souls-location-${location}`}>
                                        <button className='image'
                                            style={{ backgroundImage: `url(/aotd/disc-${location}.webp)` }}></button>
                                        <button className='symbol fill'>
                                            {location.replace(/^./, (char) => char.toUpperCase())}
                                        </button>
                                    </div>
                                })}
                            </div>
                            <li>Activate Box and Put Klaus on it</li>
                            <img className='big-image'
                                src='/aotd/lake-box.webp'
                                alt='Lake box'
                                decoding='async'
                                loading='lazy'/>
                        </ol>
                    </div>
                </>}
        </section>
    );
};

export default memo(AOTD);