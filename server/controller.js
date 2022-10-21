module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            'You will win a million dollars cash and get mugged, lose it all. Sorry.',
            'You will be biking, crash into someone, and end up with their bag that had $1M cash... you try to return it, but the person is gone. Oh well.',
            'You will donate a million dollars to your favorite charity, if you have a million dollars...',
            'You find out your favorite charity is fraudulent.',
            'You go to DevMountain to get a real job.'
        ]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    }
}