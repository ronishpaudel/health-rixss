import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin } from "lucide-react"; // Example Lucide React icon

const position: [number, number] = [33.1748, -96.6745]; // Latitude and Longitude for the address

// Function to create a data URL from an SVG string
const createSvgDataUrl = (svgString: string): string => {
  return `data:image/svg+xml;base64,${btoa(svgString)}`;
};

// Manually create the SVG string for the Lucide icon
const svgString = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin">
    <path d="M21 10c0 5-8 13-8 13s-8-8-8-13a8 8 0 1 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
`;

const customIcon = new L.Icon({
  iconUrl: createSvgDataUrl(svgString),
  iconSize: [30, 30], // Adjust size as needed
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const LeafletMapComponent: React.FC = () => {
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>4100 ELDORADO PKWY, STE 100-266, MCKINNEY TX 75070</Popup>
      </Marker>
    </MapContainer>
  );
};

export { LeafletMapComponent };
