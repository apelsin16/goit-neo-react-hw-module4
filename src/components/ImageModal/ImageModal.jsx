import PropTypes from 'prop-types';
import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { IoMdClose } from 'react-icons/io';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0, 0, 0, 1)',
    },
};

const ImageModal = ({ modalIsOpen, closeModal, image }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
        >
            <h2>{image.description}</h2>
            <button onClick={closeModal} className={css.button}>
                <IoMdClose />
            </button>
            <div>
                <img src={image?.urls?.regular} alt={image?.description} />
            </div>
        </Modal>
    );
};

ImageModal.propTypes = {
    modalIsOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    image: PropTypes.shape({
        id: PropTypes.string,
        description: PropTypes.string,
        likes: PropTypes.number,
        urls: PropTypes.shape({
            small: PropTypes.string,
            regular: PropTypes.string,
        }),
    }),
};

export default ImageModal;
