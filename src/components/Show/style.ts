import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 32.9rem;
  border-radius: 10px;
  text-align: left;
  position: relative;

  > img {
    width: 100%;
    height: 41.1rem;
    border-radius: 10px 10px 0 0;
  }

  > span {
    position: absolute;
    top: 35rem;
    right: 20px;
    padding: 1rem 3rem;
    border-radius: 30px;
  }

  > span.new {
    background-color: ${({ theme }) => theme.COLORS.RED_700};
  }

  > span.construction {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  > span.read {
    background-color: ${({ theme }) => theme.COLORS.GREEN};
  }

  > p {
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.RED_700};
  }

  > h4 {
    font-size: 2.24rem;
    font-weight: 700;
    line-height: 2.24rem;
    color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  p,
  h4 {
    margin: 1rem 0;
  }

  > .details,
  h4,
  p {
    padding: 0 1.6rem;
  }

  > .details {
    height: 11rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    padding-bottom: 1.6rem;
  }

  > .details li {
    color: ${({ theme }) => theme.COLORS.DARK_500};
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 3rem;
    background-color: ${({ theme }) => theme.COLORS.RED_700};
    color: ${({ theme }) => theme.COLORS.RED_700};
  }
`;
