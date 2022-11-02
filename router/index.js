import express from 'express';
import {
    
    paginaInicio, 
    paginaNosotros, 
    paginaViajes,
    paginaTestimoniales, 
    paginaDetalleViaje
    
    }
    
    from '../controller/paginascontroller.js';

import {
    guardarTestimonial
} from '../controller/testimonialescontroller.js'

const router = express.Router();

router.get('/',paginaInicio );  //req - ño que enviamos : res - lo que express nos responde






router.get('/nosotros', paginaNosotros);


router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.post('/testimoniales', guardarTestimonial)




router.get('/Testimoniales', paginaTestimoniales )


export default router;