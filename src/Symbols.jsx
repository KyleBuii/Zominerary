//#region Planets
export const mercury = <svg viewBox='0 0 100 100'>
    <defs>
        <radialGradient id='mercuryGradient' cx='35%' cy='28%'>
            <stop offset='0%' stopColor='#d8d5cd'/>
            <stop offset='55%' stopColor='#9b9993'/>
            <stop offset='100%' stopColor='#55565a'/>
        </radialGradient>
    </defs>
    <circle cx='50' cy='50' r='30'
        fill='url(#mercuryGradient)'
        stroke='rgb(37, 44, 45)'
        strokeWidth='7'/>
    <g fill='#68686a' opacity='0.65'>
        <circle cx='35' cy='36' r='4'/>
        <circle cx='62' cy='31' r='3'/>
        <circle cx='69' cy='48' r='5'/>
        <circle cx='42' cy='56' r='3'/>
        <circle cx='29' cy='59' r='2.5'/>
        <circle cx='57' cy='67' r='5'/>
        <circle cx='39' cy='72' r='2'/>
    </g>
    <g fill='#e2dfd7' opacity='0.45'>
        <circle cx='48' cy='28' r='2'/>
        <circle cx='72' cy='61' r='2'/>
        <circle cx='31' cy='47' r='1.5'/>
        <circle cx='53' cy='48' r='2'/>
    </g>
</svg>;

export const venus = <svg viewBox='0 0 100 100'>
    <defs>
        <radialGradient id='venusGradient' cx='35%' cy='28%'>
            <stop offset='0%' stopColor='#f5d58a'/>
            <stop offset='50%' stopColor='#c99d4d'/>
            <stop offset='100%' stopColor='#79572d'/>
        </radialGradient>
    </defs>
    <circle cx='50' cy='50' r='30'
        fill='url(#venusGradient)'
        stroke='rgb(37, 44, 45)'
        strokeWidth='7'/>
    <g fill='none' strokeLinecap='round'>
        <path d='M28 39 Q48 32 72 39'
            stroke='#f0ce82'
            strokeWidth='3'
            opacity='0.7'/>
        <path d='M26 49 Q49 42 74 49'
            stroke='#9a7135'
            strokeWidth='4'
            opacity='0.8'/>
        <path d='M28 59 Q49 53 72 59'
            stroke='#e4bd6d'
            strokeWidth='3'
            opacity='0.65'/>
        <path d='M34 68 Q50 63 67 67'
            stroke='#956b32'
            strokeWidth='4'
            opacity='0.75'/>
    </g>
</svg>;

export const earth = <svg viewBox='0 0 100 100'>
    <defs>
        <radialGradient id='earthGradient' cx='35%' cy='28%'>
            <stop offset='0%' stopColor='#65c9e8'/>
            <stop offset='50%' stopColor='#287eb5'/>
            <stop offset='100%' stopColor='#123e70'/>
        </radialGradient>
        <clipPath id='earthClip'>
            <circle cx='50' cy='50' r='26.5'/>
        </clipPath>
    </defs>
    <circle cx='50' cy='50' r='30'
        fill='url(#earthGradient)'
        stroke='rgb(37, 44, 45)'
        strokeWidth='7'/>
    <g clipPath='url(#earthClip)' fill='#4f9a55'>
        <path d='M20 38 Q28 30 38 32 L42 39 L35 44 L25 43 Z'/>
        <path d='M47 27 L58 25 L64 31 L61 38 L53 37 L49 44 L43 39 Z'/>
        <path d='M63 44 L76 40 L82 47 L76 53 L68 51 L64 57 L58 53 Z'/>
        <path d='M40 52 L49 49 L56 55 L53 63 L46 67 L38 61 Z'/>
        <path d='M61 62 L69 58 L76 63 L72 72 L63 75 L57 69 Z'/>
        <path d='M25 65 L34 62 L39 69 L34 76 L25 74 Z'/>
    </g>
    <g clipPath='url(#earthClip)' fill='#d8f0e8' opacity='0.8'>
        <path d='M31 28 Q38 25 44 29 L39 34 L32 33 Z'/>
        <path d='M62 27 Q69 25 74 30 L69 34 L64 32 Z'/>
        <path d='M35 70 Q42 73 47 78 L40 80 L34 76 Z'/>
        <path d='M70 72 Q76 69 80 71 L76 76 L70 78 Z'/>
    </g>
