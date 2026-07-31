# Energy Insight Card Features

## Vision

Energy Insight Card transforms Home Assistant energy statistics into clear,
actionable and understandable insights.

The objective is not only to display energy consumption but to help users
understand how and why their energy usage evolves over time.

---

# Version 1.0

## Dashboard

- Daily consumption
- Daily cost
- Comparison with yesterday
- Comparison with previous week
- Comparison with previous month

---

## Charts

- Hourly histogram
- Daily history
- Weekly history
- Monthly history

---

## Insights

Automatically detect:

- Significant increases
- Significant decreases
- Consumption peaks
- Long-term trends
- Stable periods

Examples:

- Consumption increased by 18% compared to last week.
- Most of the increase occurred between 09:00 and 17:00.
- Night consumption remained stable.

---

## Timeline

Users can add custom events.

Examples:

- Pool installation
- Heat pump installation
- Solar panels
- Electric vehicle
- Water heater replacement

Timeline events are correlated with consumption changes.

---

## Configuration

Minimal configuration.

Example:

```yaml
type: custom:energy-insight-card
entity: sensor.lixee_east
```

Automatic detection whenever possible.

---

# Version 1.1

## Advanced comparisons

- Year-over-year comparison
- Weather normalization
- Working day / weekend comparison

---

## Additional charts

- Heatmap
- Calendar view
- Distribution chart
- Load duration curve

---

## Advanced insights

- Base load estimation
- Seasonal variations
- Appliance impact estimation
- Continuous anomaly detection

---

# Version 2.0

## Multi-source support

- Home Assistant Statistics
- MQTT
- CSV
- REST API

---

## Energy ecosystem

- Solar production
- Battery storage
- EV charging
- Dynamic tariffs

---

## AI Assistance

Generate natural language summaries.

Examples:

- Weekly report
- Monthly report
- Detected anomalies
- Energy-saving suggestions

---

# Out of Scope

The project will not:

- Replace Home Assistant Energy Dashboard
- Control devices
- Execute automations
- Predict electricity prices
- Store long-term statistics outside Home Assistant

Its objective is analysis and visualization.
