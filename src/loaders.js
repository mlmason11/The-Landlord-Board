export async function getPropertiesLoader() {
    const response = await fetch(`http://localhost:4000/properties`)
    return response.ok
        ? await response.json()
        : new Response("", { status: response.status, statusText: "Could not find the properties" })
}

export async function getPropertyByIdLoader(params) {
    const response = await fetch(`http://localhost:4000/properties/${params.id}`)
    return response.ok
        ? await response.json()
        : new Response("", { status: response.status, statusText: "Could not find that property" })
}