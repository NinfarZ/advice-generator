import { useState, useEffect } from 'react';

// export const getStaticProps = async () => {
//     const res = await fetch('https://api.adviceslip.com/advice');
//     const data = await res.json();

//     return {
//         props: { advice: data }
//     }
// }


function AdviceCard() {
    const [text, setText] = useState([]);

    const randomAdvice = async () => {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        setText(data.slip);

    };

    useEffect(() => {
        randomAdvice();
        console.log("used effect");
    }, []);

    return (
        <div className='relative flex flex-col gap-5 items-center p-5 px-10'>
            <p className='text-neon-green tracking-[0.5em] text-xs mt-5'>ADVICE #{text.id}</p>
            <h1 className='text-center text-light-cyan text-lg my-3 ' >“{text.advice}”</h1>

            <picture>
                <source media="(min-width: 768px)" srcSet='pattern-divider-desktop.svg' />
                <img src={"pattern-divider-mobile.svg"} alt="divider" />
            </picture>
            <button onClick={randomAdvice} className='transition-all ease-in-out flex justify-center mx-auto translate-y-10 bg-neon-green p-4 rounded-[30px] shadow-[0_0_15px_0_rgba(0,0,0,.5)] hover:shadow-neon-green'>
                <img src={"icon-dice.svg"} />
            </button>
        </div>
    );
}

export default AdviceCard
