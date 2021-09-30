import './ErrorModal.scss';

const ErrorModal = ({ handleModalClose, page }) => {
    return (
        <aside className={page === 'game' ? "error-modal error-modal--game" : "error-modal"}>
            <img className="error-modal__image" src="http://localhost:8080/modal-gifs/sushi-oops.gif" alt="animated sushi acting awkward" />
                <h2 className="error-modal__title">Oops!</h2>
                <p className="error-modal__message">
                    The game you tried to access has either expired or doesn't exist.
                </p>
                <button onClick={handleModalClose} className="error-modal__button">Play a new game?</button>
        </aside>
    );
};

export default ErrorModal;