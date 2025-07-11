import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "../assets/Frame 55.png";
import "./AboutSection.css";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      {<div className="about-section-wrapper">
        <h2>關於我</h2>
        <div className="aboutWrapperGroup">
          <img src={aboutImg} alt="" />
          <div>
            <p className="aboutSectionP1">
              我是一位擁有工業設計背景的 UI/UX 設計師，熱衷於打造邏輯清晰、
              情感貼近的數位體驗。設計於我而言，不只是視覺美感，而是解構複雜、連結人心的過程。
            </p>
            <p className="aboutSectionP2">
              喜歡深入理解使用者的行為與需求，並結合前端技術將設計落實。近年持續關注
              iOS、 互動裝置與 AI 工具，期望讓產品更加貼近未來與人性。
            </p>
          </div>
        </div>
      </div>}
    </section>
  );
};

export default AboutSection;
