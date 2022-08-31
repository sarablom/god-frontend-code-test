import { useState, useEffect, FC } from "react";
import { Car } from "../models/car";
import { Block, Button, Card, CardContent, Spacer, Text } from "vcc-ui";
import Image from "next/image";

interface Props {
    cars: Car[];
}

export const DisplayElectricCars: FC<Props> = ({ cars }) => {
    return (
        <>
            {cars &&
                cars.length > 0 &&
                cars.map((car: Car) => (
                    <>
                        <Card key={car.id}>
                            <CardContent>
                                <Text>{car.bodyType}</Text>
                                <Spacer />
                                <Text>{car.modelName}</Text>
                                <Spacer />
                                <Text>{car.modelType}</Text>
                                <Spacer />
                                <img src={car.imageUrl} alt={car.modelName} />
                            </CardContent>
                        </Card>
                        <Spacer />
                    </>
                ))}

            <Block extend={{ padding: 20 }}>
                <Button>Click me!</Button>
            </Block>
        </>
    );
};
