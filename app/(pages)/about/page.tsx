import { Title } from "../(components)/Title";

export const metadata = {
  title: "About Us",
};

export default function page() {
  return (
    <>
      <Title>About Us</Title>
      <div className="grid grid-cols-5 gap-20 mt-10 items-center">
        <div className="aspect-square col-span-2 w-full bg-emerald-500"></div>
        <p className="col-span-3 text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia culpa
          corrupti vitae. Possimus sapiente porro voluptates obcaecati maiores
          similique quisquam? Reiciendis, sed aperiam rerum explicabo nobis
          quibusdam molestias tempora maxime vitae minima debitis accusamus unde
          eveniet, natus, pariatur cupiditate placeat?
        </p>
        <p className="col-span-2 text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia culpa
          corrupti vitae. Possimus sapiente porro voluptates obcaecati maiores
          similique quisquam? Reiciendis, sed aperiam rerum explicabo nobis
          quibusdam molestias tempora maxime vitae minima debitis accusamus unde
          eveniet, natus, pariatur cupiditate placeat?
        </p>
        <div className="aspect-video col-span-3 w-full bg-emerald-500"></div>
        <h2 className="col-span-full justify-self-center text-5xl font-serif text-white border-b border-x px-6 rounded-full border-emerald-500">
          We love our customers
        </h2>
      </div>
    </>
  );
}
