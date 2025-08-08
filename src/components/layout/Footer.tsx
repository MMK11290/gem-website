import { siteConfig } from "@/config/site";
import { ShieldCheck, Gem, Truck, Instagram, MessageCircle, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">اعتماد شما افتخار ماست</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> تضمین اصالت سنگ‌ها</li>
              <li className="flex items-center gap-2"><Gem className="h-4 w-4 text-primary" /> انتخاب دستی و باکیفیت</li>
              <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> ارسال به سراسر کشور</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">ساعات کاری</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> شنبه تا پنجشنبه: {siteConfig.hours.weekdays}</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> جمعه: {siteConfig.hours.friday}</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {siteConfig.address}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">ارتباط با ما</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a className="text-primary" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              <div className="flex items-center gap-4">
                <a className="text-muted-foreground hover:text-primary" href={siteConfig.instagram} target="_blank" rel="noreferrer"><Instagram className="h-5 w-5" /></a>
                <a className="text-muted-foreground hover:text-primary" href={siteConfig.whatsapp} target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5" /></a>
                <Link className="text-muted-foreground hover:text-primary" to="/contact">فرم تماس</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name} — تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
