import PropTypes from 'prop-types';
import css from './ImageCard.module.css';

const ImageCard = ({ image, onSetImage, onSetModalIsOpen }) => {
    const handleClick = () => {
        onSetImage(image);
        onSetModalIsOpen(true);
    };

    return (
        <div className={css.ImageCard} onClick={handleClick}>
            <img
                src={image.urls.small}
                alt={image.description}
                className={css.image}
            />
        </div>
    );
};

ImageCard.propTypes = {
    image: PropTypes.shape({
        id: PropTypes.string,
        description: PropTypes.string,
        likes: PropTypes.number,
        urls: PropTypes.shape({
            small: PropTypes.string,
            regular: PropTypes.string,
        }),
    }),
    onSetImage: PropTypes.func,
    onSetModalIsOpen: PropTypes.func,
};

export default ImageCard;
