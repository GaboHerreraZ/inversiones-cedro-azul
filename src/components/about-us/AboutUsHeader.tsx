import { Worth } from "./Worth";

export const AboutUsHeader = ({
  title,
  subtitle,
  titleWorth,
  worths,
}: {
  title: string;
  subtitle: string;
  titleWorth: string;
  worths: any;
}) => {
  return (
    <section className="grid items-end h-full p-5  text-cedro-900 font-bold text-3xl md:text-6xl">
      <article className="flex gap-2 justify-center md:gap-0  md:block text-2xl mt-12  md:text-6xl">
        <p>{title}</p>
        <p>{subtitle}</p>
      </article>
      <section className="text-center self-center">
        <span className="text-xl">{titleWorth}</span>
        <article className="grid grid-cols-3  md:grid-cols-5 ">
          {worths.map((worth: any, index: number) => {
            return (
              <Worth
                key={index}
                title={worth.label}
                description={worth.description}
                image={worth.image}
              />
            );
          })}
        </article>
      </section>
    </section>
  );
};
