import { useRouteError } from "react-router-dom"

function ErrorPage() {

    const routeError = useRouteError()

    return(
        <div>
            <h1>ERROR</h1>
            <h3>{routeError.status}</h3>
            <h3>{routeError.status}</h3>
        </div>
    
    )
}

export default ErrorPage