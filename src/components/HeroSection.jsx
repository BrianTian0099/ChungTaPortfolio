import "./HeroSection.css";
import profileImage from "../assets/ChatGPT Image 2025年7月9日 下午02_36_19 (1) 1.png";

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="heroGridWrapper">
        <div className="heroGridLeft">
          {/* <div className="heroGridLeftImg"><img src={profileImage} alt="" /></div> */}
          <div className="heroGridDraw"></div>
          <div className="heroGridLeftText">
            <span>a learner</span>
            <span>a Designer</span>
            <span>a Developer</span>
            <span>a Creator</span>
          </div>
        </div>
        <div className="heroGridRight_Top">
          <div className="heroGridLeftImg">
            <img src={profileImage} alt="" />
          </div>
          <div className="heroRightScript">
            <div className="heroGridTittle">
              <span>UX/UI Designer</span>
              <br />
              <span className="heroName">Brian Tian</span>
            </div>
            <div className="heroAccomplishment">
              <div className="AccomplishmentGroup">IF得獎產品</div>
              <div className="AccomplishmentGroup">設計＆工程協作</div>
              <div className="AccomplishmentGroup">系統性思維</div>
            </div>
          </div>
        </div>
        <div className="heroGridArticle">
          <span>
            畢業於工業設計，轉戰數位產品後，票務系統看、後台系統模組的 UX/UI。
            <br />
            我相信設計不只是美，更是一種「把複雜變簡單」的溝通與重構。
          </span>
          <div className="heroNotice"><span>7月作品集持續優化中</span></div>
        </div>
      </div>
      <div className="RWDBackground">
        <div className="heroGridDraw"></div>
        <div className="heroGridLeftText">
          <span>a learner</span>
          <span>a Designer</span>
          <span>a Developer</span>
          <span>a Creator</span>
        </div>
      </div>
      {/* <div className="backgroundText">
        <span>a learner</span>
        <span>a Designer</span>
        <span>a Developer</span>
        <span>a Creator</span>
      </div>
      <div className="text-content">
        <h1>
          2025 作品集 7月優化中
          <br />
          <span className="subTitle">UX/UI Designer · System Thinker</span>
        </h1>
        <p className="quote">讓設計優化體驗</p>
        <p className="shortIntro">
          畢業於工業設計，轉戰數位產品後，票務系統看、後台系統模組的 UX/UI。<br />
          我相信設計不只是美，更是一種「把複雜變簡單」的溝通與重構。
        </p>
        <div className="headImgGroup">
          <img className="headImg floating" src={profileImage} alt="profile1" />
          <img className="headImg floating" src={profileImage} alt="profile2" />
          <img className="headImg floating delay" src={profileImage} alt="profile3" />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
