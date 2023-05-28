import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  background-image: url("images/profile.jpg");
  background-position: 0rem -8rem;
  background-repeat: no-repeat;
  background-size: 70rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
