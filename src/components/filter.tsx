import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FilterSelect() {
  return (
    <Select>
      <SelectTrigger className="w-32">
        <SelectValue placeholder="Filter by" />
      </SelectTrigger>
      <SelectContent className="w-32 bg-white shadow-md">
        <SelectItem value="newest">Newest</SelectItem>
        <SelectItem value="oldest">Oldest</SelectItem>
        <SelectItem value="remote">Remote</SelectItem>
      </SelectContent>
    </Select>
  );
}
