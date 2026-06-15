// Asocia cada nivel con un emoji

export function getLevelIcon(level) {
    switch (level) {
        case "Principiante":
            return "🐌";

        case "Intermedio":
            return "🦋";

        case "Avanzado":
            return "🦄";

        default:
            return "❓";
    }
}