import styled from "styled-components";

export const Container = styled.div`
  > .banner {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    max-height: 100vh;
    z-index: -999;
  }

  > .banner-info {
    margin-top: calc(100vh - 75vh);
    text-align: center;

    > h1 {
      font-size: 6.4rem;
      font-weight: 600;
      line-height: 6.4rem;
    }

    > p {
      margin-top: 1rem;
      font-size: 2.24rem;
      font-weight: 600;
      line-height: 2.24rem;
    }

    > .ep-details::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50px;
      opacity: 0.5;
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      z-index: -99;
    }

    > .ep-details {
      width: 100%;
      max-width: 100rem;
      position: relative;
      justify-content: space-between;
      margin: calc(100vh - 74vh) auto 0;
      padding: 1.6rem 3.2rem 1.6rem 1.6rem;

      > .local {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-weight: 500;
        line-height: 2.4rem;

        > img {
          max-width: 3.2rem;
          margin-right: 1.2rem;
        }
      }

      > .characteristics {
        margin-left: 12rem;
        > p {
          padding-right: 1rem;
          font-weight: 500;
          line-height: 1.6rem;
        }

        > p + p {
          padding-left: 1rem;
          border-left: 0.16rem solid ${({ theme }) => theme.COLORS.WHITE_100};
        }
      }

      > .learn-more {
        padding: 1.2rem 2.4rem;
        border-radius: 50px;
        font-size: 1.44rem;
        font-weight: 500;
        line-height: 1.44rem;
        background-color: ${({ theme }) => theme.COLORS.RED_700};
      }

      > .learn-more:hover {
        background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      }
    }

    .ep-details,
    .characteristics {
      display: flex;
      align-items: center;
    }
  }

  > main {
    width: 100%;
    margin: calc(100vh - 78vh) auto 6rem;
    padding: 0 5rem;

    h2 {
      font-size: 2.88rem;
      font-weight: 600;
      line-height: 2.88rem;
      color: ${({ theme }) => theme.COLORS.RED_700};
    }

    hr {
      height: 0.24rem;
      background-color: ${({ theme }) => theme.COLORS.RED_700};
    }

    > section {
      max-width: 100%;
    }

    > section + section {
      margin-top: 6rem;
    }

    > .description::before {
      content: "";
      position: absolute;
      top: -2rem;
      width: calc(100% + 10rem);
      height: calc(100% + 4rem);
      z-index: -999;
      background-color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    > .description {
      position: relative;
      display: flex;
      justify-content: center;
      gap: 8rem;

      > .description_content {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding-top: 7rem;

        > .tag-status {
          position: absolute;
          top: 0;
          left: 0;
          padding: 1rem 3rem;
          border-radius: 20px;
          font-size: 1.44rem;
          font-weight: 600;
          line-height: 1.44rem;
          background-color: ${({ theme }) => theme.COLORS.GREEN};
        }

        > h2 {
          max-width: 48rem;
        }

        > hr {
          width: 7rem;
        }

        > p {
          font-size: 1.44rem;
          font-weight: 500;
          line-height: 2.16rem;
          color: ${({ theme }) => theme.COLORS.DARK_300};
        }
      }

      > .description_image {
        > img {
          max-width: 65rem;
          max-height: 52.3rem;
        }
      }
    }

    > .galery {
      text-align: center;

      > h2 {
        margin-bottom: 4rem;
      }

      > hr {
        width: 18.23rem;
        margin: 0 auto;
      }

      > .carousel {
        display: flex;
        gap: 0.8rem;
        align-items: center;
        margin-top: 4rem;

        > .carousel_item-show {
          > img {
            width: 46rem;
            border-radius: 15px;
          }

          > p {
            font-weight: 600;
            line-height: 2.24rem;
            color: ${({ theme }) => theme.COLORS.RED_700};
          }
        }
      }
    }

    > .floor-plans::before {
      content: "";
      position: absolute;
      left: -5rem;
      width: calc(100% + 10rem);
      height: calc(100% + 4rem);
      z-index: -999;
      background-color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    > .floor-plans {
      position: relative;
      display: flex;
      align-items: center;
      gap: 4rem;

      > img {
        width: 61rem;
      }

      > .details {
        > hr {
          width: 5.6rem;
          margin: 1.4rem 0;
        }

        > p {
          max-width: 46rem;
          font-size: 1.92rem;
          font-weight: 500;
          line-height: 2.88rem;
          color: ${({ theme }) => theme.COLORS.DARK_300};
        }
      }
    }

    > .talk-to-brokers {
      &,
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      > form {
        width: 100%;
        max-width: 60.6rem;
        gap: 2.6rem;
        margin-top: 8rem;
        padding: 3.2rem 4.8rem;
        border-radius: 20px;
        background-color: ${({ theme }) => theme.COLORS.DARK_1000};

        span.title,
        legend {
          font-size: 2.24rem;
          font-weight: 600;
          line-height: 2.24rem;
        }

        > p {
          width: 100%;

          > input {
            width: 100%;
            height: 4.7rem;
            padding: 0.6rem 1.6rem;
            border-radius: 10px;
            font-size: 1.6rem;
            line-height: 2.24rem;
            background-color: ${({ theme }) => theme.COLORS.WHITE_100};
          }

          > button {
            width: 100%;
            padding: 1.5rem;
            border-radius: 4px;
            font-size: 1.92rem;
            font-weight: 500;
            line-height: 1.92rem;
            color: ${({ theme }) => theme.COLORS.WHITE_100};
            background-color: ${({ theme }) => theme.COLORS.GREEN};
          }
        }
      }
    }

    > .documents {
      margin-top: 14rem;
      text-align: center;

      > hr {
        margin: 4rem auto 0;
        width: 16rem;
        height: 0.24rem;
      }

      > p {
        margin-top: 4rem;
        font-size: 1.44rem;
        font-weight: 500;
        line-height: 1.44rem;
        color: ${({ theme }) => theme.COLORS.DARK_300};
      }

      > button {
        width: 100%;
        max-width: 41.5rem;
        margin-top: 6rem;
        padding: 1.2rem 2.4rem;
        border-radius: 20px;
        text-align: left;
        font-size: 1.44rem;
        font-weight: 500;
        line-height: 1.44rem;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
      }

      > button:hover {
        background-color: ${({ theme }) => theme.COLORS.RED_700};
      }
    }
  }
`;
