exports.getAll = (req, res) => {
    res.json({
        data: [{}]
    })
};

exports.getById = (req, res) => {
    res.json({
        data: {
            id: req.params.id
        }
    })
}

exports.save = (req, res) => {
    res.send('Not implemented');
}