import React from "react"
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import PropertyCard from './PropertyCard'
import SearchSort from './SearchSort'


function PropertyList() {

    // LOADERS //
    const {properties} = useLoaderData()

    // HELPER FUNCTIONS //
    // const cleanString = (str) => str?.toLowerCase().replace(/[\W_]+/g,"");

    
    // STATE //
    const [searchSort, setSearchSort] = useState({
        searchString: "",
        sortProp: "",
        sortOrder: ""
    })

    function handleUserInputChange(e) {
        setSearchSort( searchSort => ({...searchSort, [e.target.name]:e.target.value}) )
    }


    // FILTERING, SORTING & MAPPING //
    const fileteredProperties = properties.filter( property => property.neighborhood.toLowerCase().startsWith(searchSort.searchString.toLowerCase()) )
    const sortedFilteredProperties = fileteredProperties.sort((a, b) => {
        // const aValue = a[searchSort.sortProp]
        // const bValue = b[searchSort.sortProp]

        switch (searchSort.sortProp) {
            case searchSort.sortProp === "address":
            //   return searchSort.sortOrder === "ascending"
            //     ? cleanString(a.searchSort.sortProp).localeCompare(cleanString(b.searchSort.sortProp))
            //     : cleanString(b.searchSort.sortProp).localeCompare(cleanString(a.searchSort.sortPropalue));
            return searchSort.sortOrder === "ascending"
                ? a.address.toLowerCase().replace(/[^a-z0-9]/gi, '').localeCompare(b.address.toLowerCase().replace(/[^a-z0-9]/gi, ''))
                : b.address.toLowerCase().replace(/[^a-z0-9]/gi, '').localeCompare(a.address.toLowerCase().replace(/[^a-z0-9]/gi, ''));

            case "rent" || "green_flags" || "red_flags":    
                return searchSort.sortOrder === "ascending"
                    ? a.searchSort.sortProp - b.searchSort.sortProp
                    : b.searchSort.sortProp - a.searchSort.sortProp;

            case "boolean":
                return a.searchSort.sortProp === b.searchSort.sortProp
                    ? 0
                    : searchSort.sortOrder === "ascending"
                        ? a.searchSort.sortProp ? -1 : 1
                        : a.searchSort.sortProp ? 1 : -1
      
            default:
              return 0; // Fallback for unknown data types
          }
    })
    // if (sortDirection === "ascending") {
    //     if (sortCategory === "id") { return parseFloat(a.id) - parseFloat(b.id) }
    //     else if (sortCategory === "category") { return a.category.toLowerCase().replace(/[^a-z0-9]/gi, '').localeCompare(b.category.toLowerCase().replace(/[^a-z0-9]/gi, '')) }
    //     else if (sortCategory === "description") { return a.description.toLowerCase().replace(/[^a-z0-9]/gi, '').localeCompare(b.description.toLowerCase().replace(/[^a-z0-9]/gi, '')) }
    //     else if (sortCategory === "amount") { return parseFloat(a.amount) - parseFloat(b.amount) }
    //     else { return 1 }
    //   }
    //   if (sortDirection === "descending") {
    //     if (sortCategory === "id") { return parseFloat(b.id) - parseFloat(a.id) }
    //     else if (sortCategory === "category") { return b.category.toLowerCase().replace(/[^a-z0-9]/gi, '').localeCompare(a.category.toLowerCase().replace(/[^a-z0-9]/gi, '')) }
    //     else if (sortCategory === "description") { return b.description.toLowerCase().replace(/[^a-z0-9]/gi, '').localeCompare(a.description.toLowerCase().replace(/[^a-z0-9]/gi, '')) }
    //     else if (sortCategory === "amount") { return parseFloat(b.amount) - parseFloat(a.amount) }
    //     else { return 1 }
    const mappedProperties = sortedFilteredProperties.map( propertyObj => <PropertyCard key={propertyObj.id} propertyObj={propertyObj} /> )
    

    // RENDER //
    return(
        <div>
            <SearchSort searchSort={searchSort} handleUserInputChange={handleUserInputChange} />
            <br/><br/>
            <div className="ui cards centered flex grid container four wide">
                {mappedProperties}
            </div>
        </div>
    )
}

export default PropertyList