import { FC } from "react";
import { LinkWithRightArrow } from "./LinkWithRightArrow";
import Image from "next/image";
import { Car } from "../models/car";
import { Flex, Text } from "vcc-ui";
import styled from "styled-components";

interface Props {
    cars: Car[];
}

export const DisplayElectricCar: FC<Props> = ({ cars }) => {
    return (
        <Flex extend={{ flexDirection: "row" }}>
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

                    <Text variant="amundsen">{car.modelName} </Text>

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

                    <Image
                        src={car.imageUrl}
                        alt={car.modelName}
                        width="100%"
                        height="100%"
                        layout="responsive"
                        objectFit="contain"
                    />
                    <Flex extend={{ flexDirection: "row" }}>
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
        </Flex>
    );
};

const Card = styled.div`
    min-width: 350px;
    margin: 16px;
    display: inline-flex;
    flex-direction: column;
`;
