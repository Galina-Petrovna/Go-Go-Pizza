import { showLoader } from "./loader.js";
import { hideLoader } from "./loader.js";

export const getData = async (url) => {
    showLoader()
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error ('Failled')
        }

        return await response.json()
    } catch (error) {
        console.error(`Error fetchig pizzza products: ${error}`)
        return [];
    } finally {
        hideLoader()
    }
};