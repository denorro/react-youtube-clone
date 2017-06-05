/**
 * Created by Denorro Stallworth on 5/27/2017.
 */
import React from 'react';

const VideoListItem = ({video, onVideoSelect }) => {

    const imageUrl = video.snippet.thumbnails.medium.url;
    return (
        <li className="list-group-item" onClick={ () => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={ imageUrl } alt={ video.snippet.title }/>
                </div>
            </div>
            <div className="media-body">
                <div className="media-heading">
                    <strong>{ video.snippet.title }</strong>
                </div>
                <p><strong>Published:</strong> {video.snippet.publishedAt }</p>
            </div>
        </li>
    )
};

export default VideoListItem;