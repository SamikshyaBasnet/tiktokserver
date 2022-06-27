import mongoose from 'mongoose';

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    description: String,
    messages: String,
    shares: String,
});

//collection inside the database
export default mongoose.model('tiktokVideos', tiktokSchema);