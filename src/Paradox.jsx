import { memo } from 'react';

const Paradox = () => {
    return (
        <section className='page'>
            <div>
                <div className='title'>
                    <span>Starting Room</span>
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
                    <li>Grab Keys</li>
                    <li>Teleport to Past</li>
                    <li>Use Keys</li>
                    <li>Turn on PAP</li>
                </ol>
            </div>
            <div>
                <div className='title'>
                    <span>Blundergat</span>
                </div>
                <ol>
                    <li>Teleport to Future</li>
                </ol>
            </div>
        </section>
    );
};

export default memo(Paradox);