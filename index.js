
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";

const Home = () => <main><h1>Головна</h1><p>Вітаємо на сервісі ДОКУМЕНТ</p></main>;
const Services = () => <main><h1>Послуги</h1><ul><li>Техпаспорт</li><li>Узаконення</li><li>Обстеження</li></ul></main>;
const About = () => <main><h1>Про нас</h1><p>Працюємо з 2012 року. Обслуговуємо клієнтів по всій Україні.</p></main>;
const Partners = () => <main><h1>Партнерам</h1><p>Партнерська програма для нотаріусів, рієлторів і юристів</p></main>;
const Contact = () => (
  <main>
    <h1>Контакти</h1>
    <p>Телефон: +38067-338-21-41</p>
    <p>Email: makler24h@gmail.com</p>
    <form action="https://formspree.io/f/xyyrqvjb" method="POST">
      <input name="name" placeholder="Ім'я" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Повідомлення" required></textarea>
      <button type="submit">Надіслати</button>
    </form>
  </main>
);
const Gallery = () => (
  <main>
    <h1>Галерея</h1>
    <img src="/logo.png" alt="приклад 1" width="200" />
    <img src="/logo.png" alt="приклад 2" width="200" />
  </main>
);
const FAQ = () => (
  <main>
    <h1>Часті питання</h1>
    <p><strong>Скільки коштує техпаспорт?</strong> — від 1000 грн</p>
    <p><strong>Чи оформлюєте документи дистанційно?</strong> — Так</p>
  </main>
);

function App() {
  return (
    <Router>
      <header>
        <img src="/logo.png" alt="логотип" className="logo" />
        <nav>
          <Link to="/">Головна</Link>
          <Link to="/services">Послуги</Link>
          <Link to="/about">Про нас</Link>
          <Link to="/partners">Партнерам</Link>
          <Link to="/gallery">Галерея</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Контакти</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
