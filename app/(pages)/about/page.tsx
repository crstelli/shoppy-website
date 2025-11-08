import Image from "next/image";
import { Title } from "../../(components)/Title";

export const metadata = {
  title: "About Us",
};

export default function page() {
  return (
    <>
      <Title>About Us</Title>
      <div className="grid grid-cols-5 gap-20 mt-10 items-center text-gray-400">
        <div className="aspect-square col-span-2 w-full relative">
          <div className="absolute top-0 left-0 w-full h-full z-1 bg-gray-900/40"></div>
          <Image
            src={"/about-1.jpg"}
            fill
            className="object-contain object-center"
            alt="Image of the shop"
          ></Image>
        </div>
        <p className="col-span-3 text-lg text-center">
          Nel nostro shop online trovi prodotti di ogni genere, selezionati con
          attenzione per garantirti sempre la massima qualità e un’esperienza
          d’acquisto sicura e piacevole. Ci impegniamo ogni giorno per offrirti
          articoli affidabili, convenienti e in linea con le tue esigenze,
          curando ogni dettaglio, dalla scelta dei fornitori alla consegna del
          tuo ordine.
          <br />
          <br />
          La tua soddisfazione è la nostra priorità assoluta: acquistare da noi
          significa scegliere professionalità, trasparenza e un servizio clienti
          sempre pronto ad assisterti con cortesia e competenza. Crediamo che la
          qualità faccia la differenza e lavoriamo per renderla accessibile a
          tutti.
        </p>
        <p className="col-span-2 text-lg text-center">
          Aggiorniamo costantemente il nostro catalogo per offrirti le ultime
          novità e le migliori offerte.
          <br />
          <br />
          Ogni ordine è gestito con attenzione e spedito rapidamente, perché
          crediamo che un’esperienza d’acquisto semplice e piacevole renda ogni
          cliente davvero felice.
        </p>
        <div className="aspect-video col-span-3 w-full relative">
          <div className="absolute top-0 left-0 w-full h-full z-1 bg-gray-900/40"></div>
          <Image
            src="/about-2.jpg"
            fill
            alt="Another image of the shop"
            className="object-contain object-center"
          ></Image>
        </div>
        <h2 className="col-span-full justify-self-center text-5xl font-serif text-white border-b-3 px-6 rounded-xl border-emerald-500">
          We love our customers
        </h2>
      </div>
    </>
  );
}
