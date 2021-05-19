import classNames from "classnames";

import "@if-design-system/button/src/button.scss";
import classes from "./Button.module.scss";

interface MyButtonProps {
    text: string
}

export function MyButton(props: MyButtonProps) {
    return (
        <button
            className={classNames('if', 'button', classes.myButton)}
        >
            {props.text}
        </button>
    );
}