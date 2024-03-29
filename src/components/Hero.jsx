import { logo } from '../assets';

const Hero = () => {
    return (
        <header className='w-full flex justifify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
                <button
                    type="button"
                    onClick={() => window.open('https://github.com/arkhanis/React_Summarize')}
                    className='black_btn'
                >
                    GitHub
                </button>
            </nav>

            <h1 className='head_text'>
                Summarize Articles with <br className='max-md:hidden' />
                <span className='orange_gradient'>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                Simplify your reading experience with AI powered, that transforms long articles into short summaries.
            </h2>
        </header>
    )
}

export default Hero