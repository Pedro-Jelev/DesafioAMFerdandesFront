import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2.6rem;
  padding: 5rem 6rem 1rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  > ul {
    width: 100%;
    max-width: 31.2rem;
  }

  > ul li p,
  ul li a {
    font-size: 1.44rem;
    line-height: 2.16rem;
    color: ${({ theme }) => theme.COLORS.WHITE_50};
  }

  > ul li + li {
    margin: 0.6rem 0;
  }

  > ul li p.title {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  > ul li a:hover {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > .column-1 {
    > li:nth-child(1) {
      > img {
        width: 13.55rem;
        height: 4.4rem;
      }

      > hr {
        width: 100%;
        max-width: 30rem;
        border-bottom: 0.8px solid ${({ theme }) => theme.COLORS.DARK_500};
        margin-top: 1rem;
      }
    }

    > li + li {
      margin: 1rem 0;
    }

    > li:last-child {
      > img {
        width: 28rem;
        height: 10.4rem;
      }
    }
  }

  > .column-4 {
    > li:last-child img {
      width: 19.4rem;
      height: 6.6rem;
    }
  }
`;
