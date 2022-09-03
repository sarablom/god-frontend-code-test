import {
    FC,
    ReactNode,
    useState,
    cloneElement,
    Children,
    ReactChild,
    ReactElement,
} from "react";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";
import { IndicatorButtons } from "./IndicatorButtons";
import { ScreenReaderText } from "./ScreenReaderText";
import { Breakpoints } from "../styles/BreakPoints";
import { CurrentTheme, Flex, Icon, useTheme } from "vcc-ui";

interface Props {
    children: ReactNode;
}

//Hughly inspired by TinySo https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

export const Carousel: FC<Props> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const theme = useTheme();

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= Children.count(children)) {
            newIndex = Children.count(children) - 1;
        }

        setActiveIndex(newIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
    });

    return (
        <CarouselWrapper {...handlers} className="carousel">
            <InnerChild
                style={{ transform: `translateX(-${activeIndex * 366}px)` }}
            >
                {Children.map(children, (child: any, index) => {
                    return cloneElement(child, { width: "366px" });
                })}
            </InnerChild>
            <Indicators activeIndex={activeIndex + 1} theme={theme}>
                {Children.map(children, (_, index) => {
                    return (
                        <IndicatorButtons
                            index={index}
                            updateIndex={updateIndex}
                        />
                    );
                })}
            </Indicators>
            <Flex
                extend={{ flexDirection: "row", alignItems: "flex-end" }}
                className="previous-and-next-button"
            >
                <button
                    onClick={() => {
                        updateIndex(activeIndex - 2);
                    }}
                    className="prev-button"
                >
                    <ScreenReaderText text="Previous" />
                    <Icon type="mediacircled-previous-48" />
                </button>
                <button
                    onClick={() => {
                        updateIndex(activeIndex + 2);
                    }}
                    className="next-button"
                >
                    <ScreenReaderText text="Next" />
                    <Icon type="mediacircled-next-48" />
                </button>
            </Flex>
        </CarouselWrapper>
    );
};

interface ButtonProps {
    activeIndex: number;
    theme: CurrentTheme;
}

const CarouselWrapper = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .previous-and-next-button {
        justify-self: end;
        margin-left: auto;
        margin-right: 32px;

        @media screen and (max-width: ${Breakpoints.TabletPortrait}) {
            display: none;
        }
    }

    .prev-button,
    .next-button {
        cursor: pointer;
        border: none;
        background: inherit;
    }
`;

const InnerChild = styled.div`
    white-space: nowrap;
    transition: transform 0.3s;
    scroll-snap-type: x mandatory;
`;

const Indicators = styled.div<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    .indicator-buttons {
        height: 16px;
        width: 16px;
        cursor: pointer;
        margin: 8px;
        border-radius: 50%;
        border: none;

        &:nth-of-type(${props => props.activeIndex}) {
            background: ${props => props.theme.color.foreground.primary};
        }

        &:not(:nth-of-type(${props => props.activeIndex})) {
            background: ${props => props.theme.color.ornament.border};
        }

        @media screen and (min-width: ${Breakpoints.TabletPortrait}) {
            display: none;
        }
    }
`;
