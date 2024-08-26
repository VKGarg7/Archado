import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";

const customerSchema = new Schema(
    {
        fullName: {
            type: String,   
            required: true,
            trim: true,
            indexed: true,
        },
        mobile: {
            type: String,
            required: true,
            trim: true,
            indexed: true,
        },
        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: "Order",
            },
        ],
        addresses: [
            {
                type: Schema.Types.ObjectId,
                ref: "Address",
            },
        ],
        refreshToken: {
            type: String,
        },  
    },
    {
        timestamps: true
    }   
)


customerSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        fullname: this.fullname,
        mobile: this.mobile,
    }, 
    process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    });
};


customerSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id
    }, 
    process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    });
};

export const Customer = mongoose.model('Customer', customerSchema)