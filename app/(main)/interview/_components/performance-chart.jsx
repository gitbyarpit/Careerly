"use client";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PerformanceChart = ({ assessments }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (assessments?.length) {
      // FIX: Keep full timestamp + store formatted date separately
      const formattedData = assessments.map((a) => ({
        date: a.createdAt, // unique timestamp for proper plotting
        displayDate: format(new Date(a.createdAt), "MMM dd"),
        score: Number(a.quizScore),
      }));

      setChartData(formattedData);
    }
  }, [assessments]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="gradient-title text-3xl md:text-4xl">
          Performance Trend
        </CardTitle>
        <CardDescription>Your quiz scores over time</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />

              {/* FIX: Use timestamp internally but display formatted date */}
              <XAxis
                dataKey="date"
                tickFormatter={(value) =>
                  format(new Date(value), "MMM dd")
                }
              />

              <YAxis domain={[0, 100]} />

              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-background border rounded-lg p-2 shadow-md">
                        <p className="text-sm font-medium">
                          Score: {data.score}%
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {format(new Date(data.date), "MMM dd, hh:mm a")}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />

              <Line
                type="monotone"
                dataKey="score"
                stroke="#ffffff"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
