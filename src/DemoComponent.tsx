import React from 'react';
import classnames from 'classnames';

export default class extends React.Component<Props, State> {
    render() {
        let classes = classnames("btn", {
            "isActive": true
        });

        let colorsIncludeYellow = this.props.colors.includes("Yellow");

        return (
            <div>
                <div className={classes}>
                    classname classes: {classes}
                </div>

                <ol type="a">
                    <li>
                        first item in list
                    </li>
                </ol>
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