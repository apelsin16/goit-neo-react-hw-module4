import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({
    images,
    lastImageRef,
    onSetImage,
    onSetModalIsOpen,
}) => {
    return (
        <ul className={css.ImageGallery}>
            {images.map((image, index) => (
                <li
                    key={image.id}
                    className={css.item}
                    ref={index === images.length - 1 ? lastImageRef : null}
                >
                    <ImageCard
                        image={image}
                        onSetImage={onSetImage}
                        onSetModalIsOpen={onSetModalIsOpen}
                    />
                </li>
            ))}
        </ul>
    );
};
ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            description: PropTypes.string,
            likes: PropTypes.number,
            urls: PropTypes.shape({
                small: PropTypes.string,
                regular: PropTypes.string,
            }),
        })
    ),
    lastImageRef: PropTypes.object,
    onSetImage: PropTypes.func,
    onSetModalIsOpen: PropTypes.func,
};

export default ImageGallery;
