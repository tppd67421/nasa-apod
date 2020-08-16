import React, { useContext } from 'react'
import { MainImageDataContext } from '@/app/helpers/context'

const VideoBlock = () => {
    const data = useContext(MainImageDataContext);
    
    return (
        <div className={data.className}>
            <iframe src={data.url} />
        </div>
    )
}

export default VideoBlock
