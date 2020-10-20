const fs = require("fs");

// STREAM MODE // INDICADO (MÉTODO ASSÍNCRONO)
fs.createReadStream("./assets/DOG.png")
  .pipe(fs.createWriteStream("./assets/DOG_Streamado.png"))
  .on("finish", () => {
    console.log("Stream de imagem concluída");
  });
