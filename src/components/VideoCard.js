import React from 'react';
import '../css/VideoCard.css'

const VideoCard = ({ movie }) => {
    return (
        <div className="videoCard">
            <img src="https://lh3.googleusercontent.com/proxy/0Aykikyw5Nq2LkcSitvvHVz_ad36uaJdfH90DTlJVyCV9Ot8AYoZpOJFY482N5stKquUHZlsFuz2QCawlJFgfWF72m4oQheCUluSNXxtU1RujdyPpgipqfh8tT4ubbEIooPeZUtFy-igAbsMLW0i26zJ" alt=""/>
            <p>some stuff about a movie
            </p>
            <h2>title</h2>
            <p>Number of likes</p>
        </div>
    )
}

export default VideoCard
