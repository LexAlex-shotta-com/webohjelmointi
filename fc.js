// Kamera seuraa pelaajaa ja palloa, vino kulma
function updateCamera() {
    let targetX = player.x - WIDTH/2;
    let targetY = player.y - HEIGHT/2 - 50; // vähän ylös katsottuna
    let ballFactorX = (ball.x - player.x) * 0.2;
    let ballFactorY = (ball.y - player.y) * 0.2;

    camera.x += (targetX + ballFactorX - camera.x) * 0.08;
    camera.y += (targetY + ballFactorY - camera.y) * 0.08;

    // Zoom dynaaminen
    let distToGoal = WIDTH - player.x;
    camera.zoom = 1.0 + Math.min(0.3, (300 - distToGoal)/1000);
}
updateCamera();
draw();
// Pelaaja
ctx.shadowColor = "rgba(0,0,0,0.3)";
ctx.shadowBlur = 8;
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 4;