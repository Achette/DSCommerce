import { OrderItemDTO } from "../../../models/order";

export const item1 = new OrderItemDTO(
  4,
  1,
  "Pc Gamer",
  1200,
  "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg"
);

export const item2 = new OrderItemDTO(
  5,
  2,
  "Rails for Dummies",
  100.99,
  "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg"
);

/* export const cart: OrderDTO = {
  items: [
    {
      productId: 4,
      quantity: 1,
      name: "PC Gamer",
      price: 1200,
      imgUrl:
        "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg",
    },
    {
      productId: 5,
      quantity: 2,
      name: "Rails for Dummies",
      price: 100.99,
      imgUrl:
        "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg",
    },
  ],
}; */
