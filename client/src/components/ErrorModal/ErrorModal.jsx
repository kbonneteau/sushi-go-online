import './ErrorModal.scss';

const ErrorModal = () => {
    return (
        <aside className="error-modal">
            <img className="error-modal__image" src="https://via.placeholder.com/300x300" alt="" />
            <h2 className="error-modal__title">Oops!</h2>
            <p className="error-modal__message">
               The game you tried to access has either expired or doesn't exist.
            </p>
            <button className="error-modal__button">Close</button>
        </aside>
    );
};

export default ErrorModal;