const BookContent = () => {


    return ( 
        <div className="book_content_wrapper">
            <div className="book_info_wrapper">
                <div className="book_img_wrapper">
                    <img src="" alt="" />
                </div>
                <div className="book_content">
                    <h2 className="title_book">Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</h2>
                    <div className="author_wrapper">
                        <span className="author">Адитья Бхаргава,</span> <span className="year">2019</span>
                    </div>
                    <div className="about_book">
                        <h3 className="title_descr_book">О книге</h3>
                        <div className="text_descr_wrapper">
                            <p>Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?</p>
                            <p>Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="book_additional_info_wrapper">
                <h3 className="rate_title">Рейтинг</h3>
                Tyta Reqting
                <div className="addition_block_book">
                    <h3 className="addition_block_title">Подробная информация</h3>
                    
                </div>
            </div>
        </div>
     );
}
 
export default BookContent;