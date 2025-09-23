import React, { useEffect, useState } from "react";

interface Order {
  price: number;
  amount: number;
}

export default function OrderBook() {
  const [bids, setBids] = useState<Order[]>([]);
  const [asks, setAsks] = useState<Order[]>([]);
  const [lastPrice, setLastPrice] = useState<number | null>(null);

  useEffect(() => {
    let ws: WebSocket | null = null;

    // --- STEP 1: Fetch snapshot ---
    const fetchSnapshot = async () => {
      try {
        const res = await fetch(
          "https://api.coinstore.com/api/v1/market/depth/PPOUSDT?depth=20"
        );
        const json = await res.json();
        console.log("Snapshot:", json);

        if (json.data) {
          setBids(
            json.data.b.map((b: any) => ({
              price: parseFloat(b[0]),
              amount: parseFloat(b[1]),
            }))
          );
          setAsks(
            json.data.a.map((a: any) => ({
              price: parseFloat(a[0]),
              amount: parseFloat(a[1]),
            }))
          );
          setLastPrice(parseFloat(json.data.lastPrice));
        }
      } catch (err) {
        console.error("Error snapshot:", err);
      }
    };

    // --- STEP 2: Connect WS for realtime ---
    const connect = () => {
      ws = new WebSocket("wss://ws.coinstore.com/s/ws");

      ws.onopen = () => {
        console.log("✅ Connected");

        ws?.send(JSON.stringify({ S: 1, T: "sub", M: "depth", symbol: "ppo_usdt" }));
        ws?.send(JSON.stringify({ S: 2, T: "sub", M: "ticker", symbol: "ppo_usdt" }));
      };

      ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data);

        if (data.M === "depth") {
          if (data.a) {
            setAsks(
              data.a.map((item: any) => ({
                price: parseFloat(item[0]),
                amount: parseFloat(item[1]),
              }))
            );
          }
          if (data.b) {
            setBids(
              data.b.map((item: any) => ({
                price: parseFloat(item[0]),
                amount: parseFloat(item[1]),
              }))
            );
          }
        }

        if (data.M === "ticker" && data.lastPrice) {
          setLastPrice(parseFloat(data.lastPrice));
        }

        if (data.op === "ping") {
          ws?.send(JSON.stringify({ op: "pong" }));
        }
      };

      ws.onclose = () => {
        console.log("🔌 Reconnecting...");
        setTimeout(connect, 3000);
      };
    };

    fetchSnapshot();
    connect();

    return () => {
      ws?.close();
    };
  }, []);


  return (
    <div style={{ padding: 20, color: "#fff", background: "#111" }}>
      <div data-v-ac1a387c="" data-v-295c00d2="" className="spot-quotation-dish">

        <header data-v-ac1a387c="" className="spot-quotation-dish-header">
          <span data-v-ac1a387c="" className="left">
            Giá(USDT)
          </span>
          <span data-v-ac1a387c="" className="middle">
            Số lượng(PPO)
          </span>
          <span data-v-ac1a387c="" className="right">
            Tổng lượng(PPO)
          </span>
        </header>
        <div
          data-v-ac1a387c=""
          className="spot-quotation-dish-box"
          style={{ position: "relative" }}
        >

          {calcCumulative(bids).slice(0, 10).map((bid, i) => (
            <div
              data-v-7579d873=""
              data-v-ac1a387c=""
              data-index={16}
              data-price="2.9788"
              className="spot-quotation-dish-item sell myselect-sell-item"
              key={bid.price.toFixed(6)}
            >
              <div data-v-7579d873="" className="ivu-tooltip">
                <div className="ivu-tooltip-rel">
                  <div data-v-7579d873="" className="spot-quotation-dish-item-value">
                    <span data-v-7579d873="" className="left">
                      {bid.price.toFixed(4)}
                    </span>
                    <span data-v-7579d873="" className="middle">
                      {bid.amount}
                    </span>
                    <span data-v-7579d873="" className="right">
                      {bid.total?.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div data-v-ac1a387c="" className="spot-quotation-dish-current up">
          <strong data-v-ac1a387c="">{lastPrice || 0}</strong>
        </div>
        <div
          data-v-ac1a387c=""
          className="spot-quotation-dish-box"
          style={{ position: "relative" }}
        >

          {calcCumulative(asks).slice(0, 10).map((ask, i) => (
            <div
              data-v-7579d873=""
              data-v-ac1a387c=""
              data-index={1}
              data-price="0.048"
              className="spot-quotation-dish-item buy myselect-buy-item"
              key={ask.price.toFixed(6)}
            >
              <div data-v-7579d873="" className="ivu-tooltip">
                <div className="ivu-tooltip-rel">
                  <div data-v-7579d873="" className="spot-quotation-dish-item-value">
                    <span data-v-7579d873="" className="left">
                      {ask.price.toFixed(4)}
                    </span>
                    <span data-v-7579d873="" className="middle">
                      {ask.amount}
                    </span>
                    <span data-v-7579d873="" className="right">
                      {ask.total?.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


const calcCumulative = (orders: { price: number; amount: number }[]) => {
  let total = 0;
  return orders.map((o) => {
    total += o.amount;
    return { ...o, total };
  });
};