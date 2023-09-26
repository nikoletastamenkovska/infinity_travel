import { ArrangementType } from "src/types/data_interface";

export async function fetchCountries() {
    try {
        const response = await fetch('https://secretive-canary-variraptor.glitch.me/arrangements')
        if (!response) {
            throw new Error('Failed to fetch countries');
        }
        const allCountries: ArrangementType[] = await response.json();
        return allCountries;
    } catch (error) {
        console.error('Error fetching countries:', error);
        return [];

    }
}

export async function fetchExotic() {
    try {
        const response = await fetch('https://secretive-canary-variraptor.glitch.me/exotic_arrangement')
        if (!response) {
            throw new Error('Failed to fetch countries');
        }
        const allCountries: ArrangementType[] = await response.json();
        return allCountries;
    } catch (error) {
        console.error('Error fetching countries:', error);
        return [];

    }
}

export async function fetchMacedoniaTourism() {
    try {
        const response = await fetch('https://secretive-canary-variraptor.glitch.me/macedonia_arrangements')
        if (!response) {
            throw new Error('Failed to fetch countries');
        }
        const allCountries: ArrangementType[] = await response.json();
        return allCountries;
    } catch (error) {
        console.error('Error fetching countries:', error);
        return [];

    }
}