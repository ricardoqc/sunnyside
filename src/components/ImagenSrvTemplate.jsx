export const ImagenSrvTemplate = ({ imageMobile, imageDesktop, order }) => {
    return (
        <picture className={order}>
            <source media="(max-width:669px )" srcSet={imageMobile} />
            <source media="(min-width:700px )" srcSet={imageDesktop} />
            <img src={imageMobile} alt="Service Image" className="sm:bg-cover" />
        </picture>
    );
};

