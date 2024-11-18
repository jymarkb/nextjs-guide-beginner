"use client";

import { useEffect, useState } from "react";

type Params = {
  productId: string;
  reviewId: string;
};

type Props = {
  params: Promise<Params>;
};

async function fetchParams(params: Promise<Params>): Promise<Params> {
  return await params;
}

export default function ReviewPage({ params }: Props) {
  const [data, setData] = useState<Params | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchParams(params)
      .then((result) => {
        const random = Math.floor(Math.random() * 2);
        if (random === 1) {
          setError("1");
        }
        setData(result);
      })
      .catch((err) => setError(err.message));
  }, [params]);

  if (error) {
    throw new Error(
      `Error loading review #${data?.reviewId} for product #${data?.productId}`
    );
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <h1>
      Viewing Review #{data.reviewId} from Product #{data.productId}
    </h1>
  );
}
