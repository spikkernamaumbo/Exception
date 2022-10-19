
const Track = require("../models/track");

exports.listFiles = async (req, res) => {

  const allSongs = Track.findAndCountAll({
    attributes: ["title", "releaseDate", "url"],
  });
  if ((await allSongs).length == 0) {
    res.status(401).json([]);
    return;
  }

  allSongs
    .then((response) => {
      if (response) {
        res.status(200).json({
          message: "the list of songs",
          details: response,
        });
      } else {
        res.status(400).json([]);
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

exports.findTrack = async(req,res)=>{
const title = req.params
  const track = Track.findOne({
    where:{
      title
    }
  });
  track.then(res=>{
    if (!res) {
      res.status(401).send({
        message: [],
      });
    }
    res.status(200).json({
      message: success,
      details: Track,
    });
  })
}