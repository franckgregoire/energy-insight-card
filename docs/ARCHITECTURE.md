# Energy Insight Card Architecture

## Vision

Energy Insight Card is not just another Home Assistant Lovelace card.

Its purpose is to transform raw energy data into meaningful insights.

Instead of asking:

> "How much energy did I consume?"

the card answers:

> "Why did my energy consumption change?"

---

# Design Principles

The project follows a few fundamental principles.

## 1. Separation of concerns

Each layer has one responsibility.

```
┌───────────────────────────────┐
│        Lovelace Card          │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│         View Models           │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│       Insight Engine          │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│       Energy Engine           │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│    Statistics Repository      │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│   Home Assistant Statistics   │
└───────────────────────────────┘
```

---

## 2. The UI never performs calculations

The Lovelace card is only responsible for displaying data.

It never calculates:

- daily consumption
- costs
- trends
- anomalies

Those responsibilities belong to the engines.

---

## 3. Engines are independent

The project is divided into several engines.

### StatisticsProvider

Responsible for retrieving statistics from Home Assistant.

No calculations.

No rendering.

Only data retrieval.

---

### StatisticsRepository

Caches and organizes retrieved statistics.

The repository avoids requesting the same data twice.

---

### EnergyEngine

Responsible for transforming raw statistics into usable energy information.

Examples:

- hourly consumption
- daily totals
- monthly totals
- averages
- peaks

---

### InsightEngine

Responsible for detecting meaningful information.

Examples:

- consumption increases
- seasonal changes
- unusual spikes
- long-term trends

---

### TimelineEngine

Associates user events with energy data.

Examples:

- Pool installation
- Heat pump
- Solar panels
- Electric vehicle

---

## 4. UI Components never know where the data comes from

A component receives a model.

Example:

```
DashboardViewModel
```

The component never communicates directly with Home Assistant.

---

# Future Extensions

The architecture has been designed to support future providers.

Examples:

- Home Assistant Statistics
- MQTT
- CSV
- REST API
- Cloud services

without changing the UI.

---

# Performance

Performance is a key objective.

The card should:

- minimize Home Assistant requests
- cache calculations
- avoid unnecessary re-rendering
- remain responsive with several years of statistics

---

# Code Quality

The project follows these rules.

- TypeScript strict mode
- Modular architecture
- Strong typing
- Documented public APIs
- Small focused classes
- Unit-testable engines

---

# Long-term Goal

The long-term objective is to build an energy analysis platform composed of:

- Energy Insight Card
- Energy Insight Engine
- Energy Insight Panel
- AI-powered insights

sharing the same architecture.
