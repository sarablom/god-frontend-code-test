import { FC } from "react";
import styled from "styled-components";
import { Flex, Link } from "vcc-ui";

type Props = {
    path: string;
    name: string;
};

export const LinkWithRightArrow: FC<Props> = ({ name, path }) => (
    <Flex extend={{ flexDirection: "row" }}>
        <Link href={path} arrow="right" style={{ marginRight: "24px" }}>
            {name}
        </Link>
    </Flex>
);
