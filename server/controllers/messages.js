import Message from '../models/Message.js';
import User from '../models/User.js';

export const getMessages = async (req, res) => {
    const {userId} = req.params;

    try {
    const messages = await Message.findById({userId});
    res.status(200).json(messages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
    
}

export const sendMessage = async (req, res) => {
    try{
    const { senderId, text } = req.body;
    // const {recieverId} = req.params;
    const sender = await User.findById(senderId);
    // const reciever = await User.findById(recieverId);

    const newMessage = new Message({
        userId: senderId,
        friendPicturePath: sender.picturePath,
        friendFirstName: sender.firstName,
        friendLastName: sender.lastName,
        text,
    });

    await newMessage.save();

    const message = await Message.find();
    res.status(201).json(message);
    }catch(err) {
        res.status(409).json({ message: err.message });
    }
}