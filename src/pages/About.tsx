import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

export default function About() {
  useEffect(() => { document.title = "درباره ما | سنگ‌های عقیق کابلی"; }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-3xl font-extrabold">داستان ما</h1>
          <p className="text-muted-foreground leading-8">
            ما یک کسب‌وکار خانوادگی هستیم که از سال‌ها پیش با علاقه و دقت، به جمع‌آوری و عرضه سنگ‌های قیمتی خام پرداخته‌ایم. باور داریم که زیبایی حقیقی در سادگی و اصالت نهفته است؛ به همین دلیل، هر سنگ پیش از عرضه به دقت انتخاب می‌شود.
          </p>
          <p className="text-muted-foreground leading-8">
            تخصص ما در شناخت، دسته‌بندی و تأمین سنگ‌های خامی است که برای کلکسیونرها، طراحان و علاقه‌مندان به دنیای سنگ‌ها ارزشمندند. هدف ما ارائه تجربه‌ای صادقانه و حرفه‌ای است.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
