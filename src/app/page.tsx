import ZoomableImage from "@/components/zoomableimage/ZoomableImage";
import { ExternalLink, Github, Gitlab, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col justify-items-center min-h-screen py-20 gap-16">
      <main className="flex flex-col gap-[32px] items-center mx-auto sm:items-start">
        <div className="flex flex-row items-center gap-16">
          <div className="-mt-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold">Lucas David</h1>
            
            <p className="text-lg sm:text-xl text-foreground mt-4">
              Analista Desenvolvedor Pleno/Sênior de Sistemas Full Stack
            </p>
            <p className="text-sm text-foreground/50 mt-2">
              Tribunal de Justiça do Rio Grande do Norte (via IncaaS)
            </p>
          </div>
          <img
            src="/profile.jpg"
            alt="Lucas David"
            className="rounded-full"
            width={180}
          />
        </div>

        <div className="flex gap-4 items-center flex-row -mt-18">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://github.com/LucasDavid173"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://gitlab.com/Lucasdavidlf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gitlab className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://www.linkedin.com/in/lucas-ferreira-701a222b8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BG9gl1i05RxKN7U6r8ADSSw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </main>

      <div className="flex flex-col items-center text-center w-full bg-foreground text-background py-8 gap-6">
        <blockquote className="italic text-background max-w-4xl px-4 text-lg mb-4">
          <p>
            Aplico diariamente um extenso conjunto de ferramentas para superar desafios
            complexos e garantir a qualidade e a segurança das soluções. Se você deseja
            entrar em contato comigo, sinta-se à vontade para me enviar uma mensagem
            através das minhas redes sociais.
          </p>
        </blockquote>
        <p className="text-background/70 text-justify sm:text-lg max-w-4xl px-4">
          No back-end, utilizo <strong>Java</strong> com <strong>Spring Boot</strong> e
          {" "}<strong>Hibernate</strong>, criando APIs REST robustas e escrevendo testes
          automatizados com <strong>JUnit</strong>, para assegurar a confiabilidade dos
          serviços; em conjunto com <strong>Node.js</strong>, integro sistemas legados
          via <strong>SOAP</strong>, quando necessário.
        </p>
        <p className="text-background/70 text-justify sm:text-lg max-w-4xl px-4">
          No front-end, desenvolvo interfaces responsivas e acessíveis em <strong>Angular</strong> {" "}
          (TypeScript) e <strong>React/Next.js</strong>, apoiando-me em <strong>Angular Material</strong>, 
          {" "}<strong>Tailwind CSS</strong> e <strong>Bootstrap</strong>, para acelerar a prototipação
          e manter consistência visual.
        </p>
        <p className="text-background/70 text-justify sm:text-lg max-w-4xl px-4">
          Para armazenamento e consulta de dados, projeto e otimizo schemas em <strong>PostgreSQL</strong> e <strong>MongoDB</strong>,
          enquanto <strong>Python</strong> (Pandas e Jupyter) me permite extrair, transformar e analisar grandes volumes
          de informações em pipelines de dados que alimentam relatórios de desempenho.
        </p>
        <p className="text-background/70 text-justify sm:text-lg max-w-4xl px-4">
          Além disso, configurei autenticação corporativa com Keycloak, acelerei processos
          de notificação via integração SMTP com Outlook e conduzi web scrapes para consolidar
          estatísticas de uso do DSpace 7 da UFRN. Antes disso, atuei na implementação de uma
          plataforma de sistemas de gestão internos para empresas, desenvolvendo módulos de
          cadastro, controle de processos e geração de relatórios gerenciais, com forte ênfase
          em escalabilidade e usabilidade.
        </p>
        <p className="text-background/70 text-justify sm:text-lg max-w-4xl px-4">
          Ao longo de todos esses projetos, colaboro estreitamente com equipes acadêmicas,
          administrativas e de negócio, traduzindo requisitos em soluções escaláveis, seguras e
          alinhadas aos objetivos estratégicos do TJRN e de outras organizações.
        </p>
      </div>

      <div className="flex flex-col items-center text-center w-full py-0 gap-6">
        <h2 className="text-2xl sm:text-3xl font-bold -mt-5">Projetos</h2>
        <p className="text-foreground/70 -mt-3 mb-5">Clique na imagem do projeto para exibi-la</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-row gap-6 max-w-4xl px-4">
            <ZoomableImage src="/thumbnail-incaas.png" alt="IncaaS" />
            <div className="flex flex-col text-left gap-2">
              <h2 className="text-xl font-bold">IncaaS</h2>

              <a className="inline-flex hover:underline hover:underline-offset-4"
                href="https://gitlab.com/JLaskera/single-page-nextjs"
                target="_blank"
                rel="noopener noreferrer"
              >Repositório<ExternalLink className="w-4 h-4 ml-2 mt-1" /></a>
            </div>
          </div>

          <div className="flex flex-row gap-6 max-w-4xl px-4">
            <ZoomableImage src="/thumbnail-easyhome.png" alt="Easy Home" />
            <div className="flex flex-col text-left gap-2">
              <h2 className="text-xl font-bold">EasyHome</h2>

              <a className="inline-flex hover:underline hover:underline-offset-4"
                href="https://gitlab.com/JLaskera/easyhome"
                target="_blank"
                rel="noopener noreferrer"
              >Repositório<ExternalLink className="w-4 h-4 ml-2 mt-1" /></a>
            </div>
          </div>

          <div className="flex flex-row gap-6 max-w-4xl px-4">
            <ZoomableImage src="/thumbnail-next360.png" alt="Nex360" />
            <div className="flex flex-col text-left gap-2">
              <h2 className="text-xl font-bold">Nex360</h2>

              <a className="inline-flex hover:underline hover:underline-offset-4"
                href="https://gitlab.com/JLaskera/next360-dev"
                target="_blank"
                rel="noopener noreferrer"
              >Repositório<ExternalLink className="w-4 h-4 ml-2 mt-1" /></a>
            </div>
          </div>

          <div className="flex flex-row gap-6 max-w-4xl px-4">
            <ZoomableImage src="/thumbnail-transparence.png" alt="Transparence Webpage" />
            <div className="flex flex-col text-left gap-2">
              <h2 className="text-xl font-bold">Transparence Webpage</h2>

              <a className="inline-flex hover:underline hover:underline-offset-4"
                href="https://gitlab.com/JLaskera/transparence-webpage"
                target="_blank"
                rel="noopener noreferrer"
              >Repositório<ExternalLink className="w-4 h-4 ml-2 mt-1" /></a>
            </div>
          </div>

          <div className="flex flex-row gap-6 max-w-4xl px-4">
            <ZoomableImage src="/thumbnail-buyit.jpg" alt="Buy It" thumbnailWidth={50} />
            <div className="flex flex-col text-left gap-2">
              <h2 className="text-xl font-bold">BuyIt</h2>

              <a className="inline-flex hover:underline hover:underline-offset-4"
                href="https://gitlab.com/JLaskera/BuyIt"
                target="_blank"
                rel="noopener noreferrer"
              >Repositório<ExternalLink className="w-4 h-4 ml-2 mt-1" /></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
