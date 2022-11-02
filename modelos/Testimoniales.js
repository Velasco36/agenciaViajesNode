import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Testimonial = db.define('Testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});

//npm run dev (correr el programa)