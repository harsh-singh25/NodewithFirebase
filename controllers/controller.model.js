const express = require('express');
const router = express.Router();
const path = require('path');
const firestore = require("../firebase_key");


router.get('/',async (req,res) =>{
    await firestore.collection('Harsh').doc('document').set({
        name:"HARSH IS THE RICHEST MAN IN THE WORLD "
    }).then(function(){
        console.log("KYA BAAT HAI HAI");
        res.render('index.ejs',{
            data: firestore.harsh,
        })
    }).catch(function(error){
        console.log('ERROR AAGAYA BHAI');
        console.log(error);
    });

    // await firestore.collection('Users').add({
    //     name:"HARSH SINGH",
    //     roll_no:"2019UEC2594"
    // }).then(function(){
    //         res.render('index.ejs',{
    //             data:"HARSH"
    //         });
    // }).catch(function(error){
    //     console.log("ERROR AAGAY BAHII")
    // })

    // await firestore.collection('Harsh').doc("document").delet
    
    // await firestore.collection('Harsh').doc("document").update();
    

    // await firestore.collection("Users").doc(
    //     "5SeKH6YnewhGSXF54HHJ"
    //     ).get().then(function(value){
    //         console.log("HELLO");
    //         console.log(value.data().name);
    // })

    //    await firestore.collection("Users").where('name','==','HARSH SINGH')
    //     .get().then(function(value){
    
    //         value.forEach(function(doc){
    //             console.log(doc.id + ' ' + doc.data().roll_no);
    //         })
    // })

})

module.exports = router ;