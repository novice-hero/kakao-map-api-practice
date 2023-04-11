import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Main = () => {
  const [position, setPosition] = useState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
        onClick={(_t, e) =>
          setPosition({
            lat: e.latLng.getLat(),
            lng: e.latLng.getLng(),
          })
        }
      >
        {position && (
          <MapMarker
            position={position}
            clickable={true}
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          >
            {isOpen && (
              <div style={{ minWidth: "150px" }}>
                <img
                  alt="close"
                  width="14"
                  height="13"
                  src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => setIsOpen(false)}
                />
                <div style={{ padding: "5px", color: "#000" }}>
                  Hello World!
                </div>
              </div>
            )}
          </MapMarker>
        )}
      </Map>
      {position && (
        <p>
          {"클릭한 위치의 위도는 " +
            position.lat +
            " 이고, 경도는 " +
            position.lng +
            " 입니다"}
        </p>
      )}
    </>
  );
};

export default Main;
