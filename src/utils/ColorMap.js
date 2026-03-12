const colorMap = {
    "red": "#CC0000",
    "white": "#FFFFFF",
    "blue": "#0000CC",
    "royal blue": "#4169E1",
    "navy blue": "#001F5B",
    "sky blue": "#87CEEB",
    "black": "#111111",
    "gold": "#FFD700",
    "claret": "#7B1C3E",
};

export const parseClubColors = (clubColors) => {
    return clubColors
        .split(" / ")
        .map(c => colorMap[c.toLowerCase()] ?? c.toLowerCase());
};