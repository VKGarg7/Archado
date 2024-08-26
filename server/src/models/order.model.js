import mongoose, {Schema} from "mongoose";

const orderSchema = new Schema(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: "Customer",
        },
        address: {
            type: Schema.Types.ObjectId,
            ref: "Address",
        },
        items: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
        total: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "processing", "delivered", "cancelled", "refunded", "failed", "rejected"],
            default: "pending",
        },
    },
    {
        timestamps: true,
    }
);