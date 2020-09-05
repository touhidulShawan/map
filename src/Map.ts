interface Props {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(element: HTMLElement) {
    this.googleMap = new google.maps.Map(element, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }
  addMarker(props: Props): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: props.location.lat, lng: props.location.lng },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: props.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
