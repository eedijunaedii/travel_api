const db = require('../models');
const Terminal = db.Terminal;

exports.NewCity = async (req, res) => {
    if (!req.body.name) {
      res.status(400).send({
        request_status: false,
        message: 'Isi nama kota terlebih dahulu',
      });
      return;
    }
  
    const inputCity = {
      name: req.body.name,
    };
  
    const createCity = await Terminal.create(inputCity);
  
    console.log('Berhasil mendaftarkan kota');
    res.send({
      request_status: true,
      message: 'kota berhasil dibuat.',
      data: createCity
    });
  };