//registro de locais

const User = require  ('../models/User');
const Spot= require('../models/Spot');



module.exports= {
    async index (req,res){
        const{event}= req.query;

        const spots = await Spot.find({events: event})
        
        return res.json(spots);
    },



    async store(req,res){
        const {filename}= req.file;
        const{company, events, price}= req.body;
        const{user_id}= req.headers;

        const user = await User.findById(user_id);//se nao existir usuario segue: abaixo
        if(!user){
            return res.status(400).json({error:'Usuario não existe'});
        }

        const spot = await Spot.create({
        user: user_id,
        thumbnail:filename,
        company, 
        events: events.split(',').map(event => event.trim()),
         price

        }) 

        return res.json(spot)
    }
};