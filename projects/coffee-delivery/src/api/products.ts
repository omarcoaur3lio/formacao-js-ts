export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  tags: string[];
  image: string;
};

export const ProductList = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional cafe feito com água quente e grãos moídos",
    price: "9,90",
    tags: ["Tradicional"],
    image: "./src/assets/products/Expresso.png",
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9,90",
    tags: ["Tradicional"],
    image: "./src/assets/products/Americano.png",
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: "9,90",
    tags: ["Tradicional"],
    image: "./src/assets/products/ExpressoCremoso.png",
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com cafe expresso e cubos de gelo",
    price: "9,90",
    tags: ["Tradicional", "Gelado"],
    image: "./src/assets/products/CafeGelado.png",
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "9,90",
    tags: ["Tradicional", "Com Leite"],
    image: "./src/assets/products/CafecomLeite.png",
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "9,90",
    tags: ["Tradicional", "Com Leite"],
    image: "./src/assets/products/Latte.png",
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "9,90",
    tags: ["Tradicional", "Com Leite"],
    image: "./src/assets/products/Capuccino.png",
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: "9,90",
    tags: ["Tradicional", "Com Leite"],
    image: "./src/assets/products/Macchiato.png",
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9,90",
    tags: ["Tradicional", "Com Leite"],
    image: "./src/assets/products/Mochaccino.png",
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e cafe",
    price: "9,90",
    tags: ["Especial", "Com Leite"],
    image: "./src/assets/products/ChocolateQuente.png",
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "9,90",
    tags: ["Especial", "Alcoólico", "Gelado"],
    image: "./src/assets/products/Cubano.png",
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: "9,90",
    tags: ["Especial"],
    image: "./src/assets/products/Havaiano.png",
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: "9,90",
    tags: ["Especial"],
    image: "./src/assets/products/Arabe.png",
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: "9,90",
    tags: ["Especial", "Alcoólico"],
    image: "./src/assets/products/Irlandes.png",
  },
];
