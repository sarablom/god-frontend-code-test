import { Flex, Icon } from "vcc-ui";

export const BackAndForwardButtons = () => (
    <Flex extend={{ flexDirection: "row" }} className="back-and-forward-button">
        <Icon type="mediacircled-previous-48" />
        <Icon type="mediacircled-next-48" />
    </Flex>
);
