import { Button } from "@/components/ui/button";
import type React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <section className="py-32">
        <div className="container text-center">
          <div className="mx-auto flex flex-col gap-6">
            <h1 className="text-3xl font-extrabold lg:text-6xl">
              Conheça o Sistema Progressivo de Jiu-Jitsu
            </h1>
            <p className="text-balance text-muted-foreground lg:text-lg">
              Aulas para todas as idades e níveis de experiência. Aprenda defesa
              pessoal, jiu-jitsu educacional e esportivo.
            </p>
          </div>
          <Button size="lg" className="mt-10" asChild>
            <a href="https://api.whatsapp.com/send/?phone=5551991265253&text&type=phone_number&app_absent=0">
              Marque uma aula experimental gratuita
            </a>
          </Button>
        </div>
      </section>
      <section className="pb-24 flex justify-center">
        <img src="horarios.jpeg" className="w-4/6" />
      </section>
      <section className="w-full flex justify-center h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1069427636658!2d-51.21689218712032!3d-30.033789630681063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197972651a453b%3A0x1195870ed3ae9c84!2sEscola%20de%20Jiu-Jitsu%20Azambuja-Behring!5e0!3m2!1spt-BR!2sbr!4v1736881101041!5m2!1spt-BR!2sbr"
          // style={{ border: 0, width: "100%", height: "600px" }}
          className="w-full sm:w-3/4 md:w-4/6 h-96"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Hero;
