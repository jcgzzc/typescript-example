import React from 'react';
import classnames from 'classnames';
import { BarChart } from 'react-d3-components';

export default class extends React.Component<Props, State> {
    render() {
        let classes = classnames("btn", {
            "isActive": true
        });

        let colorsIncludeYellow = this.props.colors.includes("Yellow");

        let data = [
            {
                label: 'somethingA',
                values: [{ x: 'SomethingA', y: 10 }, { x: 'SomethingB', y: 4 }, { x: 'SomethingC', y: 3 }]
            },
            {
                label: 'somethingB',
                values: [{ x: 'SomethingA', y: 6 }, { x: 'SomethingB', y: 8 }, { x: 'SomethingC', y: 5 }]
            },
            {
                label: 'somethingC',
                values: [{ x: 'SomethingA', y: 6 }, { x: 'SomethingB', y: 8 }, { x: 'SomethingC', y: 5 }]
            }
        ];

        return (
            <div>
                <div className={classes}>
                    classname classes: {classes}
                </div>

                <ol type="a" color="blue" start={3}>
                    <li>
                        first item in list
                    </li>
                </ol>

                <BarChart
                    data={data}
                    height={400}
                    width={600}
                    margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
                />
            </div>
        );
    }
}

interface Props {
    colors: string[]
    reqProp: string | undefined
    optProp?: string
}

interface State {
    selectedColor: string
}