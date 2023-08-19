import { useLoaderData } from 'react-router-dom'
import PropertyCard from './PropertyCard'
import {  Container, Grid, Header } from 'semantic-ui-react'

function PropertyPage() {

    // LOADERS //
    const {propertyObj} = useLoaderData()

    // RENDER //
    return(
        <div>
            <Header as='h2' textAlign="center">
                Details for {propertyObj.address}
            </Header>
            <Grid centered columns={1}>
                <Grid.Row>
                    <PropertyCard propertyObj={ propertyObj } />
                </Grid.Row>
                <Grid.Row>
                    <Container>
                        <h4>Property Owner</h4>
                        <p>{propertyObj.owner}</p>
                    </Container>
                </Grid.Row>
                <Grid.Row>
                    <Container>
                        <h4>Property Management</h4>
                        <p>{propertyObj.management}</p>
                    </Container>
                </Grid.Row>
                <Grid.Row>
                    <Container>
                        <h4>Comments</h4>
                        <p>{propertyObj.comments}</p>
                    </Container>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default PropertyPage