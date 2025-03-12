"use client";
import { ItemCard } from '@/components';
import { PROJECTS_LIST } from '@/constant/project';

function ProjectList() {
    const data = PROJECTS_LIST;
    return (
        <div className="container px-4 lg:px-16 my-4 mb-8 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-8">
        {data?.map((item:any, index : number) => (
          <ItemCard key={`ItemCard-Project-${index}`} {...item} />
        ))}
      </div>
    );
}

export default ProjectList;