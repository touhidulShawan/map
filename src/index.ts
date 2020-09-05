import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

const mapDiv = document.getElementById("map") as HTMLDivElement;

const user = new User();
const company = new Company();

const map = new Map(mapDiv);

map.addMarker(user);
map.addMarker(company);
