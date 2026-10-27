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
                            src='/astra/labled-spawn.webp'
                            alt='Labled spawn'
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
                    {/* Power 1/2 */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Power 1/2</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/astra/labled-luminarium.webp'
                            alt='Labled spawn'
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
                    {/* Power 2/2 */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Power 2/2</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/astra/labled-museum.webp'
                            alt='Labled spawn'
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
                            <li>Disk Side Easter Egg at Machina</li>
                            <ul>
                                <li>Kills with Equipment</li>
                            </ul>
                            <li>Sisters Side Easter Egg</li>
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
                            <li>Get Saw by Breaking the Glass</li>
                            <li>Travel to Machina</li>
                            <img className='big-image'
                                src='/astra/labled-machina.webp'
                                alt='Labled spawn'
                                decoding='async'
                                loading='lazy'/>
                            <li>Grab Fuse</li>
                            <li>Travel to Archive</li>
                            <img className='big-image'
                                src='/astra/labled-archive.webp'
                                alt='Labled spawn'
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
                            <li>Travel to Dome</li>
                            <img className='big-image'
                                src='/astra/labled-dome.webp'
                                alt='Labled dome'
                                decoding='async'
                                loading='lazy'/>
                            <li>Install Fuses at Power</li>
                            <li>Turn on Power </li>
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
                            src='/astra/labled-panels-left.webp'
                            alt='Labled panels left side'
                            decoding='async'
                            loading='lazy'/>
                        <img className='big-image'
                            src='/astra/labled-panels-right.webp'
                            alt='Labled panels right side'
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
                            <li>Shoot 1 Smoking Panel</li>
                            <li>
                                When
                                <span className='high-value-target'> OSCAR </span>
                                Teleports, Wait for Panels to Restart in 30s~
                            </li>
                            <li>Shoot Smoking Panels [5]</li>
                            <li>Use Telescope and Find Mars</li>
                            {(codeMars.length >= 4)
                                ? <></>
                                : <ul>
                                    <li>Where is Mars?</li>
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
                                    <span>Buy Cyro Freeze</span>
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
                                by Pushing a Round after Killing it
                            </li>
                            <li>
                                Travel to Museum and Bring
                                <span className='high-value-target'> OSCAR</span>
                            </li>
                            <img className='big-image'
                                src='/astra/labled-museum.webp'
                                alt='Labled museum'
                                decoding='async'
                                loading='lazy'/>
                            <li>
                                Shoot
                                <span className='high-value-target'> OSCAR's </span>
                                UFO
                            </li>
                            <li>
                                Toast
                                <span className='high-value-target'> OSCAR </span>
                                under the Rocket
                            </li>
                            <li>Respawn <span className='high-value-target'>OSCAR</span></li>
                            <li>Travel to Spawn</li>
                            <img className='big-image'
                                src='/astra/labled-spawn.webp'
                                alt='Labled spawn'
                                decoding='async'
                                loading='lazy'/>
                            <li>Shoot Tessie with a PAP gun to Teleport <span className='high-value-target'>OSCAR</span></li>
                            <li>Grab Car Battery</li>
                            <li>Travel to Luminarium and Bring <span className='high-value-target'>OSCAR</span></li>
                            <img className='big-image'
                                src='/astra/labled-luminarium.webp'
                                alt='Labled luminarium'
                                decoding='async'
                                loading='lazy'/>
                            <li>
                                Use Trap on
                                <span className='high-value-target'> OSCAR</span>
                            </li>
                            <ul>
                                <li>It shouldn't Cost Money</li>
                            </ul>
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
                            src='/astra/labled-machina.webp'
                            alt='Labled machina'
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
                            <li>Respawn <span className='high-value-target'>OSCAR</span> by Pushing 2~ Rounds</li>
                            <li><span className='note-oscar'>Don't let OSCAR see you</span></li>
                            <li>Travel to Machina</li>
                            <li>Read last Page</li>
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
                            <li>
                                Tail
                                <span className='high-value-target'> OSCAR </span>
                                and
                                <span className='note-oscar'> Don't let it see you</span>
                            </li>
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
                                src='/astra/labled-dome.webp'
                                alt='Labled dome'
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
                            <li>Grab Key from Lowering Belt near PAP</li>
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
                            src='/astra/labled-scholar.webp'
                            alt='Labled scholar'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <div>
                                <span>Steps</span>
                                <div className='note'>
                                    <span>[</span>
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
                            <li>Travel to Machina</li>
                            <li>Interact with Brain</li>
                            <li>Once Open, Interact to Get Brain</li>
                            <li>Travel to Luminarium</li>
                            <img className='big-image'
                                src='/astra/labled-luminarium.webp'
                                alt='Labled luminarium'
                                decoding='async'
                                loading='lazy'/>
                            <li>Place Brain</li>
                            <li>Interact and Protect Brain</li>
                            <li>Once Finished, Pick up Brain</li>
                            <li>Travel to Machina</li>
                            <img className='big-image'
                                src='/astra/labled-machina.webp'
                                alt='Labled machina'
                                decoding='async'
                                loading='lazy'/>
                            <li>Install Brain</li>
                            <ul>
                                <li>Look at the Monitor, What Books are Shown?</li>
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
                                src='/astra/labled-archive.webp'
                                alt='Labled archive'
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
                            <li>Insert Neptune</li>
                            <img className='big-image'
                                style={{ margin: '1rem 0' }}
                                src='/astra/labled-machina.webp'
                                alt='Labled machina'
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
                            src='/astra/labled-machina.webp'
                            alt='Labled machina'
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
                            <li>Shoot Planets According to the Compass in the Middle</li>
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
                            <li>
                                Torment
                                <span className='high-value-target'> OSCAR</span>
                            </li>
                            <ul>
                                <li>Shoot UFOs when they Fly to the Middle</li>
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
                        <div className='sub-title'>
                            <span>Steps</span>
                            <div></div>
                        </div>
                        <ol>
                            <li>Grab Barrel in Middle</li>
                            <li>Install Barrel</li>
                            <li>Shoot Towers and Wait for Bird</li>
                            <li>Shoot Middle Tower to Reset Bird's Position</li>
                            <li>Grab Bird</li>
                            <li>Insert Bird</li>
                            <li>
                                Shoot Pillars with
                                <span className='high-value-weapon'> Wonder Weapon</span>
                            </li>
                            {(codeMarsPillar.length === 5)
                                ? <></>
                                : <ul>
                                    <li>Starting from Right Pillar, what are the Symbols?</li>
                                    <div className='big-image mars right-pillar'
                                        style={{ margin: '1rem 0' }}>
                                        <span>&#8592; START</span>
                                        <span>&#8595;</span>
                                        <span>&#8594;</span>
                                    </div>
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
                                </ul>}
                            <li>Interact with Pillars in Order</li>
                            <div className='big-image mars'>
                                <span>{codePillar.indexOf(codeMarsPillar[0]) + 1 || 'S'}</span>
                                <span>{codePillar.indexOf(codeMarsPillar[1]) + 1 || 'S'}</span>
                                <span>{codePillar.indexOf(codeMarsPillar[2]) + 1 || 'S'}</span>
                                <span>{codePillar.indexOf(codeMarsPillar[3]) + 1 || 'S'}</span>
                                <span>{codePillar.indexOf(codeMarsPillar[4]) + 1 || 'S'}</span>
                            </div>
                        </ol>
                    </div>
                </>}
        </section>
    );
};

export default memo(Astra);