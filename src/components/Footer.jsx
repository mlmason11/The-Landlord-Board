import { Header } from "semantic-ui-react"

function Footer() {

    return(
        <>
            <div id="whitespace-div"></div>
            <div id="footer" className="footer">
                <Header as='h1' textAlign="center">
                    Footer Coming Soon
                    <Header.Subheader>
                        Socials Go Here
                    </Header.Subheader>
                </Header>
            </div>
        </>
    )
}

export default Footer