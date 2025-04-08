
import styles from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.name);

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div className={styles.searchContainer}>
            <label className={styles.label}>
                Find contacts by name:
                <input
                    className={styles.input}
                    type="text"
                    value={filter}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
};

export default SearchBox;

