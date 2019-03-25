declare module 'react-d3-components' {
    export class BarChart extends React.Component<BarChartProps & any, any> {

    }

    interface BarChartProps {
        data: BarChartData[]
        //height?: number //commented out to show how the "& any" allows us to use this property even when not declared
        width?: number
        margin?: MarginValues
    }

    export interface BarChartData {
        label: string
        values: BarChartValue | BarChartValue[]
    }

    export interface BarChartValue {
        x: string,
        y: number
    }

    export interface MarginValues {
        top?: number
        bottom?: number
        left?: number
        right?: number
    }
}