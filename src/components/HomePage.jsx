import { Header } from "semantic-ui-react"

function HomePage() {

    return(
        <div>
            <Header as='h2' textAlign="center">
                Home Page
            </Header>
            <div className="ui segment container">
                <p>
                    Duis mi est, finibus vitae dui nec, laoreet molestie lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue felis ac pellentesque elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla rhoncus elementum sapien. Curabitur a ex laoreet, sagittis metus eu, dignissim massa. Donec porta purus et velit aliquet, nec tristique velit pharetra.
                </p>
            </div>
        </div>
    )
}

export default HomePage