import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { sports } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Esportes = () => (
  <Section className="overflow-hidden" id="esportes">
    <div className="container md:pb-10">
      <Heading tag="QUANDO O APITO TOCAR..." title="VAI SER GUERRA!" />
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {sports.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                {/* Fundo com linhas animadas de circuito */}
                <div className="absolute inset-0 z-0 animate-circuit bg-[url('/circuit-pattern.svg')] bg-repeat opacity-20"></div>


                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>
                  </div>

                  {/* Imagem do item */}
                  <img
                    className="max-w-[320px] rounded-2xl border-4 border-purple-500 transition-transform duration-500 hover:scale-110"
                    src={item.imageUrl}
                    width={320}
                    height={320}
                    alt={item.title}
                  />

                  <h4 className="h4 mb-4 text-white">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>


      {/* <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div> */}
    </div>
  </Section>
);

export default Esportes;
