import { useState, useEffect, useRef } from 'react';
import { fetchImagesWithQuery } from '../../unsplash-api';

import css from './App.module.css';
import { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import ImageModal from '../ImageModal/ImageModal';

function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [image, setImage] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const lastImageRef = useRef(null);

    useEffect(() => {
        if (images.length > 0 && lastImageRef.current) {
            lastImageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        }
    }, [images]);

    const closeModal = () => {
        setModalIsOpen(false);
        setImage('');
    };

    const handleSubmit = (searchString) => {
        async function fetchImages() {
            try {
                setLoading(true);
                setError(false);

                const isNewSearch = searchString && searchString !== query;
                const nextPage = isNewSearch ? 1 : page + 1;
                const currentQuery = isNewSearch ? searchString : query;

                const data = await fetchImagesWithQuery(currentQuery, nextPage);

                if (isNewSearch) {
                    setImages(data.results);
                    setQuery(currentQuery);
                    setPage(1);
                    setTotalPages(data.total_pages);
                } else {
                    setImages((prevImages) => [...prevImages, ...data.results]);
                    setPage(nextPage);
                }
            } catch (err) {
                setError(true);
                console.error('Помилка при отриманні зображень:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchImages();
    };

    return (
        <div className={css.App}>
            <SearchBar onSubmit={handleSubmit} />
            {!loading && images.length > 0 && !error && (
                <ImageGallery
                    images={images}
                    lastImageRef={lastImageRef}
                    onSetImage={setImage}
                    onSetModalIsOpen={setModalIsOpen}
                />
            )}
            {loading && <Loader />}
            {error && <ErrorMessage />}
            {images.length > 0 && totalPages > page && (
                <LoadMoreButton onSubmit={handleSubmit} />
            )}
            <Toaster />
            <ImageModal
                image={image}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
            />
        </div>
    );
}

export default App;
