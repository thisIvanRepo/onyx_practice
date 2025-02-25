import "./Header.css";
import Nav from "../Nav/Nav";
import Actions from "../Actions/Actions";
import { Container, Section } from "../utils/SectionContainer";

function Header() {
  return (
    <header className="header">
      <Section>
        <Container className="container-header">
          <Nav />
          <Actions />
        </Container>
      </Section>
    </header>
  );
}

export default Header;
