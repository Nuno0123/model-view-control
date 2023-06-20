module.exports = {
    get_emoji: () => {
        const randomNUm = Math.random();
        let book = "📗";

        if (randomNUm > 0.7) {
            book = "📘";
        }else if (randomNUm > 0.4) {
            book = "📙";
        }

        return `<span for="img" aria-label="book">${book}</span>`; 
    },
};