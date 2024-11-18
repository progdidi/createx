import './singleEventPage.scss';

const SingleEventPage = () => {
    return ( 
        <>

            <section className="event-page">
                <div className="container">
                    <h6 className="section-subtitle">Online lecture</h6>
                    <h2 className="section-title">Formation of the organizational structure of the company in the face of uncertainty</h2>
                </div>
            </section>

            <section className="event-about">
                <div className="event-about__info">
                    <h2 className="section-title">We will talk about:</h2>

                    <div className="event-program__list">
                        <div className="details-item">
                            <button className="details-item__btn">+
                                <h6 className="details-item__title"><span>Theme 1.</span> Aliquet lectus urna viverra in odio.</h6>
                            </button>
                            <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                        </div>

                        <div className="details-item">
                            <button className="details-item__btn">+
                                <h6 className="details-item__title"><span>Theme 2.</span> Aliquet lectus urna viverra in odio.</h6>
                            </button>
                            <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                        </div>

                        <div className="details-item">
                            <button className="details-item__btn">+
                                <h6 className="details-item__title"><span>Theme 3.</span> Aliquet lectus urna viverra in odio.</h6>
                            </button>
                            <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                        </div>

                        <div className="details-item">
                            <button className="details-item__btn">+
                                <h6 className="details-item__title"><span>Theme 4.</span> Aliquet lectus urna viverra in odio.</h6>
                            </button>
                            <p className="details-item__text">Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                        </div>

                        </div>
                </div>

                <div className="event-main main-info">
                    <div className="main-info__item">
                        <h6 className="main-info__item-subtitle">Time</h6>
                        <h5 className="main-info__item-title">August 5, 11:00 – 14:00</h5>
                        <p className="main-info__item-text">Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                    </div>
                    <div className="main-info__item">
                        <h6 className="main-info__item-subtitle">Price</h6>
                        <h5 className="main-info__item-title">Free</h5>
                        <p className="main-info__item-text">Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</p>
                    </div>

                    <a href="" className="event-main__link">Event on Facebook</a>

                    <button className="main-info__btn orange-btn">Join the event</button>

                </div>
            </section>

            <section className="event-speaker">
                
            </section>
        </>
     );
}
 
export default SingleEventPage;