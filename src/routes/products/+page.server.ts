import type { PageServerLoad } from "./$types";
import { pb } from "$lib";

export const load: PageServerLoad = async () => {
	try {
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
