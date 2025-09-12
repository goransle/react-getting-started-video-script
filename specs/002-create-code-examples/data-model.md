# Data Model: Code Example Files

This document outlines the structure of the code example files to be created for the video.

## Component Files

### 1. `src/components/01-FirstChart.tsx`
- **Purpose**: To demonstrate the most basic setup for creating a Highcharts chart in React.
- **Content**:
    - Imports `React`, `Chart`, `Title`, and `Line.Series`.
    - Defines a functional component named `FirstChart`.
    - The component will return a `<Chart>` containing a `<Title>` with the text "My First Chart" and a `<Line.Series>` with simple data like `[1, 2, 3]`.

### 2. `src/components/02-BasicConfiguration.tsx`
- **Purpose**: To show how to configure and compose the chart.
- **Content**:
    - Builds upon the `FirstChart` example.
    - Imports `Area.Series` in addition to the other components.
    - Defines a functional component named `BasicConfiguration`.
    - The component will return a `<Chart>` containing:
        - A `<Title>` with the text "Configured Chart".
        - The original `<Line.Series>`.
        - A new `<Area.Series>` with different data (e.g., `[3, 2, 1]`).

## Application Shell

### `src/App.tsx`
- **Purpose**: To provide a simple way to view and switch between the different examples.
- **Content**:
    - Will contain basic routing or conditional rendering logic to display either `FirstChart` or `BasicConfiguration`.
    - Will include links or buttons to toggle between the two examples.
