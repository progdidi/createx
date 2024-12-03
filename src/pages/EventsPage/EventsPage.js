import './eventsPage.scss';

//components
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';
import EventItem from '../../components/EventItem/EventItem';
import { events } from '../../helpers/events';
import SearchForm from '../../components/SearchForm/SearchForm';

//images
import list from './icons/list.svg';
import grid from './icons/grid.svg';

const EventsPage = () => {
    return ( 
        <>

        <section className="events-page">
            <div className="container">
                <h6 className="section-subtitle">Our events</h6>
                <h2 className="section-title">Lectures, workshops & master-classes</h2>

                <div className="events-filter">
                    <div className="events-filter__items">
                        <label htmlFor="" className="events-filter__label">Event category
                            <select name="" id="" className="events-filter__select">
                                <option value="" className="events-filter__option">1</option>
                                <option value="" className="events-filter__option"></option>
                                <option value="" className="events-filter__option"></option>
                            </select>
                        </label>
                        <label htmlFor="" className="events-filter__label">Sort by
                            <select name="" id="" className="events-filter__select">
                                <option value="" className="events-filter__option">1</option>
                                <option value="" className="events-filter__option"></option>
                                <option value="" className="events-filter__option"></option>
                            </select>
                        </label>
                        <label htmlFor="" className="events-filter__label">Show
                             <select name="" id="" className="events-filter__select">
                                <option value="" className="events-filter__option">1</option>
                                <option value="" className="events-filter__option"></option>
                                <option value="" className="events-filter__option"></option>
                            </select>
                        </label>
                    </div>
                    <SearchForm/>
                    
                    <div className="events-layout">
                        <button className="events-layout__btn">
                            <img src={list} alt="" className="events-layout__btn-img" />
                        </button>

                        <button className="events-layout__btn">
                            <img src={grid} alt="" className="events-layout__btn-img" />
                        </button>
                    </div>
                </div>

                <div className="events-list">    

                    {events.map((event) => {
                        return (
                            <EventItem
                                date={event.date}
                                month={event.month}
                                start={event.start}
                                end={event.end}
                                title={event.title}
                                category={event.category}
                                key={event.id}
                            />
                        )
                    })}
                </div>

                <div className="events-padination">
                    <button className="events-padination__btn">1</button>
                    <button className="events-padination__btn">2</button>
                    <button className="events-padination__btn">3</button>
                    <button className="events-padination__btn">4</button>
                </div>
            </div>
        </section>

        <NewsletterSection/>
        
        </>
     );
}
 
export default EventsPage;