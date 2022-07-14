import React, { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";

type Color = "Thin" | "Light";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color: Color;
}

/**
 * Primary UI component for user interaction
 */
export default function Input({ color = "Thin", ...props }: InputProps) {
  return <StyledInput color={color} {...props}></StyledInput>;
}

const StyledInput = styled.input<{ color: Color }>`
  background-color: ${({ color }) => (color === "Thin" ? "#596980" : "#73859E")};
  outline: none;
  border: none;
  width: 315px;
  height: 48px;
`;
