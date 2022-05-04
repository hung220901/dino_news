import React from 'react'
import '../css/NewsDetail.css'
export default function NewsDetail() {
  return (
    <div class="wrapper">
        <div class="news-top">
            <div class="top-news-detail">
                <div class="top-news-header">
                    <div class="category-title">
                        Giải trí
                    </div>
                    <div class="news-time">
                        Chủ nhật, 17/04/2022 , 16:45
                    </div>
                </div>


                <div class="news-title">
                    Vải chín sớm 130.000 đồng một kg
                </div>
                <div class="news-content">
                    <p>
                        Năm nay, quả vải chín sớm được các cửa hàng trái cây bán giá 100.000-130.000 đồng một kg, gấp đôi cùng kỳ năm ngoái.
                        Vải chín sớm hay còn gọi là vải u hồng, chủ yếu được trồng ở Tây Nguyên, thu hoạch từ tháng 4 đến tháng 6 hàng năm. Vải này có vị ngọt pha chút chua chứ không ngọt đậm như vải thiều miền Bắc.
                    </p>
                    <div class="news-image">
                        <img class="news-image-detail" src="images/vaiii.jpg" alt=""/>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta at corporis soluta dolores, earum facere similique, porro delectus consectetur aliquid ullam autem qui pariatur eveniet veniam cumque dolorem. Placeat.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea laboriosam nihil praesentium! Amet dolor, in, adipisci maxime ipsam nihil quo commodi nulla illum, earum numquam labore sed ex consectetur?
                    </p>
                </div>
    
            </div>
            <div class="news-popular">
                <div class="news-popular-title">
                    <h2>Tin phổ biến</h2>
                </div>
                <div class="news-popular-list">
                    <div class="news-popular-card">
                        <div class="news-popular-image">
                            <img src="/images/truc-popularnews.jpg" alt=""/>
                        </div>
                        <div class="news-popular-content">
                            <p>Cô gái xinh đẹp ngất ngay mùi hương em nồng say</p>
                        </div>
                    </div>
                    <div class="news-popular-card">
                        <div class="news-popular-image">
                            <img src="/images/truc-popularnews.jpg" alt=""/>
                        </div>
                        <div class="news-popular-content">
                            <p>Cô gái xinh đẹp ngất ngay mùi hương em nồng say</p>
                        </div>
                    </div>
                    <div class="news-popular-card">
                        <div class="news-popular-image">
                            <img src="/images/truc-popularnews.jpg" alt=""/>
                        </div>
                        <div class="news-popular-content">
                            <p>Cô gái xinh đẹp ngất ngay mùi hương em nồng say</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="comment">
            <div class="comment-title">
                <h2>Show your idea</h2>
            </div>
            <div class="your-comment-box">
                <div class="box-type-comment">
                    <input type="text" name="" id="comment-inp" placeholder="Type your comment"/>
                </div>
            </div>
            <div class="list-comment">
                <div class="comment-card">
                    <div class="display-name-user">
                        <h3>Truc Truc </h3>
                    </div>
                    <div class="comment-content">
                        <p>tui bi khung dd  ddddd ddd d d d d d d oi</p>
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="related-news">
            <div class="related-news-title">
                <h2>Tin tức liên quan</h2>
            </div>
           <div class="related-news-list">
               <div class="related-news-card">
                   <div class="related-news-img-box">
                       <img class="related-news-image" src="https://source.unsplash.com/random" alt=""/>
                   </div>
                   <div class="related-news-content">
                       Truc bi khung qua troi khung
                   </div>
                  
               </div>
               <div class="related-news-card">
                   <div class="related-news-img-box">
                       <img class="related-news-image" src="https://source.unsplash.com/random" alt=""/>
                   </div>
                   <div class="related-news-content">
                       Truc bi khung qua troi khung
                   </div>
                  
               </div>
           </div>


        </div>
    </div>
  )
}