</svg>;

export const mars = <svg viewBox='0 0 100 100'>
    <defs>
        <radialGradient id='marsGradient' cx='35%' cy='30%'>
            <stop offset='0%' stopColor='#e8754f'/>
            <stop offset='55%' stopColor='#b83f2f'/>
            <stop offset='100%' stopColor='#641f1d'/>
        </radialGradient>
    </defs>
    <circle cx='50' cy='50' r='32'
        fill='url(#marsGradient)'
        stroke='rgb(37, 44, 45)'
        strokeWidth='7'/>
    <g fill='#8f3028' opacity='0.7'>
        <circle cx='34' cy='38' r='5'/>
        <circle cx='61' cy='31' r='4'/>
        <circle cx='69' cy='52' r='6'/>
        <circle cx='43' cy='66' r='7'/>
        <circle cx='27' cy='57' r='3'/>
    </g>
    <g fill='#e28a61' opacity='0.55'>
        <circle cx='39' cy='29' r='2.5'/>
        <circle cx='57' cy='47' r='3'/>
        <circle cx='53' cy='72' r='2'/>
        <circle cx='73' cy='40' r='2'/>
    </g>
</svg>;

export const jupiter = <svg viewBox='0 0 100 100'>
    <defs>
        <radialGradient id='jupiterGradient' cx='35%' cy='28%'>
            <stop offset='0%' stopColor='#f0d7b3'/>
            <stop offset='50%' stopColor='#b98b67'/>
            <stop offset='100%' stopColor='#67483b'/>
        </radialGradient>
        <clipPath id='jupiterClip'>
            <circle cx='50' cy='50' r='27.5'/>
        </clipPath>
    </defs>
    <circle cx='50' cy='50' r='31'
        fill='url(#jupiterGradient)'
        stroke='rgb(37, 44, 45)'
        strokeWidth='7'/>
    <g clipPath='url(#jupiterClip)' fill='none' strokeLinecap='round'>
        <path d='M20 34 Q49 28 80 35'
            stroke='#e6c8a7'
            strokeWidth='7'
            opacity='0.7'/>
        <path d='M20 44 Q50 39 80 45'
            stroke='#89634e'
            strokeWidth='5'
            opacity='0.75'/>
        <path d='M19 54 Q49 49 81 55'
            stroke='#dfb995'
            strokeWidth='8'
            opacity='0.75'/>
        <path d='M21 66 Q50 60 79 66'
            stroke='#805847'
            strokeWidth='6'
            opacity='0.75'/>
        <path d='M26 75 Q49 70 73 74'
            stroke='#d4a47f'
            strokeWidth='5'
            opacity='0.65'/>
    </g>
    <ellipse cx='65' cy='59'
        rx='8' ry='5'
        fill='#9b5746'
        opacity='0.85'/>
</svg>;

