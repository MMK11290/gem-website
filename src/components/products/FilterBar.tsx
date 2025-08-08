import { GEM_TYPES } from "@/data/gemstones";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function FilterBar({ value, onChange }: Props) {
  return (
    <div className="flex flex-col items-start gap-2 rounded-lg border bg-card/60 p-4 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        <h3 className="text-sm font-bold">فیلتر بر اساس نوع سنگ</h3>
        <p className="text-xs text-muted-foreground">برای مشاهده سریع‌تر، دسته‌بندی مورد نظر را انتخاب کنید.</p>
      </div>
      <div className="flex items-center gap-3">
        <Label htmlFor="type" className="text-sm">نوع:</Label>
        <Select value={value === '' ? 'all' : value} onValueChange={(v) => onChange(v === 'all' ? '' : v)}>
          <SelectTrigger className="min-w-40" id="type">
            <SelectValue placeholder="همه" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">همه</SelectItem>
            {GEM_TYPES.map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
