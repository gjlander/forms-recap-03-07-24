const SearchForm = () => {
    return (
        <form id='search-form' role='search'>
            <h3 className='text-4xl my-4'>Search for a country</h3>
            <label htmlFor='search-input'>
                Search:
                <input
                    className='input input-bordered mr-2'
                    type='search'
                    name='search-input'
                    id='search-input'
                    placeholder='Country name...'
                />
            </label>

            <button type='submit' className='btn'>
                Search
            </button>
        </form>
    );
};

export default SearchForm;
