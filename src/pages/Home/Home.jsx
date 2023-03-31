import { Link } from "react-router-dom";
import { Counter } from "../../components/Counter";

export const Home = () => {
  return (
    <main className="home__container">
      <Counter />
    </main>
  );
};
