const express= require('express');
const path = require('path');

exports.getStickyNotes =(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','index.html'));
}