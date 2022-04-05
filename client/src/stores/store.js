import { writable } from "svelte/store";

const storedLoggedIn = localStorage.getItem("loggedIn");
const loggedIn = storedLoggedIn === "true" ? true : false;

export const isLoggedIn = writable(loggedIn);

isLoggedIn.subscribe(value => {
  localStorage.setItem("loggedIn", value);
});



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

const storedCart = localStorage.getItem("cart");
const cartItems = storedCart ? JSON.parse(storedCart) : [];
export const cart = writable(cartItems);
cart.subscribe(value => {
  localStorage.setItem("cart", JSON.stringify(value));
});


export let idIncrement = writable(1);

