import { Header } from "semantic-ui-react"
import NavBar from "./NavBar"

function Heading() {
  return (
    <>
      <br/>
      <Header as='h1' textAlign="center">
        The Landlord Board
        <Header.Subheader>
          We put the 'honest' in 'an honest living'
        </Header.Subheader>
      </Header>
      <br/>
      <NavBar />
      <br/><br/>
    </>
  )
}

export default Heading