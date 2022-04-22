import React from 'react'
import '../../css/HomePage/TopNews.css'

export default function TopNews() {
  return (
    <div>
        <div className="top-news">
            <div className="top-news-img">
                <img className="image-news-top" src="images/news-health.jpg" alt=""/>
            </div>
            <div className="top-news-container">
                <div className="top-news-title">
                    Phát hiện mới: Tập thể dục giúp giảm nguy cơ mắc ung thư
                </div>
                <div className="top-news-time">
                    13/3/2012 7:00:00
                </div>
                <div className="top-news-content">
                    Tập thể dục giúp giải phóng các chất chống ung thư vào máu, tương tác với các tế bào bất thường,
                </div>
                <div className="btn-readmore-news">
                    <button className="btn-readmore"> Xem thêm</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}
