import styled from "styled-components";

const HeaderBox = styled.header`
  max-width: 100vw;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: #eb5a61;
  align-items: end;
  position: sticky;
  top: -20vh;
  overflow: auto;

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
  }

  h1 {
    color: #2b2b31;
    margin-bottom: 0;
    @media (max-width: 768px) {
      font-size: 1.618rem;
    }
  }

  a {
    color: #2b2b31;
    text-decoration: none;
  }
`;

const TitleBox = styled.div`
  width: 80vw;
  height: 20vh;
  background-color: #eb5a61;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
    height: 4.236rem;
  }
`;

const SearchBox = styled.div`
  width: 80vw;
  height: 15vh;
  background-color: #eb5a61;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 4.236rem;
    margin-top: 1rem;
  }
`;

const LogoBox = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;

  @media (max-width: 768px) {
    position: inherit;
    top: 0;
    left: 0;
  }
`;

const MenuArea = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  box-sizing: border-box;
  max-height: 8.09rem;
  margin: 0.618rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  @media (max-width: 768px) {
    position: sticky;
    top: 8.09rem;
    align-items: center;
    justify-content: space-between;
  }
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBar = styled.input`
  width: 55vw;
  height: 2rem;
  border: none;
  background-color: white;
  color: #4e535f;
  font-size: 1rem;

  ::placeholder {
    font-size: 1rem;
    color: #4e535f;
  }
`;

const G2hLogo = styled.img`
  margin: 0;
  @media (max-width: 768px) {
    margin: 0.618rem;
  }

  @media (max-width: 320px) {
    margin: 0;
  }
`;

const MenuButton = styled.p`
  cursor: pointer;
  margin: 0;
`;

const Basket = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SearchBarForm = styled.form`
  width: 60vw;
  height: 3rem;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 10rem;
  /* border-radius: 10px; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const SearchButton = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: white;
  border: 0;
  margin: 0;
  padding: 0;
`;

const BasketIcon = styled.img`
  margin-left: 0.618rem;
`;

const Tagline = styled.p`
  text-transform: uppercase;
  text-align: center;
  margin: 0;
`;

const LoginSignup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 10vw;

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 60vw;
    align-content: space-between;
  }
`;

export {
  HeaderBox,
  SearchBox,
  LogoBox,
  Middle,
  MenuArea,
  TitleBox,
  SearchBarForm,
  SearchBar,
  SearchButton,
  G2hLogo,
  MenuButton,
  Basket,
  BasketIcon,
  Tagline,
  LoginSignup
};
