import { useLoaderData } from 'react-router-dom'
import PropertyCard from './PropertyCard'

function PropertyPage() {

    // LOADERS //
    const propertyObj = useLoaderData()

    // RENDER //
    return(
        <div className="property-page">
            <h2>{ propertyObj.address }</h2>
            <PropertyCard propertyObj={ propertyObj } />
            <p>Owner: {propertyObj.owner}</p>
            <p>Management: {propertyObj.management}</p>
            <p>Your Comments: {propertyObj.comments}</p>
        </div>
    )
}

export default PropertyPage