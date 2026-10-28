import { memo, useState } from 'react';
import { earth, jupiter, mars, mercury, neptune, saturn, symbolDiamond, symbolGlobe, symbolHourglass, symbolIceCream, symbolPlus, symbolStatic, uranus, venus } from './Symbols.jsx';

const mapPlanets = {
    mercury : mercury,
    venus   : venus,
    earth   : earth,
    mars    : mars,
    jupiter : jupiter,
    saturn  : saturn,
    uranus  : uranus,
    neptune : neptune,
};
const mapPlanetsOrder = {
    mercury : 1,
    venus   : 2,
    earth   : 3,
    mars    : 4,
    jupiter : 5,
    saturn  : 6,
    uranus  : 7,
    neptune : 8,
};
const books = {
    THE: ['The Musica Universalis', 'The Black Veil', 'The Moon Directive'],
    TEA: ['Ash and Bone', 'The Unknowable Void', 'Echoes of Andromeda'],
    WSP: ['Pyramid of Cydonia', 'Witchlight Codex', 'Silence at Singularity'],
};

const Astra = ({ isKnower }) => {
    const [planets, setPlanets] = useState(['mars', 'neptune', 'saturn']);
    const [selectedPlanets, setSelectedPlanets] = useState([]);
    const [selectedPlanetsDir, setSelectedPlanetsDir] = useState([]);
    const [codeMars, setCodeMars] = useState([]);
    const [codePillar, setCodePillar] = useState([]);
    const [codeOscar, setCodeOscar] = useState([]);
    const [codeStatues, setCodeStatues] = useState({
        THE: 0,
        TEA: 0,
        WSP: 0,
    });
    const [codeMarsPillar, setCodeMarsPillar] = useState([]);

    const handleSelectPlanet = (planet) => {
        setPlanets(planets.filter((item) => item !== planet));
        setSelectedPlanets([...selectedPlanets, planet]);
    };

    const handleSelectPlanetDir = (direction) => {
        setSelectedPlanetsDir([...selectedPlanetsDir, direction]);
    };

    const handleCodeMars = (number) => {
        setCodeMars([...codeMars, number]);
    };

    const handleCodePillar = (symbol, event) => {
        setCodePillar([...codePillar, symbol]);

        if (symbol === 'static') return;

        event.currentTarget.style.display = 'none';
    };

    const handleCodeOscar = (planet) => {
        setCodeOscar([...codeOscar, mapPlanetsOrder[planet]]);
    };

    const handleBook = (book) => {
        setCodeStatues((prev) => ({
            ...prev,
            [book]: prev[book] + 1,
        }));
    };

    const handleCodeMarsPillar = (symbol, event) => {
        event.currentTarget.style.display = 'none';
        setCodeMarsPillar([...codeMarsPillar, symbol]);
    };

    return (
        <section className='page'>
            <span className='main-title title-astra'>Astra Malorum</span>
            {(isKnower)
                ? <>
                    <div className='title'>
                        <span></span>
                        <span>Planet</span>
                        <span></span>
                    </div>
                    {((selectedPlanets.length >= 3) && (selectedPlanetsDir.length >= 6))
                        ? <></>
                        : <>
                            <div>
                                {(selectedPlanets.length >= 1)
                                    ? <></>
                                    : <div className='codes'>
                                        {planets.map((planet, planetIndex) => {
                                            return <button className='symbol'
                                                onClick={() => handleSelectPlanet(planet)}
                                                key={`code-planets-first-${planetIndex}`}>
                                                {mapPlanets[planet]}
                                            </button>
                                        })}
                                    </div>}
                                {(selectedPlanetsDir.length >= 2)
                                    ? <></>
                                    : <div className='codes'>
                                        <button className='symbol'
                                            onClick={() => handleSelectPlanetDir('N')}>
                                            N
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleSelectPlanetDir('E')}>
                                            E
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleSelectPlanetDir('S')}>
                                            S
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleSelectPlanetDir('W')}>
                                            W
                                        </button>
                                    </div>}
                            </div>
                            <div>
                                {(selectedPlanets.length >= 2)
                                    ? <></>
                                    : <div className='codes'>
                                        {planets.map((planet, planetIndex) => {
                                            return <button className='symbol'
                                                onClick={() => handleSelectPlanet(planet)}
                                                key={`code-planets-second-${planetIndex}`}>
                                                {mapPlanets[planet]}
                                            </button>
                                        })}
                                    </div>}
                                {(selectedPlanetsDir.length >= 4)
                                    ? <></>
                                    : <div className='codes'>
                                        <button className='symbol'
                                            onClick={() => handleSelectPlanetDir('N')}>
                                            N
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleSelectPlanetDir('E')}>
                                            E
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleSelectPlanetDir('S')}>
                                            S
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleSelectPlanetDir('W')}>
                                            W
                                        </button>
                                    </div>}
                            </div>
                            <div>
                                {(selectedPlanets.length >= 3)
                                    ? <></>
                                    : <div className='codes'>
                                        {planets.map((planet, planetIndex) => {
                                            return <button className='symbol'
                                                onClick={() => handleSelectPlanet(planet)}
                                                key={`code-planets-second-${planetIndex}`}>
                                                {mapPlanets[planet]}
                                            </button>
                                        })}
                                    </div>}
                                {(selectedPlanetsDir.length >= 6)
                                    ? <></>
                                    : <div className='codes'>
                                        <button className='symbol'
                                            onClick={() => handleSelectPlanetDir('N')}>
                                            N
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleSelectPlanetDir('E')}>
                                            E
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleSelectPlanetDir('S')}>
                                            S
                                        </button>
                                        <button className='symbol'
                                            onClick={() => handleSelectPlanetDir('W')}>
                                            W
                                        </button>
                                    </div>}
                            </div>
                        </>}
                    <div>
                        <div className='codes'>
                            {selectedPlanets.map((planet) => {
                                return <button className='symbol'
                                    key={`codes-selected-planets-shoot-${planet}`}>
                                    {mapPlanets[planet]}
                                </button>
                            })}
                        </div>
                        <div className='codes'>
                            {selectedPlanetsDir.map((direction, directionIndex) => {
                                if (directionIndex % 2 !== 0) return null;

                                return <button className='symbol'
                                    key={`codes-symbol-planets-direction-shoot-${directionIndex}`}>
                                    {direction}{selectedPlanetsDir[directionIndex + 1]}
                                </button>
                            })}
                        </div>
                    </div>
                    <div className='title'>
                        <span></span>
                        <span>Mars Code</span>
                        <span></span>
                    </div>
                    {(codeMars.length >= 4)
                        ? <></>
                        : <div>
                            <div className='codes'>
                                {Array.from({ length: 5 }, (_, i) => i + 1).map((number) => {
                                    return <button className='symbol'
                                        onClick={() => handleCodeMars(number)}
                                        key={`code-mars-first-${number}`}>
                                        {number}
                                    </button>
                                })}
                            </div>
                            <div className='codes'>
                                {Array.from({ length: 5 }, (_, i) => i + 6).map((number) => {
                                    return <button className='symbol'
                                        onClick={() => handleCodeMars(number)}
                                        key={`code-mars-second-${number}`}>
                                        {number}
                                    </button>
                                })}
                            </div>
                            <button className='symbol'
                                style={{ width: '19.05rem' }}
                                onClick={() => handleCodeMars(0)}>
                                0
                            </button>
                        </div>}
                    <div className='codes'>
                        <button className='symbol'>
                            {codeMars.join('')}
                        </button>
                    </div>
                    <div className='title'>
                        <span></span>
                        <span>Oscar Planets</span>
                        <span></span>
                    </div>
                    {(codeOscar.length === 3)
                        ? <></>
                        : <div className='codes wrap'>
                                {Object.entries(mapPlanets).map(([planet, element]) => {
                                    return <button className='symbol'
                                        onClick={(event) => {
                                            event.currentTarget.style.display = 'none';
                                            handleCodeOscar(planet);
                                        }}
                                        key={`code-oscar-planet-${planet}`}>
                                        {element}
                                    </button>
                                })}
                        </div>}
                    <div className='codes'>
                        {codeOscar.map((number) => {
                            return <button className='symbol'
                                key={`code-oscar-number-${number}`}>
                                {number}
                            </button>
                        })}
                    </div>
                    <div className='title'>
                        <span></span>
                        <span>Books</span>
                        <span></span>
                    </div>
                    <div>
                        {Object.entries(books).map(([category, book]) => (
                            <div className='codes wrap'
                                key={category}>
                                {book.map((name) => {
                                    return <button className='symbol long'
                                        onClick={(event) => {
                                            event.currentTarget.style.display = 'none';
                                            handleBook(category);
                                        }}
                                        key={name}>
                                        {name}
                                    </button>
                                })}
                            </div>
                        ))}
                    </div>
                    <div className='codes'>
                        {Object.values(codeStatues).map((number, numberIndex) => {
                            return <button className='symbol'
                                key={`code-statues-${numberIndex}`}>
                                {number}
                            </button>
                        })}
                    </div>
                    <div className='title'>
                        <span></span>
                        <span>Mars Symbols</span>
                        <span></span>
                    </div>
                    {(codePillar.length === 5)
                        ? <></>
                        : <div>
                            <div className='codes'>
                                <button className='symbol'
                                    onClick={(event) => handleCodePillar('diamond', event)}>
                                    {symbolDiamond}
                                </button>
                                <button className='symbol'
                                    onClick={(event) => handleCodePillar('hourglass', event)}>
                                    {symbolHourglass}
                                </button>
                                <button className='symbol'
                                    onClick={(event) => handleCodePillar('icecream', event)}>
                                    {symbolIceCream}
                                </button>
                                <button className='symbol'
                                    onClick={(event) => handleCodePillar('plus', event)}>
                                    {symbolPlus}
                                </button>
                                <button className='symbol'
                                    onClick={(event) => handleCodePillar('globe', event)}>
                                    {symbolGlobe}
                                </button>
                                <button className='symbol'
                                    onClick={() => handleCodePillar('static')}>
                                    {symbolStatic}
                                </button>
                            </div>
                        </div>}
                    {(codeMarsPillar.length === 5)
                        ? <></>
                        : <div>
                            <div className='big-image mars right-pillar'>
                                <span>&#8592; START</span>
                                <span>&#8595;</span>
                                <span>&#8594;</span>
                            </div>
                            <div className='codes'
                                style={{ margin: '0 1rem' }}>
                                <button className='symbol'
                                    onClick={(event) => handleCodeMarsPillar('diamond', event)}>
                                    {symbolDiamond}
                                </button>
                                <button className='symbol'
                                    onClick={(event) => handleCodeMarsPillar('hourglass', event)}>
                                    {symbolHourglass}
                                </button>
                                <button className='symbol'
                                    onClick={(event) => handleCodeMarsPillar('icecream', event)}>
                                    {symbolIceCream}
                                </button>
                                <button className='symbol'
                                    onClick={(event) => handleCodeMarsPillar('plus', event)}>
                                    {symbolPlus}
                                </button>
                                <button className='symbol'
                                    onClick={(event) => handleCodeMarsPillar('globe', event)}>
                                    {symbolGlobe}
                                </button>
                            </div>
                        </div>}
                    <div className='big-image mars'>
                        <span>{codePillar.indexOf(codeMarsPillar[0]) + 1 || 'S'}</span>
                        <span>{codePillar.indexOf(codeMarsPillar[1]) + 1 || 'S'}</span>
                        <span>{codePillar.indexOf(codeMarsPillar[2]) + 1 || 'S'}</span>
                        <span>{codePillar.indexOf(codeMarsPillar[3]) + 1 || 'S'}</span>
                        <span>{codePillar.indexOf(codeMarsPillar[4]) + 1 || 'S'}</span>
                    </div>
                </>
                : <>
                    {/* Starting Room */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Starting Room</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/astra/spawn.webp'
                            alt='Spawn'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <span>Steps</span>
                            <div></div>
                        </div>
                        <ol>
                            <li>Travel to Luminarium</li>
                        </ol>
                    </div>
                    {/* Fusing */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Fusing</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/astra/fusing/luminarium-tips-and-tricks.webp'
                            alt='Luminarium tips and tricks'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <span>Tips & Tricks</span>
                            <div></div>
                        </div>
                        <ul>
                            <li>Disk Side Easter Egg at Luminarium</li>
                            <ul>
                                <li>Kills with Field Upgrade</li>
                            </ul>
                        </ul>
                        <div className='sub-title'>
                            <div>
                                <span>Steps</span>
                                <div className='note'>
                                    <span>[</span>
                                    <div className='subnote'>
                                        <span>Museum</span>
                                        <span className='normal'>= Museum Infinitum</span>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <ol>
                            <li>Grab Fuse</li>
                            <img className='big-image'
                                src='/astra/fusing/luminarium-steps.webp'
                                alt='Luminarium'
                                decoding='async'
                                loading='lazy'/>
                            <li>Read Page</li>
                            {(selectedPlanets.length >= 1) && (selectedPlanetsDir.length >= 2)
                                ? <></>
                                : <ul>
                                    <li>What is on the Page?</li>
                                    {(selectedPlanets.length >= 1)
                                        ? <></>
                                        : <div className='codes'>
                                            {planets.map((planet, planetIndex) => {
                                                return <button className='symbol'
                                                    onClick={() => handleSelectPlanet(planet)}
                                                    key={`code-planets-first-${planetIndex}`}>
                                                    {mapPlanets[planet]}
                                                </button>
                                            })}
                                        </div>}
                                    {(selectedPlanetsDir.length >= 2)
                                        ? <></>
                                        : <div className='codes'>
                                            <button className='symbol'
                                                onClick={() => handleSelectPlanetDir('N')}>
                                                N
                                            </button>
                                            <button className='symbol'
                                                onClick={() => handleSelectPlanetDir('E')}>
                                                E
                                            </button>
                                            <button className='symbol'
                                                onClick={() => handleSelectPlanetDir('S')}>
                                                S
                                            </button>
                                            <button className='symbol'
                                                onClick={() => handleSelectPlanetDir('W')}>
                                                W
                                            </button>
                                        </div>}
                                </ul>}
                            <li>Travel to Museum</li>
                        </ol>
                    </div>
                    {/* Fused */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Fused</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/astra/fused/museum-tips-and-tricks.webp'
                            alt='Museum tips and tricks'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <div>
                                <span>Tips & Tricks</span>
                                <div className='note'>
                                    <span>[</span>
                                    <div className='subnote'>
                                        <span>Museum</span>
                                        <span className='normal'>= Museum Infinitum</span>
                                    </div>
                                    <div className='subnote'>
                                        <span>Machina</span>
                                        <span className='normal'>= Machina Astralis</span>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <ul>
                            <li>Disk Side Easter Egg at Museum</li>
                            <ul>
                                <li>Kills with Melee</li>
                            </ul>
                            <li>Sisters Side Easter Egg</li>
                            <ul>
                                <li>Interact with Case on Special Round</li>
                            </ul>
                            <img className='big-image'
                                src='/astra/side-easter-egg-sisters.webp'
                                alt='Side easter egg sisters'
                                decoding='async'
                                loading='lazy'/>
                            <ul>
                                <li>Push a Round</li>
                                <li>Find and Interact Case Making Static Sounds</li>
                                <li>Do this 2 More Times</li>
                                <li>After Last Interaction, Sisters Will Spawn</li>
                                <li>Find Sisters and Get Close</li>
                                <li>Sisters Respawn Every Round</li>
                            </ul>
                        </ul>
                        <div className='sub-title'>
                            <div>
                                <span>Steps</span>
                                <div className='note'>
                                    <span>[</span>
                                    <div className='subnote'>
                                        <span>Dome</span>
                                        <span className='normal'>= Observatory Dome</span>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <ol>
                            <li>Get Saw by Breaking Glass</li>
                            <img className='big-image'
                                src='/astra/fused/museum-steps.webp'
                                alt='Fused steps museum'
                                decoding='async'
                                loading='lazy'/>
                            <li>Travel to Machina</li>
                            <img className='big-image'
                                src='/astra/fused/machina-steps.webp'
                                alt='Fused steps machina'
                                decoding='async'
                                loading='lazy'/>
                            <li>Grab Fuse</li>
                            <li><span className='optional'>[OPTIONAL]</span> Disk Side Easter Egg</li>
                            <ul>
                                <li>Kills with Equipment</li>
                            </ul>
                            <img className='big-image'
                                src='/astra/fused/machina-tips-and-tricks.webp'
                                alt='Machina tips and tricks'
                                decoding='async'
                                loading='lazy'/>
                            <li>Travel to Archive</li>
                            <img className='big-image'
                                src='/astra/fused/archive-steps.webp'
                                alt='Fused steps archive'
                                decoding='async'
                                loading='lazy'/>
                            <li>Read Page</li>
                            {(selectedPlanets.length >= 2) && (selectedPlanetsDir.length >= 4)
                                ? <></>
                                : <ul>
                                    <li>What is on the Page?</li>
                                    {(selectedPlanets.length >= 2)
                                        ? <></>
                                        : <div className='codes'>
                                            {planets.map((planet, planetIndex) => {
                                                return <button className='symbol'
                                                    onClick={() => handleSelectPlanet(planet)}
                                                    key={`code-planets-second-${planetIndex}`}>
                                                    {mapPlanets[planet]}
                                                </button>
                                            })}
                                        </div>}
                                    {(selectedPlanetsDir.length >= 4)
                                        ? <></>
                                        : <div className='codes'>
                                            <button className='symbol'
                                                onClick={() => handleSelectPlanetDir('N')}>
                                                N
                                            </button>
                                            <button className='symbol'
                                                onClick={() => handleSelectPlanetDir('E')}>
                                                E
                                            </button>
                                            <button className='symbol'
                                                onClick={() => handleSelectPlanetDir('S')}>
                                                S
                                            </button>
                                            <button className='symbol'
                                                onClick={() => handleSelectPlanetDir('W')}>
                                                W
                                            </button>
                                        </div>}
                                </ul>}
                            <li><span className='optional'>[OPTIONAL]</span> Disk Side Easter Egg</li>
                            <img className='big-image'
                                src='/astra/fused/archive-tips-and-tricks.webp'
                                alt='Archive tips and tricks'
                                decoding='async'
                                loading='lazy'/>
                            <li>Travel to Dome</li>
                            <img className='big-image'
                                src='/astra/fused/dome-steps.webp'
                                alt='Fused steps dome'
                                decoding='async'
                                loading='lazy'/>
                            <li>Install Fuses at Power's Piano</li>
                            <li>Interact with Power's Typewriter</li>
                            <li>Protect Power</li>
                        </ol>
                    </div>
                    {/* O.S.C.A.R.'s Nightmare */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>O.S.C.A.R.'s Nightmare</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/astra/oscars-nightmare/dome-steps-1.webp'
                            alt='Oscars nightmare steps 1 dome'
                            decoding='async'
                            loading='lazy'/>
                        <img className='big-image'
                            src='/astra/oscars-nightmare/dome-steps-2.webp'
                            alt='Oscars nightmare steps 2 dome'
                            decoding='async'
                            loading='lazy'/>
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
                            <li>Find and Shoot 1 Smoking Panel</li>
                            <li>
                                Wait for
                                <span className='high-value-target'> OSCAR </span>
                                to Teleport and Panels to Restart in 30s~
                            </li>
                            <li><span className='note-sun'>KEEP OSCAR NEAR PAP</span></li>
                            <li>Find and Shoot Smoking Panels [5]</li>
                            <li>Use Telescope and Find Mars</li>
                            <img className='big-image'
                                src='/astra/oscars-nightmare/dome-steps-3.webp'
                                alt='Telescope'
                                decoding='async'
                                loading='lazy'/>
                            <img className='big-image'
                                src='/astra/telescope.webp'
                                alt='Telescope'
                                decoding='async'
                                loading='lazy'/>
                            {(codeMars.length >= 4)
                                ? <></>
                                : <ul>
                                    <li>Look at DEC at Bottom Left, what Coordinats?</li>
                                    <li>EX: 177 = 1707 or 7013 = 7013</li>
                                    <div className='codes'>
                                        {Array.from({ length: 5 }, (_, i) => i + 1).map((number) => {
                                            return <button className='symbol'
                                                onClick={() => handleCodeMars(number)}
                                                key={`code-mars-first-${number}`}>
                                                {number}
                                            </button>
                                        })}
                                    </div>
                                    <div className='codes'>
                                        {Array.from({ length: 5 }, (_, i) => i + 6).map((number) => {
                                            return <button className='symbol'
                                                onClick={() => handleCodeMars(number)}
                                                key={`code-mars-second-${number}`}>
                                                {number}
                                            </button>
                                        })}
                                    </div>
                                    <button className='symbol'
                                        style={{ width: '19.05rem' }}
                                        onClick={() => handleCodeMars(0)}>
                                        0
                                    </button>
                                </ul>}
                            <li><span className='note-sun'>BEFORE LOOKING AT THE SUN, MAKE SURE OSCAR IS NEAR PAP</span></li>
                            <li>Find and Look at the Sun</li>
                            <li>
                                Beam
                                <span className='high-value-target'> OSCAR</span>
                            </li>
                            <li>Interact and Read Symbols [5]</li>
                                <img className='big-image'
                                    src='/astra/oscars-nightmare/dome-steps-4.webp'
                                    alt='Oscars nightmare steps 4 dome'
                                    decoding='async'
                                    loading='lazy'/>
                                {(codePillar.length === 5)
                                    ? <></>
                                    : <ul>
                                        <li>Click the Symbols in Order</li>
                                        <div className='codes'>
                                            <button className='symbol'
                                                onClick={(event) => handleCodePillar('diamond', event)}>
                                                {symbolDiamond}
                                            </button>
                                            <button className='symbol'
                                                onClick={(event) => handleCodePillar('hourglass', event)}>
                                                {symbolHourglass}
                                            </button>
                                            <button className='symbol'
                                                onClick={(event) => handleCodePillar('icecream', event)}>
                                                {symbolIceCream}
                                            </button>
                                            <button className='symbol'
                                                onClick={(event) => handleCodePillar('plus', event)}>
                                                {symbolPlus}
                                            </button>
                                            <button className='symbol'
                                                onClick={(event) => handleCodePillar('globe', event)}>
                                                {symbolGlobe}
                                            </button>
                                            <button className='symbol'
                                                onClick={() => handleCodePillar('static')}>
                                                {symbolStatic}
                                            </button>
                                        </div>
                                    </ul>}
                            <li>
                                <div className='image-list'>
                                    <span>Buy Cyro Freeze at Arsenal</span>
                                    <img className='ammo-mod'
                                        src='/ammo-mods/cryo-freeze.webp'
                                        alt='Ammo mod cyro freeze'
                                        decoding='async'
                                        loading='lazy'/>
                                </div>
                            </li>
                            <li>Get Fragments [3]</li>
                            <ul>
                                <li>
                                    <div className='image-list'>
                                        <span>Shoot Purple Crystals with Cyro Freeze</span>
                                        <img className='ammo-mod'
                                            src='/ammo-mods/cryo-freeze.webp'
                                            alt='Ammo mod cyro freeze'
                                            decoding='async'
                                            loading='lazy'/>
                                    </div>
                                </li>
                            </ul>
                            <li>Find and Shoot Blinking Lamp Around the Map</li>
                            <li>
                                Respawn
                                <span className='high-value-target'> OSCAR </span>
                                by Pushing a Round
                            </li>
                            <li>
                                Travel to Museum and Bring
                                <span className='high-value-target'> OSCAR</span>
                            </li>
                            <li>
                                Shoot
                                <span className='high-value-target'> OSCAR's </span>
                                UFO
                            </li>
                            <li>Interact with Panel on Rocket</li>
                            <img className='big-image'
                                src='/astra/oscars-nightmare/museum-steps.webp'
                                alt='Telescope'
                                decoding='async'
                                loading='lazy'/>
                            <li>
                                Toast
                                <span className='high-value-target'> OSCAR </span>
                                under the Rocket
                            </li>
                            <li>Respawn <span className='high-value-target'>OSCAR</span></li>
                            <li>Travel to Spawn</li>
                            <img className='big-image'
                                src='/astra/oscars-nightmare/spawn-steps.webp'
                                alt='Oscars nightmare steps spawn'
                                decoding='async'
                                loading='lazy'/>
                            <li>Shoot Tessie with a PAP gun to Teleport <span className='high-value-target'>OSCAR</span></li>
                            <li>Grab Car Battery</li>
                            <li>Travel to Luminarium and Bring <span className='high-value-target'>OSCAR</span></li>
                            <li>
                                Use Trap on
                                <span className='high-value-target'> OSCAR</span>
                            </li>
                            <ul>
                                <li>It Shouldn't Cost Money</li>
                            </ul>
                            <img className='big-image'
                                src='/astra/oscars-nightmare/luminarium-steps.webp'
                                alt='Oscars nightmare steps luminarium'
                                decoding='async'
                                loading='lazy'/>
                            <li>
                                Grab
                                <span className='high-value-weapon'> Wonder Weapon</span>
                            </li>
                        </ol>
                    </div>
                    {/* Test your Patience */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Test your Patience</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/astra/test-your-patience/machina-steps.webp'
                            alt='Test your patience steps machina'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <div>
                                <span>Steps</span>
                                <div className='note'>
                                    <span>[</span>
                                    <div className='subnote'>
                                        <span>Dome</span>
                                        <span className='normal'>= Observatory Dome</span>
                                    </div>
                                    <div className='subnote'>
                                        <span>Machina</span>
                                        <span className='normal'>= Machina Astralis</span>
                                    </div>
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
                            <li>Travel to Machina</li>
                            <li>Read Last Page</li>
                            {(selectedPlanets.length >= 3) && (selectedPlanetsDir.length >= 6)
                                ? <></>
                                : <ul>
                                    <li>What was on the Page?</li>
                                    {(selectedPlanets.length >= 3)
                                        ? <></>
                                        : <div className='codes'>
                                            {planets.map((planet, planetIndex) => {
                                                return <button className='symbol'
                                                    onClick={() => handleSelectPlanet(planet)}
                                                    key={`code-planets-second-${planetIndex}`}>
                                                    {mapPlanets[planet]}
                                                </button>
                                            })}
                                        </div>}
                                    {(selectedPlanetsDir.length >= 6)
                                        ? <></>
                                        : <div className='codes'>
                                            <button className='symbol'
                                                onClick={() => handleSelectPlanetDir('N')}>
                                                N
                                            </button>
                                            <button className='symbol'
                                                onClick={() => handleSelectPlanetDir('E')}>
                                                E
                                            </button>
                                            <button className='symbol'
                                                onClick={() => handleSelectPlanetDir('S')}>
                                                S
                                            </button>
                                            <button className='symbol'
                                                onClick={() => handleSelectPlanetDir('W')}>
                                                W
                                            </button>
                                        </div>}
                                </ul>}
                            <li>Respawn <span className='high-value-target'>OSCAR</span> by Pushing 2~ Rounds</li>
                            <li>
                                Tail
                                <span className='high-value-target'> OSCAR </span>
                                and
                                <span className='note-oscar'> Don't Let OSCAR See You</span>                            </li>
                            <li>
                                <span>Wait for Thurston to say, </span>
                                <span className='dialogue'>"Stay up there while I draw OSCAR away! And remember:"</span>
                            </li>
                            {(codeOscar.length === 3)
                                ? <></>
                                : <ul>
                                    <li>What Planets to Remember?</li>
                                    <div className='codes wrap'>
                                        {Object.entries(mapPlanets).map(([planet, element]) => {
                                            return <button className='symbol'
                                                onClick={(event) => {
                                                    event.currentTarget.style.display = 'none';
                                                    handleCodeOscar(planet);
                                                }}
                                                key={`code-oscar-planet-${planet}`}>
                                                {element}
                                            </button>
                                        })}
                                    </div>
                                </ul>}
                            <li>Travel to Dome</li>
                            <img className='big-image'
                                src='/astra/test-your-patience/dome-steps.webp'
                                alt='Test your patience steps dome'
                                decoding='async'
                                loading='lazy'/>
                            <li>Input <span className='high-value-target'>OSCAR's</span> Code</li>
                            <div className='codes'>
                                {codeOscar.map((number) => {
                                    return <button className='symbol'
                                        key={`code-oscar-number-${number}`}>
                                        {number}
                                    </button>
                                })}
                            </div>
                            <li>Climb Belt and Grab Key</li>
                            <img className='big-image'
                                src='/astra/test-your-patience/dome-steps-2.webp'
                                alt='Test your patience steps 2 dome'
                                decoding='async'
                                loading='lazy'/>
                        </ol>
                    </div>
                    {/* Steal the Neptune */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Steal the Neptune</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/astra/steal-the-neptune/scholar-steps.webp'
                            alt='Steal the neptune steps scholar'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <div>
                                <span>Steps</span>
                                <div className='note'>
                                    <span>[</span>
                                    <div className='subnote'>
                                        <span>Scholar</span>
                                        <span className='normal'>= Scholar's Way</span>
                                    </div>
                                    <div className='subnote'>
                                        <span>Machina</span>
                                        <span className='normal'>= Machina Astralis</span>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <ol>
                            <li>Travel to Scholar</li>
                            <li>Interact with Brain</li>
                            <li>Once Open, Interact to Get Brain</li>
                            <li>Travel to Luminarium</li>
                            <li>Place Brain</li>
                            <img className='big-image'
                                src='/astra/steal-the-neptune/luminarium-steps.webp'
                                alt='Steal the neptune steps luminarium'
                                decoding='async'
                                loading='lazy'/>
                            <li>Interact and Protect Brain</li>
                            <li>Once Finished, Pick up Brain</li>
                            <li>Travel to Machina</li>
                            <li>Install Brain</li>
                            <img className='big-image'
                                src='/astra/steal-the-neptune/machina-steps.webp'
                                alt='Labled machina'
                                decoding='async'
                                loading='lazy'/>
                            <ul>
                                <li>Look at Monitor, What Books are Shown?</li>
                                {Object.entries(books).map(([category, book]) => (
                                    <div className='codes wrap'
                                        key={category}>
                                        {book.map((name) => {
                                            return <button className='symbol long'
                                                onClick={(event) => {
                                                    event.currentTarget.style.display = 'none';
                                                    handleBook(category);
                                                }}
                                                key={name}>
                                                {name}
                                            </button>
                                        })}
                                    </div>
                                ))}
                            </ul>
                            <li>Travel to Archive</li>
                            <img className='big-image'
                                src='/astra/steal-the-neptune/archive-steps-1.webp'
                                alt='Steal the neptune steps 1 archive'
                                decoding='async'
                                loading='lazy'/>
                            <img className='big-image'
                                src='/astra/steal-the-neptune/archive-steps-2.webp'
                                alt='Steal the neptune steps 2 archive'
                                decoding='async'
                                loading='lazy'/>
                            <li>Turn Statues</li>
                            <div className='codes'>
                                {Object.values(codeStatues).map((number, numberIndex) => {
                                    return <button className='symbol'
                                        key={`code-statues-${numberIndex}`}>
                                        {number}
                                    </button>
                                })}
                            </div>
                            <li>Grab Neptune</li>
                            <img className='big-image'
                                src='/astra/steal-the-neptune/archive-steps-3.webp'
                                alt='Steal the neptune steps 3 archive'
                                decoding='async'
                                loading='lazy'/>
                            <li>Travel to Machina</li>
                            <li>Insert Neptune</li>
                            <img className='big-image'
                                src='/astra/steal-the-neptune/machina-steps-2.webp'
                                alt='Steal the neptune steps 2 machina'
                                decoding='async'
                                loading='lazy'/>
                        </ol>
                    </div>
                    {/* O.S.C.A.R.'s Torment */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>O.S.C.A.R.'s Torment</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/astra/oscars-torment/machina-steps.webp'
                            alt='Oscars torment steps machina'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <span>Steps</span>
                            <div></div>
                        </div>
                        <ol>
                            <li>Input code</li>
                            <div className='codes'>
                                <button className='symbol'>
                                    {codeMars.join('')}
                                </button>
                            </div>
                            <li>Look at Compass in Middle</li>
                            <img className='big-image'
                                src='/astra/oscars-torment/machina-steps-2.webp'
                                alt='Oscars torment steps 2 machina'
                                decoding='async'
                                loading='lazy'/>
                            <li>Allign Planets by Shooting</li>
                            <div className='codes'>
                                {selectedPlanets.map((planet) => {
                                    return <button className='symbol'
                                        key={`codes-selected-planets-shoot-${planet}`}>
                                        {mapPlanets[planet]}
                                    </button>
                                })}
                            </div>
                            <div className='codes'>
                                {selectedPlanetsDir.map((direction, directionIndex) => {
                                    if (directionIndex % 2 !== 0) return null;

                                    return <button className='symbol'
                                        key={`codes-symbol-planets-direction-shoot-${directionIndex}`}>
                                        {direction}{selectedPlanetsDir[directionIndex + 1]}
                                    </button>
                                })}
                            </div>
                            <li>Once Alligned, Interact with Monitor</li>
                            <img className='big-image'
                                src='/astra/oscars-torment/machina-steps-3.webp'
                                alt='Oscars torment steps 3 machina'
                                decoding='async'
                                loading='lazy'/>
                            <li>
                                Torment
                                <span className='high-value-target'> OSCAR</span>
                            </li>
                            <ul>
                                <li>Shoot UFOs when they Fly Middle</li>
                            </ul>
                        </ol>
                    </div>
                    {/* The Vampire Cosmonaut */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>The Vampire Cosmonaut</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/astra/the-vampire-cosmonaut/mars-steps.webp'
                            alt='The vampire cosmonaut steps mars'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <span>Steps</span>
                            <div></div>
                        </div>
                        <ol>
                            <li>Grab Barrel</li>
                            <li>Install Barrel</li>
                            <li>Shoot Towers and Wait for Bird</li>
                            <img className='big-image'
                                src='/astra/the-vampire-cosmonaut/mars-steps-2.webp'
                                alt='The vampire cosmonaut steps 2 mars'
                                decoding='async'
                                loading='lazy'/>
                            <img className='big-image'
                                src='/astra/the-vampire-cosmonaut/mars-steps-3.webp'
                                alt='The vampire cosmonaut steps 3 mars'
                                decoding='async'
                                loading='lazy'/>
                            <li>Shoot Middle Tower to Reset Bird's Position</li>
                            <img className='big-image'
                                src='/astra/the-vampire-cosmonaut/mars-steps-4.webp'
                                alt='The vampire cosmonaut steps 4 mars'
                                decoding='async'
                                loading='lazy'/>
                            <li>Grab Bird</li>
                            <li><span className='note-bird'>Waiting for Mars's Gravity can Help Grabbing Bird</span></li>
                            <li>Insert Bird</li>
                            <img className='big-image'
                                src='/astra/the-vampire-cosmonaut/mars-steps-5.webp'
                                alt='The vampire cosmonaut steps 5 mars'
                                decoding='async'
                                loading='lazy'/>
                            <li>
                                Shoot Towers with
                                <span className='high-value-weapon'> Wonder Weapon</span>
                            </li>
                            <img className='big-image'
                                src='/astra/the-vampire-cosmonaut/mars-steps-6.webp'
                                alt='The vampire cosmonaut steps 6 mars'
                                decoding='async'
                                loading='lazy'/>
                            <img className='big-image'
                                src='/astra/the-vampire-cosmonaut/mars-steps-7.webp'
                                alt='The vampire cosmonaut steps 7 mars'
                                decoding='async'
                                loading='lazy'/>
                            {(codeMarsPillar.length === 5)
                                ? <></>
                                : <>
                                    <li>Starting from 1, what are the Symbols?</li>
                                    <div className='codes'>
                                        <button className='symbol'
                                            onClick={(event) => handleCodeMarsPillar('diamond', event)}>
                                            {symbolDiamond}
                                        </button>
                                        <button className='symbol'
                                            onClick={(event) => handleCodeMarsPillar('hourglass', event)}>
                                            {symbolHourglass}
                                        </button>
                                        <button className='symbol'
                                            onClick={(event) => handleCodeMarsPillar('icecream', event)}>
                                            {symbolIceCream}
                                        </button>
                                        <button className='symbol'
                                            onClick={(event) => handleCodeMarsPillar('plus', event)}>
                                            {symbolPlus}
                                        </button>
                                        <button className='symbol'
                                            onClick={(event) => handleCodeMarsPillar('globe', event)}>
                                            {symbolGlobe}
                                        </button>
                                    </div>
                                </>}
                            <li>Interact with Pillars in Order</li>
                            <div className='codes'>
                                <button className='symbol'>{codePillar.indexOf(codeMarsPillar[0]) + 1 || 'S'}</button>
                                <button className='symbol'>{codePillar.indexOf(codeMarsPillar[1]) + 1 || 'S'}</button>
                                <button className='symbol'>{codePillar.indexOf(codeMarsPillar[2]) + 1 || 'S'}</button>
                                <button className='symbol'>{codePillar.indexOf(codeMarsPillar[3]) + 1 || 'S'}</button>
                                <button className='symbol'>{codePillar.indexOf(codeMarsPillar[4]) + 1 || 'S'}</button>
                            </div>
                        </ol>
                    </div>
                </>}
        </section>
    );
};

export default memo(Astra);