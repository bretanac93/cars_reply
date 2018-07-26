let Demand = require('../models/Demand');

exports.getAll = (req, res) => {
    Demand.find((err, data) => {
        if (err)
            res.status(400);
        res.json({ data });
    })
};

exports.getById = (req, res) => {
    Demand.findById(req.params.id, (err, data) => {
        if (err)
            res.status(400);
        if (!data) 
            res.status(404).send("Not found");
        
        res.json({ data });
    })
}

exports.save = (req, res) => {
    res.send('Not implemented');
}

exports.update = (req, res) => {
    res.send('Not implemented');
}

exports.delete = (req, res) => {
    res.send('Not implemented');
}