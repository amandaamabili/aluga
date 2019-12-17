const Booking = require ('../models/Booking');


module.exports = {
//reserva do usuario
async store (req,res){
    const {user_id} = req.headers;
    const {spot_id} = req.params;
    const {date}= req.body;


    const booking= await Booking.create({
user: user_id,
Spot: spot_id,
date: date,
    });
    console.log(booking);

//permite fazer referência a documentos em outras coleções. POPULATE-Mongoose
   await booking.populate('spot').populate('user').execPopulate(); 
    return res.json(booking);
}



};