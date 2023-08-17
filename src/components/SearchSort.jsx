import { Form } from "semantic-ui-react"
function SearchSort({setSearchSort}) {

    // RENDER //
    return(
        <div className="ui form flex container">
            <Form>
                <Form.Group inline>
                    <Form.Input
                        width={8}
                        type="text"
                        fluid
                        label="Search by Neighborhood:"
                        onChange={e => setSearchSort({searchString: e.target.value})}
                    />
                    <Form.Select
                        width={4}
                        label="Sort By:"
                        options={[
                            {key: 'id', text: 'ID', value: 'id'},
                            {key: 'address', text: 'Address', value: 'address'},
                            {key: 'neighborhood', text: 'Neighborhood', value: 'neighborhood'},
                            {key: 'owner', text: 'Owner', value: 'owner'},
                            {key: 'management', text: 'Management', value: 'management'},
                            {key: 'rent', text: 'Rent', value: 'rent'},
                            {key: 'green_flags', text: 'Green Flags', value: 'green_flags'},
                            {key: 'red_flags', text: 'Red Flags', value: 'red_flags'}
                        ]}
                        placeholder="Select a category"
                        onChange={e => setSearchSort({searchProp: e.target.value})}
                    />
                    <Form.Select
                        width={4}
                        label="Sort Order:"
                        options={[
                            {key: 'ascending', text: 'Ascending', value: 'ascending'},
                            {key: 'descending', text: 'Descending', value: 'descending'}
                        ]}
                        placeholder="Select a direction"
                        onChange={e => setSearchSort({searchOrder: e.target.value})}
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default SearchSort