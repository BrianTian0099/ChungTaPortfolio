import "./HeroSection.css";
import profileImage from "../assets/chatgpt_image_20250709.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="text-content">
        <h1>
          Brian Tian
          <br />
          <span className="subTitle">UX/UI Designer · System Thinker</span>
        </h1>
        <p className="quote">讓體驗為生活增添更多色彩</p>
        <p className="shortIntro">
          畢業於工業設計，轉戰數位產品後，主導企業後台系統模組的 UX/UI 重設與落地。<br />
          我相信設計不只是美，更是一種「把複雜變簡單」的溝通與重構。
        </p>
        <div className="headImgGroup">
          <img className="headImg floating" src={profileImage} alt="profile1" />
          <img className="headImg floating" src={profileImage} alt="profile2" />
          <img className="headImg floating delay" src={profileImage} alt="profile3" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;