
import { useContext } from "react";
import Router from "./app/Router";
import { Container, OuterContainer } from "./app/styles";
import Banner from "./components/Banner";
import { AppContext } from "./app/Provider";
import './app/styles.css';

const App = () => {
  const [state] = useContext(AppContext);
  console.log(state.back)
  return (
    <OuterContainer fitScreen={state.fitScreen} style={{ backgroundImage: `url(${state.back})`, backgroundColor: state.backgroundColor }}>
      <Container>

        <Router />
      </Container>
      <Banner />

    </OuterContainer >
  )
}

export default App;
