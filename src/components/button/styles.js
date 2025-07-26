import styled, { keyframes } from "styled-components";
import { device } from "../../styles/responsive";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(2, 255, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(2, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(2, 255, 255, 0);
  }
`;

export const Container = styled.button`
  background-color: ${(props) => props.$colorButton || "#0088ff"};
  color: ${(props) =>
    props.$colorButton === "#2563eb" || props.$colorButton === "#00ff00"
      ? "#fff"
      : "#fff"};
  height: 44px;
  border: 0;
  padding: 0 1.5rem;
  margin-top: 16px;
  border-radius: 50px;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 44px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${(props) => (props.$primary ? pulse : "none")} 2s infinite;

  @media ${device.tablet} {
    height: 42px;
    padding: 0 1.2rem;
    font-size: 0.9rem;
  }

  @media ${device.mobileL} {
    height: 44px;
    padding: 0 1rem;
    font-size: 0.85rem;
    gap: 0.3rem;
    width: 100%;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px
      rgba(
        ${(props) => {
          const color = props.$colorButton || "#0088ff";
          // Convert hex to RGB
          const hex = color.replace("#", "");
          const r = parseInt(hex.substring(0, 2), 16);
          const g = parseInt(hex.substring(2, 4), 16);
          const b = parseInt(hex.substring(4, 6), 16);
          return `${r}, ${g}, ${b}, 0.4`;
        }}
      );
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (hover: none) {
    &:hover {
      transform: none;
    }
  }
`;
