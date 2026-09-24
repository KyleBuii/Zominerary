import { memo } from 'react';

const superEasterEgg = () => {
    return (
        <section className='page'>
            {/* Paradox Junction */}
            <div>
                <div className='title'>
                    <span>Paradox Junction</span>
                </div>
                <ul>
                    <li>
                        Look for
                        <span className='psych-grenade'> Psych Grenade</span>
                    </li>
                </ul>
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
                    <span>Totenreich</span>
                </div>
                <ul>
                    <li>
                        Need
                        <span className='wildfire'> Wildfire</span>
                    </li>
                </ul>
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
                        Fish on the Fence and Activate
                        <span className='wildfire'> Wildfire</span>
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
                    <span>Kowakujo</span>
                </div>
                <ol>
                    <li>Turn on PAP</li>
                    <li>Melee Cherry Tree</li>
                    <li>Travel to Tenshu Rooftops right next to the Kite</li>
                    <li>Spin</li>
                    <li>Bird will Fly to the Roof</li>
                    <li>Travel to Kitchens</li>
                    <li>Melee Cherry Tree</li>
                    <li>Bird will Fly to Roof</li>
                    <li>Travel to Staging Area</li>
                    <li>Melee Cherry Tree</li>
                    <li>Bird will Fly Roof</li>
                    <li>Travel to Training Area</li>
                    <li>Melee Cherry Tree</li>
                    <li>Bird Fly</li>
                    <li>Travel to Courtyard near the Rock</li>
                    <li>Spin</li>
                    <li>Bird</li>
                    <li>Grab Bird</li>
                    <li>Put in Toy Box</li>
                    <li>Grab T-Rex Toy</li>
                    <li>Exfil</li>
                </ol>
            </div>
            {/* Rex Infernus */}
            <div>
                <div className='title'>
                    <span>Rex Infernus</span>
                </div>
                <ol>
                    <li>Upgrade Grapple</li>
                    <li>Need Aether Shroud</li>
                    <li>Travel to Nyxara Passage</li>
                    <li>Grapple to spot under the Passage</li>
                    <li>Play Obstacle Course</li>
                    <li>Stand on rock with Box to make it fall</li>
                    <li>Use Aether Shroud to Interact with Box</li>
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