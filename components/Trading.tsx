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
  const seriesRef = useRef<any>(null);

  // Fetch dữ liệu ban đầu
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    async function fetchData() {
      const url =
        "https://api.coinstore.com/api/v1/market/kline/PPOUSDT?period=15min&size=50";

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
        let bars = json.data.item.map((d: any) => {
          const timeNum = toUtcSeconds(Number(d.startTime)); // now definitely number (seconds)
          return {
            time: timeNum as UTCTimestamp, // cast to UTCTimestamp (number)
            open: Number(parseFloat(d.open)),
            high: Number(parseFloat(d.high)),
            low: Number(parseFloat(d.low)),
            close: Number(parseFloat(d.close).toFixed(4)), // keep 4 dec, ensure number
          } as BarData;
        });

        bars = bars.sort((a: any, b: any) => (a.time as number) - (b.time as number));

        const uniqueBars: BarData[] = [];
        const seen = new Set<number>();
        for (const bar of bars) {
          const t = bar.time as number;
          if (!seen.has(t)) {
            uniqueBars.push(bar);
            seen.add(t);
          }
        }

        setData(uniqueBars);
        seriesRef.current?.setData(uniqueBars);
      } else {
        console.error("API error:", json);
      }
    }

    fetchData();

    intervalId = setInterval(fetchData, 2000);
    // Cleanup khi unmount
    return () => clearInterval(intervalId);
  }, []);

  // Khởi tạo chart khi có data
  useEffect(() => {
    if (chartContainerRef.current && data.length > 0) {
      if (!chartRef.current) {
        chartRef.current = createChart(chartContainerRef.current, {
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight,
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

        seriesRef.current = chartRef.current.addCandlestickSeries({
          upColor: "#26a69a",
          downColor: "#ef5350",
          borderUpColor: "#26a69a",
          borderDownColor: "#ef5350",
          wickUpColor: "#26a69a",
          wickDownColor: "#ef5350",
          priceFormat: {
            type: "price",
            precision: 4, // số chữ số sau dấu ,
            minMove: 0.000001,
          },
          lastValueVisible: true,   // 👈 bật hiển thị giá cuối
          priceLineVisible: true,
        } as CandlestickSeriesOptions);
        seriesRef.current.setData(data);

      }
    }

    const chart = chartRef.current;
    const resizeObserver = new ResizeObserver(() => {
      if (chartContainerRef.current && chart) {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight,
        });
      }
    });
    chartContainerRef.current &&
      resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [data]);


  return <div ref={chartContainerRef} className="w-full h-full" />;
}


const toUtcSeconds = (ts: number) => {
  if (ts > 1_000_000_000_000) return Math.floor(ts / 1000);
  if (ts > 1_000_000_000) return Math.floor(ts);
  return Math.floor(ts);
};