export const saturn = <svg viewBox='0 0 100 100'>
    <defs>
        <radialGradient id='saturnGradient' cx='35%' cy='28%'>
            <stop offset='0%' stopColor='#f3d58a'/>
            <stop offset='45%' stopColor='#c99d57'/>
            <stop offset='100%' stopColor='#806034'/>
        </radialGradient>
        <mask id='saturnRingMask'>
            <rect width='100' height='100' fill='white'/>
            <circle cx='50' cy='50' r='25' fill='black'/>
        </mask>
        <clipPath id='saturnFrontRing'>
            <rect x='0' y='50' width='100' height='50'/>
        </clipPath>
    </defs>
    <g transform='rotate(-12 50 53)' mask='url(#saturnRingMask)'>
        <ellipse cx='50' cy='53' rx='44' ry='15'
            fill='none' stroke='#9a7844' strokeWidth='9'/>
        <ellipse cx='50' cy='53' rx='39' ry='11'
            fill='none' stroke='#d1aa67' strokeWidth='5'/>
    </g>
    <circle cx='50' cy='50' r='25'
        fill='url(#saturnGradient)'
        stroke='rgb(37, 44, 45)'
        strokeWidth='7'/>
    <g fill='#a17c43' opacity='0.55'>
        <path d='M32 39 Q50 34 69 40 L70 45 Q50 39 28 44'/>
        <path d='M30 51 Q50 45 71 52 L70 56 Q50 50 30 56'/>
    </g>
    <g transform='rotate(-12 50 53)' clipPath='url(#saturnFrontRing)'>
        <ellipse cx='50' cy='53' rx='44' ry='15'
            fill='none' stroke='#9a7844' strokeWidth='9'/>
        <ellipse cx='50' cy='53' rx='39' ry='11'
            fill='none' stroke='#d1aa67' strokeWidth='5'/>
    </g>
</svg>;

export const uranus = <svg viewBox='0 0 100 100'>
    <defs>
        <radialGradient id='uranusGradient' cx='35%' cy='28%'>
            <stop offset='0%' stopColor='#a9e8e2'/>
            <stop offset='50%' stopColor='#61bfc1'/>
            <stop offset='100%' stopColor='#31757e'/>
        </radialGradient>
    </defs>
    <circle cx='50' cy='50' r='29'
        fill='url(#uranusGradient)'
        stroke='rgb(37, 44, 45)'
        strokeWidth='7'/>
    <g fill='none' strokeLinecap='round'>
        <path d='M28 39 Q48 32 72 39'
            stroke='#bcefeb'
            strokeWidth='3'
            opacity='0.7'/>
        <path d='M26 49 Q49 42 74 49'
            stroke='#438f98'
            strokeWidth='4'
            opacity='0.8'/>
        <path d='M28 59 Q49 53 72 59'
            stroke='#b3e3df'
            strokeWidth='3'
            opacity='0.65'/>
        <path d='M34 68 Q50 63 67 67'
            stroke='#3e858e'
            strokeWidth='4'
            opacity='0.75'/>
    </g>
</svg>;

export const neptune = <svg viewBox='0 0 100 100'>
    <defs>
        <radialGradient id='neptuneGradient' cx='35%' cy='28%'>
            <stop offset='0%' stopColor='#58b9e8'/>
            <stop offset='50%' stopColor='#2475b5'/>
            <stop offset='100%' stopColor='#12345f'/>
        </radialGradient>
    </defs>
    <circle cx='50' cy='50' r='29'
        fill='url(#neptuneGradient)'
        stroke='rgb(37, 44, 45)'
        strokeWidth='7'/>
    <g fill='none' strokeLinecap='round'>
        <path d='M28 39 Q48 32 72 39'
            stroke='#79c9e8'
            strokeWidth='3'
            opacity='0.7'/>
        <path d='M26 49 Q49 42 74 49'
            stroke='#174f88'
            strokeWidth='4'
            opacity='0.8'/>
        <path d='M28 59 Q49 53 72 59'
            stroke='#66acd2'
            strokeWidth='3'
            opacity='0.65'/>
        <path d='M34 68 Q50 63 67 67'
            stroke='#164b80'
            strokeWidth='4'
            opacity='0.75'/>
    </g>
</svg>;
//#endregion

//#region Symbols Pillar
export const symbolDiamond = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M35 50 L50 20 L65 50 L50 80 Z'/>
        <path d='M27 57 L35 50 L27 43'/>
        <path d='M45 8 L50 20 L55 8'/>
        <path d='M73 43 L65 50 L73 57'/>
        <path d='M45 92 L50 80 L55 92'/>
        <circle cx='50' cy='50' r='6' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;

