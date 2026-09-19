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
            {/* Starting Room */}
            {(isKnower)
                ? <></>
                : <div>
                    <div className='title'>
                        <span>Starting Room</span>
                    </div>
                    <ol>
                        <li>Shoot Free Bonus Points</li>
                        <li>Travel to Luminarium</li>
                    </ol>
                </div>}
            {/* Power 1/2 */}
            <div>
                <div className='title'>
                    <span>Power 1/2</span>
                    <div className='note'>
                        <span>[</span>
                        <div className='subnote'>
                            <span>Museum</span>
                            <span className='normal'>= Museum Infinitum</span>
                        </div>
                        <span>]</span>
                    </div>
                </div>
                {(isKnower)
                    ? <></>
                    : <ul>
                        <li>Disk Side Easter Egg</li>
                        <ul>
                            <li>Kills with Field Upgrade</li>
                        </ul>
                    </ul>}
                <ol>
                    {(isKnower) ? <></> : <li>Grab Harmonic Component</li>}
                    <li>Read Paper</li>
                    {(selectedPlanets.length >= 1) && (selectedPlanetsDir.length >= 2)
                        ? <></>
                        : <ul>
                            <li>What was on the paper?</li>
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
                    {(isKnower) ? <></> : <li>Travel to Museum</li>}
                </ol>
            </div>
            {/* Power 2/2 */}
            <div>
                <div className='title'>
                    <span>Power 2/2</span>
                    <div className='note'>
                        <span>[</span>
                        <div className='subnote'>
                            <span>Machina</span>
                            <span className='normal'>= Machina Astralis</span>
                        </div>
                        <span>]</span>
                    </div>
                </div>
                {(isKnower)
                    ? <></>
                    : <ul>
                        <li>Disk Side Easter Egg</li>
                        <ul>
                            <li>Kills with Melee</li>
                        </ul>
                        <li>Sisters Side Easter Egg</li>
                    </ul>}
                <ol>
                    {(isKnower)
                        ? <></>
                        : <>
                            <li>Get Saw</li>
                            <li>Travel to Machina</li>
                            <li>Grab Harmonic Component</li>
                            <li>Disk Side Easter Egg</li>
                            <ul>
                                <li>Kills with Equipment</li>
                            </ul>
                        </>}
                    <li>Read Paper</li>
                    {(selectedPlanets.length >= 2) && (selectedPlanetsDir.length >= 4)
                        ? <></>
                        : <ul>
                            <li>What was on the paper?</li>
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
                    {(isKnower) ? <></> : <li>Turn on Power </li>}
                </ol>
            </div>
            {/* O.S.C.A.R.'s Nightmare */}
            <div>
                <div className='title'>
                    <span>O.S.C.A.R.'s Nightmare</span>
                    <div className='note'>
                        <span>[</span>
                        <div className='subnote'>
                            <span>PAP</span>
                            <span className='normal'>= Pack-a-Punch</span>
                        </div>
                        <span>]</span>
                    </div>
                </div>
                <ol>
                    {(isKnower) ? <></> : <li>Shoot panels [5]</li>}
                    <li>Use telescope</li>
                    {(codeMars.length >= 4)
                        ? <></>
                        : <ul>
                            <li>Where is Mars?</li>
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
                    <li>Read symbols</li>
                        {(codePillar.length === 5)
                            ? <></>
                            : <ul>
                                <li>Click the symbols in order.</li>
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
                    {(isKnower)
                        ? <></>
                        : <>
                            <li>Beam OSCAR</li>
                            <li>Get Fragments [3]</li>
                            <ul>
                                <li>Shoot Purple Crystals with Cyro Freeze</li>
                            </ul>
                            <li>Shoot blinking Lamp</li>
                            <li>Shoot OSCAR's UFO</li>
                            <li>Beam OSCAR</li>
                            <li>Get Car Battery</li>
                            <ul>
                                <li>Shoot Tessie with PAP gun</li>
                            </ul>
                            <li>Travel to Luminarium</li>
                            <li>Use trap on OSCAR</li>
                            <li>Grab Wonder Weapon</li>
                        </>}
                </ol>
            </div>
            {/* Wait */}
            <div>
                <div className='title'>
                    <span>Wait</span>
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
                        <span>]</span>
                    </div>
                </div>
                <ol>
                    {(isKnower)
                        ? <></>
                        : <>
                            <li>Respawn OSCAR</li>
                            <li>
                                <span className='note-oscar'>
                                    Don't let OSCAR see you
                                </span>
                            </li>
                            <li>Travel to Machina</li>
                        </>}
                    <li>Read last paper</li>
                    {(selectedPlanets.length >= 3) && (selectedPlanetsDir.length >= 6)
                        ? <></>
                        : <ul>
                            <li>What was on the paper?</li>
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
                    {(isKnower) ? <></> : <li>Tail OSCAR</li>}
                    <li>
                        <span>Wait for Thurston to say, </span>
                        <span className='dialogue'>"Stay up there while I draw OSCAR away! And remember:"</span>
                    </li>
                    {(codeOscar.length === 3)
                        ? <></>
                        : <ul>
                            <li>What planets to remember?</li>
                            <div className='codes'>
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
                    {(isKnower)
                        ? <></>
                        : <>
                            <li>Travel to Dome</li>
                            <li>Input code</li>
                            <div className='codes'>
                                {codeOscar.map((number) => {
                                    return <button className='symbol'
                                        key={`code-oscar-number-${number}`}>
                                        {number}
                                    </button>
                                })}
                            </div>
                            <li>Grab Key</li>
                        </>}
                </ol>
            </div>
            {/* Steal the Neptune */}
            <div>
                <div className='title'>
                    <span>Steal the Neptune</span>
                    <div className='note'>
                        <span>[</span>
                        <div className='subnote'>
                            <span>Machina</span>
                            <span className='normal'>= Machina Astralis</span>
                        </div>
                        <span>]</span>
                    </div>
                </div>
                <ol>
                    {(isKnower)
                        ? <></>
                        : <>
                            <li>Travel to Machina</li>
                            <li>Get Brain</li>
                            <li>Travel to Luminarium</li>
                            <li>Place Brain</li>
                            <li>Pick up Brain</li>
                            <li>Travel to Machina</li>
                            <li>Install Brain</li>
                        </>}
                    <ul>
                        <li>What books?</li>
                        {Object.entries(books).map(([category, book]) => (
                            <div className='codes'
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
                    <li>Turn statues</li>
                    <div className='codes'>
                        {Object.values(codeStatues).map((number, numberIndex) => {
                            return <button className='symbol'
                                key={`code-statues-${numberIndex}`}>
                                {number}
                            </button>
                        })}
                    </div>
                    {(isKnower)
                        ? <></>
                        : <>
                            <li>Grab Neptune</li>
                            <li>Insert Neptune</li>
                        </>}
                </ol>
            </div>
            {/* O.S.C.A.R.'s Torment */}
            <div>
                <div className='title'>
                    <span>O.S.C.A.R.'s Torment</span>
                </div>
                <ol>
                    <li>Input code</li>
                    <div className='codes'>
                        <button className='symbol'>
                            {codeMars.join('')}
                        </button>
                    </div>
                    <li>Shoot planets</li>
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
                    {(isKnower) ? <></> : <li>Torment OSCAR</li>}
                </ol>
            </div>
            {/* The Vampire Cosmonaut */}
            <div>
                <div className='title'>
                    <span>The Vampire Cosmonaut</span>
                </div>
                <ol>
                    {(isKnower)
                        ? <></>
                        : <>
                            <li>Install Barrel</li>
                            <li>Shoot Towers</li>
                            <li>Grab Bird</li>
                            <li>Insert Bird</li>
                        </>}
                    <li>Shoot Pillars with Wonder Weapon</li>
                    {(codeMarsPillar.length === 5)
                        ? <></>
                        : <ul>
                            <li>Starting from the right pillar, what are the symbols?</li>
                            <div className='big-image mars right-pillar'>
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
                    <li>Input code</li>
                    <div className='big-image mars'>
                        <span>{codeMarsPillar.indexOf('diamond') + 1}</span>
                        <span>{codeMarsPillar.indexOf('hourglass') + 1}</span>
                        <span>{codeMarsPillar.indexOf('icecream') + 1}</span>
                        <span>{codeMarsPillar.indexOf('plus') + 1}</span>
                        <span>{codeMarsPillar.indexOf('globe') + 1}</span>
                    </div>
                </ol>
            </div>
        </section>
    );
};

export default memo(Astra);