import classNames from "classnames";
import styled from "styled-components";

import "@if-design-system/button/src/button.scss";
import classes from "./Button.module.scss";

interface MyButtonProps {
    text: string
}

function MyUnstyledButton(props: MyButtonProps) {
    console.log(classes.myButton)

    return (
        <button
            className={classNames('if', 'button', classes.myButton)}
        >
            {props.text}
        </button>
    );
}

export const MyButton = styled(MyUnstyledButton)`
  border: 1px solid red;
`