import { pb } from "$lib";
import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ params }) => {
    try {
        return { 
            // @ts-ignore
            product: await pb.collection('products').getOne(`${params.id}`, {
                expand: 'available_sizes, available_sizes.size_id, category, feature'
            }) 
        }
    } catch(error) {
        console.error("Error loading products:", error);
        return {
            product: {},
        };
    }
}