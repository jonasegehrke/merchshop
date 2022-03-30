import { writable } from "svelte/store";

export const isLoggedIn = writable(false);
export const responseData = writable(null);
export const shopItems = writable([
  {
    id: 1,
    name: "Item 1",
    price: 200,
    sizes: ["XL", "L", "M", "S"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aperiam perferendis. Magnam delectus eaque quam corporis esse id, aut officiis sapiente? Enim minus fugit unde ratione aperiam nobis iusto recusandae.",
    image: "/images/item.png",
  },
  {
    id: 2,
    name: "Item 2",
    price: 100,
    sizes: ["XL", "L", "M", "S"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aperiam perferendis. Magnam delectus eaque quam corporis esse id, aut officiis sapiente? Enim minus fugit unde ratione aperiam nobis iusto recusandae.",
    image: "/images/item.png",
  },
  {
    id: 3,
    name: "Item 3",
    price: 125,
    sizes: ["XL", "L", "M", "S"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aperiam perferendis. Magnam delectus eaque quam corporis esse id, aut officiis sapiente? Enim minus fugit unde ratione aperiam nobis iusto recusandae.",
    image: "/images/item.png",
  },
]);
export const cart = writable([]);
export let idIncrement = writable(1);

