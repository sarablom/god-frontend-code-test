import { FC, useState } from "react";
import { TextInput } from "vcc-ui";
import { Car } from "../models/car";

interface Props {
    cars: Car[];
    filteredCars: Car[];
    setFilteredCars: Function;
}

export const FilterSearchBar: FC<Props> = ({ cars, filteredCars, setFilteredCars }) => {
    const [value, setValue] = useState("");

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValue(e.target.value);

        const filterCars = cars.filter(car => {
            return car.bodyType.includes(e.target.value);
        });

        setFilteredCars(filterCars);
        console.log({ filterCars });
    };

    return (
        <form>
            <TextInput
                value={value}
                label="Filter by car type"
                type="text"
                placeholder="SUV, Estate, Sedan"
                onChange={e => {
                    onChangeHandler(e);
                }}
            />
        </form>
    );
};
