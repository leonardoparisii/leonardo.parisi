'use client'
import Button from './ui/Button'
import { useRouter, useSearchParams } from 'next/navigation';

const FilterBar = () => {

    const router = useRouter();
    const params = useSearchParams();
    const filter = params.get('filter');

    const handleFilterClick = (filterType: string) => {
      router.push(`/work/?filter=${filterType}`);
    };

  return (
    <div className="flex w-full gap-4 justify-center items-center select-none">
                <Button
                    title="All"
                    onClick={() => handleFilterClick('All')}
                    customStyle={filter === 'All' ? 'bg-white text-black border-slate-500/50' : ''}
                />
                <Button
                    title="Fullstack"
                    onClick={() => handleFilterClick('Fullstack')}
                    customStyle={filter === 'Fullstack' ? 'bg-white text-black border-slate-500/50' : ''}
                />
                <Button
                    title="Frontend"
                    onClick={() => handleFilterClick('Frontend')}
                    customStyle={filter === 'Frontend' ? 'bg-white text-black border-slate-500/50' : ''}
                />
    </div>
  )
}

export default FilterBar