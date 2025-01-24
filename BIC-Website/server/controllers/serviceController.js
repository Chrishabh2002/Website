const Service = require('../models/Service');

exports.getServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

exports.getServiceById = async (req, res) => {
  const service = await Service.findById(req.params.id);
  res.json(service);
};