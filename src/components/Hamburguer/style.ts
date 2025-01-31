import styled from "styled-components";

export const Container = styled.div`
  span.bar {
    display: block;
    width: 28px;
    height: 3px;
    border-radius: 5px auto;
    margin: 5px auto;
    background-color: ${({ theme }) => theme.COLORS.WHITE_100};
    transition: all 0.3s ease-in-out;
  }

  &.active .bar:nth-child(2) {
    opacity: 0;
  }

  &.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  &.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
`;
