import type { tHistory } from "$lib/types/history";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
	let historiesString = cookies.get("histories") ?? "[]"
	let histories = JSON.parse( historiesString )
	return {histories}
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
		if(!json.ok) return json
		let newHistories:tHistory[] = JSON.parse( cookies.get('histories') ?? "[]" )
		newHistories.push({
			url: json.result.original_link,
			shortenUrl: json.result.full_short_link
		})
		cookies.set("histories", JSON.stringify(newHistories) )
		let temp = cookies.get("histories") ?? "[]"
		console.log(temp)
		console.log( JSON.parse( temp ) )
		return json;
	},
};
