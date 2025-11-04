import { ProductsList } from "../(components)/ProductsList";
import { Title } from "../(components)/Title";

export const metadata = {
  title: "Shop",
};

export default async function page() {
  return (
    <>
      <Title>Our Products</Title>
      <ProductsList />
    </>
  );
}
