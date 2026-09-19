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
        <path d='M27 35 Q48 29 74 37'
            stroke='#f0ce82'
            strokeWidth='4'
            opacity='0.65'/>
        <path d='M24 45 Q50 39 77 46'
            stroke='#9a7135'
            strokeWidth='5'
            opacity='0.7'/>
        <path d='M25 56 Q49 49 75 57'
            stroke='#e4bd6d'
            strokeWidth='4'
            opacity='0.6'/>
        <path d='M29 67 Q51 60 72 67'
            stroke='#956b32'
            strokeWidth='5'
            opacity='0.65'/>
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
            <circle cx='50' cy='50' r='30'/>
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
    <g fill='#d8f0e8' opacity='0.8'>
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
    </defs>
    <circle cx='50' cy='50' r='31'
        fill='url(#jupiterGradient)'
        stroke='rgb(37, 44, 45)'
        strokeWidth='7'/>
    <g fill='none' strokeLinecap='round'>
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
        <path d='M28 39 Q50 34 72 40 L72 45 Q50 39 28 44 Z'/>
        <path d='M26 51 Q50 45 74 52 L74 56 Q50 50 26 56 Z'/>
        <path d='M30 63 Q50 57 70 62 L67 67 Q50 62 32 68 Z'/>
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
        <path d='M27 39 Q49 35 73 39'
            stroke='#bcefeb'
            strokeWidth='3'
            opacity='0.5'/>
        <path d='M25 48 Q50 44 75 48'
            stroke='#438f98'
            strokeWidth='3'
            opacity='0.55'/>
        <path d='M26 58 Q50 54 74 58'
            stroke='#b3e3df'
            strokeWidth='3'
            opacity='0.45'/>
        <path d='M30 67 Q50 63 70 67'
            stroke='#3e858e'
            strokeWidth='3'
            opacity='0.5'/>
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
        <path d='M27 39 Q48 32 73 39'
            stroke='#79c9e8'
            strokeWidth='3'
            opacity='0.7'/>
        <path d='M24 49 Q49 42 76 49'
            stroke='#174f88'
            strokeWidth='4'
            opacity='0.8'/>
        <path d='M27 59 Q49 53 73 59'
            stroke='#66acd2'
            strokeWidth='3'
            opacity='0.65'/>
        <path d='M31 68 Q50 63 69 67'
            stroke='#164b80'
            strokeWidth='4'
            opacity='0.75'/>
    </g>
</svg>;
//#endregion

//#region Pillar symbols
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

//#region Symbols Farm
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
        <path d='M60 50 H78'/>
        <circle cx='84' cy='50' r='7'/>
    </g>
</svg>;

export const symbolTriangle = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='6' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M15 32 H85 L50 78 Z'/>
        <path d='M38 55 L50 43 L62 55 L50 67 Z'/>
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
        <path d='M27 30 L38 41'/>
        <path d='M73 30 L62 41'/>
        <path d='M27 70 L38 59'/>
        <path d='M73 70 L62 59'/>
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
    <ellipse cx='50' cy='50' rx='10' ry='5' fill='rgb(37, 44, 45)'/>
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
export const symbolFeet = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M30 25 L70 50 L30 75'/>
    </g>
</svg>;

export const symbolChunk = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 V75 H75'/>
    </g>
</svg>;

export const symbolWidow = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M30 25 V75'/>
        <path d='M30 25 H70'/>
        <path d='M30 75 H70'/>
    </g>
</svg>;

export const symbolEye = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M30 25 V75'/>
        <path d='M30 25 H70'/>
        <path d='M30 75 H70'/>
        <circle cx='55' cy='50' r='5' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;

export const symbolLimb = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 V75 H75'/>
        <circle cx='50' cy='50' r='4' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;
//#endregion

//#region Symbols Cosmodrone
export const symbolLaunch = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 V75 H75'/>
        <circle cx='50' cy='50' r='4' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;

export const symbolEngine = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <rect x='25' y='25' width='50' height='50'/>
    </g>
</svg>;

export const symbolRocket = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 H75 V75'/>
        <circle cx='50' cy='50' r='4' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;

export const symbolWeapon = <svg viewBox='0 0 100 100'>
    <g fill='none' stroke='rgb(37, 44, 45)' strokeWidth='7' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M25 25 L50 75 L75 25'/>
        <circle cx='50' cy='43' r='5' fill='rgb(37, 44, 45)' stroke='none'/>
    </g>
</svg>;
//#endregion

