import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button } from 'semantic-ui-react'


function NewPropertyForm() {

    // ENABLE NAVIGATION //
    const navigate = useNavigate()

    // STATE //
    const [propertyProps, setPropertyProps] = useState({
        address: "",
        neighborhood: "",
        image: "",
        owner: "",
        management: "",
        rent: 0,
        greenFlags: 0,
        redFlags: 0,
        laundryInBuilding: false,
        comments: ""
    })


    // EVENT HANDLERS //
    function handleInputChange(e) {
        const newInput = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setPropertyProps( propertyProps => ({...propertyProps, [e.target.name]:newInput}) )
    }
    
    function handleSubmitProperty(e) {
        e.preventDefault()

        const OPTIONS = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                address: propertyProps.address,
                neighborhood: propertyProps.neighborhood,
                img_url: propertyProps.image,
                owner: propertyProps.owner,
                management: propertyProps.management,
                rent: propertyProps.rent,
                green_flags: propertyProps.greenFlags,
                red_flags: propertyProps.redFlags,
                laundry_in_building: propertyProps.laundryInBuilding,
                comments: propertyProps.comments
            })
        }

        fetch(`http://localhost:4000/properties`, OPTIONS)
        .then(r => r.json())
        .then(() => navigate("/properties"))
    }

    // RENDER //
    return (
        <div className="ui equal width form flex container">
            <Form onSubmit={e => handleSubmitProperty(e)}>
                <Form.Group inline widths="equal">
                    <Form.Input
                        fluid
                        label="Address"
                        type="text"
                        name="address"
                        value={propertyProps.address}
                        placeholder="Address here..."
                        onChange={e => handleInputChange(e)}
                    />
                    <Form.Input
                        fluid
                        label="Neighborhood"
                        type="text"
                        name="neighborhood"
                        value={propertyProps.neighborhood}
                        placeholder="Neighborhood here..."
                        onChange={e => handleInputChange(e)}
                    />
                    <Form.Input
                        fluid
                        label="Owner"
                        type="text"
                        name="address"
                        value={propertyProps.owner}
                        placeholder="Property owner here..."
                        onChange={e => handleInputChange(e)}
                    />
                    <Form.Input
                        fluid
                        label="Property Management"
                        type="text"
                        name="address"
                        value={propertyProps.owner}
                        placeholder="Management company here..."
                        onChange={e => handleInputChange(e)}
                    />
                </Form.Group>
                <Form.Group inline widths="equal">
                    <Form.Input
                        fluid
                        label="Monthly Rent"
                        type="number"
                        name="rent"
                        value={propertyProps.rent}
                        placeholder="Monthly rent here..."
                        onChange={e => handleInputChange(e)}
                    />
                    <Form.Input
                        fluid
                        label="Green Flags"
                        type="number"
                        name="greenFlags"
                        value={propertyProps.greenFlags}
                        placeholder="How many green flags have you seen?"
                        onChange={e => handleInputChange(e)}
                    />
                    <Form.Input
                        fluid
                        label="Red Flags"
                        type="number"
                        name="redFlags"
                        value={propertyProps.redFlags}
                        placeholder="How many red flags have you seen?"
                        onChange={e => handleInputChange(e)}
                    />
                </Form.Group>
                <Form.Group inline>
                    <Form.Input
                        width={14}
                        fluid
                        label="Image URL"
                        type="image"
                        name="image"
                        value={propertyProps.image}
                        placeholder="Enter image URL here..."
                        onChange={e => handleInputChange(e)}
                    />
                    <Form.Field width={2}>
                        <label htmlFor="laundryInBuilding">Laundry on site?</label>
                        <input
                            type="checkbox"
                            name="laundryInBuilding"
                            value={propertyProps.laundryInBuilding ? true : false}
                            checked={propertyProps.laundryInBuilding ? true : false}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="laundryInBuilding">{propertyProps.laundryInBuilding ? "Yes" : "No"}</label>
                    </Form.Field>
                </Form.Group>
                <Form.TextArea
                    width={16}
                    label="Additional Comments"
                    name="comments"
                    value={propertyProps.comments}
                    placeholder="Enter any additional comments here..."
                    onChange={e => handleInputChange(e)}
                />
                <Button type="submit">
                    SUBMIT NEW PROPERTY
                </Button>
            </Form>
        </div>
    )
}

export default NewPropertyForm