export const symbolHourglass = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M28 25 L38 18 L36 28 L64 28 L62 18 L72 25'/>
        <path d='M36 32 L50 50 L64 32'/>
        <path d='M36 68 L50 50 L64 68'/>
        <path d='M28 75 L38 82 L36 72 L64 72 L62 82 L72 75'/>
    </g>
</svg>;

export const symbolIceCream = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M44 18 L50 20 L56 18'/>
        <path d='M50 15 L27 80'/>
        <path d='M50 15 L73 80'/>
        <path d='M26 60 L74 60'/>
        <path d='M25 70 Q50 100 75 70'/>
    </g>
</svg>;

export const symbolPlus = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M50 50 L50 28'/>
        <path d='M42 18 L50 28 L58 18'/>
        <path d='M50 50 L50 72'/>
        <path d='M42 82 L50 72 L58 82'/>
        <path d='M50 50 L28 50'/>
        <path d='M18 42 L28 50 L18 58'/>
        <path d='M50 50 L72 50'/>
        <path d='M82 42 L72 50 L82 58'/>
        <path d='M50 40 L58 50 L50 60 L42 50 Z'/>
    </g>
</svg>;

export const symbolGlobe = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M45 10 L72 45'/>
        <path d='M62 10 L35 45'/>
        <path d='M30 26 L74 64'/>
        <path d='M74 26 L30 64'/>
        <path d='M52 39 L60 45 L52 51 L44 45 Z'/>
        <path d='M35 50 L62 80'/>
        <path d='M72 50 L45 80'/>
    </g>
</svg>;

export const symbolStatic = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M8 55 L18 58 L24 50 L30 60 L36 52 L40 80 L44 15 L48 55 L52 65 L56 45 L60 58 L64 10 L68 75 L72 52 L76 20 L80 60 L84 50 L92 55'/>
    </g>
</svg>;
//#endregion

//#region Japanese Numbers
export const ichi = (
    <svg viewBox='0 0 100 100'>
        <path
            d='M20 50 Q50 43 80 50'
            fill='none'
            stroke='rgb(37, 44, 45)'
            strokeWidth='7'
            strokeLinecap='round'
        />
    </svg>
);

export const ni = (
    <svg viewBox='0 0 100 100'>
        <path
            d='M25 35 Q50 29 75 35 M20 65 Q50 58 80 65'
            fill='none'
            stroke='rgb(37, 44, 45)'
            strokeWidth='7'
            strokeLinecap='round'
        />
    </svg>
);

export const san = (
    <svg viewBox='0 0 100 100'>
        <path
            d='M25 30 Q50 24 75 30 M22 50 Q50 44 78 50 M25 70 Q50 64 75 70'
            fill='none'
            stroke='rgb(37, 44, 45)'
            strokeWidth='7'
            strokeLinecap='round'
        />
    </svg>
);

export const yon = (
    <svg viewBox='0 0 100 100'>
        <text
            x='50'
            y='78'
            textAnchor='middle'
            fontSize='78'
            fontFamily='serif'
            fill='rgb(37, 44, 45)'
        >
            四
        </text>
    </svg>
);
//#endregion

//#region Symbols Ashes of the Damned
export const symbolRightArrow = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M30 25 L70 50 L30 75'/>
    </g>
</svg>;
export const symbolHL = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M75 25 V75 H25'/>
    </g>
</svg>;
export const symbolLDot = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 V75 H75'/>
        <circle cx='55' cy='50' r='5' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;
export const symbolLeftArrow = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M70 25 L30 50 L70 75'/>
    </g>
</svg>;
export const symbolV = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 L50 75 L75 25'/>
    </g>
</svg>;
export const symbolVDot = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 L50 75 L75 25'/>
        <circle cx='50' cy='43' r='5' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;
export const symbolL = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 V75 H75'/>
    </g>
</svg>;
export const symbolCDot = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M30 25 V75'/>
        <path d='M30 25 H70'/>
        <path d='M30 75 H70'/>
        <circle cx='55' cy='50' r='5' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;
export const symbolSquare = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <rect x='25' y='25' width='50' height='50'/>
    </g>