//#region Masks
export const maskHorn = (
    <svg viewBox='0 0 100 100'>
        <defs>
            <linearGradient id='hornFace' x1='0' y1='0' x2='1' y2='1'>
                <stop offset='0' stopColor='rgb(150, 137, 103)'/>
                <stop offset='0.5' stopColor='rgb(112, 101, 76)'/>
                <stop offset='1' stopColor='rgb(55, 53, 46)'/>
            </linearGradient>
        </defs>
        <path d='M25 34 C12 28 8 18 12 7 C20 15 28 19 34 25Z'
            fill='rgb(83, 73, 57)' stroke='rgb(37, 44, 45)' strokeWidth='7'/>
        <path d='M16 12 C18 20 23 25 29 29'
            fill='none' stroke='rgb(139, 112, 72)' strokeWidth='2'/>
        <path d='M75 34 C88 28 92 18 88 7 C80 15 72 19 66 25Z'
            fill='rgb(83, 73, 57)' stroke='rgb(37, 44, 45)' strokeWidth='7'/>
        <path d='M84 12 C82 20 77 25 71 29'
            fill='none' stroke='rgb(139, 112, 72)' strokeWidth='2'/>
        <path d='M29 19 C35 13 44 11 50 11 C57 11 66 14 72 20 L70 39 L67 55 L61 55 L59 31 C53 28 47 28 41 31 L39 55 L32 55 L29 39Z'
            fill='rgb(45, 43, 38)'/>
        <path d='M31 27 C35 21 43 18 50 18 C58 18 66 22 69 28 L68 57 C66 70 60 79 50 83 C40 79 34 70 32 57Z'
            fill='url(#hornFace)' stroke='rgb(37, 44, 45)' strokeWidth='7'/>
        <path d='M50 15 L50 29'
            stroke='rgb(25, 24, 21)' strokeWidth='3'/>
        <path d='M35 39 C39 35 44 35 47 38 M53 38 C57 35 62 36 65 40'
            fill='none' stroke='rgb(49, 43, 34)' strokeWidth='3' strokeLinecap='round'/>
        <path d='M36 42 C39 39 44 39 47 42 C44 45 39 45 36 42Z M53 42 C56 39 61 39 64 42 C61 45 56 45 53 42Z'
            fill='rgb(51, 45, 35)'/>
        <circle cx='42' cy='42' r='1.8' fill='rgb(20, 19, 17)'/>
        <circle cx='58' cy='42' r='1.8' fill='rgb(20, 19, 17)'/>
        <path d='M48 40 C47 47 45 53 43 58 C45 62 52 63 57 58 C54 53 53 47 52 40Z'
            fill='rgb(105, 91, 67)'/>
        <path d='M44 58 C46 55 48 57 50 59 C52 56 55 56 57 58'
            fill='none' stroke='rgb(55, 48, 39)' strokeWidth='2'/>
        <path d='M39 66 C45 69 55 69 61 66'
            fill='none' stroke='rgb(48, 41, 35)' strokeWidth='3'/>
        <path d='M35 67 C39 76 44 81 50 83 C57 81 63 76 66 67 C60 72 40 73 35 67Z'
            fill='rgb(62, 64, 60)'/>
        <path d='M68 43 C77 39 79 47 73 53 C70 55 68 53 67 50Z'
            fill='rgb(112, 99, 73)' stroke='rgb(37, 44, 45)' strokeWidth='7'/>
    </svg>
);

export const maskRed = (
    <svg viewBox='0 0 100 100'>
        <defs>
            <linearGradient id='redFace' x1='0' y1='0' x2='1' y2='1'>
                <stop offset='0' stopColor='rgb(174, 58, 39)'/>
                <stop offset='0.5' stopColor='rgb(119, 39, 30)'/>
                <stop offset='1' stopColor='rgb(61, 27, 24)'/>
            </linearGradient>
        </defs>
        <path d='M27 17 C35 10 44 8 50 9 C59 8 68 12 74 19 C78 29 76 39 73 47 C70 59 66 71 58 81 C54 87 46 87 41 81 C33 72 29 59 26 48 C23 37 21 26 27 17Z'
            fill='url(#redFace)' stroke='rgb(37, 44, 45)' strokeWidth='7'/>
        <path d='M30 25 C39 17 61 17 70 25'
            fill='none' stroke='rgb(204, 73, 48)' strokeWidth='4'/>
        <path d='M31 35 L45 40 L48 36 M69 35 L55 40 L52 36'
            fill='none' stroke='rgb(43, 27, 24)' strokeWidth='5' strokeLinecap='round'/>
        <path d='M33 43 C37 39 43 40 47 43 C43 46 37 46 33 43Z M53 43 C57 40 63 39 67 43 C63 46 57 46 53 43Z'
            fill='rgb(31, 24, 22)'/>
        <circle cx='41' cy='43' r='2' fill='rgb(8, 8, 7)'/>
        <circle cx='59' cy='43' r='2' fill='rgb(8, 8, 7)'/>
        <path d='M46 38 C46 48 43 57 39 67 C42 72 52 74 59 68 C55 58 53 48 53 38 C51 35 48 35 46 38Z'
            fill='rgb(136, 43, 31)'/>
        <path d='M40 66 C44 63 48 68 50 70 C52 67 56 64 59 67'
            fill='none' stroke='rgb(59, 25, 22)' strokeWidth='3'/>
        <path d='M29 59 C34 67 35 76 41 84 L45 78 L50 89 L55 78 L60 84 C66 76 67 67 72 59 C65 64 59 68 50 69 C41 68 35 64 29 59Z'
            fill='rgb(52, 31, 27)'/>
        <path d='M34 65 L42 76 M40 65 L46 81 M66 65 L58 76 M60 65 L54 81'
            stroke='rgb(105, 48, 38)' strokeWidth='2'/>
    </svg>
);

