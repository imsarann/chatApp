// import React from 'react'
// import InputBox from './InputBox'

// @ts-ignore
import Button2 from './Button2';
// @ts-ignore
import InputBox2 from './InputBox2';

export default function Landing() {
  return (
    <div className='bg-black min-h-screen flex justify-center items-center '>
      <div className='flex gap-4 flex-col'>
        <InputBox2 />
        <div className="felx ml-[90px] ">
        <Button2 />
        </div>
      </div>
    </div>
  );
}

