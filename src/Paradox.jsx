import { memo, useState } from 'react';
import { noteFifth, noteFirst, noteFourth, noteSecond, noteThird } from './Symbols';

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
const mapMusicNotes = ['Trinity Ave', 'Trinity Ave', 'Trinity Ave', 'Trinity Ave', 'Spawn', 'Spawn', 'Green House Backyard', 'Yellow House Backyard'];

const Paradox = ({ isKnower, showSolver }) => {
    const [corruptedWall, setCorruptedWall] = useState('');
    const [mannequin, setMannequin] = useState(-1);
    const [musicNotes, setMusicNotes] = useState(Object.fromEntries(Array.from({ length: 8 }, (_, i) => [i + 1, -1])));
    const [musicNotesNumber, setMusicNotesNumber] = useState([...Array.from({length: 8}, (_, i) => i + 1)]);

    const handleMusicNotes = (position, number) => {
        setMusicNotes((prev) => {
            return {
                ...prev,
                [position]: number,
            }
        });
        setMusicNotesNumber((prev) => prev.filter((noteNumber) => noteNumber !== number))
    };

    return (
        <section className='page'>
            <div className='main-title title-paradox'>
                <span>Paradox</span>
                <span>Junction</span>
            </div>
            {(isKnower)
                ? <>
                    <div className='title'>
                        <span></span>
                        <span>Find</span>
                        <span></span>
                    </div>
                    {(corruptedWall === '')
                        ? <div className='codes wrap'>
                            <div className='side-activity horizontal'>
                                <button className='image'
                                    style={{ backgroundImage: 'url(/paradox/corrupted-wall-yellow.webp)' }}
                                    onClick={() => setCorruptedWall('yellow')}></button>
                                <button className='symbol fill'>Yellow House Garage</button>
                            </div>
                            <div className='side-activity horizontal'>
                                <button className='image'
                                    style={{ backgroundImage: 'url(/paradox/corrupted-wall-green.webp)' }}
                                    onClick={() => setCorruptedWall('green')}></button>
                                <button className='symbol fill'>Green House Upstairs</button>
                            </div>
                            <div className='side-activity horizontal'>
                                <button className='image'
                                    style={{ backgroundImage: 'url(/paradox/corrupted-wall-trinity.webp)' }}
                                    onClick={() => setCorruptedWall('trinity')}></button>
                                <button className='symbol fill'>Trinity Ave</button>
                            </div>
                        </div>
                        : <div className='codes'>
                            <div className='side-activity horizontal'>
                                <button className={`image corrupted-wall-${corruptedWall}`}
                                    style={{ backgroundImage: `url(/paradox/corrupted-wall-${corruptedWall}.webp)` }}></button>
                                <button className='symbol fill'>{mapCorruptedWall[corruptedWall].name}</button>
                            </div>
                        </div>}
                    {(mannequin === -1)
                        ? <div className='map-container'>
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
                        : <div className='map-container'>
                            <img className='map'
                                src='/paradox/map-mannequin.webp'
                                alt='Map mannequin'
                                decoding='async'
                                loading='lazy'/>
                            <div className='map-buttons'>
                                <button className={`map-button-${(mannequin === -1) ? 0 : mannequin} active`}></button>
                            </div>
                        </div>}
                    <div className='title'>
                        <span></span>
                        <span>Music Notes</span>
                        <span></span>
                    </div>
                    <div className='codes wrap'>
                        <div className='side-actiivty horizontal'>
                            <span>{noteFirst}</span>
                            <button className='symbol short'>Always 1</button>
                        </div>
                        <div className='side-actiivty horizontal'>
                            <span>{noteSecond}</span>
                            <button className='symbol short'>Always 3</button>
                        </div>
                        <div className='side-actiivty horizontal'>
                            <span>{noteThird}</span>
                            <button className='symbol short'>Always 7</button>
                        </div>
                        <div className='side-actiivty horizontal'>
                            <span>{noteFourth}</span>
                            <button className='symbol short'>Either 2 or 5</button>
                        </div>
                        <div className='side-actiivty horizontal'>
                            <span>{noteFifth}</span>
                            <button className='symbol short'>Either 4, 6, or 8</button>
                        </div>
                    </div>
                    {(!showSolver)
                        ? <>
                            <div className='codes wrap'>
                                {[...Array(9).keys()].map((numberNote, indexNote) => {
                                    return (musicNotes[numberNote] === -1)
                                        ? <div className='side-activity horizontal'
                                            key={`music-note-${numberNote}`}>
                                            <div className='side-activity horizontal'>
                                                <img className='smaller-image'
                                                    src={`/paradox/torture/note-${indexNote}.webp`}
                                                    alt='Labled trinity ave 2'
                                                    decoding='async'
                                                    loading='lazy'/>
                                                <button className='symbol fill'>{mapMusicNotes[indexNote - 1]}</button>
                                            </div>
                                            <div className='buttons-smaller-image'>
                                                {musicNotesNumber.map((number) => {
                                                    return <button className='symbol'
                                                        onClick={() => handleMusicNotes(numberNote, number)}
                                                        key={`music-note-buttons-${numberNote}-${number}`}>
                                                        {number}
                                                    </button>
                                                })}
                                            </div>
                                        </div>
                                        : null})}
                            </div>
                            <div className='codes wrap'>
                                {Object.entries(musicNotes)
                                    .sort(([, a], [, b]) => a - b)
                                    .map(([index, number]) => {
                                        return <div className='side-activity horizontal'
                                            key={`music-note-interact-${index}`}>
                                            <img className='smaller-image'
                                                src={`/paradox/torture/note-${index}.webp`}
                                                alt='Labled trinity ave 2'
                                                decoding='async'
                                                loading='lazy'/>
                                            <button className='symbol fill'>
                                                {number}
                                            </button>
                                        </div>
                                    })}
                            </div>
                        </>
                        : <></>}
                    <div className='title'>
                        <span></span>
                        <span>Piano</span>
                        <span></span>
                    </div>
                    <img className='big-image'
                        style={{ margin: '0rem' }}
                        src='/paradox/pre-game/piano-keys.webp'
                        alt='Piano keys'
                        decoding='async'
                        loading='lazy'/>
                    <div className='codes'>
                        <button className='symbol'>A F G E F E C E</button>
                        <button className='symbol'>8 6 7 5 6 5 3 5</button>
                    </div>
                </>
                : <>
                    <div className='popup message'>
                        <img className='ammo-mod'
                            src='/caution.webp'
                            alt='Caution'
                            decoding='async'
                            loading='lazy'/>
                        <span className='warning'>Images Shown May or May Not be In the Correct Version of Nuketown, Ignore It and Follow the Guide</span>
                        <img className='ammo-mod'
                            src='/caution.webp'
                            alt='Caution'
                            decoding='async'
                            loading='lazy'/>
                    </div>
                    {/* Starting Room */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Starting Room</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/paradox/starting-room/spawn-tips-and-tricks.webp'
                            alt='Starting room spawn tips and tricks'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <span>Steps</span>
                            <div></div>
                        </div>
                        <ol>
                            <li>Shoot Clock Hands</li>
                            <img className='clock'
                                src='/paradox/clock-spawn.webp'
                                alt='Clock spawn'
                                decoding='async'
                                loading='lazy'/>
                            <li>Travel to Yellow House Backyard</li>
                        </ol>
                    </div>
                    {/* Listening Exam */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Listening Exam</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/paradox/listening-exam/yellow-house-backyard-tips-and-tricks.webp'
                            alt='Listening exam yellow house backyard tips and tricks'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <span>Steps</span>
                            <div></div>
                        </div>
                        <ol>
                            <li><span className='note-do-all'>DO ALL THE STEPS BELOW BEFORE ROUND 6</span></li>
                            <li>Grab Truck Keys</li>
                            <li>Travel to Yellow House Upstairs</li>
                            <img className='big-image'
                                src='/paradox/listening-exam/yellow-house-upstairs-steps.webp'
                                alt='Listening exam yellow house upstairs steps'
                                decoding='async'
                                loading='lazy'/>
                            <li>Grab SO3</li>
                            <li>Travel to Green House</li>
                            <img className='big-image'
                                src='/paradox/listening-exam/green-house-steps.webp'
                                alt='Listening exam green house steps'
                                decoding='async'
                                loading='lazy'/>
                            <li>Get Solution in Sink</li>
                            <li>Fill Yellow Cyst Making Noises</li>
                            <li>Grab Barrel</li>
                            <li>Find and Click Corrupted Wall Making Noises</li>
                            {(corruptedWall === '')
                                ? <div className='codes wrap'>
                                    <div className='side-activity horizontal'>
                                        <button className='image'
                                            style={{ backgroundImage: 'url(/paradox/corrupted-wall-yellow.webp)' }}
                                            onClick={() => setCorruptedWall('yellow')}></button>
                                        <button className='symbol fill'>Yellow House Garage</button>
                                    </div>
                                    <div className='side-activity horizontal'>
                                        <button className='image'
                                            style={{ backgroundImage: 'url(/paradox/corrupted-wall-green.webp)' }}
                                            onClick={() => setCorruptedWall('green')}></button>
                                        <button className='symbol fill'>Green House Upstairs</button>
                                    </div>
                                    <div className='side-activity horizontal'>
                                        <button className='image'
                                            style={{ backgroundImage: 'url(/paradox/corrupted-wall-trinity.webp)' }}
                                            onClick={() => setCorruptedWall('trinity')}></button>
                                        <button className='symbol fill'>Trinity Ave</button>
                                    </div>
                                </div>
                                : <></>}
                            <li>Find and Click Mannequin Making Noises</li>
                            {(mannequin === -1)
                                ? <div className='map-container'>
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
                                : <></>}
                            <li><span className='note-do-all'>DO ALL THE STEPS ABOVE BEFORE ROUND 6</span></li>
                            <li>Teleport to the Past by Ending Round 6</li>
                            <li>Travel to Spawn</li>
                        </ol>
                    </div>
                    {/* Back to the Past */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Back to the Past</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/paradox/back-to-the-past/clock-rewards.webp'
                            alt='Back to the past clock rewards'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <span>Steps</span>
                            <div></div>
                        </div>
                        <ol>
                            <li>Loot Clock Rewards</li>
                            <li>
                                <div className='image-list'>
                                    <span>Buy Death Perception</span>
                                    <img className='perk'
                                        src='/perks/death-perception.webp'
                                        alt='Perk death perception'
                                        decoding='async'
                                        loading='lazy'/>
                                </div>
                            </li>
                            <li>
                                <div className='image-list'>
                                    <span>Buy Brain Rot</span>
                                    <img className='ammo-mod'
                                        src='/ammo-mods/brain-rot.webp'
                                        alt='Ammo mod brain rot'
                                        decoding='async'
                                        loading='lazy'/>
                                </div>
                            </li>
                            <li>Install Truck Keys</li>
                            <img className='big-image'
                                src='/paradox/back-to-the-past/install-keys.webp'
                                alt='Back to the past install keys'
                                decoding='async'
                                loading='lazy'/>
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
                            <img className='big-image'
                                src='/paradox/back-to-the-past/pap.webp'
                                alt='Back to the past pack a punch'
                                decoding='async'
                                loading='lazy'/>
                            <li>Explode Corrupted Wall</li>
                            {(corruptedWall === '')
                                ? <></>
                                : <div className='codes'>
                                    <div className='side-activity horizontal'>
                                        <button className={`image corrupted-wall-${corruptedWall}`}
                                            style={{ backgroundImage: `url(/paradox/corrupted-wall-${corruptedWall}.webp)` }}></button>
                                        <button className='symbol fill'>{mapCorruptedWall[corruptedWall].name}</button>
                                    </div>
                                </div>}
                            <li>Travel to Yellow House Backyard</li>
                            <img className='big-image'
                                src='/paradox/back-to-the-past/swing-set.webp'
                                alt='Back to the past swing set'
                                decoding='async'
                                loading='lazy'/>
                            <li>Shoot and Grab Swing Seat</li>
                            <li>Teleport to the Future</li>
                        </ol>
                    </div>
                    {/* Back to the Future */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Back to the Future</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/paradox/spawn.webp'
                            alt='Spawn'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <span>Steps</span>
                            <div></div>
                        </div>
                        <ol>
                            <li>Find and Interact with RC-XD Controller</li>
                            <div className='codes wrap'>
                                <div className='side-activity horizontal'>
                                    <img className='smaller-image'
                                        src='/paradox/back-to-the-future/rcxd-yellow.webp'
                                        alt='RCXD yellow'
                                        decoding='async'
                                        loading='lazy'/>
                                    <button className='symbol fill'>Yellow House Garage</button>
                                </div>
                                <div className='side-activity horizontal'>
                                    <img className='smaller-image'
                                        src='/paradox/back-to-the-future/rcxd-trinity.webp'
                                        alt='RCXD trinity'
                                        decoding='async'
                                        loading='lazy'/>
                                    <button className='symbol fill'>Trinity Ave</button>
                                </div>
                                <div className='side-activity horizontal'>
                                    <img className='smaller-image'
                                        src='/paradox/back-to-the-future/rcxd-green.webp'
                                        alt='RCXD green'
                                        decoding='async'
                                        loading='lazy'/>
                                    <button className='symbol fill'>Green House Backyard</button>
                                </div>
                            </div>
                            <li>Use Ramp to Jump Over Fence and Blow Up Door</li>
                            <img className='big-image'
                                src='/paradox/back-to-the-future/rcxd.webp'
                                alt='Rcxd'
                                decoding='async'
                                loading='lazy'/>
                            <li>Travel to Trinity Ave</li>
                            <img className='big-image'
                                src='/paradox/back-to-the-future/chalk.webp'
                                alt='Chalk'
                                decoding='async'
                                loading='lazy'/>
                            <li>Grab Chalk</li>
                            <li>Travel to Yellow House Backyard</li>
                            <li>Place Swing Seat</li>
                            <li>Grab Stock</li>
                            {(corruptedWall === '')
                                ? <></>
                                : <div className='codes'>
                                    <div className='side-activity horizontal'>
                                        <button className={`image corrupted-wall-${corruptedWall}`}
                                            style={{ backgroundImage: `url(/paradox/corrupted-wall-${corruptedWall}.webp)` }}></button>
                                        <button className='symbol fill'>{mapCorruptedWall[corruptedWall].name}</button>
                                    </div>
                                </div>}
                            <li>Grab Hammer</li>
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
                                src='/paradox/back-to-the-future/truck.webp'
                                alt='Truck'
                                decoding='async'
                                loading='lazy'/>
                            <li>Go in Truck</li>
                            <li>Melee Table</li>
                            <img className='big-image'
                                src='/paradox/back-to-the-future/wonder-weapon.webp'
                                alt='Wonder weapon'
                                decoding='async'
                                loading='lazy'/>
                            <li>Craft Wonder Weapon</li>
                            <li>Travel to Yellow House Garage</li>
                        </ol>
                    </div>
                    {/* Torture */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Torture</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/paradox/torture/red-box.webp'
                            alt='Red box'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <span>Steps</span>
                            <div></div>
                        </div>
                        <ol>
                            <li>Interact with Red Tool Box</li>
                            <li>Grab Seeds</li>
                            <li>Find Headphones</li>
                            <div className='codes wrap'>
                                <div className='side-activity horizontal'>
                                    <img className='smaller-image'
                                        src='/paradox/torture/headphones-yellow.webp'
                                        alt='Headphones yellow'
                                        decoding='async'
                                        loading='lazy'/>
                                    <button className='symbol fill'>Yellow House Backyard</button>
                                </div>
                                <div className='side-activity horizontal'>
                                    <img className='smaller-image'
                                        src='/paradox/torture/headphones-green.webp'
                                        alt='Headphones green'
                                        decoding='async'
                                        loading='lazy'/>
                                    <button className='symbol fill'>Green House Upstairs</button>
                                </div>
                                <div className='side-activity horizontal'>
                                    <img className='smaller-image'
                                        src='/paradox/torture/headphones-spawn.webp'
                                        alt='Headphones spawn'
                                        decoding='async'
                                        loading='lazy'/>
                                    <button className='symbol fill'>Spawn</button>
                                </div>
                            </div>
                            <li>Find Tortured Zombie</li>
                            <div className='codes wrap'>
                                <div className='side-activity horizontal'>
                                    <img className='smaller-image'
                                        src='/paradox/torture/tortured-green.webp'
                                        alt='Tortured green'
                                        decoding='async'
                                        loading='lazy'/>
                                    <button className='symbol fill'>Green House Backyard</button>
                                </div>
                                <div className='side-activity horizontal'>
                                    <img className='smaller-image'
                                        src='/paradox/torture/tortured-yellow.webp'
                                        alt='Tortured yellow'
                                        decoding='async'
                                        loading='lazy'/>
                                    <button className='symbol fill'>Yellow House Backyard</button>
                                </div>
                                <div className='side-activity horizontal'>
                                    <img className='smaller-image'
                                        src='/paradox/torture/tortured-trinity.webp'
                                        alt='Tortured trinity'
                                        decoding='async'
                                        loading='lazy'/>
                                    <button className='symbol fill'>Trinity Ave</button>
                                </div>
                            </div>
                            <li>Bring and Kill Tortured Zombie near Truck</li>
                            <ul>
                                <li>Avoid Cysts</li>
                                <li>Kill Zombies Near Tortured Zombie</li>
                                <li>Pushing a Round Spawns New Tortured Zombie</li>
                            </ul>
                            <li>Travel to Green House Backyard</li>
                            <li>Find Piano Teacher</li>
                            <li>
                                <div className='image-list'>
                                    <span>Use Brain Rot on Piano Teacher</span>
                                    <img className='ammo-mod'
                                        src='/ammo-mods/brain-rot.webp'
                                        alt='Ammo mod brain rot'
                                        decoding='async'
                                        loading='lazy'/>
                                </div>
                            </li>
                            <li>Wait for Piano Teacher at Piano</li>
                            <img className='big-image'
                                src='/paradox/torture/piano.webp'
                                alt='Piano'
                                decoding='async'
                                loading='lazy'/>
                            <li>Teleport to the Past Quickly</li>
                            <li>Travel to Trinity Ave</li>
                            <img className='big-image'
                                src='/paradox/torture/seeds.webp'
                                alt='Seeds'
                                decoding='async'
                                loading='lazy'/>
                            <li>Plant Seeds</li>
                            <li>Get Kills with Wonder Weapon Near Seeds</li>
                            <li>Teleport to the Future</li>
                            <li>Travel to Trinity Ave</li>
                            <li>
                                <div className='image-list'>
                                    <span>Buy Wisp Tea from Der Wunderfizz</span>
                                    <img className='perk'
                                        src='/perks/wisp-tea.webp'
                                        alt='Perk wisp tea'
                                        decoding='async'
                                        loading='lazy'/>
                                </div>
                            </li>
                            <li>Tomahawk Tree from Seeds [3]</li>
                            <li>Grab Firewood</li>
                            <li>Shoot Top of Speaker Pole until Object Falls</li>
                            <img className='big-image'
                                src='/paradox/torture/speaker.webp'
                                alt='Piano'
                                decoding='async'
                                loading='lazy'/>
                            <li>
                                <div className='image-list'>
                                    <span>Activate Wisp Tea</span>
                                    <img className='perk'
                                        src='/perks/wisp-tea.webp'
                                        alt='Perk wisp tea'
                                        decoding='async'
                                        loading='lazy'/>
                                </div>
                            </li>
                            <li>Go Near Fallen Object</li>
                            <li>Grab Goggles</li>
                            <li><span className='note-tortured-zombie'>DO TORTURED ZOMBIE WHILE DOING STEP BELLOW</span></li>
                            {(!showSolver)
                                ? <li>Count and Music Note Blinks</li>
                                : <li>Count Music Note Blinks</li>}
                            <div className='codes wrap'>
                                <div className='side-actiivty horizontal'>
                                    <span>{noteFirst}</span>
                                    <button className='symbol short'>Always 1</button>
                                </div>
                                <div className='side-actiivty horizontal'>
                                    <span>{noteSecond}</span>
                                    <button className='symbol short'>Always 3</button>
                                </div>
                                <div className='side-actiivty horizontal'>
                                    <span>{noteThird}</span>
                                    <button className='symbol short'>Always 7</button>
                                </div>
                                <div className='side-actiivty horizontal'>
                                    <span>{noteFourth}</span>
                                    <button className='symbol short'>Either 2 or 5</button>
                                </div>
                                <div className='side-actiivty horizontal'>
                                    <span>{noteFifth}</span>
                                    <button className='symbol short'>Either 4, 6, or 8</button>
                                </div>
                            </div>
                            {(!showSolver)
                                ? <>
                                    <div className='codes wrap'>
                                        {[...Array(9).keys()].map((numberNote, indexNote) => {
                                            return (musicNotes[numberNote] === -1)
                                                ? <div className='side-activity horizontal'
                                                    key={`music-note-${numberNote}`}>
                                                    <div className='side-activity horizontal'>
                                                        <img className='smaller-image'
                                                            src={`/paradox/torture/note-${indexNote}.webp`}
                                                            alt='Labled trinity ave 2'
                                                            decoding='async'
                                                            loading='lazy'/>
                                                        <button className='symbol fill'>{mapMusicNotes[indexNote - 1]}</button>
                                                    </div>
                                                    <div className='buttons-smaller-image'>
                                                        {musicNotesNumber.map((number) => {
                                                            return <button className='symbol'
                                                                onClick={() => handleMusicNotes(numberNote, number)}
                                                                key={`music-note-buttons-${numberNote}-${number}`}>
                                                                {number}
                                                            </button>
                                                        })}
                                                    </div>
                                                </div>
                                                : null})}
                                    </div>
                                    <li>Interact in Order</li>
                                    <div className='codes wrap'>
                                        {Object.entries(musicNotes)
                                            .sort(([, a], [, b]) => a - b)
                                            .map(([index, number]) => {
                                                return <div className='side-activity horizontal'
                                                    key={`music-note-interact-${index}`}>
                                                    <img className='smaller-image'
                                                        src={`/paradox/torture/note-${index}.webp`}
                                                        alt='Labled trinity ave 2'
                                                        decoding='async'
                                                        loading='lazy'/>
                                                    <button className='symbol fill'>
                                                        {number}
                                                    </button>
                                                </div>
                                            })}
                                    </div>
                                </>
                                : <></>}
                            <li>Bring and Kill Final Tortured Zombie to Truck</li>
                            <li>Teleport to the Past</li>
                        </ol>
                    </div>
                    {/* Pre-game */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Pre-game</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/paradox/torture/piano.webp'
                            alt='Piano'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <span>Steps</span>
                            <div></div>
                        </div>
                        <ol>
                            <li>Travel to Green House</li>
                            <li>Play Piano</li>
                            <img className='big-image'
                                src='/paradox/pre-game/piano-keys.webp'
                                alt='Piano keys'
                                decoding='async'
                                loading='lazy'/>
                            <div className='codes'
                                style={{ margin: '0 1rem 1rem' }}>
                                <button className='symbol'>A F G E F E C E</button>
                                <button className='symbol'>8 6 7 5 6 5 3 5</button>
                            </div>
                            <li>Travel to Trinity Ave</li>
                            <img className='big-image'
                                src='/paradox/pre-game/toy-box.webp'
                                alt='Toy box'
                                decoding='async'
                                loading='lazy'/>
                            <li>Interact with Toy Box</li>
                            <li>Travel to Yellow House</li>
                            <img className='big-image'
                                src='/paradox/pre-game/fireplace.webp'
                                alt='Fireplace'
                                decoding='async'
                                loading='lazy'/>
                            <li>Molotov Fireplace</li>
                            <li>Travel to Truck</li>
                            <li>Melee Table and Put Wonder Weapon In</li>
                            <li>Teleport to Future</li>
                            <li>Shoot Floating Zombies Outside Map [3]</li>
                            <div className='codes'>
                                <div className='side-activity horizontal'>
                                    <img className='smaller-image'
                                        src='/paradox/pre-game/yellow-backyard.webp'
                                        alt='Yellow backyard'
                                        decoding='async'
                                        loading='lazy'/>
                                    <button className='symbol fill'>Yellow House Backyard</button>
                                </div>
                                <div className='side-activity horizontal'>
                                    <img className='smaller-image'
                                        src='/paradox/pre-game/green-backyard.webp'
                                        alt='Green backyard'
                                        decoding='async'
                                        loading='lazy'/>
                                    <button className='symbol'>Green House Backyard</button>
                                </div>
                            </div>
                            <li>Find Red Ball</li>
                            <div className='codes'>
                                <div className='side-activity horizontal'>
                                    <img className='smaller-image'
                                        src='/paradox/pre-game/red-ball-1.webp'
                                        alt='Red ball 1'
                                        decoding='async'
                                        loading='lazy'/>
                                    <button className='symbol fill'>Yellow House Backyard</button>
                                </div>
                                <div className='side-activity horizontal'>
                                    <img className='smaller-image'
                                        src='/paradox/pre-game/red-ball-2.webp'
                                        alt='Red ball 2'
                                        decoding='async'
                                        loading='lazy'/>
                                    <button className='symbol'>Trinity Ave</button>
                                </div>
                                <div className='side-activity horizontal'>
                                    <img className='smaller-image'
                                        src='/paradox/pre-game/red-ball-3.webp'
                                        alt='Red ball 3'
                                        decoding='async'
                                        loading='lazy'/>
                                    <button className='symbol'>Trinity Ave</button>
                                </div>
                            </div>
                            <li>Shoot Red Ball</li>
                            <li>Bring to X in Green House Backyard</li>
                            <img className='big-image'
                                src='/paradox/pre-game/x-green.webp'
                                alt='X green'
                                decoding='async'
                                loading='lazy'/>
                            <li>Travel to Trinity Ave</li>
                            <img className='big-image'
                                src='/paradox/pre-game/x-trinity.webp'
                                alt='X trinity'
                                decoding='async'
                                loading='lazy'/>
                            <li>Stand on X</li>
                            <li>Teleport to the Past</li>
                            <li>Travel to Truck</li>
                            <li>Melee Table and Grab Upgraded Wonder Weapon</li>
                            <li>Travel to Trinity Ave</li>
                        </ol>
                    </div>
                    {/* Game */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Game</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/paradox/game/hop-scotch.webp'
                            alt='Hop scotch'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <span>Steps</span>
                            <div></div>
                        </div>
                        <ol>
                            <li>Complete Hop Scotch Minigame</li>
                            <li>Complete Bouncing Ball Minigame</li>
                            <li>Travel to Green House Backyard</li>
                            <img className='big-image'
                                src='/paradox/game/bouncing-ball.webp'
                                alt='Bouncing ball'
                                decoding='async'
                                loading='lazy'/>
                            <li>Complete Pass the Ball Minigame</li>
                            <li>Travel to Trinity Ave</li>
                        </ol>
                    </div>
                    {/* Walk the Item */}
                    <div>
                        <div className='title'>
                            <span></span>
                            <span>Walk the Item</span>
                            <span></span>
                        </div>
                        <img className='big-image'
                            src='/paradox/game/hop-scotch.webp'
                            alt='Hop scotch'
                            decoding='async'
                            loading='lazy'/>
                        <div className='sub-title'>
                            <span>Steps</span>
                            <div></div>
                        </div>
                        <ol>
                            <li>Kill Zombies Near Floating Golden Items with Wonder Weapon [3]</li>
                            <li>Teleport to the Future</li>
                            <li>Shoot Clock Hands</li>
                            <img className='clock'
                                src='/paradox/clock-boss.webp'
                                alt='Clock boss'
                                decoding='async'
                                loading='lazy'/>
                            <li>Teleport to the Past</li>
                            <li>Shoot Clock Hands 2s~ Before Teleporting</li>
                            <li>Follow White Orb</li>
                        </ol>
                    </div>
                </>}
            <div>
                <div className='title'>
                    <span></span>
                    <span>Honorable Mention</span>
                    <span></span>
                </div>
                <img className='big-image'
                    src='/honorable-mention/paradox/DOG.webp'
                    alt='Starting room spawn tips and tricks'
                    decoding='async'
                    loading='lazy'/>
            </div>
        </section>
    );
};

export default memo(Paradox);