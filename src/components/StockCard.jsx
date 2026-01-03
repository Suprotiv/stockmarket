import React from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";

const colorMap = {
  emerald: "hsl(160, 84%, 45%)",
  coral: "hsl(0, 72%, 60%)",
  violet: "hsl(270, 70%, 60%)",
  amber: "hsl(45, 93%, 58%)",
  cyan: "hsl(190, 95%, 50%)",
};

const StockCard = ({
  name,
  symbol,
  price,
  change,
  changePercent,
  data,
  color,
  delay = 0,
}) => {
  const isPositive = change >= 0;
  const strokeColor = colorMap[color] || colorMap.emerald;

  return (
    <div
      className="bg-[#1e293b] border border-[#334155] rounded-lg p-5 transition-all duration-300 hover:border-[#475569] group opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
            {symbol}
          </h3>
          <p className="text-white font-medium mt-0.5">{name}</p>
        </div>
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${
            isPositive
              ? "bg-green-500/10 text-green-500"
              : "bg-red-500/10 text-red-500"
          }`}
        >
          {isPositive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span>{isPositive ? "+" : ""}{changePercent.toFixed(2)}%</span>
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <span className="text-2xl font-semibold font-mono text-white">
          ₹{price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
        <span
          className={`ml-2 text-sm font-mono ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? "+" : ""}₹{change.toFixed(2)}
        </span>
      </div>

      {/* Chart */}
      <div className="h-24 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <YAxis domain={["dataMin - 1", "dataMax + 1"]} hide />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "8px",
                padding: "8px 12px",
              }}
              labelStyle={{ color: "#94a3b8", fontSize: "12px" }}
              itemStyle={{ color: strokeColor, fontSize: "14px", fontFamily: "monospace" }}
              formatter={(value) => [`₹${value.toFixed(2)}`, "Price"]}
              labelFormatter={(label) => `${label}s`}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke={strokeColor}
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
                fill: strokeColor,
                stroke: "#0f172a",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Time axis labels */}
      <div className="flex justify-between text-xs text-gray-400 mt-2 font-mono">
        <span>0s</span>
        <span>100s</span>
        <span>200s</span>
      </div>
    </div>
  );
};

export default StockCard;

