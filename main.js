let parentElement = document.querySelector('body')
let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        this.state = Math.floor(Math.random() * 2);

    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 0) {
            return "Heads"
        } else {
            return "Tails"
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        image.width = 100
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 0) {
            image.src = "./images/Heads.png"
        } else {
            image.src = "./images/Tails.jpg"
        }
        return image;
    }
};

function display20Flips() {
    for (let index = 1; index <= 20; index += 1) {
        let stringFlips = coin.toString()
        coin.flip()
        parentElement.append(stringFlips)
    }
}
display20Flips()

function display20Images() {
    for (let index = 1; index <= 20; index += 1) {
        let image = document.createElement('div')
        let html = coin.toHTML()
        coin.flip()
        parentElement.append(image)
        image.append(html)
    }
}
display20Images()