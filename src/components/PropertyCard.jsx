//import placeholder from './property-placeholder.jpg'
import { useNavigate } from 'react-router-dom'

function PropertyCard({propertyObj}) {

    // ENABLE NAVIGATION //
    const navigate = useNavigate()

    // EVENT HANDLERS //
    function handleDeleteProperty(e) {
        e.preventDefault()
    
        const OPTIONS = { method: 'DELETE' }
    
        fetch(`http://localhost:4000/properties/${propertyObj.id}`, OPTIONS)
        .then( r => r.json() )
        .then( () => navigate("/properties") )
    }

    // RENDER //
    return(
        <div className="property-card">
            <h3>{ propertyObj.address }</h3>
            <h3>{ propertyObj.neighborhood }</h3>
            <img src={ propertyObj.img_url } alt={ propertyObj.address }/>
            <p>{ propertyObj.rent }</p>
            <p>{ propertyObj.green_flags }</p>
            <p>{ propertyObj.red_flags }</p>
            <p>Laundry in building? { propertyObj.laundry_in_building ? "YES" : "NO" }</p>
            <br/>
            <button onClick={handleDeleteProperty}>DELETE</button>
        </div>
    )
}

export default PropertyCard