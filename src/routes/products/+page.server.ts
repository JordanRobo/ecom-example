import type { PageServerLoad } from "./$types";
import PocketBase from "pocketbase";

export const load: PageServerLoad = async () => {
	try {
		const pb = new PocketBase("http://pi-master.local:3080");

		return {
			products: await pb.collection("products").getFullList(),
		};
	} catch (error) {
		console.error("Error loading products:", error);
		return {
			products: [],
		};
	}
};
