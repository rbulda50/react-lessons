import './Filter.css';

const Filter = ({ value, onChange }) => (
    <label className="Filter">
        Фільтр за іменем:
        <input
            type="text"
            value={value}
            onChange={onChange} />
    </label>
);

export default Filter;