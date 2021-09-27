import './ErrorModal.scss';

const ErrorModal = () => {
    return (
        <aside className="error-modal">
            <img className="error-modal__image" src="http://localhost:8080/modal-gifs/sushi-oops.gif" alt="" />
            {/* <div className="error-modal__message-container"> */}
                <h2 className="error-modal__title">Oops!</h2>
                <p className="error-modal__message">
                    The game you tried to access has either expired or doesn't exist.
                </p>
                <button className="error-modal__button">Play a new game?</button>
            {/* </div> */}
        </aside>
    );
};

export default ErrorModal;