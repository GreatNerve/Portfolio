
import Link from "next/link";

const ListItem = ({ to, title, children }:{
    to: string;
    title: string;
    children: React.ReactNode;
}) => (
  <li className="h-full w-full">
    <Link
      href={to}
      className="flex flex-col  p-6 rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md height-full width-full"
    >
      <div className="mb-2 text-lg font-medium line-clamp-1 ">{title}</div>
      <p className="text-sm leading-tight text-muted-foreground line-clamp-3">
        {children}
      </p>
    </Link>
  </li>
);


export default ListItem;