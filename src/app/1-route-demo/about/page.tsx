function randomNumber(count: number) {
  return Math.random() + count;
}

export default function About() {
  const random = randomNumber(1);
  return <h1>About this is generated randomly {random}</h1>;
}
