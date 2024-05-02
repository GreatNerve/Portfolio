import { Skeleton } from "@/components/ui/skeleton";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const SuspenseImage = ({
  src = "",
  alt = "",
  size = "size-48",
  fontSize = "text-xl",
  className = "",
  ...props
}) => {
  return (
    <Avatar
      className={cn(
        "m-2 flex items-center justify-center mx-auto rounded-none",
        className,
        fontSize,
        size
      )}
    >
      <AvatarImage
        src={src}
        alt={alt}
        className={`${size}`}
        {...props}
      />
      <AvatarFallback className={`rounded-none bg-transparent`}>
          <Skeleton className={`rounded-none ${size}  bg-gray-700`} />
         
        
      </AvatarFallback>
    </Avatar>
  );
};


export default SuspenseImage;