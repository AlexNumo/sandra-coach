import Schedule from "Components/Schedule/Schedule";
import ScheduleGet from "Components/ScheduleGet/ScheduleGet";

const SchedulePage = () => {
  return (
    <div>
      <Schedule />
      <div
        style={{ marginTop: "15px"}}
      ></div>
      <ScheduleGet/>
    </div>
  )
};

export default SchedulePage;