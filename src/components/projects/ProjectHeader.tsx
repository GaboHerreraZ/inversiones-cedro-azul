export const ProjectHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <section className="grid items-center h-full p-5 md:p-20 text-white font-bold text-3xl ">
      <article className="flex gap-2 justify-center  md:gap-0  md:grid text-4xl  mt-12  ">
        <p>{title}</p>
        <p>{subtitle}</p>
      </article>
    </section>
  );
};
