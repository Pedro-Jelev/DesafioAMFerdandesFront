import styled from "styled-components";

export const Container = styled.header`
  & {
    width: 100%;
    height: 100.912px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 8px 0px;

    > img.logo {
      width: 100%;
      max-width: 18.6rem;
    }

    > .header-items-right {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;

      > {
        nav ul {
          display: flex;
          gap: 4rem;

          > li:nth-child(1) a {
            color: ${({ theme }) => theme.COLORS.RED_500};
          }

          a {
            font-size: 1.8rem;
            font-weight: 300;
            line-height: 2rem;
            cursor: pointer;
          }

          a:hover {
            color: ${({ theme }) => theme.COLORS.DARK_1000};
          }
        }
      }

      > .customer-area {
        margin-left: 1rem;
        padding: 1.2rem 2.4rem;
        border-radius: 0.5rem;
        line-height: 16px;
        background-color: ${({ theme }) => theme.COLORS.WHITE_100};
        color: ${({ theme }) => theme.COLORS.RED_700};
        cursor: pointer;
      }

      > .customer-area:hover {
        background-color: ${({ theme }) => theme.COLORS.DARK_1000};
        color: ${({ theme }) => theme.COLORS.WHITE_100};
      }
    }
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: inherit;
    content: "";
    opacity: 0.3;
    backdrop-filter: blur(3px);
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    z-index: -10;
  }
`;
