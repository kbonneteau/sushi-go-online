import './ModalIcon.scss';

const ModalIcon = ({ image, count }) => {
    return (
        <div className="modal-icon">
            <img className="modal-icon__food-icon" src={image} alt="" />
            <h4 className="modal-icon__card-count">{count}</h4>
        </div>
    );
};

export default ModalIcon;