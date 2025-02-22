import "./FindUs.scss";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState, useCallback } from "react";
import {Link} from "react-router-dom"

const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const locations = [
  {
    id: "local-art-coop",
    name: "The Local Art Coop",
    street: "210 Mackenzie Ave",
    address: "Revelstoke, BC, V0E 2S0",
    phone: "(250) 814-9270",
    coordinates: { lat: 50.99837382381431, lng: -118.19555358084426 },
    link: "https://www.google.com/maps?sca_esv=671628d501de9159&output=search&q=local+art+coop+revel&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWp5u5rQsC2YJafWTbyNSy6G3Vsi155b_IyTtSTnvQaXi_LI9_Kdr9j35FzoRfcGp7yLPHrqpcEs7Xw89ZGoIhTjoQdfliKWNb9HyKQN1ejjUFqRBfodFscqB14Mx5yqVUnR1Y56HJSYx1ZL6xek8S_ssYD3aojcgYyQMU2W0HxdJnlPVxeh_iS2i4ux7otOt4maKvTiA&entry=mc&ved=1t:200715&ictx=111"
  },
  {
    id: "art-gallery-golden",
    name: "Art Gallery of Golden",
    street: "516 9th Avenue North",
    address: "Golden, BC, V0A 1H0",
    phone: "(250) 344-6186",
    coordinates: { lat: 51.30090479586987, lng: -116.96704213122216 },
    link:"https://www.google.com/maps/place/Art+Gallery+Of+Golden-Kicking+Horse+Culture/@51.3008847,-116.969601,17z/data=!4m6!3m5!1s0x5379bf9b8a644559:0xb5dbfc1273575b0f!8m2!3d51.3008847!4d-116.9670314!16s%2Fg%2F1wk6zfrk?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
  },
];

function FindUs() {
  const google_api_key = import.meta.env.VITE_MAPS_API_KEY;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: google_api_key,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <section className="find-us">
      <h2 className="find-us__title">Find Us</h2>
      <ul className="location">
        {locations.map((location) => (
          <li key={location.id} className="location__venue">
            <h3 className="location__name">{location.name}</h3>
            <p className="location__street">{location.street}</p>
            <p className="location__address">{location.address}</p>
            <p className="location__phone location__phone--art-coop">
              {location.phone}
            </p>
            <Link to={location.link} target="blank">
            <div className="location__map">
              <h3 className="location__directions">Get Directions</h3>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={location.coordinates}
                zoom={14}
                onLoad={onLoad}
              >
              </GoogleMap>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FindUs;
