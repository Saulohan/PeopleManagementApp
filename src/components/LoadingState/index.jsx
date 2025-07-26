import React from "react";
import styled, { keyframes } from "styled-components";
import { FiLoader } from "react-icons/fi";
import { device } from "../../styles/responsive";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  margin: 3rem auto;
  max-width: 600px;
  border-radius: 12px;
  background-color: #fff;
  text-align: center;
  min-height: 350px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.3s ease-in;
  transition: all 0.3s ease;

  @media ${device.tablet} {
    padding: 3rem 1.5rem;
    margin: 2rem auto;
    min-height: 300px;
  }

  @media ${device.mobileL} {
    padding: 2rem 1rem;
    margin: 1rem auto;
    min-height: 250px;
    width: 95%;
  }
`;

const IconContainer = styled.div`
  font-size: 4rem;
  color: #2563eb;
  margin-bottom: 2rem;
  animation: ${spin} 1.5s linear infinite;
  filter: drop-shadow(0 0 10px rgba(2, 255, 255, 0.5));

  @media ${device.tablet} {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }

  @media ${device.mobileL} {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const Message = styled.p`
  font-size: 1.4rem;
  color: #666;
  margin-bottom: 1rem;
  font-weight: 500;
  animation: ${pulse} 2s ease-in-out infinite;

  @media ${device.tablet} {
    font-size: 1.2rem;
  }

  @media ${device.mobileL} {
    font-size: 1rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #888;
  max-width: 350px;
  line-height: 1.5;

  @media ${device.mobileL} {
    font-size: 0.9rem;
    max-width: 90%;
  }
`;

const ErrorContainer = styled(Container)`
  border: 1px solid #ffecec;
  background-color: #fff9f9;
`;

const ErrorMessage = styled(Message)`
  color: #e74c3c;
  animation: none;
`;

const RetryButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  background-color: #2563eb;
  color: #333;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  @media ${device.mobileL} {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    margin-top: 1rem;
  }

  &:hover {
    background-color: #00d8d8;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(2, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export function LoadingState({
  message = "Carregando usuários...",
  subtitle = "Por favor, aguarde enquanto buscamos as informações.",
  isError = false,
  onRetry = null,
}) {
  if (isError) {
    return (
      <ErrorContainer>
        <IconContainer style={{ color: "#e74c3c", animation: "none" }}>
          <FiLoader />
        </IconContainer>
        <ErrorMessage>{message}</ErrorMessage>
        <Subtitle>{subtitle}</Subtitle>
        {onRetry && (
          <RetryButton onClick={onRetry}>Tentar novamente</RetryButton>
        )}
      </ErrorContainer>
    );
  }
  return (
    <Container>
      <IconContainer>
        <FiLoader />
      </IconContainer>
      <Message>{message}</Message>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
