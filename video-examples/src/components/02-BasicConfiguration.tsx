import { Chart, Title } from '@highcharts/react';
import { Line, Area } from '@highcharts/react/series';

export function BasicConfiguration() {
    return (
        <Chart>
            <Title>Configured Chart</Title>
            <Line.Series data={[1, 2, 3]} />
            <Area.Series data={[3, 2, 1]} />
        </Chart>
    );
}
