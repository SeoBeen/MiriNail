import AR_bg from "../../assets/img/new_ar_bg.jpg";
import ArCard from "../../components/AR/ArCard";
const AR = () => {
  return (
    <div>
      <img
        src={AR_bg}
        alt=""
        style={{ position: "absolute", width: "100%", height: "70%" }}
      />
      <ArCard />
    </div>
  );
};
export default AR;
