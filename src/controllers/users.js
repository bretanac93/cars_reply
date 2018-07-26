let User = require('../models/User');
let Demand = require('../models/Demand');

exports.getAll = (req, res) => {
    User.find((err, data) => {
        if (err)
            res.status(400).send();
        res.json({ data });
    })
};

exports.getById = (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if (err)
            res.status(400).send();
        if (!data) 
            res.status(404).send("Not found");
        
        res.json({ data });
    })
}

exports.save = (req, res) => {
    let {
        name,
        gender,
        age,
        email,
        password,
        preferences
    } = req.body;

    let user = new User({
        name,
        gender,
        age,
        email,
        password,
        preferences: preferences || {}
    });
    user.save((err, data) => {
        if (err)
            res.status(400).send();
        
        res.json({ data });
    })
}

exports.update = (req, res) => {
    res.send('Not implemented');
}

exports.delete = (req, res) => {
    const { id } = req.params;
    User.findById(id, (err, user) => {

        if (err)
            res.status(400).send();
        if (!user)
            res.status(404).send();
        // The user exists, check for demands made by the forementioned

        Demand.findOne({ user: id }, (err, demand) => {
            if (err)
                res.status(400).send();
            console.log(demand);
            if (!demand) {
                // No demands for that user, proceed to remove it
            }
            res.status(400).send("User with demands, not possible to remove");
        })
    })
}