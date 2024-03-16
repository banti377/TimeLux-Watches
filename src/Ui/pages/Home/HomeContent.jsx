import React, { useEffect, useState } from "react";
import CardCom from "../../components/Card/CardCom";
import WatchData from "../../../utils/watch.json";
import { useNavigate } from "react-router-dom";

export default function HomeContent() {
  const [Data, setData] = useState(WatchData);
  const navigate = useNavigate();
  useEffect(() => {
    setData(Data);
  }, [Data]);

  return (
    <>
      <div
        style={{ backgroundColor: "#f5f5dc" }}
        className="d-flex flex-wrap justify-content-around"
      >
        {Data?.map?.((e, i) => {
          return (
            <CardCom
              key={i + Math.random()}
              data={e}
              onclick={() => navigate(`productpage/${e?._id}`)}
            />
          );
        })}
      </div>
    </>
  );
}
