import React from "react"
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import PropertyCard from './PropertyCard'
import SearchSort from './SearchSort'

function PropertyList() {

    // LOADERS //
    const properties = useLoaderData()

    // HELPER FUNCTIONS //
    const cleanString = (str) => str?.toLowerCase().replace(/[\W_]+/g,"");

    function sortArray(arr, prop, order) {
        const sortedArr = arr.sort((a, b) => {
            return a[prop] === b[prop]
                ? 0
                : a[prop] > b[prop] ? 1 : -1
        });
        return order === 'ascending' ? sortedArr : sortedArr.reverse()
    }

    // STATE //
    const [isDisplayed, setIsDisplayed] = useState(false)
    const [searchSort, setSearchSort] = useState({
        searchString: "",
        sortProp: "id",
        sortOrder: "ascending"
    })


    // FILTERING, SORTING & MAPPING //
    const fileteredProperties = properties.filter(property => cleanString(property.neighborhood).startsWith(cleanString(searchSort.searchString)))
    const sortedFilteredProperties = sortArray(fileteredProperties, searchSort.sortProp, searchSort.sortOrder)
    const mappedProperties = sortedFilteredProperties.map( propertyObj => <PropertyCard key={propertyObj.id} propertyObj={propertyObj} /> )
    

    // RENDER //
    return(
        <div className="property-list">
            <button onClick={() => setIsDisplayed(!isDisplayed)}>{searchSort.isDisplayed ? "Hide" : "Show"} Search & Sort</button>
            {isDisplayed ? <SearchSort setSearchSort={setSearchSort} /> : ""}
            {mappedProperties}
        </div>
    )
}

export default PropertyList