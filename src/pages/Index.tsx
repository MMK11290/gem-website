import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import heroImage from "@/assets/hero-gem.jpg";
import { Button } from "@/components/ui/button";
import { initialGemstones } from "@/data/gemstones";
import ProductCard from "@/components/products/ProductCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Index = () => {
  useEffect(() => {
    document.title = "خانه | سنگ‌های عقیق کابلی";
  }, []);

  const featured = initialGemstones.filter((g) => g.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-80"></div>
          <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
            <div className="space-y-5">
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                زیبایی طبیعی سنگ‌های خام
                <br />
                <span className="text-gradient">انتخابی اصیل برای کلکسیونرها</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                خانواده کابلی با سال‌ها تجربه در انتخاب و عرضه سنگ‌های قیمتی خام؛ تمرکز ما بر اصالت، کیفیت و زیبایی طبیعی است.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild variant="hero" size="lg">
                  <Link to="/catalog">مشاهده کاتالوگ</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">درباره ما</Link>
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-elegant">
              <img src={heroImage} alt="سنگ‌های خام" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="container mx-auto px-4 py-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">سنگ‌های منتخب</h2>
              <p className="text-sm text-muted-foreground">برگزیده‌ای از بهترین سنگ‌های خام موجود</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/catalog">مشاهده همه</Link>
            </Button>
          </div>

          {/* Swiper Container */}
          <div className="relative group">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              loop
              spaceBetween={20}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                el: '.swiper-pagination',
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="mySwiper pb-12"
            >
              {featured.map((gem) => (
                <SwiperSlide key={gem.id}>
                  <ProductCard gem={gem} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <div className="swiper-button-prev !text-primary !bg-white/80 !w-10 !h-10 !rounded-full !shadow-md !opacity-0 group-hover:!opacity-100 transition-opacity duration-300 after:!text-lg"></div>
            <div className="swiper-button-next !text-primary !bg-white/80 !w-10 !h-10 !rounded-full !shadow-md !opacity-0 group-hover:!opacity-100 transition-opacity duration-300 after:!text-lg"></div>
            
            {/* Pagination Container */}
            <div className="swiper-pagination !bottom-1"></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;