import NaverMapBase from "./NaverMapBase";
function Main() {
    return (
        <NaverMapBase
            mapID={"myMap"}
            defaultCoord={{
                lat: 37.554722,
                lon: 126.970833,
            }}
            mapStyle={{
                width: "100%",
                height: "500px",
            }}></NaverMapBase>
    );
}

export default Main;