export const maskWoman = (
    <svg viewBox='0 0 100 100'>
        <defs>
            <linearGradient id='womenFace' x1='0' y1='0' x2='1' y2='1'>
                <stop offset='0' stopColor='rgb(191, 174, 130)'/>
                <stop offset='0.5' stopColor='rgb(157, 140, 101)'/>
                <stop offset='1' stopColor='rgb(77, 69, 55)'/>
            </linearGradient>
        </defs>
        <path d='M27 24 C31 13 40 9 50 9 C61 9 70 14 74 24 L72 57 L65 57 L63 30 C58 25 55 23 50 23 C45 23 42 25 37 30 L35 57 L28 57Z'
            fill='rgb(53, 51, 44)' stroke='rgb(37, 44, 45)' strokeWidth='7'/>
        <path d='M31 29 C35 21 43 17 50 17 C58 17 66 21 69 29 L68 56 C66 69 60 78 50 82 C40 78 34 69 32 56Z'
            fill='url(#womenFace)' stroke='rgb(37, 44, 45)' strokeWidth='7'/>
        <path d='M50 12 L50 29'
            stroke='rgb(24, 24, 21)' strokeWidth='3'/>
        <path d='M35 38 C39 35 44 35 47 38 M53 38 C57 35 62 35 65 38'
            fill='none' stroke='rgb(68, 58, 45)' strokeWidth='2.5'/>
        <path d='M35 42 C39 39 44 39 47 42 C44 44 39 44 35 42Z M53 42 C56 39 61 39 65 42 C61 44 56 44 53 42Z'
            fill='rgb(55, 48, 38)'/>
        <circle cx='41' cy='42' r='1.6' fill='rgb(18, 17, 15)'/>
        <circle cx='59' cy='42' r='1.6' fill='rgb(18, 17, 15)'/>
        <path d='M48 41 L46 55 C47 58 53 58 55 55 L52 41'
            fill='rgb(128, 112, 81)'/>
        <path d='M43 64 C47 66 53 66 57 64'
            fill='none' stroke='rgb(62, 48, 42)' strokeWidth='2'/>
        <path d='M31 43 C25 40 24 46 29 51 M69 43 C75 40 76 46 71 51'
            fill='none' stroke='rgb(111, 96, 70)' strokeWidth='3'/>
    </svg>
);

