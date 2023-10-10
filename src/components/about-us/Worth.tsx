import Image from "next/legacy/image";

export const Worth = ({
  title,
  image,
  description,
}: {
  title: string;
  image: any;
  description: any;
}) => {
  return (
    <div className="p-3 text-center">
      <span className="block text-sm">{title}</span>
      <Image src={image} layout="intrinsic" width={50} height={50} />
    </div>
  );
};
