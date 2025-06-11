require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const host = 'localhost';
const port = 8000;

app.use(express.json());

mongoose.connect(process.env.URL);

const db = mongoose.connction;
db.on('error', (err)=> console.error("MonogDB error",err));

const schema = monogodb.schema({
    Location: {
        type: String,
        required: true
    },
    Rent: {
        type: Number,
        required: true
    },
    Rates: {
         type: Number,
        
    },
    levy: {
        type: Number,
        required: true
    },
    Type: {
        type: String,
        required: true
    }
});

const property = mongoose.model('property',schema);
db.once('open', async()=>{
    console.log("Connected to Database");
    
    const count = await property.countDocuments();
    if (count === 0 )
    {
        const storage = [
            {location: '114 firethorn Bougainvillia Montana', Rent: 20000, Rates: 1200,levy: 800, Type:"Residential"}
        ];
        try {
            await property.insertMany(storage);
            console.log(`Total Property:${storage.length}`);
        } catch (err) {
            
        }
    }
})


app.listen(port, ()=>{
    console.log(`Running ${host}:${port}`);
    
})