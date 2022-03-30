import { writable } from "svelte/store";

export const isLoggedIn = writable(false);
export const responseData = writable(null)
export const shopItems = writable([{ id: 1, name: "Item 1", price: 200, sizes:["XL", "L", "M" , "S"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aperiam perferendis. Magnam delectus eaque quam corporis esse id, aut officiis sapiente? Enim minus fugit unde ratione aperiam nobis iusto recusandae." }, { id: 2, name: "Item 2", price: 100, sizes:["XL", "L", "M" , "S"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aperiam perferendis. Magnam delectus eaque quam corporis esse id, aut officiis sapiente? Enim minus fugit unde ratione aperiam nobis iusto recusandae." }, { id: 3, name: "Item 3", price: 125, sizes:["XL", "L", "M" , "S"], description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aperiam perferendis. Magnam delectus eaque quam corporis esse id, aut officiis sapiente? Enim minus fugit unde ratione aperiam nobis iusto recusandae." }] );

export const cartContent = writable([]);


