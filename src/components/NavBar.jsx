import { Menu } from "semantic-ui-react"

function NavBar() {
    return(
        <Menu inverted widths={4}>
            <Menu.Item href="/">
                Home
            </Menu.Item>
            <Menu.Item href="/about">
                About
            </Menu.Item>
            <Menu.Item href="/properties">
                Listed Properties
            </Menu.Item>
            <Menu.Item href="/form">
                Add New Property
            </Menu.Item>
        </Menu>
    )
}

export default NavBar