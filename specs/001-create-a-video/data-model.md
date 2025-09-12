# Data Model: Video Script Structure

This document outlines the structure and key sections of the "Getting Started with Highcharts React" video script.

## 1. Introduction (Approx. 30 seconds)
- **Hook**: Start with a visually impressive Highcharts chart.
- **Greeting**: "Hello, and welcome!"
- **Purpose**: "In this video, we'll show you how to get started with the official Highcharts React wrapper."
- **Audience**: "This video is for React developers who want to add powerful, interactive charts to their applications."
- **Outcome**: "By the end of this video, you'll have your first Highcharts chart running in a React app."

## 2. Installation (Approx. 1 minute)
- **Prerequisites**: Mention the required versions: React 18.3.1+ and Highcharts 11.4.8+.
- **Step 1: Create a React App**: Briefly show the command to create a new React app (e.g., `npx create-react-app my-chart-app`).
- **Step 2: Install Dependencies**:
    - Explain that two packages are needed: `highcharts` and `@highcharts/react`.
    - Show the command: `npm install highcharts @highcharts/react`.
- **Verification**: Show the `package.json` file with the newly added dependencies.

## 3. Creating Your First Chart (Approx. 2 minutes)
- **Step 1: Clean up the App component**: Remove the default content from `App.js`.
- **Step 2: Import necessary components**:
    - Import `React`.
    - Import `Chart`, `Title`, and series components (e.g., `Line.Series`) from `@highcharts/react`.
- **Step 3: Build the Chart Component**:
    - Create a simple functional component `MyChart`.
    - Use the `<Chart>` component as the root.
    - Add a `<Title>` component.
    - Add a series component like `<Line.Series>` and pass it some sample data via the `data` prop (e.g., `data={[1, 2, 3]}`).
- **Step 4: Render the Chart**: Render the `MyChart` component in the main `App` component.
- **Result**: Show the rendered line chart in the browser.

## 4. Basic Configuration (Approx. 1 minute)
- **Concept**: Explain that the chart is composed of different components that can be configured with props.
- **Example 1: Changing the Title**: Show how to change the text of the `<Title>` component.
- **Example 2: Adding another series**:
    - Import another series type, e.g., `Area.Series`.
    - Add it to the chart with different data to show how multiple series can be composed.
- **Example 3: Customizing the Chart**: Briefly mention that you can pass props to the `<Chart>` component to set general chart options, like `plotOptions`.

## 5. Outro (Approx.30 seconds)
- **Recap**: "And that's it! You've installed the Highcharts React wrapper and created your first chart."
- **Call to Action**: "To learn more, check out the official documentation at highcharts.com."
- **Closing**: "Thanks for watching, and happy charting!"