export const maskHair = (
    <svg viewBox='0 0 100 100'>
        <defs>
            <radialGradient id='hairFace'>
                <stop offset='0' stopColor='rgb(181, 163, 111)'/>
                <stop offset='0.65' stopColor='rgb(126, 112, 77)'/>
                <stop offset='1' stopColor='rgb(60, 57, 46)'/>
            </radialGradient>
        </defs>
        <path d='M42 8 C34 8 31 16 25 18 C25 11 18 16 20 23 C12 21 14 29 8 33 C16 36 8 43 14 47 C8 53 17 55 12 62 C21 61 17 70 25 69 C22 78 32 76 34 84 C40 78 44 88 50 82 C56 88 60 78 66 84 C68 76 78 78 75 69 C83 70 79 61 88 62 C83 55 92 53 86 47 C92 43 84 36 92 33 C86 29 88 21 80 23 C82 16 75 11 75 18 C69 16 66 8 58 8 C54 14 46 14 42 8Z'
            fill='rgb(178, 178, 157)' stroke='rgb(37, 44, 45)' strokeWidth='7'/>
        <path d='M31 20 C21 32 22 54 30 69 M38 15 C30 30 30 56 38 76 M69 18 C78 32 77 55 69 72 M62 14 C70 30 70 55 62 76'
            fill='none' stroke='rgb(221, 220, 194)' strokeWidth='3'/>
        <path d='M32 29 C36 19 44 16 50 16 C58 16 66 21 69 30 C72 42 69 59 64 68 C60 77 55 81 50 82 C43 80 37 75 33 67 C28 57 27 41 32 29Z'
            fill='url(#hairFace)' stroke='rgb(37, 44, 45)' strokeWidth='7'/>
        <path d='M34 38 C38 34 44 34 47 38 M53 38 C57 34 63 34 67 38'
            fill='none' stroke='rgb(59, 51, 38)' strokeWidth='3'/>
        <path d='M35 42 C39 38 44 39 47 42 C44 45 39 45 35 42Z M53 42 C56 39 62 38 66 42 C62 45 56 45 53 42Z'
            fill='rgb(39, 35, 28)'/>
        <circle cx='41' cy='42' r='2' fill='rgb(12, 12, 10)'/>
        <circle cx='59' cy='42' r='2' fill='rgb(12, 12, 10)'/>
        <path d='M46 39 C46 48 42 56 40 62 C43 66 48 68 50 67 C53 69 58 65 60 62 C56 55 53 47 53 39 C51 36 48 36 46 39Z'
            fill='rgb(117, 98, 67)'/>
        <path d='M49 62 C44 59 37 61 34 65 C39 67 44 68 49 65 C54 68 61 67 66 64 C62 60 55 59 51 62Z'
            fill='rgb(205, 204, 178)' stroke='rgb(92, 91, 76)' strokeWidth='1'/>
        <path d='M42 69 C47 71 53 71 58 69'
            fill='none' stroke='rgb(43, 36, 30)' strokeWidth='3'/>
    </svg>
);

export const maskOni = (
    <svg viewBox='0 0 100 100'>
        <defs>
            <linearGradient id='oniFace' x1='0' y1='0' x2='1' y2='1'>
                <stop offset='0' stopColor='rgb(78, 73, 64)'/>
                <stop offset='0.5' stopColor='rgb(48, 47, 43)'/>
                <stop offset='1' stopColor='rgb(20, 21, 20)'/>
            </linearGradient>
        </defs>
        <path d='M29 38 C17 30 11 35 17 47 C20 53 25 54 31 50Z M71 38 C83 30 89 35 83 47 C80 53 75 54 69 50Z'
            fill='rgb(48, 47, 42)' stroke='rgb(37, 44, 45)' strokeWidth='7'/>
        <path d='M29 20 C37 13 44 11 50 12 C57 11 65 14 72 20 C77 31 76 48 72 59 C68 70 61 78 50 82 C39 78 32 70 28 59 C24 47 23 31 29 20Z'
            fill='url(#oniFace)' stroke='rgb(37, 44, 45)' strokeWidth='7'/>
        <path d='M31 35 C36 29 44 30 48 35 M52 35 C57 30 64 29 69 35'
            fill='none' stroke='rgb(17, 17, 16)' strokeWidth='6'/>
        <path d='M33 42 C37 38 44 38 48 42 C44 47 37 47 33 42Z M52 42 C56 38 63 38 67 42 C63 47 56 47 52 42Z'
            fill='rgb(12, 12, 11)'/>
        <circle cx='41' cy='42' r='2' fill='rgb(154, 139, 95)'/>
        <circle cx='59' cy='42' r='2' fill='rgb(154, 139, 95)'/>
        <path d='M46 39 L44 57 L50 61 L56 57 L53 39Z'
            fill='rgb(58, 55, 48)'/>
        <path d='M34 60 C41 56 59 56 66 60 C64 73 57 79 50 79 C43 79 36 73 34 60Z'
            fill='rgb(10, 11, 10)' stroke='rgb(15, 15, 14)' strokeWidth='2'/>
        <path d='M38 62 C44 65 56 65 62 62 L60 68 C53 66 47 66 40 68Z'
            fill='rgb(177, 169, 143)'/>
        <path d='M42 73 L45 67 L48 75 L51 67 L55 74 L58 68 L59 72'
            fill='rgb(139, 133, 113)'/>
        <path d='M27 29 L38 34 M73 29 L62 34 M29 53 L39 55 M71 53 L61 55'
            stroke='rgb(101, 96, 82)' strokeWidth='2'/>
    </svg>
);
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
