module.exports.login = function(req, res) {
    res.status(200).json({
        login: 'You are logged in',
    });
};

module.exports.register = function(req, res) {
    res.status(200).json({
        register: 'You are in register page',
    });
};