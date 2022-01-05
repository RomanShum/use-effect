import { useEffect, useState, useRef } from "react";

function Details(props) {
  const [detailsData, setDetailsData] = useState({});
  const [id, setId] = useState(0);
  const [load, setLoad] = useState(false);

  const intervalRef = useRef();

  useEffect(() => {
    setId(props.info.id);
  }, []);

  useEffect(() => {
    const new_id = props.info.id;
    if (new_id !== intervalRef.current) {
      setId(new_id);
      intervalRef.current = new_id;
      setLoad(true);
      detailsLoad(new_id);
    }
  }, [props.info]);

  const detailsLoad = () => {
    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info.id}.json`
    )
      .then((resp) => resp.json())
      .then(function (data) {
        setDetailsData(data);
        setLoad(false);
      });
  };

  if (load) {
    return <div className="load">Загрузка</div>;
  }

  return (
    <div className="details">
      {detailsData.id !== undefined ? (
        <>
          <img src={detailsData.avatar} alt={detailsData.name} />
          <p>{detailsData.name}</p>
          <p>City: {detailsData.details.city}</p>
          <p>Company: {detailsData.details.company}</p>
          <p>Position: {detailsData.details.position}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Details;
