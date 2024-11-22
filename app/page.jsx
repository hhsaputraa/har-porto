import { Button } from "@/components/ui/button";
import { FiDownload, FiEye } from "react-icons/fi";

//component
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl"> Backend Developer</span>
            <h1 class="h1 my-2">
              Hello I'm <br /> <span class="text-accent">Hari Handika</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I'm active student in the 7th semester of the information system from Bina Sarana University <br />
              interested in becoming a full-stack web developer and currently learning a lot to become one
            </p>

            {/* button */}

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="https://drive.google.com/file/d/1zR-gRfvSbvQ9-fpoIg_oTYgDL0dFuDcp/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                {" "}
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <FiEye className="text-xl" />
                  <span>Preview CV</span>
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-nome mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  );
};

export default Home;
