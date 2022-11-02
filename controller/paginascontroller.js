import {Viaje} from '../modelos/viajes.js';
import {Testimonial} from '../modelos/Testimoniales.js';


const paginaInicio = async( req, res ) => {

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({ limit: 3}));
    promiseDB.push(Testimonial.findAll({ limit: 3}));

    try{
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina:'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1] 
        });

    } catch(error){
        console.error(error);
    }    
}

const paginaNosotros = ( req, res ) => {


    
    res.render('nosotros', {
        pagina: "Nosotros"

    });

};


const paginaViajes = async  ( req, res ) => {
    
        const viajes =  await Viaje.findAll();

        console.log(viajes);
       
        res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes,
 
    });

};

const paginaTestimoniales =  async (req, res)  => {
     
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            testimoniales,
            page: 'Testimoniales', 
        })
    } catch (error) {
        console.log(error);
    }
};




//muestra un viaje por su slug

const paginaDetalleViaje =  async(req, res) =>{
    
    const { slug } = req.params; 

    try{

        const viaje = await Viaje.findOne ({ where : { slug}});

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })

    } catch (error) {
            console.error(error);
        }
    

}




export {
    paginaInicio, 
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}