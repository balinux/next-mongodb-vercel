module.exports = {
    env: {
        MONGO_URL: "mongodb+srv://bloguser:blogpassword123@yhotiecluster0.ez522.mongodb.net/blogtutorial?retryWrites=true&w=majority",
        url: process.env.STATUS == "PRODUCTION" ? process.env.BACKEND_PRODUCTION : process.env.BACKEND_LOCAL
    }
}