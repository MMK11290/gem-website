import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { GEM_TYPES, Gemstone, initialGemstones } from "@/data/gemstones";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function Admin() {
  const [items, setItems] = useState<Gemstone[]>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('gemstones') : null;
    return saved ? (JSON.parse(saved) as Gemstone[]) : initialGemstones;
  });

  const [form, setForm] = useState<Omit<Gemstone, 'id'>>({
    name: "",
    description: "",
    type: GEM_TYPES[0],
    imageUrl: "",
    price: undefined,
    featured: false,
  });

  useEffect(() => { document.title = "مدیریت | سنگ‌های عقیق کابلی"; }, []);

  const onAdd = () => {
    const newItem: Gemstone = { ...form, id: `g-${Date.now()}` } as Gemstone;
    const next = [newItem, ...items];
    setItems(next);
    localStorage.setItem('gemstones', JSON.stringify(next));
    toast.success('سنگ جدید اضافه شد');
    setForm({ name: '', description: '', type: GEM_TYPES[0], imageUrl: '', price: undefined, featured: false });
  };

  const onDelete = (id: string) => {
    const next = items.filter(i => i.id !== id);
    setItems(next);
    localStorage.setItem('gemstones', JSON.stringify(next));
    toast.success('حذف شد');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="mb-4 text-3xl font-extrabold">مدیریت سنگ‌ها</h1>
        <div className="mb-8 grid gap-4 rounded-lg border bg-card/60 p-4 md:grid-cols-2">
          <Input placeholder="نام سنگ" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} />
          <Select value={form.type} onValueChange={(v)=>setForm({...form, type: v as Gemstone['type']})}>
            <SelectTrigger><SelectValue placeholder="نوع"/></SelectTrigger>
            <SelectContent>
              {GEM_TYPES.map(t=> <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
          <Input placeholder="آدرس تصویر (URL)" value={form.imageUrl} onChange={(e)=>setForm({...form, imageUrl: e.target.value})} />
          <Input placeholder="قیمت (تومان) - اختیاری" type="number" value={form.price ?? ''} onChange={(e)=>setForm({...form, price: e.target.value ? Number(e.target.value) : undefined})} />
          <Textarea className="md:col-span-2" rows={4} placeholder="توضیحات" value={form.description} onChange={(e)=>setForm({...form, description: e.target.value})} />
          <div className="md:col-span-2">
            <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={form.featured} onChange={(e)=>setForm({...form, featured: e.target.checked})}/> نمایش در منتخب‌ها</label>
          </div>
          <div className="md:col-span-2">
            <Button onClick={onAdd} variant="hero">افزودن سنگ</Button>
          </div>
        </div>

        <div className="grid gap-4">
          {items.map((i)=> (
            <div key={i.id} className="flex flex-col items-start justify-between gap-3 rounded-lg border p-3 md:flex-row md:items-center">
              <div className="flex items-center gap-3">
                <img src={i.imageUrl} alt={i.name} className="h-16 w-20 rounded object-cover" />
                <div>
                  <div className="font-bold">{i.name}</div>
                  <div className="text-xs text-muted-foreground">{i.type} • {i.price ? `${i.price.toLocaleString('fa-IR')} تومان` : 'توافقی'}</div>
                </div>
              </div>
              <Button variant="outline" onClick={()=>onDelete(i.id)}>حذف</Button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
