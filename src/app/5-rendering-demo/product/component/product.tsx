export default async function ProductData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h1> Product data</h1>;
}
