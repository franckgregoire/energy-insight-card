import type { EnergyPeriod, EnergySeries } from "../models/Energy";

/**
 * Provides energy statistics from a data source.
 */
export interface StatisticsProvider {
  /**
   * Returns energy statistics for the requested period.
   */
  getSeries(
    period: EnergyPeriod,
    start: Date,
    end: Date
  ): Promise<EnergySeries>;
}
