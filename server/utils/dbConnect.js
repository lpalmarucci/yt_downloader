import mongoose from 'mongoose'

export default async () => {
    await mongoose.connect('mongodb+srv://developer:developer@cluster0.vjuzd.mongodb.net/dev_youtube_dl?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(info => console.log("Connected to mongoDb"))
    .catch(err => console.error(`Error ecountered ${err.message}`))
}