import PropTypes from 'prop-types';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchFieldValue = e.target.elements.searchField.value;

        if (searchFieldValue.trim() === '') {
            toast.error('You may enter search word');
            return;
        }

        onSubmit(searchFieldValue);
    };

    return (
        <header className={css.SearchBar}>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type="text"
                    name="searchField"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={css.input}
                />
                <button type="submit" className={css.button}>
                    <HiMagnifyingGlass />
                </button>
            </form>
        </header>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func,
};

export default SearchBar;
