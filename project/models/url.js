const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId:{
        type: String,
        unique:true,

    },
    redirectURL:{
        type:String,
        required: true,

    },
    visithistory:[{timestamp:{type:number}}],


},
{timestamp : true}
);

const URL =mongoose.model ('url', urlschema);
module.export=URL;
