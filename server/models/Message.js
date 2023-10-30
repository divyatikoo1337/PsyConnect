import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
    {
        userId: {
          type: String,
          required: true,
        },
        friendPicturePath: {
          type: String,
          default: '/',
        },
        friendFirstName: {
          type: String,
          required: true,
        },
        friendLastName: {
          type: String,
          required: true,
        },
        text: {
            type: String,
            required: true,
        }

    },
    { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;