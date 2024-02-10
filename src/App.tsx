import { useCallback, useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import { createMockData } from "./mock/appMock";
import { ParsedDatesRange } from "./utils/getDatesRange";
import { ConfigFormValues, SchedulerData, SchedulerProjectData } from "./types/global";
import ConfigPanel from "./components/ConfigPanel";
import { StyledSchedulerFrame } from "./styles";
import HeaderScheduler from "./components/HeaderScheduler";
import { Scheduler } from ".";

function App() {
  const [data, setData] = useState<SchedulerData>([]);

  useEffect(() => {
    const temp: SchedulerData = [];

    for (let i = 0; i < 200; i++) {
      temp.push({
        id: i.toString(),
        label: {
          icon: "https://picsum.photos/24",
          title: "Hus",
          subtitle: i.toString()
        },
        data: [
          {
            id: i.toString(),
            startDate: new Date("2023-04-13T15:31:24.272Z"),
            endDate: new Date("2023-08-28T10:28:22.649Z"),
            occupancy: 3600,
            title: "Project A",
            subtitle: "Subtitle A",
            description: "array indexing Salad West Account",
            bgColor: "rgb(254,165,177)"
          }
        ]
      });
    }

    setData(temp);
  }, []);

  const handleFilterData = () => console.log(`Filters button was clicked.`);

  const handleTileClick = (data: SchedulerProjectData) =>
    console.log(
      `Item ${data.title} - ${data.subtitle} was clicked. \n==============\nStart date: ${data.startDate} \n==============\nEnd date: ${data.endDate}\n==============\nOccupancy: ${data.occupancy}`
    );

  return (
    <>
      <HeaderScheduler />
      <Scheduler
        data={data}
        isLoading={false}
        onTileClick={handleTileClick}
        onFilterData={handleFilterData}
        config={{ zoom: 0, maxRecordsPerPage: 200, lang: "sv" }}
        onItemClick={(data) => console.log("clicked: ", data)}
      />
    </>
  );
}

export default App;
