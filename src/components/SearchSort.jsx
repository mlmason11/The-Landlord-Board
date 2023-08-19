import { Form } from "semantic-ui-react"
function SearchSort({searchSort, handleUserInputChange}) {

    

    // RENDER //
    return(
        <div className="ui segment form flex container">
            <Form>
                <Form.Group inline>
                    <Form.Input
                        width={8}
                        fluid
                        label="Search by Neighborhood:"
                        type="text"
                        name="searchString"
                        value={searchSort.searchString}
                        onChange={e => handleUserInputChange(e)}
                    />
                    <Form.Select
                        width={4}
                        label="Sort By:"
                        name="sortProp"
                        value={searchSort.sortProp}
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
                        onChange={e => handleUserInputChange(e)}
                    />
                    <Form.Select
                        width={4}
                        label="Sort Order:"
                        name="sortOrder"
                        value={searchSort.sortOrder}
                        options={[
                            {key: 'ascending', text: 'Ascending', value: 'ascending'},
                            {key: 'descending', text: 'Descending', value: 'descending'}
                        ]}
                        onChange={e => handleUserInputChange(e)}
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default SearchSort