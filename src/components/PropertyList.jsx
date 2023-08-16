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

    // STATE //
    const [searchSort, setSearchSort] = useState({
        searchString: "",
        sortProp: "id",
        sortOrder: "ascending"
    })


    // FILTERING, SORTING & MAPPING //
    const fileteredProperties = properties.filter(property => cleanString(property.neighborhood).startsWith(cleanString(searchSort.searchString)))
    const sortedFilteredProperties = fileteredProperties.sort((a, b) => {
        const aValue = a[searchSort.sortProp]
        const bValue = b[searchSort.sortProp]

        switch (typeof aValue) {
            case "string":
              return searchSort.sortOrder === "ascending"
                ? cleanString(aValue).localeCompare(cleanString(bValue))
                : cleanString(bValue).localeCompare(cleanString(aValue));

            case "number":    
                return searchSort.sortOrder === "ascending"
                    ? aValue - bValue
                    : bValue - aValue;

            case "boolean":
                return aValue === bValue
                    ? 0
                    : searchSort.sortOrder === "ascending"
                        ? aValue ? -1 : 1
                        : aValue ? 1 : -1
      
            default:
              return 0; // Fallback for unknown data types
          }
    })
    const mappedProperties = sortedFilteredProperties.map( propertyObj => <PropertyCard key={propertyObj.id} propertyObj={propertyObj} /> )
    

    // RENDER //
    return(
        <div className="property-list">
            <SearchSort setSearchSort={setSearchSort} />
            {mappedProperties}
        </div>
    )
}

export default PropertyList