import React from 'react';

const VideoItem = ({ video, onVideoSelect })=>{

    return (
        <li className="media" onClick={() => onVideoSelect(video)}>
            <img src={video.snippet.thumbnails.high.url} className="mr-3 thumnail-img"/>
            <div className="media-body">
                <h5 className="mt-0 mb-1">{video.snippet.title}</h5> 
            </div>
        </li>
    )
};

export default VideoItem;