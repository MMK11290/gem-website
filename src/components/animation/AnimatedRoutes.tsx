import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "@/pages/Index";
import Catalog from "@/pages/Catalog";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/NotFound";

const variants = {
  initial: { opacity: 0, y: 10 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="min-h-screen"
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Index /></Page>} />
        <Route path="/catalog" element={<Page><Catalog /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
        <Route path="/admin" element={<Page><Admin /></Page>} />
        <Route path="*" element={<Page><NotFound /></Page>} />
      </Routes>
    </AnimatePresence>
  );
}
