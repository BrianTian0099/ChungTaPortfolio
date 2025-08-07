import "./Accomplishment.css";

const Accomplishment = () => {
  return (
    <section className="Accomplishment_Section">
    <div className="accomplishment__wrapper">
      <span className="accomplishment__title">重要＆工作經歷</span>
      <div className="accomplishment__item">
        <div className="accomplishment__year"><span>20</span><span>25</span></div>
        <div className="accomplishment__content">
          <div className="accomplishment__position"><span>Product designer (UI/UX)</span></div>
          <span className="accomplishment__description">
            （因日方總公司全球策略調整，台灣公司解散，設計職位同樣將7月同步終止，若有機會面試將附紙本主管推薦函，或https://reurl.cc/Y36DYl瀏覽）<br /><br />
            任職於票務系統公司，服務涵蓋多類型活動的票務銷售，亦為某大型展覽館的長期合作夥伴。
            作為唯一產品設計師，主導企業內部票務後台與公告系統的 UX/UI
            規劃與優化，負責從使用流程設計、資訊架構規劃到 HTML/CSS
            切版協作，並與工程團隊密切配合，針對互動細節與視覺一致性進行迭代。
            <br />
            【代表項目】 <br /> ✦
            主導「Dashboard-公告中心模組」設計，獨立完成使用情境梳理、功能規劃與畫面交付<br />
            ✦ 優化票務後台資訊架構與操作流程，降低使用門檻、提升維運效率
          </span>
        </div>
      </div>
    </div>
  </section>  
  );
};
export default Accomplishment;
