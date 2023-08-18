import { Header } from "semantic-ui-react"

function About() {

    return(
        <div className="about">
            <Header as='h2' textAlign="center">
                About Page
            </Header>
            <div className="ui segment container">
                <p>
                    Nunc sed varius felis, ut efficitur ante. Phasellus ut scelerisque orci, ut vestibulum mauris. Maecenas iaculis malesuada nibh, nec venenatis velit congue id. Quisque placerat tortor et sem varius, volutpat tempor nulla pellentesque. In bibendum, quam nec facilisis posuere, risus felis scelerisque risus, vel vestibulum dolor mi quis lectus. Duis blandit imperdiet nulla, placerat dignissim lacus sodales non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent elementum tincidunt felis interdum tincidunt. Phasellus sed nulla euismod, interdum dui in, porta enim. Suspendisse eu iaculis lectus, vitae pretium velit. Nulla fringilla nisl quis nibh ornare facilisis. In pellentesque porta fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta nec neque rutrum volutpat. Etiam eu ultrices lacus, vitae sollicitudin nulla.
                </p>
                <p>
                    Maecenas enim ex, feugiat ac ipsum eu, pharetra tincidunt odio. Ut euismod dignissim dolor, pellentesque dignissim est pharetra at. Vestibulum mauris nisi, varius ac egestas id, cursus at risus. Donec sed mi vehicula, vulputate diam tincidunt, suscipit nisl. Maecenas placerat nibh ut hendrerit faucibus. Sed nec lorem turpis. Proin interdum varius ipsum, sed lacinia justo fermentum ac. In elementum elementum velit, sed egestas nisl cursus vitae. Vestibulum congue purus sed justo porta, a sagittis augue vestibulum. Vestibulum at quam turpis.
                </p>
            </div>
        </div>
    )
}

export default About