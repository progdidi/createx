import leftArr from './leftArr.svg';

const PrevBtn = () => {
    return ( 
        <button className="slider__btn prev">
             <img src={leftArr} alt="" className="slider__btn-img" />
        </button>
     );
}
 
export default PrevBtn;