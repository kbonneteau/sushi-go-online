import './ModalIcon.scss';

const ModalIcon = ({ image, count }) => {
    return (
        <div className={'modal-icon'}>
            <div className="modal-icon__icon-container">
                <img className="modal-icon__food-icon" src={image} alt="" />
            </div>
            <h4 className="modal-icon__card-count">{count}</h4>
        </div>
    );
};

export default ModalIcon;