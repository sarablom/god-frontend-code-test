import { useState, useEffect, FC } from "react";
import styled from "styled-components";
import { Car } from "../models/car";
import { Block, Button, Text, Link, useTheme } from "vcc-ui";
import Image from "next/image";

interface Props {
    cars: Car[];
}

export const DisplayElectricCars: FC<Props> = ({ cars }) => {
    const theme = useTheme();
    return (
        <Wrapper>
            {cars &&
                cars.length > 0 &&
                cars.map((car: Car) => (
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

                        <img src={car.imageUrl} alt={car.modelName} />
                        <div className="link-wrapper">
                            <Link
                                href="https://www.volvocars.com/"
                                arrow="right"
                            >
                                Learn
                            </Link>
                            <Link
                                href="https://www.volvocars.com/"
                                arrow="right"
                            >
                                Shop
                            </Link>
                        </div>
                    </Card>
                ))}

            <Block extend={{ padding: 20 }}>
                <Button>Click me!</Button>
            </Block>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Card = styled.div`
    min-width: 350px;
    margin: 16px;

    .link-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            margin-right: 24px;
            display: flex;
        }

        span {
            display: flex;
            align-items: baseline;
        }
    }
`;
