const svg = document.getElementById("svgCanvas");
const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");

let isDrawing = false;
let currentPath = null;
let pathData = "";

// ✅ Proper SVG coordinate conversion
function getSVGCoords(evt) {
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX;
    pt.y = evt.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
}

// Mouse down → start drawing
svg.addEventListener("mousedown", (e) => {
    isDrawing = true;

    const { x, y } = getSVGCoords(e);

    pathData = `M ${x} ${y}`;

    currentPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
    );

    currentPath.setAttribute("d", pathData);
    currentPath.setAttribute("stroke", colorPicker.value);
    currentPath.setAttribute("stroke-width", brushSize.value);
    currentPath.setAttribute("fill", "none");
    currentPath.setAttribute("stroke-linecap", "round");
    currentPath.setAttribute("stroke-linejoin", "round");

    svg.appendChild(currentPath);
});

// Mouse move → draw
svg.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;

    const { x, y } = getSVGCoords(e);
    pathData += ` L ${x} ${y}`;
    currentPath.setAttribute("d", pathData);
});

// Mouse up → stop drawing
svg.addEventListener("mouseup", () => {
    isDrawing = false;
    currentPath = null;
});

// Undo
function undo() {
    if (svg.lastChild) {
        svg.removeChild(svg.lastChild);
    }
}
