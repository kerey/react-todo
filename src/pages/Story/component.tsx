import {FC} from "react";
import {ButtonStory} from "./ButtonStory";

export const Story: FC = () => {
    return (
        <div style={{maxWidth: '600px'}}>
            <h2>Storybook page</h2>
            <ButtonStory />
        </div>
    )
}
