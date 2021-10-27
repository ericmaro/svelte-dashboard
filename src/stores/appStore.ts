import { writable } from "svelte/store";

export const isLoading = writable<boolean>(false);

export const setIsLoading = (value:boolean):void=>isLoading.set(value)