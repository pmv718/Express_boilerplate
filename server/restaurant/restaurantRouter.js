'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const restaurantModel = require('./restaurantEntity').restaurantModel;

router.post('/add', function(req, res){
	logger.debug("Received request"+JSON.stringify(req.body));
  if(req.body)
  {
    let restaurant = new restaurantModel(req.body);
    restaurant.save(function(err){
    if(err){
      res.send(err);
    }
    else{
       res.json({message:'Restaurant saved successfully'});
    }
    });
  }
})
router.delete('/delete', function(req, res){
    logger.debug("Received request"+JSON.stringify(req.body));
 if(req.body)
 {
   let restaurant1 = new restaurantModel(req.body);
        restaurant1.remove({_id:req.body._id}, function(err){
   if(err){
     res.send(err);
   }
   else{
      res.json({message:' deleted successfully'});
   }
   });
 }
})
// Get details of all users in the system
router.get('/readAll', function(req, res){
     restaurantModel.find(function(err,result){
   if(err){
     res.send(err);
   }
   else{
      res.send(result);
   }
   });
 })
 router.post('/readone', function(req, res){
     logger.debug("Received request"+JSON.stringify(req.body));
  if(req.body)
  {
     restaurantModel.find(
             {$or:[{:req.body.name}]}, function(err,result){
    if(err){
      res.send(err);
    }
    else{
       res.send(result);
    }
    });
  }
 })

module.exports = router;
