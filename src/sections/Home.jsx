import Nav from "../components/Nav";
import Hero from "./Hero";
import Product from "./Product";
import Footer from "./Footer";

const Home = () => {
  return  (
    <>
      <main className="flex w-full flex-col items-center justify-center">
        <Nav />
        <Hero />
        <Product />
      </main>
      <Footer />
    </>
  );
}

export default Home