import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { Phone, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => { document.title = "تماس با ما | سنگ‌های خام امینی"; }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("درخواست مشاوره خرید سنگ خام");
    const body = encodeURIComponent(`نام: ${name}\nشماره: ${phone}\n\nپیام:\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4 md:col-span-2">
            <h1 className="text-3xl font-extrabold">تماس با ما</h1>
            <p className="text-muted-foreground">برای مشاوره و استعلام موجودی با ما در تماس باشید.</p>
            <form onSubmit={onSubmit} className="space-y-4 rounded-lg border bg-card/60 p-4">
              <Input placeholder="نام شما" value={name} onChange={(e) => setName(e.target.value)} required />
              <Input placeholder="شماره تماس" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              <Textarea placeholder="پیام شما" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} />
              <Button type="submit" variant="hero">ارسال پیام</Button>
            </form>
          </div>
          <aside className="space-y-4">
            <div className="rounded-lg border p-4">
              <h2 className="mb-2 text-lg font-bold">راه‌های ارتباطی</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a className="text-primary" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></li>
                <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-primary" /> <a className="text-primary" href={siteConfig.instagram} target="_blank" rel="noreferrer">اینستاگرام</a></li>
                <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> <a className="text-primary" href={siteConfig.whatsapp} target="_blank" rel="noreferrer">واتس‌اپ</a></li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h2 className="mb-2 text-lg font-bold">خبرنامه</h2>
              <p className="mb-3 text-sm text-muted-foreground">برای دریافت اخبار و پیشنهادهای ویژه عضو شوید.</p>
              <form onSubmit={(e)=>{e.preventDefault(); alert('عضویت شما ثبت شد');}} className="flex gap-2">
                <Input type="email" required placeholder="ایمیل شما" />
                <Button type="submit" variant="outline">عضویت</Button>
              </form>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
