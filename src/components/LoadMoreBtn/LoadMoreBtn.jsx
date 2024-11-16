import PropTypes from 'prop-types';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onSubmit }) => {
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

LoadMoreBtn.propTypes = {
    onSubmit: PropTypes.func,
};

export default LoadMoreBtn;
