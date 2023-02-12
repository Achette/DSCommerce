import { OrderDTO, OrderItemDTO } from "../models/order";
import * as cartRepository from "../localStorage/cart-Repository";
import { ProductDTOProps } from "../types";

export const saveCart = (cart: OrderDTO) => {
  cartRepository.save(cart);
};

export function getCart(): OrderDTO {
  return cartRepository.get();
}

export const addProduct = (product: ProductDTOProps) => {
  const cart = cartRepository.get();
  const item = cart.items.find((x) => x.productId === product.id);
  if (!item) {
    const newItem = new OrderItemDTO(
      product.id,
      1,
      product.name,
      product.price,
      product.imgUrl
    );
    cart.items.push(newItem);
    cartRepository.save(cart);
  }
};

export const increaseItem = (productId: number) => {
  const cart = cartRepository.get();
  const item = cart.items.find((x) => x.productId === productId);
  if (item) {
    item.quantity++;
    cartRepository.save(cart);
  }
};

export const decreaseItem = (productId: number) => {
  const cart = cartRepository.get();
  const item = cart.items.find((x) => x.productId === productId);
  if (item) {
    item.quantity--;
    if (item.quantity < 1)
      cart.items = cart.items.filter((x) => x.productId !== item.productId);
    cartRepository.save(cart);
  }
};
