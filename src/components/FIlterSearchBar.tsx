import { FC, useState } from "react";
import { TextInput } from "vcc-ui";
import { Car } from "../models/car";
import styled from "styled-components";

interface Props {
    cars: Car[];
    setFilteredCars: (cars: Car[]) => void;
}

/**
 * @description A component which filters an array of Cars to show only the users choice of body type
 * @param car - An array containing objects of type Car. This contains the complete set of cars.
 * @param setFilteredCars - A function to set the new filterdCars array depending on users search words.
 */

export const FilterSearchBar: FC<Props> = ({ cars, setFilteredCars }) => {
    const [value, setValue] = useState("");

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

        const filteredByBodyType = cars.filter(car => {
            return car.bodyType.includes(e.target.value);
        });

        setFilteredCars(filteredByBodyType);
    };

    return (
        <FormWrapper>
            <TextInput
                value={value}
                label="Filter by car body type"
                type="text"
                placeholder="SUV, Estate, Sedan"
                onChange={onChangeHandler}
            />
        </FormWrapper>
    );
};

const FormWrapper = styled.form`
    max-width: max(50vw, 500px);
`;
