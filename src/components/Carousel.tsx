import { FC, ReactNode, useState, cloneElement, Children } from "react";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";
import { IndicatorButtons } from "./IndicatorButtons";
import { ScreenReaderText } from "./ScreenReaderText";
import { Breakpoints } from "../styles/BreakPoints";
import { Flex, Icon } from "vcc-ui";

interface Props {
    children: ReactNode;
    widthOfChildren: number;
}

// Hugely inspired by TinySo https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

/**
 * @description A carousel component. Wrap your components in this carousel and they will be swipeable horizontally. The component holds separate UI for mobile and tablet and up
 * @param children - a node of react children to render inside the component
 * @param widthOfChildren - a number that calculates how far each slide should transform sideways when user clicks next/swipes. This number should include the childrens width including margin.
 */

export const Carousel: FC<Props> = ({ children, widthOfChildren }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex: number) => {
        const childrenCount = Children.count(children);

        if (newIndex >= childrenCount) {
            newIndex = childrenCount - 1;
        } else if (newIndex < 0) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
    });

    return (
        <CarouselWrapper {...swipeHandlers} className="carousel">
            <InnerChild
                style={{
                    transform: `translateX(-${
                        activeIndex * widthOfChildren
                    }px)`,
                }}
            >
                {Children.map(children, (child: any) => {
                    return cloneElement(child, {
                        width: `${widthOfChildren}px`,
                    });
                })}
            </InnerChild>
            <IndicatorsWrapper>
                {Children.map(children, (_, index) => {
                    return (
                        <IndicatorButtons
                            index={index}
                            updateIndex={updateIndex}
                            activeIndex={activeIndex}
                        />
                    );
                })}
            </IndicatorsWrapper>
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

const IndicatorsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
