import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function CurveChart({ data }) {
    return (
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 20, 25] }]}
            series={[
                {
                    data: [2, 5.5, 2, 8.5, 1.5, 5, 2, 8, 10, 12],
                    area: true,
                },
            ]}
            width={840}
            height={443}
        />
    );
}