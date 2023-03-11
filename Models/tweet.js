const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log('Connection Open!')
    })
    .catch(err => {
        console.log('Oh no Error!')
        console.log(err)
    })

const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweet = async () => {
//     // const user = new User({ username: 'chickenfan99', age: 61 });
//     const user = await User.findOne({ username: 'chickenfan99' });
//     const tweet2 = new Tweet({ text: 'bock bock bock my chickens make noises ', likes: 1239 })
//     tweet2.user = user;
//     tweet2.save();
// }

// makeTweet();

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user', 'username')
    console.log(t);
}

findTweet();

