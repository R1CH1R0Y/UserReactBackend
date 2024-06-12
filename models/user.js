const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{ type: String, required: true },
        "dob":{ type: Date, required: true }, 
        "bldgrp":{ type: String, required: true },
        "mob":{ type: String, required: true },
        "addrs":{ type: String, required: true },
        "pin":{ type: Number, required: true }, 
        "distr":{ type: String, required: true },
        "place":{ type: String, required: true },
        "email":{ type: String, required: true },
        "uname":{ type: String, required: true },
        "pswd":{ type: String, required: true },
        "cpswd":{ type: String, required: true },
        "img":{ type: String, required: true }
    }
)
let usermodel=mongoose.model("Users",schema);
module.exports={usermodel}