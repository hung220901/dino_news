import React from 'react'

export default function NewsItem({post}) {
    const date = new Date(post.createdAt);
  return (
    <div className="news-card">
        <div className="news-image-card">
            {/* <img className="image-news" src="images/comchoaaa.png"  alt=""/> */}
        </div>
        <div className="news-title">
            {post.title}
        </div>
        <div className="news-date-time">
        
            {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear() }`}
            &nbsp;
            {`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}

            <br />
            by {post.author.name}
        </div>
        <div className="news-content">
            {post.content}
        </div>
    </div>
  )
}
