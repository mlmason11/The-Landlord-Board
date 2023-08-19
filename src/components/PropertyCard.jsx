//import placeholder from './property-placeholder.jpg'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Icon, Image } from 'semantic-ui-react'

function PropertyCard({propertyObj}) {

    // ENABLE NAVIGATION //
    const navigate = useNavigate()

    // // EVENT HANDLERS //
    function handleDeleteProperty(e) {
        e.preventDefault()
    
        const OPTIONS = { method: 'DELETE' }
    
        fetch(`http://localhost:4000/properties/${propertyObj.id}`, OPTIONS)
        .then( r => r.json() )
        .then( () => navigate("/properties") )
    }

    // RENDER //
    return(
        <Card>
            <Image src={ propertyObj.img_url } alt={ propertyObj.address } href={`/properties/${propertyObj.id}`}/>
            <Card.Content href={`/properties/${propertyObj.id}`}>
                <Card.Header>
                    {propertyObj.address}
                </Card.Header>
                <Card.Meta>
                    {propertyObj.neighborhood}
                </Card.Meta>
                <Card.Description>
                    Rent: ${propertyObj.rent}
                </Card.Description>
                <Card.Description>
                    Green Flags: {propertyObj.green_flags} <Icon className='ui green flag icon'/>
                </Card.Description>
                <Card.Description>
                    Red Flags: {propertyObj.red_flags} <Icon className='ui red flag icon'/>
                </Card.Description>
            </Card.Content>
            <Button onClick={e => handleDeleteProperty(e)}>
                DELETE
            </Button>
        </Card>        
    )
}

export default PropertyCard