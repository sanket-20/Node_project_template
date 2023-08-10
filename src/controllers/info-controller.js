const {StatusCodes } = require('http-status-codes');

// const info = (req, res) => {
//     return res.status(500).json({
//         success: true,
//         message: 'API is live',
//         error: {},
//         data: {}
//     });
// };

const info = (req, res) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: true,
        message: 'API is live',
        error: {},
        data: {}
    });
};

module.exports = {
    info
}