import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
import L from "leaflet"
let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
})

L.Marker.prototype.options.icon = DefaultIcon

const Map = () => {
	const center = [24.70300714748863, 90.36966291202745]
	return (
		<MapContainer
			center={center}
			zoom={10}
			style={{ width: "100vw", height: "50vh" }}
		>
			<TileLayer
				url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}@2x.jpg?key=jJQ2Gut7FQMdZetXTlG1"
				attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
			/>
			<Marker position={center}>
				<Popup>"Our warehouses location"</Popup>
			</Marker>
		</MapContainer>
	)
}

export default Map
