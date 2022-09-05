import { FC } from "react";
import styled from "styled-components";
import { Breakpoints } from "../styles/BreakPoints";
import { ScreenReaderText } from "./ScreenReaderText";
import { CurrentTheme, useTheme } from "vcc-ui";

interface Props {
    index: number;
    activeIndex: number;
    updateIndex: (index: number) => void;
}

/**
 * @description A component which dispalys a styled car card
 * @param index - An index to keep track of the current index.
 * @param activeIndex - The currently active index.
 * @param updateIndex - A function to set the new index.
 */

export const IndicatorButtons: FC<Props> = ({ index, updateIndex, activeIndex }) => {
    const theme = useTheme();
    return (
        <Button
            activeIndex={activeIndex + 1}
            theme={theme}
            className="indicator-buttons"
            onClick={() => {
                updateIndex(index);
            }}
        >
            <ScreenReaderText text={`${index + 1}`} />
        </Button>
    );
};

interface ButtonProps {
    activeIndex: number;
    theme: CurrentTheme;
}

const Button = styled.button<ButtonProps>`
    height: 16px;
    width: 16px;
    cursor: pointer;
    margin: 8px;
    border-radius: 50%;
    border: none;
    background: ${props => props.theme.color.ornament.border};

    &:nth-of-type(${props => props.activeIndex}) {
        background: ${props => props.theme.color.foreground.primary};
    }

    @media screen and (min-width: ${Breakpoints.TabletPortrait}) {
        display: none;
    }
`;
