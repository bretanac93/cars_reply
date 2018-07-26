let Demand = require('../models/Demand');

exports.getAll = (req, res) => {
    Demand.find((err, data) => {
        if (err)
            res.status(400).send();
        res.json({ data });
    })
};

exports.getById = (req, res) => {
    Demand.findById(req.params.id, (err, data) => {
        if (err)
            res.status(400).send();
        if (!data) 
            res.status(404).send("Not found");
        
        res.json({ data });
    })
}

exports.save = (req, res) => {
    // new Date('1993-04-25 13:00')
    let {
        pickup_date,
        dropoff_date,
        pickup_location,
        dropoff_location,
        user,
        car,
    } = req.body;

    let demand = new Demand({
        pickup_date: new Date(pickup_date),
        dropoff_date: new Date(dropoff_date),
        pickup_location,
        dropoff_location,
        user,
        car,
    });

    demand.save((err, data) => {
        if (err)
            res.status(400).send();
        
        res.json({ data });
    })
}

exports.update = (req, res) => {
    res.send('Not implemented');
}

exports.delete = (req, res) => {
    res.send('Not implemented');
}