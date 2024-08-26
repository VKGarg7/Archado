import mongoose, {Schema} from "mongoose";

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: "Item",
            },
        ],
    },
    {
        timestamps: true,
    }
);