export async function getPropertiesLoader() {
    const response = await fetch(`http://localhost:4000/properties`)
    const properties = await response.json()
    return response.ok
        ? {properties}
        : new Response("", { status: response.status, statusText: "Could not find the properties" })
}

export async function getPropertyByIdLoader({params}) {
    const response = await fetch(`http://localhost:4000/properties/${params.id}`)
    const propertyObj = await response.json()
    return response.ok
        ? {propertyObj}
        : new Response("", { status: response.status, statusText: "Could not find that property" })
}