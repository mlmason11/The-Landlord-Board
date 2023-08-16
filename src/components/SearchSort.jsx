
function SearchSort({setSearchSort}) {

    // RENDER //
    return(
        <div className="search-sort">
            <label>Search </label>
            <input type="text" name="" placeholder="search properties by neighborhood" onChange={e => setSearchSort({searchString: e.target.value})}/>
            <br/>
            <select onChange={e => setSearchSort({searchProp: e.target.value})}>
                <option value="id">ID</option>
                <option value="neighborhood">Neighborhood</option>
                <option value="address">Address</option>
                <option value="owner">Owner</option>
                <option value="management">Management</option>
                <option value="rent">Rent</option>
                <option value="green_flags">Green Flags</option>
                <option value="red_flags">Red Flags</option>
            </select>
            <br/>
            <select onChange={e => setSearchSort({searchOrder: e.target.value})}>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </div>
    )
}

export default SearchSort