const jwt = require('jsonwebtoken');
const generarJWT = (usuario) => {
    return jwt.sing(
        {
            uid: usuario.id,
            rol: usuario.rol
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '8h'
        }
    );
};
module.exports = {
    generarJWT
};