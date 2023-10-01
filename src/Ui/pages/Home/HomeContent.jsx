import React, { useEffect, useState } from "react";
import CardCom from "../../components/CardCom";
import WatchData from "../../../utils/watch.json";

export default function HomeContent() {
  const [Data, setData] = useState(WatchData);

  return (
    <>
      <div
        style={{ backgroundColor: "#f5f5dc" }}
        className="d-flex flex-wrap justify-content-around"
      >
        {Data?.map?.((e, i) => {
          return <CardCom key={i + Math.random()} data={e} />;
        })}
      </div>
    </>
  );
}
