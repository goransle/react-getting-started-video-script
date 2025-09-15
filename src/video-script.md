# Getting Started with Highcharts React

Hello, and welcome!

In this video, we'll show you how to get started with Highcharts for React. This video is for React developers who want to add powerful, interactive charts to their applications. By the end of this video, you'll have your first Highcharts chart running in a React app.

## Installation

Before we start, make sure you have React 18.3.1 or newer and Highcharts 11.4.8 or newer.

First, let's create a new React application using Vite. Open your terminal and run:
`npm create vite@latest my-chart-app -- --template react`

Once your app is created, navigate into the new directory.

Next, we need to install two packages: `highcharts` and `@highcharts/react`. In your terminal, run:

```bash
npm install highcharts @highcharts/react
```

After the installation is complete, you can see the new dependencies in your `package.json` file.

## Creating Your First Chart

Now for the fun part. Let's create our first chart.

Open up `src/App.tsx` and clear out the default content.

First, we'll import React and the components we need.

```jsx
import React from 'react';
import { Chart, Title } from '@highcharts/react';
import { Line } from '@highcharts/react/series';
```

Now, let's create our chart by composing these components.

```jsx
const App = () => (
  <div>
    <Chart>
      <Title>My First Chart</Title>
      <Line.Series data={[1, 2, 3]} />
    </Chart>
  </div>
);

export default App;
```

And there you have it! A simple line chart rendered in your React application.

## Basic Configuration

The Highcharts for React integration is designed to be compositional. You build your chart by combining different components.

Let's go back to our `App` component. You can easily change the chart's title by just changing the text inside the `Title` component.

Want to add another series? Just import another series component, like `Area` from `@highcharts/react/series`, and add it to your chart with some new data. It's that simple.

```jsx
import React from 'react';
import { Chart, Title } from '@highcharts/react';
import { Line, Area } from '@highcharts/react/series';

const App = () => (
  <div>
    <Chart>
      <Title>My Configured Chart</Title>
      <Line.Series data={[1, 2, 3]} />
      <Area.Series data={[3, 2, 1]} />
    </Chart>
  </div>
);

export default App;
```

## Outro

And that's it! You've installed `@highcharts/react` and created your first chart by composing components.

To learn more, check out the official documentation at highcharts.com.

Thanks for watching, and happy charting!
