"use client";
import Button from "./ui/Button";
import { useRouter, useSearchParams } from "next/navigation";

const FilterBar = () => {
  const router = useRouter();
  const params = useSearchParams();
  const filter = params.get("filter");

  const handleFilterClick = (filterType: string) => {
    router.push(`/work/?filter=${filterType}`);
  };

  return (
    <div className="flex w-full gap-4 justify-center items-center select-none">
      <div>
        <Button
          title="All"
          onClick={() => handleFilterClick("All")}
          className={
            filter === "All" ? "bg-light text-black border-slate-500/50" : ""
          }
        />
      </div>
      <div>
        <Button
          title="Fullstack"
          onClick={() => handleFilterClick("Fullstack")}
          className={
            filter === "Fullstack"
              ? "bg-light text-black border-slate-500/50"
              : ""
          }
        />
      </div>
      <div>
        <Button
          title="Frontend"
          onClick={() => handleFilterClick("Frontend")}
          className={
            filter === "Frontend"
              ? "bg-light text-black border-slate-500/50"
              : ""
          }
        />
      </div>
    </div>
  );
};

export default FilterBar;
