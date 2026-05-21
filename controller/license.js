const License = require('../models/License')

let keys = [
  "X7K-9M2-V4P-8LQ",
  "B3R-5N9-C1T-6JW",
  "H8F-2Y7-D4G-3MX",
  "W4P-9K6-L1R-5TV",
  "Q2M-8J3-X7N-9FC",
  "V6D-1Y5-H8B-2RG",
  "L9T-4W7-P3K-5MC",
  "N2C-8F6-J1X-9YQ",
  "R5B-9M4-V2H-7DT",
  "G3X-7K1-L8P-4NW"
]

exports.addLicense = async(req,res)=>{
    try{
       await Promise.all(keys.map(async (k) => {
    // 1. Added 'async' above
    // 2. Added 'return' below
    return await License.create({
        key: k,
        activatedAt: new Date() // 3. Fixed Date syntax
    });
    res.status(200).json({message:'response ok,created all product keys'})
}));
    }catch(e){
        console.log("error while adding key")
        console.error(e)
    }
}