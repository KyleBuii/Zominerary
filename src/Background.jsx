import { memo } from 'react';

const Background = () => {
    return (
        <section className='background-images'>
            <img className='sky'
                src='/sky.webp'
                alt='Sky background top'
                decoding='async'
                loading='lazy'/>
            <img className='fog'
                src='/fog.webp'
                alt='Fog background bottom'
                decoding='async'
                loading='lazy'/>
            <div className='forest-container'>
                <img className='forest'
                    src='/forest.webp'
                    alt='Forest background bottom'
                    decoding='async'
                    loading='lazy'/>
                <div className='forest-foot-stool'></div>
            </div>
        </section>
    );
};

export default memo(Background);