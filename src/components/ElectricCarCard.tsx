import { FC } from "react";
import { LinkWithRightArrow } from "./LinkWithRightArrow";
import Image from "next/image";
import { Car } from "../models/car";
import { Flex, Text } from "vcc-ui";
import styled from "styled-components";
import { Breakpoints } from "../styles/BreakPoints";

interface Props {
    car: Car;
}

/**
 * @description A component which dispalys a styled car card
 * @param car - An object of type Car
 */

export const ElectricCarCard: FC<Props> = ({
    car: { bodyType, modelName, modelType, imageUrl, id },
}) => (
    <Card className="carousel-item">
        <Text
            variant="bates"
            extend={({ theme }) => ({
                fontSize: ".7rem",
                color: theme.color.foreground.secondary,
                fontWeight: "500",
            })}
        >
            {bodyType.toUpperCase()}
        </Text>
        <Flex extend={{ flexDirection: "row" }} className="text-warp">
            <Text
                variant="amundsen"
                extend={() => ({
                    marginRight: "8px",
                })}
            >
                {modelName}
            </Text>

            <Text
                variant="columbus"
                extend={({ theme }) => ({
                    fontSize: "1rem",
                    color: theme.color.foreground.secondary,
                    fontWeight: "500",
                })}
            >
                {modelType}
            </Text>
        </Flex>

        <Image
            src={imageUrl}
            alt={modelName}
            width="100%"
            height="80%"
            layout="responsive"
            objectFit="contain"
            className="electric-car-image"
        />
        <Flex
            className="flex-center"
            extend={{
                flexDirection: "row",
                justityContent: "center",
            }}
        >
            <LinkWithRightArrow name="Learn" path={`/learn/${id}`} />
            <LinkWithRightArrow name="Shop" path={`/shop/${id}`} />
        </Flex>
    </Card>
);

const Card = styled.div`
    width: 350px;
    padding: 16px 16px 16px 0;
    display: inline-block;
    flex-direction: column;
    scroll-snap-align: center;

    @media screen and (min-width: ${Breakpoints.TabletPortrait}) {
        width: 350px;
    }

    .flex-center {
        justify-content: center;
    }

    .electric-car-image {
        align-self: center;
    }

    .text-warp {
        @media screen and (max-width: ${Breakpoints.TabletPortrait}) {
            flex-direction: column;
        }
    }
`;
