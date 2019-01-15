import React from 'react';

const VideoDetails = ({ video })=> {
    if (!video) {
        return <div className="mt-2 mb-1 search_details">There is not video</div>
    }

    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="mt-2 mb-1 search_details">
            <div className="mb-1">
                <iframe width="100%" height="400" src={videoUrl}/>
            </div>
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    )
}

export default VideoDetails;