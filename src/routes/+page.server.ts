import type { Actions } from "./$types";
export const actions: Actions = {
    default: async({request, cookies}) => {
        const data = await request.formData()
        const url = data.get('url')
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`,{method:'GET'})
        const json = await response.json()
        console.log(json)
        return json
    }
};