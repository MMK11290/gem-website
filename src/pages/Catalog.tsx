import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect, useMemo, useState } from "react";
import { Gemstone, initialGemstones } from "@/data/gemstones";
import FilterBar from "@/components/products/FilterBar";
import ProductCard from "@/components/products/ProductCard";

export default function Catalog() {
  const [type, setType] = useState("");
  const [items, setItems] = useState<Gemstone[]>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('gemstones') : null;
    return saved ? (JSON.parse(saved) as Gemstone[]) : initialGemstones;
  });

  useEffect(() => {
    document.title = "کاتالوگ | سنگ‌های خام امینی";
  }, []);

  const filtered = useMemo(() => {
    return type ? items.filter((g) => g.type === type) : items;
  }, [items, type]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="mb-4 text-3xl font-extrabold">کاتالوگ سنگ‌های خام</h1>
        <FilterBar value={type} onChange={setType} />
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filtered.map((gem) => (
            <ProductCard key={gem.id} gem={gem} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
