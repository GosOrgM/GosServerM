const User_Messages = require('../models/User_Messages')

class MessagesController {
    async addMessages(req, res) {
        try {
            console.log("save contacts")
            await User_Messages.findOneAndUpdate(
                { ID: req.body.ID },
                { $addToSet: { messages: { $each: req.body.message } } }, 
                { upsert: true, new: true } 
            );
            console.log('Messages успешно сохранены:');
        } catch (error) {
            console.error('Ошибка при сохранении Messages:', error);
        }
    }
}

module.exports = new MessagesController();
