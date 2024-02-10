import { StyledHeaderScheduler, StyledHeaderSchedulerImage } from "./styles";
import SegelIcon from "C:/Users/Samuel/Desktop/Diverse Projekt/Scheduler/src/assets/icons/segel.png";

const HeaderScheduler = () => {
  return (
    <StyledHeaderScheduler>
      <StyledHeaderSchedulerImage src={SegelIcon} />
    </StyledHeaderScheduler>
  );
};

export default HeaderScheduler;
