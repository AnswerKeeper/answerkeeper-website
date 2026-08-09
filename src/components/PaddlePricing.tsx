"use client";

import { useEffect, useState } from "react";
import { initializePaddle, type Paddle } from "@paddle/paddle-js";

const PRICE_ID = "pri_01kzegaz9ef3310cszp2kb8z6z";

export default function PaddlePricing() {
  const [paddle, setPaddle] = useState<Paddle>();
  const [price, setPrice] = useState<string>("Loading price...");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function initialize() {
      const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;

      if (!token) {
        console.error(
          "NEXT_PUBLIC_PADDLE_CLIENT_TOKEN is not configured."
        );
        setPrice("Price unavailable");
        return;
      }

      if (!token.startsWith("live_")) {
        console.error(
          "Paddle client token must be a live_ token for this live integration."
        );
        setPrice("Price unavailable");
        return;
      }

      try {
        const instance = await initializePaddle({
          environment: "production",
          token,
        });

        if (!instance) {
          throw new Error("Paddle failed to initialize.");
        }

        setPaddle(instance);

        const preview = await instance.PricePreview({
          items: [
            {
              priceId: PRICE_ID,
              quantity: 1,
            },
          ],
        });

        const formattedTotal =
          preview.data?.details?.lineItems?.[0]?.formattedTotals?.subtotal;

        if (!formattedTotal) {
          throw new Error("Paddle did not return a formatted price.");
        }

        setPrice(formattedTotal);
      } catch (error) {
        console.error("Paddle initialization failed:", error);
        setPrice("Price unavailable");
      }
    }

    initialize();
  }, []);

  function handleSubscribe() {
    if (!paddle) {
      return;
    }

    setLoading(true);

    paddle.Checkout.open({
      items: [
        {
          priceId: PRICE_ID,
          quantity: 1,
        },
      ],
      settings: {
        displayMode: "overlay",
        variant: "one-page",
        successUrl: `${window.location.origin}/welcome`,
      },
    });

    setLoading(false);
  }

  return (
    <div>
      <div className="mt-5">
        <span className="text-5xl font-bold text-slate-900">
          {price}
        </span>
  
        <span className="ml-2 text-slate-500">
          /month
        </span>
      </div>
  
      <ul className="mt-8 space-y-3 text-center text-sm text-slate-700">
        <li>✓ 24/7 call answering</li>
        <li>✓ Emergency call detection</li>
        <li>✓ SMS notifications</li>
        <li>✓ Appointment scheduling</li>
        <li>✓ Customer information capture</li>
      </ul>
  
      <button
        type="button"
        onClick={handleSubscribe}
        disabled={!paddle || loading}
        className="mt-8 block w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Opening checkout..." : "Subscribe — Start Now"}
      </button>

      <p className="mt-3 text-sm text-slate-500">
       Unlimited calls · No long-term contract
      </p>
    </div>
  );
}