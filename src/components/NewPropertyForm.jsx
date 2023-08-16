import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
        <div>
            <form onSubmit={handleSubmitProperty}>
                <h2>Add a new property to your list</h2>

                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    name="address"
                    value={propertyProps.address}
                    placeholder="enter address here..."
                    onChange={handleInputChange}
                />
                <br/><br/>

                <label htmlFor="neighborhood">Neighborhood:</label>
                <input
                    type="text"
                    name="neighborhood"
                    value={propertyProps.neighborhood}
                    placeholder="enter neighborhood here..."
                    onChange={handleInputChange}
                />
                <br/><br/>

                <label htmlFor="image">Image:</label>
                <input
                    type="text"
                    name="image"
                    value={propertyProps.image}
                    placeholder="enter image URL here..."
                    onChange={handleInputChange}
                />
                <br/><br/>

                <label htmlFor="owner">Property owner:</label>
                <input
                    type="text"
                    name="owner"
                    value={propertyProps.owner}
                    placeholder="enter property owner here..."
                    onChange={handleInputChange}
                />
                <br/><br/>

                <label htmlFor="management">Property management:</label>
                <input
                    type="text"
                    name="management"
                    value={propertyProps.management}
                    placeholder="enter management company here..."
                    onChange={handleInputChange}
                />
                <br/><br/>

                <label htmlFor="rent">Rent you paid:</label>
                <input
                    type="number"
                    name="rent"
                    value={propertyProps.rent}
                    onChange={handleInputChange}
                />
                <br/><br/>

                <label htmlFor="greenFlags">Any green flags?</label>
                <input
                    type="number"
                    name="greenFlags"
                    value={propertyProps.greenFlags}
                    onChange={handleInputChange}
                />
                <br/><br/>

                <label htmlFor="redFlags">Any red flags?</label>
                <input
                    type="number"
                    name="redFlags"
                    value={propertyProps.redFlags}
                    placeholder="how many red flags?"
                    onChange={handleInputChange}
                />
                <br/><br/>

                <label htmlFor="laundryInBuilding">Laundry on site?</label>
                <input
                    type="checkbox"
                    name="laundryInBuilding"
                    value={propertyProps.laundryInBuilding ? true : false}
                    checked={propertyProps.laundryInBuilding ? true : false}
                    onChange={handleInputChange}
                />
                <label htmlFor="laundryInBuilding">{propertyProps.laundryInBuilding ? "Yes" : "No"}</label>
                <br/><br/>

                <label htmlFor="address">Additional comments:</label>
                <input
                    type="text"
                    name="comments"
                    value={propertyProps.comments}
                    placeholder="add your comments here..."
                    onChange={handleInputChange}
                />
                <br/><br/>

                <input
                    type="submit"
                    name="submit"
                    value="Add New Property"
                    className="submit"
                />
            </form>
        </div>
    )
}

export default NewPropertyForm