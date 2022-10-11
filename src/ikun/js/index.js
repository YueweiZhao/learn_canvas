import "../style/index.css";

const draw = () => {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.save();
    // 建立以中心为原点的笛卡尔坐标系
    ctx.translate(150, 200);
    ctx.scale(1, -1);

    // 脸
    ctx.beginPath();
    ctx.fillStyle = "rgba(248, 213, 59, 1)";
    ctx.arc(0, 0, 50, 0, Math.PI * 2, true);
    ctx.fill();

    // 嘴
    ctx.beginPath();
    ctx.fillStyle = "rgba(235, 127, 64, 1)";
    ctx.moveTo(-20, -20);
    ctx.bezierCurveTo(-10, -10, 10, -10, 20, -20);
    ctx.moveTo(20, -20);
    ctx.bezierCurveTo(10, -30, -10, -30, -20, -20);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "rgba(102, 52, 8, 1)";
    ctx.moveTo(18, -20);
    ctx.bezierCurveTo(10, -22, -10, -22, -18, -20);
    ctx.stroke();

    // 眼睛
    ctx.beginPath();
    ctx.fillStyle = "rgba(245, 245, 245, 1)";
    ctx.moveTo(36, 3);
    ctx.arc(18, 3, 18, 0, Math.PI * 2, true);
    ctx.moveTo(-36, 3);
    ctx.arc(-18, 3, 18, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "rgba(20, 12, 9, 1)";
    ctx.moveTo(25, 3);
    ctx.arc(18, 3, 7, 0, Math.PI * 2, true);
    ctx.moveTo(-25, 3);
    ctx.arc(-18, 3, 7, 0, Math.PI * 2, true);
    ctx.fill();

    // 腮红
    ctx.beginPath();
    ctx.fillStyle = "rgba(154, 30, 33, 1)";
    ctx.moveTo(-50, 0);
    ctx.bezierCurveTo(-40, -10, -30, -20, -25, -25 * Math.sqrt(3));
    ctx.moveTo(-25, -25 * Math.sqrt(3));
    ctx.arc(0, 0, 50, Math.PI, Math.PI * (1 + 1 / 3), false);
    ctx.moveTo(50, 0);
    ctx.bezierCurveTo(40, -10, 30, -20, 25, -25 * Math.sqrt(3));
    ctx.moveTo(25, -25 * Math.sqrt(3));
    ctx.arc(0, 0, 50, Math.PI * (1 + 2 / 3), 0, false);
    ctx.fill();

    // 头发
    ctx.beginPath();
    ctx.strokeStyle = "rgba(204, 208, 203, 0.4)";
    for (let i = 0; i < 150; i++) {
      ctx.moveTo(0, 50);
      ctx.bezierCurveTo(-i / 5, 60 + i / 5, -40 - i / 5, 10, -32 - i / 5, 0);
      ctx.moveTo(0, 50);
      ctx.bezierCurveTo(i / 5, 60 + i / 5, 40 + i / 5, 10, 32 + i / 5, 0);
    }
    ctx.stroke();

    // 上衣
    ctx.beginPath();
    ctx.fillStyle = "rgba(7, 7, 5, 1)";
    ctx.strokeStyle = "rgba(7, 7, 5, 1)";
    ctx.moveTo(-45, -35);
    ctx.bezierCurveTo(-35, -35, -20, -30, 0, -40);
    ctx.bezierCurveTo(20, -45, 35, -35, 45, -35);
    ctx.arc(45, -39, 4, Math.PI / 2, 0, true);
    ctx.bezierCurveTo(49, -45, 40, -50, 30, -60);
    ctx.bezierCurveTo(45, -70, 42, -90, 40, -100);
    ctx.arc(34, -100, 6, 0, Math.PI, true);
    ctx.bezierCurveTo(10, -115, -10, -115, -30, -100);
    // ctx.moveTo(-25, -25 * Math.sqrt(3));
    // ctx.arc(0, 0, 50, Math.PI, Math.PI * (1 + 1 / 3), false);
    // ctx.moveTo(50, 0);
    // ctx.bezierCurveTo(40, -10, 30, -20, 25, -25 * Math.sqrt(3));
    // ctx.moveTo(25, -25 * Math.sqrt(3));
    // ctx.arc(0, 0, 50, Math.PI * (1 + 2 / 3), 0, false);
    ctx.stroke();
    // ctx.fill();
  }
};

draw();
