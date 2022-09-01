import React, { FC } from "react";
import styled from "styled-components";

interface Props {
    children: React.ReactNode;
}

export const Carousel: FC<Props> = ({ children }) => {
    return (
        <CarouselWrapper className="carousel">
            <InnerChild style={{ transform: "translateX(-0%" }}>
                {React.Children.map(children, (child: any, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </InnerChild>
        </CarouselWrapper>
    );
};

const CarouselWrapper = styled.div`
    overflow: hidden;
`;

const InnerChild = styled.div`
    white-space: nowrap;
    transition: transform 0.3s;
`;
