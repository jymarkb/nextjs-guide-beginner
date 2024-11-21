import Link from "next/link";
export default function F4() {
  return (
    <>
      <h1>F4 Page</h1>
      <div>
        <Link className="block" href="/f1/f3">
          Go to F3
        </Link>
        <Link className="block" href="/about">
          Go to About
        </Link>
      </div>
    </>
  );
}
