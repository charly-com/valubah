import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Product from "./sections/Product";
import Footer from "./sections/Footer";

function App() {
  return (
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

export default App;