</svg>;
export const symbolSquareDot = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <rect x='25' y='25' width='50' height='50'/>
        <circle cx='50' cy='50' r='5' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;
export const symbolArch = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 75 V25 H75 V75'/>
    </g>
</svg>;
export const symbolVArchDot = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 V75 H75 V25'/>
        <circle cx='50' cy='50' r='5' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;
export const symbolVArch = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 V75 H75 V25'/>
    </g>
</svg>;
export const symbolC = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M30 25 V75'/>
        <path d='M30 25 H70'/>
        <path d='M30 75 H70'/>
    </g>
</svg>;
export const symbolVHL = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M75 75 V25 H25'/>
    </g>
</svg>;
export const symbolVHLDot = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M75 75 V25 H25'/>
        <circle cx='50' cy='50' r='5' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;
export const symbolVL = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 75 V25 H75'/>
    </g>
</svg>;
export const symbolVLDot = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 75 V25 H75'/>
        <circle cx='50' cy='50' r='5' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;
export const symbolHCDot = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M70 25 V75'/>
        <path d='M70 25 H30'/>
        <path d='M70 75 H30'/>
        <circle cx='45' cy='50' r='5' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;

export const symbolMale = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <circle cx='38' cy='62' r='25'/>
        <path d='M56 44 L78 22'/>
        <path d='M66 22 H78 V34'/>
    </g>
</svg>;
export const symbolUmbrella = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='6' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M20 50 L40 30 L60 50 L40 70 Z'/>
        <path d='M60 50 H85'/>
        <circle cx='84' cy='57' r='7'/>
    </g>
</svg>;
export const symbolTriangle = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='6' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M15 32 H85 L50 78 Z'/>
        <path d='M38 55 L50 43 L62 55'/>
    </g>
</svg>;
export const symbolFemale = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round'>
        <circle cx='50' cy='43' r='23'/>
        <path d='M50 66 V87'/>
        <path d='M40 78 H60'/>
    </g>
</svg>;
export const symbolCircle = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <circle cx='50' cy='50' r='29'/>
        <path d='M30 33 L38 41'/>
        <path d='M70 33 L62 41'/>
        <path d='M30 67 L38 59'/>
        <path d='M70 67 L62 59'/>
    </g>
</svg>;
export const symbolCircleDot = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7'>
        <circle cx='50' cy='50' r='29'/>
    </g>

    <circle cx='50' cy='50' r='8' fill='rgb(37, 44, 45)'/>
</svg>;
export const symbolCross = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round'>
        <circle cx='50' cy='50' r='29'/>
        <path d='M50 21 V79'/>
        <path d='M21 50 H79'/>
    </g>
</svg>;
export const symbolLine = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round'>
        <circle cx='50' cy='50' r='29'/>
        <path d='M21 50 H79'/>
    </g>
</svg>;
export const symbolHook = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round'>
        <circle cx='43' cy='48' r='27'/>
        <path d='M63 67 L77 81'/>
    </g>
</svg>;
export const symbolThreeCircles = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='6'>
        <circle cx='50' cy='30' r='11'/>
        <circle cx='28' cy='63' r='11'/>
        <circle cx='72' cy='63' r='11'/>
    </g>
</svg>;
export const symbolHalfCircle = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='6' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M20 63 H80'/>
        <path d='M28 63 V53'/>
        <path d='M72 63 V53'/>
        <path d='M30 53 H38'/>
        <path d='M62 53 H70'/>
        <path d='M38 53 C38 35 62 35 62 53'/>
    </g>
</svg>;
export const symbolStar = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='6' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M50 15 V85 M47 15 H53 M47 85 H53'/>
        <path d='M15 50 H85 M15 47 V53 M85 47 V53'/>
        <path d='M25 25 L75 75 M22 28 L28 22 M72 78 L78 72'/>
        <path d='M75 25 L25 75 M72 22 L78 28 M22 72 L28 78'/>
    </g>
</svg>;
//#endregion
