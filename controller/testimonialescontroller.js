import { Testimonial } from '../modelos/Testimoniales.js'

const guardarTestimonial = async (req, res)=>{

    //validar

    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === ''){
       errores.push({mensaje : 'El nombre esta vacio'});
    }

    if(correo.trim() === ''){
        errores.push({mensaje : 'El correo esta vacio'});
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje : 'El mensaje esta vacio'});
    }

    if(errores.length > 0){
            const testimoniales = await Testimonial.findAll();

            //mostrar la vista de errores
            res.render('testimoniales',{
                pagina: 'Testimoniales',
                errores,
                nombre, 
                correo,
                mensaje, 
                testimoniales

            });
    }else{
        //almacenarlo en la base de datos

        try {
            await Testimonial.create({
                nombre,
                correo, 
                mensaje
            });

            res.redirect('/testimoniales')
        } catch(error){
            console.error(error)
        }
    }
}


export {
    guardarTestimonial
}