declare module 'react-d3-components' {
    const defExport: any;
    export default defExport;

    export class BarChart extends React.Component<BarChartProps & any, any> {

    }

    interface BarChartProps {
        data: BarChartData[]
    }

    export interface BarChartData {
        label: string
        values: BarChartValue | BarChartValue[]
    }

    export interface BarChartValue {
        x: string,
        y: number
    }
}