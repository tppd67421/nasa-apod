import React, { useContext } from 'react'
import RenderDate from './../RenderDate/RenderDate'
import { MainImageDataContext } from '@/app/helpers/context'

const VideoBlock = () => {
    const data = useContext(MainImageDataContext);
    
    return (
        <div className={data.className}>
            <iframe src={data.url} />
            {data.date && <RenderDate date={data.date} />}
        </div>
    )
}

export default VideoBlock
