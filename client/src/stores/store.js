import { writable } from "svelte/store";

export const isLoggedIn = writable(false);
export const responseData = writable(null)

export const cartContent = writable([]);