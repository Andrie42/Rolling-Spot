import nepalImg from "../assets/spotsImages/Nepal_SkatePark.jpg";
import colonImg from "../assets/spotsImages/Plaza_Colon.jpg";
import madridRioImg from "../assets/spotsImages/Madrid_Rio.jpg";

export const initialSpots = [
    {
    id: 1,
    name: "Plaza Colón",
    city: "Madrid",
    type: "Urbano",
    level: "Oruga",
    description: "Suelo liso y varios bordillos.",
    surface: "Liso",
    lighting: true,
    covered: false,
    lat: 40.4253,
    lng: -3.6902,
    image: colonImg
    },
    {
        id: 2,
        name: "Madrid Río",
        city: "Madrid",
        type: "Plano",
        level: "Todos",
        description: "Zona amplia para practicar.",
        surface: "Liso",
        lighting: true,
        covered: false,
        lat: 40.3990,
        lng: -3.7205,
        image: madridRioImg
    },
    {
        id: 3,
        name: "Nepal Skatepark",
        city: "Alcobendas",
        type: "Parque",
        level: "Mariposa",
        description: "Rampas y Bowl histórico conocido como Nepal.",
        surface: "Liso",
        lighting: true,
        covered: false,
        lat: 40.5523,
        lng: -3.6455,
        image: nepalImg
    }
]