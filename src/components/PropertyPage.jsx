import { useLoaderData } from 'react-router-dom'
import PropertyCard from './PropertyCard'

function PropertyPage() {

    // LOADERS //
    const {propertyObj} = useLoaderData()

    // RENDER //
    return(
        
        <div className='ui one column stackable center aligned page grid'>
            <PropertyCard propertyObj={ propertyObj } />
            <p onClick={console.log(propertyObj)}>Owner: {propertyObj.owner}</p>
            <p>Management: {propertyObj.management}</p>
            <p>Your Comments: {propertyObj.comments}</p>
        </div>
    )
}

export default PropertyPage