const controller = {};
const Roommate = require('../../models/roommate');

controller.male = (req, res) => {
  Roommate
  .findByGender('Male')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.female = (req, res) => {
  Roommate
  .findByGender('Female')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.smoker = (req, res) => {
  Roommate
  .findBySmoker('Yes')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmDoesNotSmoke = (req, res) => {
  Roommate
  .findBySmoker('No')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmSleepsBefore10PM = (req, res) => {
  Roommate
  .findBySleep('Before 10pm')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmAge21to30 = (req, res) => {
  Roommate
  .findByAge('21 - 30')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmAge31to40 = (req, res) => {
  Roommate
  .findByAge('31 - 40')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmAge40plus = (req, res) => {
  Roommate
  .findByAge('41+')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.createRM = (req, res) => {
  Roommate
  .createRM(req.body.roommate)
  .then((roommate) => {
    res
    .status(201)
    .json(roommate);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
};

controller.rmShow = (req, res) => {
  Roommate
  .findAll()
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

module.exports = controller;
