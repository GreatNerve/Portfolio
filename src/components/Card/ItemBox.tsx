
import { projectType } from "@/store/projectSlice";
import ItemCard from "./ItemCard";
const Box = ({name="BoxBox", data }:
  {
    name: string;
    data: any;
  }
) => {
  return (
    <div className="my-4 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
      {data?.map((item:any, index : number) => (
        <ItemCard key={`ItemCard-${name}-${index}`} {...item} />
      ))}
    </div>
  );
};


export default Box;