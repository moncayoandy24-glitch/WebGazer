console.log("Iniciando WebGazer...");

if (typeof webgazer === "undefined") {

    console.error("WebGazer no está cargado.");

} else {

    console.log("WebGazer cargado correctamente.");

    webgazer
        .setGazeListener(function(data, elapsedTime) {

            if (data == null) {
                return;
            }

            const x = data.x;
            const y = data.y;

            console.log(
                "Mirada detectada:",
                Math.round(x),
                Math.round(y)
            );

            document.getElementById("coordenadas").textContent =
                "X: " + Math.round(x) +
                " | Y: " + Math.round(y);

        })
        .showVideo(true)
        .showFaceOverlay(true)
        .showFaceFeedbackBox(true)
        .begin();

    console.log("WebGazer iniciado correctamente.");
}