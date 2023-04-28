const express = require("express");
//rutas desde cualquier dominio
const cors = require("cors");
const { json, urlencoded } = express;
//servidor siendo ejecutado
const app = express();
//app escucha en puerto de env o en 8080
const port = process.env.PORT || 8080;

//src
const pokemonRoutes = require("./src/routes/pokemonRoutes");
const abilityRoutes = require("./src/routes/abilityRoutes");
const locationAreaRoutes = require("./src/routes/locationAreaRoutes");

const { MSG_RAIZ } = require("./src/utils/constants");

app.use(json());
app.use(urlencoded({ extended: true }));

//opciones cors
const corsOptions = {
  origin: "*",
  optionSucessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/api/pokemon", pokemonRoutes);
app.use("/api/ability", abilityRoutes);
app.use("/api/locationArea", locationAreaRoutes);

app.use("/", (req, res) => {
  res.send(MSG_RAIZ);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en ${port}`);
});
