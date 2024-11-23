import './signUpForm.scss';

const SignUpForm = () => {
    return ( 
        <div className="sign-up">
             <button className="sign-in__btn modal__btn">X</button>
            <h5 className="modal__title">Sign in</h5>
            <p className="modal__comment">Sign in to your account using email and password provided during registration.</p>

            <form className="modal__form">
                <label htmlFor="" className="form-label">
                    <input type="text" className="form-input" />
                </label>
                <label htmlFor="" className="form-label">
                    <input type="text" className="form-input" />
                </label>
                <label htmlFor="" className="form-label">
                    <input type="text" className="form-input" />
                </label>
                <label htmlFor="" className="form-label">
                    <input type="text" className="form-input" />
                </label>

                <button className="modal__form-btn">Sign in</button>
            </form>
        </div>
     );
}
 
export default SignUpForm;