import { FC } from "react";
import { LinkWithRightArrow } from "./LinkWithRightArrow";
import Image from "next/image";
import { Car } from "../models/car";
import { Flex, Text } from "vcc-ui";
import styled from "styled-components";
import { Carousel } from "./Carousel";
import { Breakpoints } from "../styles/BreakPoints";

interface Props {
    cars: Car[];
}

export const DisplayElectricCar: FC<Props> = ({ cars }) => {
    return (
        <Carousel>
            {cars.map(car => (
                <Card key={car.id} className="carousel-item">
                    <Text
                        variant="bates"
                        extend={({ theme }) => ({
                            fontSize: ".7rem",
                            color: theme.color.foreground.secondary,
                            fontWeight: "500",
                        })}
                    >
                        {car.bodyType.toUpperCase()}
                    </Text>
                    <Flex
                        extend={{ flexDirection: "row" }}
                        className="text-warp"
                    >
                        <Text variant="amundsen"extend={() => ({
                                marginRight: "8px",
                            })}>{car.modelName}</Text>

                        <Text
                            variant="columbus"
                            extend={({ theme }) => ({
                                fontSize: "1rem",
                                color: theme.color.foreground.secondary,
                                fontWeight: "500",
                            })}
                        >
                            {car.modelType}
                        </Text>
                    </Flex>

                    <Image
                        src={car.imageUrl}
                        alt={car.modelName}
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
                        <LinkWithRightArrow
                            name="Learn"
                            path={`/learn/${car.id}`}
                        />
                        <LinkWithRightArrow
                            name="Shop"
                            path={`/shop/${car.id}`}
                        />
                    </Flex>
                </Card>
            ))}
        </Carousel>
    );
};

const Card = styled.div`
    width: 80%;
    padding: 16px;
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
