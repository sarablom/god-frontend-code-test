import { FC } from "react";
import styled from "styled-components";

type Props = {
	text: string;
};

/**
 * @description A component that renders a text that will only be visible on screen readers
 * @param text The text to be displayed
 */

export const ScreenReaderText: FC<Props> = ({ text }) => (
	<Text>{text}</Text>
);

const Text = styled.span`
	border: none;
	clip: rect(0, 0, 0, 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
`;
