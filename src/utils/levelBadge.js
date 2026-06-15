export function getLevelClass(level) {
    switch (level) {
        case "Principiante":
            return "badge-principiante";
        case "Intermedio":
            return "badge-intermedio";
        case "Avanzado":
            return "badge-avanzado";
        default:
            return "";
    }
}