const axios = require("axios");
const Videogame = require("../models/Videogame");
const Genre = require("../models/Genre");

const videogamesApi = async (req, res) => {
  const api = await axios.get(
    "https://api.rawg.io/api/games?key=538ff68ac2e34b7d9de0a02c38ec051f"
  );
  const map = await api.data.results.map((el) => {
    return {
      name: el.name,
      description: el.description_raw,
      released: el.released,
      image:
        el.background_image ||
        "https://cdn.drawception.com/drawings/fhrR1T1nq6.png",
      rating: el.rating,
      platforms: el.platforms.map((i) => i.platform.name),
      genres:
        el.genres.length > 0 ? el.genres.map((e) => e.name) : ["Not genres"],
    };
  });
  return res.status(200).json(map);
};

const videogamesDb = async () => {
  return await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const allVideogames = async () => {
  const apiInfo = await videogamesApi();
  const infoDb = await videogamesDb();
  const allInfo = apiInfo.concat(infoDb);
  return allInfo;
};

const postVideogame = async (req, res) => {
  const { name, description, released, rating, platforms, genres, image } =
    req.body;
  const createVideogame = await Videogame.create({
    name,
    description,
    released,
    rating,
    platforms,
    genres,
    image,
  });
  const genreGame = await Genre.findAll({
    where: {
      name: genres,
    },
  });
};
module.exports = {
  videogamesApi,
  allVideogames,
};
