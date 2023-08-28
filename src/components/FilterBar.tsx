"use client"
import Button from "./ui/Button"
import { useRouter, useSearchParams } from "next/navigation";
import { useSpring, animated } from '@react-spring/web';

const FilterBar = () => {

    const router = useRouter();
    const params = useSearchParams();
    const filter = params.get("filter");

    const handleFilterClick = (filterType: string) => {
      router.push(`/work/?filter=${filterType}`);
    };

  return (
    <div className="flex w-full gap-4 justify-center items-center select-none">
            <animated.div style={useSpring({from: { opacity: 0, transform: 'translateY(40px)' },to: { opacity: 1, transform: 'translateY(0)' },delay: 650,config: { duration: 550 }})}>
                <Button
                    title="All"
                    onClick={() => handleFilterClick("All")}
                    customStyle={filter === "All" ? "bg-white text-black border-slate-500/50" : ""}
                />
            </animated.div>
            <animated.div style={useSpring({from: { opacity: 0, transform: 'translateY(40px)' },to: { opacity: 1, transform: 'translateY(0)' },delay: 800,config: { duration: 550 }})}>
                <Button
                    title="Fullstack"
                    onClick={() => handleFilterClick("Fullstack")}
                    customStyle={filter === "Fullstack" ? "bg-white text-black border-slate-500/50" : ""}
                />
            </animated.div>
            <animated.div style={useSpring({from: { opacity: 0, transform: 'translateY(40px)' },to: { opacity: 1, transform: 'translateY(0)' },delay: 950,config: { duration: 550 }})}>
                <Button
                    title="Frontend"
                    onClick={() => handleFilterClick("Frontend")}
                    customStyle={filter === "Frontend" ? "bg-white text-black border-slate-500/50" : ""}
                />
            </animated.div>
    </div>
  )
}

export default FilterBar