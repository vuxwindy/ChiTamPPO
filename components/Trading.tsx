"use client";

import { useEffect, useRef, useState } from "react";
import {
  createChart,
  IChartApi,
  BarData,
  UTCTimestamp,
  CandlestickSeriesOptions,
  ColorType,
} from "lightweight-charts";

export default function PPOChart() {
  const [data, setData] = useState<BarData[]>([]);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    async function fetchData() {
      const url =
        "https://api.coinstore.com/api/v1/market/kline/PPOUSDT?period=60min&size=200";

      const headers = {
        "exch-language": "en_US",
        "Content-Type": "application/json",
        Accept: "*/*",
      };

      const res = await fetch(url, {
        method: "GET",
        headers,
      });

      const json = await res.json();

      if (json.code === 0 && json.data?.item) {
        const bars: BarData[] = json.data.item.map((d: any) => ({
          time: d.startTime as UTCTimestamp,
          open: parseFloat(d.open),
          high: parseFloat(d.high),
          low: parseFloat(d.low),
          close: +parseFloat(d.close).toFixed(4),
        }));
        setData(bars);
      } else {
        console.error("API error:", json);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (chartContainerRef.current && data.length > 0) {
      if (!chartRef.current) {
        chartRef.current = createChart(chartContainerRef.current, {
          width: chartContainerRef.current.clientWidth,
          height: 546,
          layout: {
            background: { type: ColorType.Solid, color: "#131722" },
            textColor: "#d1d4dc",
          },
          grid: {
            vertLines: { color: "#334158" },
            horzLines: { color: "#334158" },
          },
          timeScale: { timeVisible: true, secondsVisible: false },
        });

        const series = chartRef.current.addCandlestickSeries({
          upColor: "#26a69a",
          downColor: "#ef5350",
          borderUpColor: "#26a69a",
          borderDownColor: "#ef5350",
          wickUpColor: "#26a69a",
          wickDownColor: "#ef5350",
          priceFormat: {
            type: "price",
            precision: 4,   // số chữ số sau dấu ,
            minMove: 0.000001, // bước nhảy nhỏ nhất
          },
        } as CandlestickSeriesOptions);

        series.setData(data);
      }
    }
  }, [data]);

  return <div ref={chartContainerRef} className="w-full h-full" />;
}
