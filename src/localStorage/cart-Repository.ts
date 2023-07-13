import { CART_KEY } from "../constants/system";
import { OrderDTO, OrderItemDTO } from "../models/order";

export const save = (cart: OrderDTO) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export function get(): OrderDTO {
  const str = localStorage.getItem(CART_KEY) || '{"items": []}';
  const obj = JSON.parse(str) as OrderDTO;
  const cart = new OrderDTO();
  obj.items.forEach((x) => {
    cart.items.push(
      new OrderItemDTO(x.productId, x.quantity, x.name, x.price, x.imgUrl)
    );
  });
  return cart;
}

// função para limpar o localStorage

export function clear() {
  localStorage.setItem(CART_KEY, '{"items": []}')
}