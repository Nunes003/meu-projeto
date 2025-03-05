export default function MyTools() {
  return (
    <div className="my-tools">
      <div className="about-me">
        <img
          className="about-me-icon"
          src="/builder-code-design-svgrepo-com.svg"
          alt="eu"
        />
        <span className="about-me-text">Ferramentas</span>
      </div>

      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
      </div>
    </div>
  );
}
