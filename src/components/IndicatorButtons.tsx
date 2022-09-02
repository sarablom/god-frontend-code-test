import { FC } from "react";
import styled from "styled-components";
import { ScreenReaderText } from "./ScreenReaderText";

interface Props {
    index: number;
    updateIndex: Function;
}

export const IndicatorButtons: FC<Props> = ({ index, updateIndex }) => {
    return (
        <button
            className="indicator-buttons"
            onClick={() => {
                updateIndex(index);
            }}
        >
            <ScreenReaderText text={`${index + 1}`} />
        </button>
    );
};

