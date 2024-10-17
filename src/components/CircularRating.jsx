import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularRating({ value, text }) {
  return (
    <div className="w-[30px] h-[30px]">
      <CircularProgressbar
        value={value}
        text={text}
        background
        backgroundPadding={6}
        styles={buildStyles({
          textSize: "40px",
        })}
      />
    </div>
  );
}

export default CircularRating;
