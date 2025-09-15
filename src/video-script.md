# Getting Started with Highcharts React

Hello, and welcome!

In this video, we'll show you how to get started with the official Highcharts for React. This video is for React developers who want to add powerful, interactive charts to their applications. By the end of this video, you'll have your first Highcharts chart running in a React app.

## Installation

Before we start, make sure you have React 18.3.1 or newer and Highcharts 11.4.8 or newer.

First, let's create a new React application using Vite. Open your terminal and run:
`npm create vite@latest my-chart-app -- --template react`

Once your app is created, navigate into the new directory.

Next, we need to install two packages: `highcharts` and the official React integration, `@highcharts/react`. In your terminal, run:
`npm install highcharts @highcharts/react`

After the installation is complete, you can see the new dependencies in your `package.json` file.

## Creating Your First Chart

Now for the fun part. Let's create our first chart.

Open up `src/App.js` and clear out the default content.

First, we'll import React and the components we need from `@highcharts/react`. We'll start with the `Chart` and `Title` components, and also import the `Line.Series` component.

Now, let's create a simple component for our chart. We'll call it `MyChart`. Inside this component, we'll use the `Chart` component as the main container. Inside the chart, we'll add a `Title` and a `Line.Series`. We'll pass some sample data to the series using the `data` prop.

Finally, we'll render our `MyChart` component in our main `App` component.

And there you have it! A simple line chart rendered in your React application.

## Basic Configuration

The Highcharts for React is designed to be compositional. You build your chart by combining different components.

Let's go back to our `MyChart` component. You can easily change the chart's title by just changing the text inside the `Title` component.

Want to add another series? Just import another series component, like `Area.Series`, and add it to your chart with some new data. It's that simple.

You can also pass configuration options to the `Chart` component itself to apply chart-wide settings.

## Outro

And that's it! You've installed the Highcharts for React and created your first chart.

To learn more, check out the official documentation at highcharts.com.

Thanks for watching, and happy charting!
