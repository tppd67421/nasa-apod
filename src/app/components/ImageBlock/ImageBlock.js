import React, { useContext } from 'react'
import RenderDate from './../RenderDate/RenderDate'
import { MainImageDataContext } from '@/app/helpers/context'

const ImageBlock = () => {
    const data = useContext(MainImageDataContext);
    
    return (
        <div className={data.className}>
            <img src={data.url} className='image' />
            {data.date && <RenderDate date={data.date} />}
        </div>
    )
}

export default ImageBlock
