const shortid = require ("shortid");
const URL = require ('../models/url');




async function handlegenerateNewShortURL(req, res){
    const body =req.body;
    if (!body.url) return res.status(400).json ({ error:'url is required'})


    const shortId =shortid();
    await URL.create ({
        shortId:shortId,
        redirectURL:body.url,
        visitHistory:[],
        
    });
    return res.json({id: shortId});
}

async function handleGetAnalytics(req, res){
    const shortid=req.params.shortID;
    const result=await URL.findOne({shortid});
    return res.json({totalclick:result.visitHistory.length,analytics:result.visitHistory,});


}




module.exports={
    handlegenerateNewShortURL,
    handleGetAnalytics,

}
