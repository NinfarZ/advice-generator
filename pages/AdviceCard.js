import React, { useState, useEffect } from 'react';

export default function AdviceCard() {
    const [advice, setAdvice] = useState({ id: '', advice: '' });

    const randomAdvice = async () => {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        setAdvice({ id: data.slip.id, advice: data.slip.advice });
        console.log(advice);
    };
    useEffect(() => {
        randomAdvice();
    }, []);

    return (
        <div className='relative flex flex-col gap-5 items-center p-5 px-10'>
            <p className='text-neon-green tracking-[0.5em] text-xs mt-5'>ADVICE #{advice.id}</p>
            <h1 className='text-center text-light-cyan text-lg my-3 ' >“{advice.advice}”</h1>

            <picture>
                <source media="(min-width: 768px)" srcSet='pattern-divider-desktop.svg' />
                <img src={"pattern-divider-mobile.svg"} alt="" />
            </picture>
            <button onClick={randomAdvice} className='transition-all ease-in-out flex justify-center mx-auto translate-y-10 bg-neon-green p-4 rounded-[30px] hover:bg-opacity-50 hover:rounded-md'>
                <img src={"icon-dice.svg"} />
            </button>
        </div>
    );
}
