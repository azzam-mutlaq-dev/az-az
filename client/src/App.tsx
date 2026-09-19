import { useState } from "react";
import { Link, Route, Switch } from "wouter";
import { Menu, Phone, X } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Compound from "./pages/Compound";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

export const compounds = [
  "Palma I",
  "Palma II",
  "Qairawan",
  "Narjis",
  "Hittin",
  "Wadi",
  "Takhassusi",
  "Al Reem",
  "Lamara",
  "Rabwah",
  "Asala",
  "Central",
  "KAFD",
  "Galleria",
  "Salamah",
  "Qassim",
];

const compoundFromSlug = (slug?: string) => {
  const normalized = slug?.toLowerCase();
  return compounds.find((compound) => compound.toLowerCase().replaceAll(" ", "-") === normalized);
};

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className="site-header">
        <button className="menu-trigger" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={17} /> MENU
        </button>
        <Link href="/" className="mini-brand" onClick={close} aria-label="Azure home">
          AZURE
          <small>SAUDI ARABIA</small>
        </Link>
        <div className="header-actions">
          <a href="tel:+966920000000" aria-label="Call Azure"><Phone size={14} /></a>
          <a className="tour-button" href="https://azure-booking.theblueinnovation.com/">BOOK A TOUR <span>↗</span></a>
        </div>
      </header>
      <aside className={`menu-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-top"><span>AZURE</span><button type="button" onClick={close} aria-label="Close menu"><X size={24} /></button></div>
        <nav>
          <Link href="/" onClick={close}>Home</Link>
          <Link href="/compounds" onClick={close}>Compounds</Link>
          <Link href="/about" onClick={close}>About Azure</Link>
          <Link href="/news" onClick={close}>News &amp; Events</Link>
          <Link href="/contact" onClick={close}>Contact</Link>
        </nav>
        <div className="drawer-footer">RIYADH, SAUDI ARABIA<br /><a href="tel:+966920000000">+966 9200 00000</a></div>
      </aside>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Link href="/" className="footer-brand">AZURE<small>SAUDI ARABIA</small></Link>
      <nav className="footer-links">
        <Link href="/about">About Azure</Link><Link href="/compounds">Compounds</Link><Link href="/news">News &amp; Events</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy Policy</Link>
      </nav>
      <div className="social-links"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">INSTAGRAM</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN</a><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YOUTUBE</a></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Azure Saudi Arabia</span><span>Designed for <b>exceptional living</b></span></div>
    </footer>
  );
}

function RoutedPages() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/corporate" component={About} />
      <Route path="/compounds" component={Home} />
      <Route path="/compounds/:slug">{(params) => <Compound name={compoundFromSlug(params.slug) ?? params.slug} />}</Route>
      <Route path="/contact" component={Contact} />
      <Route path="/contacts" component={Contact} />
      <Route path="/news" component={News} />
      <Route path="/blog" component={News} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/privacy-policy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return <><Header /><RoutedPages /><Footer /><a className="whatsapp-float" href="https://wa.me/966920000000" aria-label="Contact Azure on WhatsApp">◔</a></>;
}
