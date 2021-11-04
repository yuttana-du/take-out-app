import Timer from "./Timer";

const Header = (props) => {
  return (
    <div className="flex flex-row justify-between align-text-top mt-10 ">
      <div className="flex flex-col justify-between tracking-A8">
        <h4 className="h-h22 font-header text-BlackTortoise text-header font-bold leading-A18 ">
          Express Items
        </h4>
        {/* ไม่มีฟอนต์ของheader  ด้านล่างความสูงยังไม่30px*/}
        <div className="h-h30 font-body text-about text-DeepGrey leading-A15 w-w212">
          Order up to 8 of these items from{" "}
          <u className="text-RedVermilionBird font-semibold">Katsuei</u> and
          receive your order by{" "}
          <span className="text-BlackTortoise font-semibold">10:00pm</span>
        </div>
      </div>
      <Timer />
    </div>
  );
};

export default Header;
