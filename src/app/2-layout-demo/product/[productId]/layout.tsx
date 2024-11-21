function randomNumber(count : number) {
  return Math.floor(Math.random() * count);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = randomNumber(2);

  if(random === 1){
    throw new Error("Error Product Layout")
  }

  return (
    <>
      {children}
      <div>Carousel Image</div>
    </>
  );
}
