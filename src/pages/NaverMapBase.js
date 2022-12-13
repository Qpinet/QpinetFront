import React, { useCallback, useEffect } from "react";

function NaverMapBase({ mapID, defaultCoord, mapStyle }) {
    const naverMapLoad = useCallback(() => {
        const { lat, lon } = defaultCoord;
        new window.naver.maps.Map(mapID, {
            center: new window.naver.maps.LatLng(lat, lon),
            zoom: 15,
        });
    }, [mapID, defaultCoord]);
    useEffect(() => {
        const $script = document.createElement("script");
        $script.async = true;
        $script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENTID}`;
        document.head.appendChild($script);

        $script.addEventListener("load", naverMapLoad);
    }, [naverMapLoad]);
    return <div id={mapID} style={mapStyle}></div>;
}

export default NaverMapBase;
