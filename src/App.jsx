import { useState, useEffect } from "react";
import {
  Hero,
  Menu,
  About,
  Whyus,
  Testimonial,
  Googlereview,
  Footer,
  Header,
} from "./Components/index.js";
import { ThemeProvider } from "./context/theme.js";
function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const lightMode = () => {
    setThemeMode("light");
  };
  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    document.querySelectorAll("img").forEach((img) => {
      img.setAttribute("loading", "lazy");
      img.classList.add('unselectable');
    })
  }, []);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <Header />
      <Hero />
      <Menu />
      <About />
      <Whyus />
      <Testimonial />
      <Googlereview />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
