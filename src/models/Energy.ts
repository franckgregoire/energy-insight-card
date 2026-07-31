/**
 * Energy Insight Card
 *
 * Core domain models representing energy measurements.
 */

/**
 * Supported aggregation levels.
 */
export type EnergyPeriod =
  | "hour"
  | "day"
  | "week"
  | "month"
  | "year";

/**
 * Represents a single energy measurement.
 */
export interface EnergyValue {
  /**
   * Timestamp corresponding to the measurement.
   */
  readonly date: Date;

  /**
   * Energy consumed during the period.
   *
   * Unit: kWh
   */
  readonly consumption: number;

  /**
   * Optional energy cost.
   *
   * Unit: €
   */
  readonly cost?: number;
}

/**
 * Represents a collection of energy values
 * aggregated over the same period.
 */
export interface EnergySeries {
  /**
   * Aggregation level.
   */
  readonly period: EnergyPeriod;

  /**
   * Ordered measurements.
   */
  readonly values: readonly EnergyValue[];
}

/**
 * Summary statistics computed from an EnergySeries.
 */
export interface EnergySummary {
  /**
   * Total consumption.
   */
  readonly totalConsumption: number;

  /**
   * Average consumption.
   */
  readonly averageConsumption: number;

  /**
   * Peak consumption.
   */
  readonly maxConsumption: number;

  /**
   * Minimum consumption.
   */
  readonly minConsumption: number;

  /**
   * Total cost.
   */
  readonly totalCost?: number;
}
