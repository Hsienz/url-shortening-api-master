import type { tHistory } from "$lib/types/history";
import type { Actions, PageServerLoad } from "./$types";

type load = {
	histories: tHistory[]
}


export const load: PageServerLoad<load> = async ({ cookies }) => {
	let res:load = {
		histories : []
	}
	console.log(cookies)
	let compress = cookies.get('histories') ?? ""
	console.log(compress)
	if( !compress ) return res
	let urls = compress.match(/.*?;.*?;/g)
	console.log(urls)
	if( !urls ) return res
	res.histories = urls.map(x=>{
		let temp = x.match(/.*?;/g)
		console.log(temp)
		let res:tHistory = {
			url: temp?temp[0].slice(0,-1):"",
			shortenUrl: temp?temp[1].slice(0,-1):""
		}
		return res
	})
	return res
};
export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const url = data.get("url");
		const response = await fetch(
			`https://api.shrtco.de/v2/shorten?url=${url}`,
			{ method: "GET" }
		);
		const json = await response.json();
		console.log(json);
		cookies.set("histories", (cookies.get("histories") ?? "") + `${json.result.original_link};${json.result.full_short_link};`);
		return json;
	},
};
