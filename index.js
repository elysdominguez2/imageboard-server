const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const imageRouter = require("./routers/image"); //PARA LOS ROUTERS TUVE
const userRouter = require("./routers/user"); //QUE AGREGAR ESTAS
app.use("/image", imageRouter); //CUATRO LINEAS
app.use("/user", userRouter); //TODAS

app.listen(PORT, () => {
  console.log(`Server started in port: ${PORT}`);
});
