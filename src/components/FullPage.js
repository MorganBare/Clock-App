import Quote from './Quote.js';
import Sun from '../assets/desktop/icon-sun.svg';
import DownArrow from '../assets/desktop/icon-arrow-down.svg';

export default function FullPage(){
    return (
        <div>
            <Quote />
            <div>
                <div>
                    <p className='font-size-4'><span><img src={Sun} alt='sun icon'/></span>Good Morning, it's currently</p>
                    <p className='font-size-8'>11:37 <span className='font-size-6'>BST</span></p>
                    <p className='font-size-5'>in London, UK</p>
                </div>
                <button className='font-size-2'>MORE<span><img src={DownArrow} alt='down arrow'/></span></button>
            </div>
        </div>
    )
}

