import "../style/index.css";

const draw = () => {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    // 脸
    ctx.arc(100, 100, 50, 0, Math.PI * 2, true);
    // 嘴
    ctx.moveTo(65, 100);
    ctx.arc(100, 100, 35, Math.PI, Math.PI * 2, true);
    // 鼻子
    ctx.moveTo(110, 110);
    ctx.arc(100, 110, 10, 0, Math.PI * 2, true);
    // 眼睛
    ctx.moveTo(88, 80);
    ctx.arc(80, 80, 8, 0, Math.PI * 2, true);
    ctx.moveTo(128, 80);
    ctx.arc(120, 80, 8, 0, Math.PI * 2, true);
    ctx.stroke();

    ctx.beginPath();
    // 鼻孔
    ctx.moveTo(108, 110);
    ctx.arc(105, 110, 3, 0, Math.PI * 2, true);
    ctx.moveTo(98, 110);
    ctx.arc(95, 110, 3, 0, Math.PI * 2, true);
    // 眼珠
    ctx.moveTo(88, 80);
    ctx.arc(86, 80, 2, 0, Math.PI * 2, true);
    ctx.moveTo(128, 80);
    ctx.arc(126, 80, 2, 0, Math.PI * 2, true);
    ctx.fill();
  }
};

draw();
