// jshint ignore:start
const { Test, Sequelize } = require('../../models');
const Op = Sequelize.Op;

let test = {};

// ========== Method Get All ========== //
test.getAll = async (req, res) => {
  let { keyword } = req.query;

  try {
    let where = {};
    if (keyword) {
      where = {
        [Op.or]: {
          name: {
            [Op.like]: '%' + keyword + '%',
          },
          code: {
            [Op.like]: '%' + keyword + '%',
          },
        },
      };
    }

    // console.log(where);

    let data = await Test.findAll({
      where,
    });

    return res.status(200).json({
      status: 'Success',
      message: 'Get All Data Successfully',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Failed',
      data: error,
    });
  }
};

// ========== Method Get By ID ========== //
test.getById = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Test.findOne({
      where: {
        id: id,
      },
    });

    return res.status(200).json({
      status: 'Success',
      message: 'Get Data By Id Successfully',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Failed',
      data: error,
    });
  }
};

// ========== Method Create ========== //
test.store = async (req, res) => {
  try {
    let body = req.body;
    let data = await Test.create(body);

    return res.status(200).json({
      status: 'Success',
      message: 'Create Data Successfully',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Failed',
      data: error,
    });
  }
};

// ========== Method Update ========== //
test.update = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;

    await Test.update(body, {
      where: {
        id: id,
      },
    });
    let updatedData = await Test.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      status: 'Success',
      message: 'Update Data Successfully',
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Failed',
      data: error,
    });
  }
};

// ========== Method Delete ========== //
test.destroy = async (req, res) => {
  try {
    let id = req.params.id;

    await Test.destroy({
      where: {
        id: id,
      },
    });
    return res.json({
      status: 'Success',
      message: 'Delete Data Successfully',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Failed',
      data: error,
    });
  }
};

module.exports = test;
