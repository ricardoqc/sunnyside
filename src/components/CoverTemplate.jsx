import headerDesktop from "../assets/images/desktop/image-header.jpg";
import headerMobile from "../assets/images/mobile/image-header.jpg";
import arrowDown from "../assets/images/icon-arrow-down.svg";

export const CoverTemplate = () => {
  return (
    <section>
      <picture>
        <source media="(max-width:640px)" srcSet={headerMobile} />
        <source media="(min-width:641px)" srcSet={headerDesktop} />
        <img src={headerDesktop} alt="Image header" />
      </picture>
      <div className="absolute w-[340px] sm:w-[600px] md:w-[700px] left-0 right-0 mx-auto top-[120px] md:top-[150px] lg:top-[200px] flex-wrap text-center ">
        <p className="text-[35px] lg:text-[50px] text-white font-Fraunces uppercase font-bold tracking-[7px] pb-10 sm:pb-3 lg:pb-20">
          Somos Funval
        </p>
        <img className="mx-auto" src={arrowDown} alt="Arrow Down" />
      </div>
    </section>
  );
};
