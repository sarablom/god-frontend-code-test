import { FC } from "react";
import styled from "styled-components";
import { Car } from "../models/car";
import { Flex, Text, Link as VolvoLink, useTheme } from "vcc-ui";
import Image from "next/image";
import Link from "next/link";

interface Props {
    cars: Car[];
}

export const DisplayElectricCars: FC<Props> = ({ cars }) => {
    const theme = useTheme();
    return (
        <Flex extend={{ flexDirection: "row" }}>
            {cars.map(car => (
                <Card key={car.id}>
                    <Text
                        variant="bates"
                        extend={{
                            fontSize: ".7rem",
                            color: "hsla(0,0%,35%,1.0)",
                            fontWeight: "500",
                        }}
                    >
                        {car.bodyType.toUpperCase()}
                    </Text>

                    <Text variant="amundsen">{car.modelName} </Text>

                    <Text
                        variant="columbus"
                        extend={{
                            fontSize: "1rem",
                            color: "hsla(0,0%,35%,1.0)",
                            fontWeight: "500",
                        }}
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
                        <Link href={`/learn/${car.id}`}>
                            <VolvoLink
                                arrow="right"
                                style={{ marginRight: "24px" }}
                            >
                                Learn
                            </VolvoLink>
                        </Link>
                        <Link href={`/shop/${car.id}`}>
                            <VolvoLink arrow="right">Shop</VolvoLink>
                        </Link>
                    </Flex>
                </Card>
            ))}
        </Flex>
    );
};

const Card = styled.div`
    min-width: 350px;
    margin: 16px;
`;
