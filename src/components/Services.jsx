import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { produtos, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="product">
      <div className="container">
        <Heading className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider"
          title="Do Campus para o Mundo"
          text="Tecnologia e Estilo para Quem Não Sabe Ficar Parado!"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {produtos.map((produto) => (
                <div
                key={produto.id}
                className="relative z-1 flex flex-col items-center p-6 border border-n-1/10 rounded-3xl overflow-hidden shadow-lg "
              >
                <img
                  src={produto.imageUrl}
                  alt={produto.nome}
                  className="w-full h-48 object-cover rounded-xl mb-4 "
                />
                <h4 className="font-code text-sm font-bold text-white uppercase tracking-wider">
                  {produto.nome}
                </h4>
                <p className="text-lg font-bold text-green-600">{produto.preco}</p>
                <div className="flex gap-3 mt-4">
                  <a
                    href={produto.linkWpp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={produto.linkSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    Comprar
                  </a>
                </div>
              </div>
              ))}
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
