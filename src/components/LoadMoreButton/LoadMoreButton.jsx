import PropTypes from 'prop-types';
import css from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <div className={css.LoadMoreButton}>
            <button onClick={handleSubmit} className={css.button}>
                Load more
            </button>
        </div>
    );
};

LoadMoreButton.propTypes = {
    onSubmit: PropTypes.func,
};

export default LoadMoreButton;
