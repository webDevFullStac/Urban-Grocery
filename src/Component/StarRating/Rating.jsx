import React from 'react'
import {FaStar , FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';

function Rating({star,reviews}) {
    const retingStar = Array.from({length :5},(elem,index)=>{
        let number = index+0.5;
        return (
            <span key={index}>
               {star >= index+1 ? <FaStar/> : star >= number ? <FaStarHalfAlt/> :<AiOutlineStar/>}
            </span>
        )
    })
  return (
   <>
   {retingStar}
   <p className='text-black -mt-1 ml-2'>({reviews} customer reviews)</p>
   </>
  )
}

export default Rating