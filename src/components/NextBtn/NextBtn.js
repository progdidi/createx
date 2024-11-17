import rightArr from './rightArr.svg';

const NextBtn = () => {
    return ( 
        <button className="slider__btn next">
            <img src={rightArr} alt="" className="slider__btn-img" />
        </button>
     );
}
 
export default NextBtn;