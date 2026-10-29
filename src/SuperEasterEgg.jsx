import { memo } from 'react';

const superEasterEgg = () => {
    return (
        <section className='page'>
            <div className='main-title title-super-easter-egg'>
                <div>
                    <span className='title-aotd'>Su</span>
                    <span className='title-astra'>per</span>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className='title-paradox'>
                        <span>Ea</span>
                        <span>s</span>
                    </div>
                    <span className='title-totenreich'>ter</span>
                </div>
                <div>
                    <span className='title-kowakujo'>E</span>
                    <span className='title-rex'>gg</span>
                </div>
            </div>
            {/* Ashes of the Damned */}
            <div>
                <div className='title'>
                    <span></span>
                    <span>Ashes of the Damned</span>
                    <span></span>
                </div>
                <img className='big-image'
                    src='/aotd/spawn.webp'
                    alt='Super easter egg ashes of the damned spawn'
                    decoding='async'
                    loading='lazy'/>
                <div className='sub-title'>
                    <span>Tips & Tricks</span>
                    <div></div>
                </div>
                <ul>
                    <li>
                        <div className='image-list'>
                            <div>Need <span className='tesla-storm'> Tesla Storm</span></div>
                            <img className='field-upgrade'
                                src='/field-upgrades/tesla-storm.webp'
                                alt='Field upgrade tesla storm'
                                decoding='async'
                                loading='lazy'/>
                        </div>
                    </li>
                </ul>
                <div className='sub-title'>
                    <span>Steps</span>
                    <div></div>
                </div>
                <ol>
                    <li>Find Twins</li>
                    <div className='codes'>
                        <div className='side-activity horizontal'>
                            <img className='smaller-image'
                                src='/aotd/super-easter-egg/sisters-spot-1.webp'
                                alt='Ashes of the damned super easter egg sisters spot 1'/>
                            <button className='symbol fill'>Lost Cabins</button>
                        </div>
                        <div className='side-activity horizontal'>
                            <img className='smaller-image'
                                src='/aotd/super-easter-egg/sisters-spot-2.webp'
                                alt='Ashes of the damned super easter egg sisters spot 2'/>
                            <button className='symbol fill'>Ashwood</button>
                        </div>
                        <div className='side-activity horizontal'>
                            <img className='smaller-image'
                                src='/aotd/super-easter-egg/sisters-spot-3.webp'
                                alt='Ashes of the damned super easter egg sisters spot 3'/>
                            <button className='symbol fill'>Grounded Ship</button>
                        </div>
                    </div>
                    <li>Get Wonder Weapon</li>
                    <li>Travel to Farm</li>
                    <li>Pull Toy Box on Windmill with Wonder Weapon</li>
                    <img className='big-image'
                        src='/aotd/super-easter-egg/toy-box.webp'
                        alt='Super easter egg ashes of the damned toy box'
                        decoding='async'
                        loading='lazy'/>
                    <li>
                        <div className='image-list'>
                            <div>Use <span className='tesla-storm'>Tesla Storm</span> on Toy Box</div>
                            <img className='field-upgrade'
                                src='/field-upgrades/tesla-storm.webp'
                                alt='Field upgrade tesla storm'
                                decoding='async'
                                loading='lazy'/>
                        </div>
                    </li>
                    <li>Travel to Monolith Forest</li>
                    <li>Find, Pull, and Interact with 3 Crystals</li>
                    <div className='codes'>
                        <div className='side-activity horizontal'>
                            <img className='smaller-image'
                                src='/aotd/super-easter-egg/crystal-spot-1.webp'
                                alt='Super easter egg ashes of the damned crystal spot 1'
                                decoding='async'
                                loading='lazy'/>
                            <button className='symbol fill'>Example Spot 1</button>
                        </div>
                        <div className='side-activity horizontal'>
                            <img className='smaller-image'
                                src='/aotd/super-easter-egg/crystal-spot-2.webp'
                                alt='Super easter egg ashes of the damned crystal spot 2'
                                decoding='async'
                                loading='lazy'/>
                            <button className='symbol fill'>Example Spot 2</button>
                        </div>
                        <div className='side-activity horizontal'>
                            <img className='smaller-image'
                                src='/aotd/super-easter-egg/crystal-spot-3.webp'
                                alt='Super easter egg ashes of the damned crystal spot 3'
                                decoding='async'
                                loading='lazy'/>
                            <button className='symbol fill'>Example Spot 3</button>
                        </div>
                    </div>
                    <li>Travel to Lake</li>
                    <li>Interact with Meteor</li>
                    <img className='big-image'
                        src='/aotd/super-easter-egg/meteor.webp'
                        alt='Super easter egg ashes of the damned meteor'
                        decoding='async'
                        loading='lazy'/>
                    <li>End round</li>
                    <li>Grab Shard from Meteor</li>
                    <li>Put Shard in Toy Box</li>
                    <li>Grab Tessie Toy</li>
                    <li>Exfil</li>
                </ol>
            </div>
            {/* Astra Malorum */}
            <div>
                <div className='title'>
                    <span></span>
                    <span>Astra Malorum</span>
                    <span></span>
                </div>
                <img className='big-image'
                    src='/astra/spawn.webp'
                    alt='Super easter egg ashes of the damned spawn'
                    decoding='async'
                    loading='lazy'/>
                <div className='sub-title'>
                    <span>Tips & Tricks</span>
                    <div></div>
                </div>
                <ul>
                    <li>
                        Need
                        <span className='explosive'> Explosives</span>
                    </li>
                </ul>
                <div className='sub-title'>
                    <span>Steps</span>
                    <div></div>
                </div>
                <ol>
                    <li>Travel to Luminarium</li>
                    <li>
                        Throw
                        <span className='explosive'> Explosives </span>
                        at Toy Box in Order
                    </li>
                    <img className='big-image'
                        src='/astra/super-easter-egg/box-1.webp'
                        alt='Super easter egg astra malorum box 1'
                        decoding='async'
                        loading='lazy'/>
                    <img className='big-image'
                        src='/astra/super-easter-egg/box-2.webp'
                        alt='Super easter egg astra malorum box 2'
                        decoding='async'
                        loading='lazy'/>
                    <li>Travel to Spawn</li>
                    <li>
                        Throw
                        <span className='kazimir'> Kazimir </span>
                        Near the Back Wall to Pull Toy Box
                    </li>
                    <img className='big-image'
                        src='/astra/super-easter-egg/box-3.webp'
                        alt='Super easter egg astra malorum box 3'
                        decoding='async'
                        loading='lazy'/>
                    <li>Do Tessie Side Easter Egg</li>
                    <ul>
                        <li>Throw Semtex at Rock</li>
                    </ul>
                    <img className='big-image'
                        src='/astra/super-easter-egg/side-easter-egg-rock.webp'
                        alt='Super easter egg astra malorum side easter egg rock'
                        decoding='async'
                        loading='lazy'/>
                    <ul>
                        <li>Wall Bounce Off Rock</li>
                        <li>When Floating Away, Grab Turret</li>
                        <li>Install Turret</li>
                    </ul>
                    <img className='big-image'
                        src='/astra/super-easter-egg/side-easter-egg-tessie.webp'
                        alt='Super easter egg astra malorum side easter egg tessie'
                        decoding='async'
                        loading='lazy'/>
                    <li>Get Wonder Weapon</li>
                    <li>Do Wisp Side Easter Egg</li>
                    <ul>
                        <li>Find Shining Lamp</li>
                    </ul>
                    <img className='big-image'
                        src='/astra/super-easter-egg/lamps-1.webp'
                        alt='Super easter egg astra malorum lamps 1'
                        decoding='async'
                        loading='lazy'/>
                    <img className='big-image'
                        src='/astra/super-easter-egg/lamps-2.webp'
                        alt='Super easter egg astra malorum lamps 2'
                        decoding='async'
                        loading='lazy'/>
                    <img className='big-image'
                        src='/astra/super-easter-egg/lamps-3.webp'
                        alt='Super easter egg astra malorum lamps 3'
                        decoding='async'
                        loading='lazy'/>
                    <img className='big-image'
                        src='/astra/super-easter-egg/lamps-4.webp'
                        alt='Super easter egg astra malorum lamps 4'
                        decoding='async'
                        loading='lazy'/>
                    <ul>
                        <li>Once Found, ADS Lamp Until it Transfers</li>
                        <li>Light Other 8 Lamps by Meleeing while Looking at Lamp</li>
                        <li>Retrieve Wisp with ADS</li>
                        <li>Push a Round to Fill Lamps with Upgraded Wisps</li>
                    </ul>
                    <li>Unlock Mars</li>
                    <li>Activate Pillars</li>
                    <li>Travel to Spawn</li>
                    <li>Kill OSCAR with Tessie Turret</li>
                    <li>Travel to Observatory Dome</li>
                    <li>Use Telescope to see the Comet</li>
                    <li>Do Slow Motion Clock Side Easter Egg</li>
                    <ul>
                        <li>Melee Each Clock Quickly</li>
                    </ul>
                    <img className='big-image'
                        src='/astra/super-easter-egg/clock-1.webp'
                        alt='Super easter egg astra malorum clock 1'
                        decoding='async'
                        loading='lazy'/>
                    <img className='big-image'
                        src='/astra/super-easter-egg/clock-2.webp'
                        alt='Super easter egg astra malorum clock 2'
                        decoding='async'
                        loading='lazy'/>
                    <img className='big-image'
                        src='/astra/super-easter-egg/clock-3.webp'
                        alt='Super easter egg astra malorum clock 3'
                        decoding='async'
                        loading='lazy'/>
                    <img className='big-image'
                        src='/astra/super-easter-egg/clock-4.webp'
                        alt='Super easter egg astra malorum clock 4'
                        decoding='async'
                        loading='lazy'/>
                    <li>When Time is Slowed, Travel to Observatory Dome</li>
                    <li>Use Telescope and Look at UFO</li>
                    <li>Get Shock Charges [2]</li>
                    <li>Get Upgraded Wisps with ADS [5]</li>
                    <li>Travel to Mars</li>
                    <li>Use Shock Charge in Middle of Circle to Summon UFO [2]</li>
                    <img className='big-image'
                        src='/astra/super-easter-egg/mars-circle.webp'
                        alt='Super easter egg astra malorum side easter egg tessie'
                        decoding='async'
                        loading='lazy'/>
                    <li>Read and Note Moorse Code from UFO</li>
                    <div className='codes'>
                        <button className='symbol long'>Lava Lamp</button>
                        <button className='symbol long'>&#8226; &#8722; &#8226; &#8226;</button>
                    </div>
                    <div className='codes'>
                        <button className='symbol long'>Flamingo</button>
                        <button className='symbol long'>&#8226; &#8226; &#8722; &#8226;</button>
                    </div>
                    <div className='codes'>
                        <button className='symbol long'>Toilet</button>
                        <button className='symbol long'>&#8722;</button>
                    </div>
                    <div className='codes'>
                        <button className='symbol long'>Spacesuit</button>
                        <button className='symbol long'>&#8226; &#8226; &#8226;</button>
                    </div>
                    <li>Go to Items</li>
                    <img className='big-image'
                        src='/astra/super-easter-egg/mars-items.webp'
                        alt='Super easter egg astra malorum mars items'
                        decoding='async'
                        loading='lazy'/>
                    <li>Melee Item with Upgraded Wisp According to Moorse Code</li>
                    <li>Wait for Animation</li>
                    <li>Do the Same for Other Items</li>
                    <li>Grab Alien</li>
                    <li>Put in Toy Box</li>
                    <img className='big-image'
                        src='/astra/super-easter-egg/toy-box.webp'
                        alt='Super easter egg astra malorum toy box'
                        decoding='async'
                        loading='lazy'/>
                    <li>Grab Catheris Toy</li>
                    <li>Exfil</li>
                </ol>
            </div>
            {/* Paradox Junction */}
            <div>
                <div className='title'>
                    <span></span>
                    <span>Paradox Junction</span>
                    <span></span>
                </div>
                <div className='sub-title'>
                    <span>Tips & Tricks</span>
                    <div></div>
                </div>
                <ul>
                    <li>
                        Look for
                        <span className='psych-grenade'> Psych Grenade</span>
                    </li>
                </ul>
                <div className='sub-title'>
                    <span>Tips & Tricks</span>
                    <div></div>
                </div>
                <ol>
                    <li>Teleport to Old</li>
                    <li>Interact with ? Box on Red Garage Door</li>
                    <li>Travel to Yellow House</li>
                    <li>
                        Throw
                        <span className='psych-grenade'> Psych Grenade </span>
                        at ? on the wall
                    </li>
                    <li>Grab Key</li>
                    <li>Travel to Red Garage Door</li>
                    <li>Interact with Box</li>
                    <li>Travel to New</li>
                    <li>Shoot 3 Parts</li>
                    <ul>
                        <li>Trinity Ave Garage [Open with XD] - On rack</li>
                        <li>Trinity Ave - Near PAP, Behind Truck</li>
                        <li>Trinity Ave - Climb on Red Ball Box, Nearest Roof Corner</li>
                        <li>Trinity Ave - Right side of Exfil on Roof</li>
                        <li>Green House Backyard - On top of Bunker</li>
                        <li>Yellow House - Near Window, On Chair</li>
                    </ul>
                    <li>Travel to Spawn</li>
                    <li>Go on top of Bus</li>
                    <li>Interact with Parts</li>
                    <li>Play Mini-game</li>
                    <li>Grab Pink Teddy</li>
                    <li>Teleport to Old</li>
                    <li>Put in Toy Box</li>
                    <li>Grab Twins Toy</li>
                    <li>Exfil</li>
                </ol>
            </div>
            {/* Totenreich */}
            <div>
                <div className='title'>
                    <span></span>
                    <span>Totenreich</span>
                    <span></span>
                </div>
                <div className='sub-title'>
                    <span>Tips & Tricks</span>
                    <div></div>
                </div>
                <ul>
                    <li>
                        <div className='image-list'>
                            <div>Need <span className='wildfire'>Wildfire</span></div>
                            <img className='field-upgrade'
                                src='/field-upgrades/wild-fire.webp'
                                alt='Field upgrade wild fire'
                                decoding='async'
                                loading='lazy'/>
                        </div>
                    </li>
                </ul>
                <div className='sub-title'>
                    <span>Steps</span>
                    <div></div>
                </div>
                <ol>
                    <li>Get access to the Lighthouse [Wonder Weapon]</li>
                    <li>On the second floor, go to the corner and look in the broken building</li>
                    <li>
                        Grab and Upgrade
                        <span className='high-value-weapon'> The Silent Heir</span>
                    </li>
                    <li>Grab Fishing Rod</li>
                    <li>Travel to Eidskallen Square</li>
                    <li>
                        <div className='image-list'>
                            <div>Fish on Fence and Activate <span className='wildfire'>Wildfire</span></div>
                            <img className='field-upgrade'
                                src='/field-upgrades/wild-fire.webp'
                                alt='Field upgrade wild fire'
                                decoding='async'
                                loading='lazy'/>
                        </div>
                    </li>
                    <li>Travel to Burial Grounds</li>
                    <li>
                        Kill
                        <span className='high-value-target'> King Draugvald the Undying </span>
                        with
                        <span className='high-value-weapon'> The Silent Heir</span>
                    </li>
                    <li>Grab Crown</li>
                    <li>Put in Toy Box</li>
                    <li>Grab Guardian Toy</li>
                    <li>Exfil</li>
                </ol>
            </div>
            {/* Kowakujo */}
            <div>
                <div className='title'>
                    <span></span>
                    <span>Kowakujo</span>
                    <span></span>
                </div>
                <div className='sub-title'>
                    <span>Steps</span>
                    <div></div>
                </div>
                <ol>
                    <li>Turn on PAP</li>
                    <li>Melee Cherry Tree</li>
                    <li>Travel to Tenshu Rooftops right next to the Kite</li>
                    <li>Create Cherry Tornado</li>
                    <li>Bird will Fly to the Roof</li>
                    <li>Travel to Kitchens</li>
                    <li>Melee Cherry Tree</li>
                    <li>Wait for Bird</li>
                    <li>Travel to Staging Area</li>
                    <li>Melee Cherry Tree</li>
                    <li>Wait for Bird</li>
                    <li>Travel to Training Area</li>
                    <li>Melee Cherry Tree</li>
                    <li>Wait for Bird</li>
                    <li>Travel to Courtyard near the Rock</li>
                    <li>Create Cherry Tornado</li>
                    <li>Wait for Bird</li>
                    <li>Grab Bird</li>
                    <li>Put in Toy Box</li>
                    <li>Grab T-Rex Toy</li>
                    <li>Exfil</li>
                </ol>
            </div>
            {/* Rex Infernus */}
            <div>
                <div className='title'>
                    <span></span>
                    <span>Rex Infernus</span>
                    <span></span>
                </div>
                <div className='sub-title'>
                    <span>Tips & Tricks</span>
                    <div></div>
                </div>
                <ul>
                    <li>
                        <div className='image-list'>
                            <div>Need <span className='aether-shroud'>Aether Shroud</span></div>
                            <img className='field-upgrade'
                                src='/field-upgrades/aether-shroud.webp'
                                alt='Field upgrade aether shroud'
                                decoding='async'
                                loading='lazy'/>
                        </div>
                    </li>
                </ul>
                <div className='sub-title'>
                    <span>Steps</span>
                    <div></div>
                </div>
                <ol>
                    <li>Upgrade Grapple</li>
                    <li>Travel to Nyxara Passage</li>
                    <li>Grapple to spot under the Passage</li>
                    <li>Play Obstacle Course</li>
                    <li>Stand on rock with Box to make it fall</li>
                    <li>
                        <div className='image-list'>
                            <div>Use <span className='aether-shroud'>Aether Shroud</span> to Interact with Box</div>
                            <img className='field-upgrade'
                                src='/field-upgrades/aether-shroud.webp'
                                alt='Field upgrade aether shroud'
                                decoding='async'
                                loading='lazy'/>
                        </div>
                    </li>
                    <li>Melee 3 Floating Horses</li>
                    <ul>
                        <li>Spira Insula - Floating Rock near Jugganaut
                            <ul>
                                <li>Get kills while jumping</li>
                                <li>Grab Shoes</li>
                            </ul>
                        </li>
                        <li>Aranea Insula - Floating near Mystery Box
                            <ul>
                                <li>Get kills with PHD</li>
                                <li>Grab Roller Skates</li>
                            </ul>
                        </li>
                        <li>Runas Insula - Floating in the middle
                            <ul>
                                <li>Get kills with Frenzied Guard</li>
                                <li>Grab Skip Rope</li>
                            </ul>
                        </li>
                    </ul>
                    <li>Every Exfil round a portal will spawn at Nexus</li>
                    <li>Go in the Portal</li>
                    <li>Put items in Toy Box</li>
                    <li>Grab Warden Toy</li>
                    <li>Go to Shelf</li>
                    <li>Put Warden Toy</li>
                </ol>
            </div>
        </section>
    );
};

export default memo(superEasterEgg);