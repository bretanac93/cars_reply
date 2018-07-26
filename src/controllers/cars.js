let Car = require('../models/Car');

exports.getAll = (req, res) => {
    Car.find((err, data) => {
        if (err)
            res.status(400);
        res.json({ data });
    })
};

exports.getById = (req, res) => {
    Car.findById(req.params.id, (err, data) => {
        if (err)
            res.status(400);
        if (!data) 
            res.status(404).send("Not found");
        
        res.json({ data });
    })
}

exports.save = (req, res) => {
    const {
        brand,
        model,
        engine,
        infotainment_system,
        interior_design,
        location,
        minute_price
    } = req.body;

    let car = new Car({
        brand,
        model,
        engine,
        infotainment_system,
        interior_design,
        location,
        minute_price,
        picture: 'https://picsum.photos/300/300?image=0'
    });

    car.save((err, data) => {
        if (err)
            res.status(400);
        
        res.json({ data });
    })
}

exports.update = (req, res) => {
    res.send('Not implemented');
}

exports.delete = (req, res) => {
    res.send('Not implemented');
}