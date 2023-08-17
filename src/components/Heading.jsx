import { Header } from "semantic-ui-react"
import NavBar from "./NavBar"

function Heading() {
  return (
    <>
      <NavBar />
      <Header as='h1' dividing textAlign="center">
        The Landlord Board
        <Header.Subheader >
          We put the 'honest' in 'an honest living'
        </Header.Subheader>
      </Header>  
    </>
  )
}

export default Heading