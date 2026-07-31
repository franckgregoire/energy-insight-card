/**
 * Energy Insight Card
 * Core domain types
 */

export type EnergyPeriod =
  | "hour"
  | "day"
  | "week"
  | "month"
  | "year";

export type EnergyValue = Readonly<{
  date: Date;
  consumption: number;
  cost?: number;
}>;

export type EnergySeries = Readonly<{
  period: EnergyPeriod;
  values: readonly EnergyValue[];
}>;

export type EnergySummary = Readonly<{
  totalConsumption: number;
  averageConsumption: number;
  maxConsumption: number;
  minConsumption: number;
  totalCost?: number;
}>;
