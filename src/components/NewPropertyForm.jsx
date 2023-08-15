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
                image: propertyProps.image,
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
                    onChange={e => setPropertyProps.address(e.target.value)}
                />
                <br/>

                <label htmlFor="neighborhood">Neighborhood:</label>
                <input
                    type="text"
                    name="neighborhood"
                    value={propertyProps.neighborhood}
                    placeholder="enter neighborhood here..."
                    onChange={e => setPropertyProps.neighborhood(e.target.value)}
                />
                <br/>

                <label htmlFor="image">Image:</label>
                <input
                    type="text"
                    name="image"
                    value={propertyProps.image}
                    placeholder="enter image URL here..."
                    onChange={e => setPropertyProps.image(e.target.value)}
                />
                <br/>

                <label htmlFor="address">Property owner:</label>
                <input
                    type="text"
                    name="owner"
                    value={propertyProps.owner}
                    placeholder="enter property owner here..."
                    onChange={e => setPropertyProps.owner(e.target.value)}
                />
                <br/>

                <label htmlFor="address">Property management:</label>
                <input
                    type="text"
                    name="management"
                    value={propertyProps.management}
                    placeholder="enter management company here..."
                    onChange={e => setPropertyProps.management(e.target.value)}
                />
                <br/>

                <label htmlFor="rent">Rent you paid:</label>
                <input
                    type="number"
                    name="rent"
                    value={propertyProps.rent}
                    onChange={e => setPropertyProps.rent(e.target.value)}
                />
                <br/>

                <label htmlFor="green-flags">Any green flags?</label>
                <input
                    type="number"
                    name="green-flags"
                    value={propertyProps.greenFlags}
                    onChange={e => setPropertyProps.greenFlags(e.target.value)}
                />
                <br/>

                <label htmlFor="red-flags">Any red flags?</label>
                <input
                    type="number"
                    name="red-flags"
                    value={propertyProps.redFlags}
                    placeholder="how many red flags?"
                    onChange={e => setPropertyProps.redFlags(e.target.value)}
                />
                <br/>

                <label htmlFor="laundry-in-building">Check this box if there was laundry on site:</label>
                <input
                    type="checkbox"
                    name="laundry-in-building"
                    value={propertyProps.laundryInBuilding}
                    onChange={() => setPropertyProps.laundryInBuilding(!propertyProps.laundryInBuilding)}
                />
                <br/>

                <label htmlFor="address">Additional comments:</label>
                <input
                    type="text"
                    name="comments"
                    value={propertyProps.comments}
                    placeholder="add your comments here..."
                    onChange={e => setPropertyProps.comments(e.target.value)}
                />
                <br/>

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