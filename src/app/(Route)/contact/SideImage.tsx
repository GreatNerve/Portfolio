"use client";

import Image from "next/image";

const loader = ({ src, width, quality }:
    { src: string; width: number; quality?: number }
  ) => {
    return `${src}?auto=compress&cs=tinysrgb&w=${width}&q=${quality || 75}`;
  }



const SideImage = ({src}: {src:string}) => {
    return (
            <Image
          src={src}
          alt="RSD2 from Star Wars"
          className="object-cover dark:brightness-[0.2] dark:grayscale"
          sizes="(max-width: 1024px) 0.5vw, 50vw"
          priority
          fill
          loader={loader}
          placeholder="blur"
          blurDataURL={ `https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=64&q=75` }
        />
    );
}

export default SideImage;