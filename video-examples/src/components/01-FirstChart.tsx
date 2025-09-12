import { Chart, Title } from '@highcharts/react';
import { Line } from '@highcharts/react/series';

export function FirstChart() {
    return (
        <Chart>
            <Title>My First Chart</Title>
            <Line.Series data={[1, 2, 3]} />
        </Chart>
    );
}
