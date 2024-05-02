"use client";
import { ItemCard } from '@/components'
import { useAppSelector } from '@/lib/hooks';

function ProjectList() {
    const data = useAppSelector((state) => state.project.data);
    return (
        <div className="container my-4 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {data?.map((item:any, index : number) => (
          <ItemCard key={`ItemCard-Project-${index}`} {...item} />
        ))}
      </div>
    );
}

export default ProjectList;