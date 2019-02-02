const db =  require('../database/db.js')

const getServer = (callback)=>{
    db.getMovie((err,data)=>{
        if (err){
            callback(err);
        }else {
            callback(null,data)
        }
    })
   
}

const postServer = (callback)=>{
    db.getMovie((err,data))
    if (err){
        callback(err)
        return
    }else {
        callback(null,req.body)
    }
}

module.exports = {getServer, postServer}