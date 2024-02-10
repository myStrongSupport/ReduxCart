import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy = [
  {
    id: "m1",
    title: "First Book",
    description: "First Book ,I have ever Wrote",
    price: 6,
  },
  {
    id: "m2",
    title: "Second Book",
    description: "Second Book ,I have ever Wrote",
    price: 4,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
