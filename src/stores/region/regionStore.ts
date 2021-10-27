import { getRegionsService } from "@/services/regionService";
import type { Region } from "@/shared/types/region";

import { writable } from "svelte/store";


import type { RequestError } from '../../shared/types/RequestError';
import { setIsLoading } from "@/stores/appStore";
export const regionsList = writable<Region[]>(null);
export const isLoading = writable<boolean>(false);
export const errorList = writable<RequestError[]>([]);

export const getRegionAction = async (): Promise<void> => {
    setIsLoading(true)
    try {
        const data = await getRegionsService();
        regionsList.set(data)
        setIsLoading(false)
    } catch (errors) {
        const e: RequestError[] = errors;
        errorList.set(e);
        setIsLoading(false)
    }


}
