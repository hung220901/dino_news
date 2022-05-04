import React from 'react'
import '../../css/HomePage/LatestNews.css'



export default function LatestNews() {
  return (
    <div>
        <div className="category-title">
            <h1>Tin tức mới nhất</h1>
        </div>
        <div className="lates-news">
            <div className="news-card">
                <div className="news-image-card">
                    <img className="image-news" src="images/comchoaaa.png"  alt=""/>
                </div>
                <div className="news-title">
                    Cơm chóa ngon lành
                </div>
                <div className="news-date-time">
                    17/8/2001 2:00:00
                </div>
                <div className="news-content">
                    2 người đang chụp hình ngon lành 
                </div>
            </div>
            <div className="news-card">
                <div className="news-image-card">
                    <img className="image-news" src="images/2cp.jpg"  alt=""/>
                </div>
                <div className="news-title">
                    Cơm chóa ngon lành
                </div>
                <div className="news-date-time">
                    17/8/2001 2:00:00
                </div>
                <div className="news-content">
                    2 người đang chụp hình ngon lành 
                </div>
            </div>
            <div className="news-card">
                <div className="news-image-card">
                    <img className="image-news" src="images/trucnews.jpg" alt=""/>
                </div>
                <div className="news-title">
                    Cơm chóa ngon lành
                </div>
                <div className="news-date-time">
                    17/8/2001 2:00:00
                </div>
                <div className="news-content">
                    2 người đang chụp hình ngon lành 
                </div>
            </div>
           
            <div className="news-card">
                <div className="news-image-card">
                    <img className="image-news" src="images/trucnews2.jpg" alt=""/>
                </div>
                <div className="news-title">
                    Cơm chóa ngon lành
                </div>
                <div className="news-date-time">
                    17/8/2001 2:00:00
                </div>
                <div className="news-content">
                    2 người đang chụp hình ngon lành 
                </div>
            </div>
        </div>
    </div>
  )
}
