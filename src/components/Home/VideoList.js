import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect })=>{
    const videoItem = videos.map((video, i)=>{
        return <VideoItem video={video} key={i} onVideoSelect={onVideoSelect}/>;
    })
    return (
        <ul className="list-unstyled mt-2 search_thumbnails">
            {videoItem}
        </ul>
    )
};

export default VideoList;