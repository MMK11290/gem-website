import { Gemstone } from "@/data/gemstones";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Props = { gem: Gemstone };

export default function ProductCard({ gem }: Props) {
  return (
  // Updated ProductCard.tsx with improved visual hierarchy
<Card className="overflow-hidden transition-all duration-300 card-glass hover:shadow-elegant hover:-translate-y-1 card-hover hover:shadow-elegant">
  <div className="relative aspect-[4/3] overflow-hidden">
    <img
      src={gem.imageUrl}
      alt={gem.name}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
    />
    {gem.featured && (
      <span className="absolute top-3 right-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground shadow-md">
        منتخب
      </span>
    )}
  </div>
  <CardContent className="space-y-4 p-5">
    <div className="space-y-2">
      <h3 className="text-lg font-bold tracking-tight">{gem.name}</h3>
      <div className="flex items-center gap-2">
        <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
          {gem.type}
        </span>
        {gem.price && (
          <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            {gem.price.toLocaleString('fa-IR')} تومان
          </span>
        )}
      </div>
    </div>
    <p className="line-clamp-2 text-sm text-muted-foreground">{gem.description}</p>
    <Button asChild variant="hero" className="w-full mt-2">
      <a href={`tel:${siteConfig.phone}`}>تماس با فروشنده</a>
    </Button>
  </CardContent>
</Card>
  );
}