import styled from "styled-components";

export const Container = styled.div`
  > .banner {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -999;
  }

  > main {
    width: 100%;
    max-width: 114rem;
    margin: 75rem auto 0;
    text-align: center;

    > section:last-child {
      margin-bottom: 10rem;
    }

    > section + section {
      margin-top: 10rem;
    }

    > .box-filter {
      width: 100%;
      padding: 3.2rem;
      border-radius: 20px;
      margin: 0 auto;
      text-align: center;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px 0px;

      > h2 {
        margin-bottom: 3.2rem;
        font-size: 3.2rem;
        font-weight: 400;
        line-height: 32px;
        color: ${({ theme }) => theme.COLORS.DARK_500};
      }

      > .filter-row {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        > .box-wrapper {
          padding: 0.4rem 0.5rem;

          > select {
            width: 100%;
            padding: 1.5rem 2rem;
            border: 1px solid rgba(0, 0, 0, 0.314);
            border-radius: 5px;
            font-size: 1.6rem;
            font-weight: 500;
          }

          > button {
            width: 100%;
            padding: 1.2rem 4rem;
            border-radius: 5px;
            font-size: 1.92rem;
            font-weight: 500;
            line-height: 2.88rem;
            background-color: ${({ theme }) => theme.COLORS.RED_700};
            color: ${({ theme }) => theme.COLORS.WHITE_100};
          }
        }
      }
    }

    > .map {
      width: 100%;
      > img {
        max-width: 100%;
      }
    }

    > .showcase {
      width: 100%;
      > h3 {
        font-size: 4.48rem;
        font-weight: 700;
        line-height: 5.376rem;
        color: ${({ theme }) => theme.COLORS.DARK_500};

        > strong {
          color: ${({ theme }) => theme.COLORS.RED_900};
        }
      }

      > p {
        margin: 2rem 0;
        font-size: 2.24rem;
        font-weight: 600;
        line-height: 33.6px;
        color: ${({ theme }) => theme.COLORS.DARK_500};
      }

      > .show-all {
        display: inline-block;
        padding: 1.5rem 3rem;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.COLORS.RED_700};
      }
    }

    > .push-to-talk {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.6rem;

      > img {
        max-width: 15.6rem;
      }

      > p {
        font-size: 2.24rem;
        font-weight: 600;
        line-height: 2.24rem;
        color: ${({ theme }) => theme.COLORS.DARK_500};
      }

      > p.emphasis {
        font-size: 3.84rem;
        line-height: 3.84rem;
      }

      > .talk-to-human {
        padding: 1.5rem 3rem;
        border-radius: 10px;
        font-weight: 500;
        background-color: ${({ theme }) => theme.COLORS.RED_700};
      }
    }

    > .life-style {
      > h3 {
        margin-bottom: 3rem;
        font-size: 3.2rem;
        line-height: 3.2rem;
        color: ${({ theme }) => theme.COLORS.DARK_500};
      }

      .life-style_show {
        display: flex;
        flex-direction: column;
        align-items: center;

        > img {
          width: 22rem;
          height: 35rem;
        }

        > p {
          margin-top: 1.4rem;
          font-weight: 600;
          color: ${({ theme }) => theme.COLORS.DARK_500};
        }
      }
    }
  }

  .mySwiper {
    margin-top: 3rem;
  }

  .life-style_mySwiper {
    margin-top: 2rem;
  }
`;
