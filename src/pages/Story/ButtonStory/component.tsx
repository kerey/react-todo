import { FC } from "react";
import { Button, ButtonColors } from "components/atoms/Button";


export const ButtonStory: FC = () => {
    return (
        <>
            <h3>Button story</h3>
            <Button className="mr-3" color={ButtonColors.Green}>Green Button</Button>
            <Button className="mr-3" color={ButtonColors.Grey}>Grey Button</Button>
            <Button className="mb-3" color={ButtonColors.White}>White Button</Button>

            <Button isBlock={true}>Block Button</Button>

        </>
    )
}
