import { FC } from "react";
import { Flex, Link } from "vcc-ui";

type Props = {
    path: string;
    name: string;
};

/**
 * @description A link with an arrow to the right
 * @param path - The path which the user is directed to when clicking the link.
 * @param name - The displayed name of the link.
 */

export const LinkWithRightArrow: FC<Props> = ({ name, path }) => (
    <Flex
        extend={{
            flexDirection: "row",
            alignItems: "center",
            justityContent: "center",
        }}
    >
        <Link href={path} arrow="right" style={{ marginRight: "24px" }}>
            {name}
        </Link>
    </Flex>
);
