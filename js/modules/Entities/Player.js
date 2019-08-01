function Player(initialX, initialY, initalMoney, name, char, description) {
    this.x = initialX;
    this.y = initialY;
    this.money = initalMoney;
    this.name = name;
    this.char = char;
    this.description = description;

    this.move = (keyCode) => {
        gameWorld.entityMap[this.x][this.y] = null
        switch (keyCode) {
            case 87: this.y--; break;
            case 83: this.y++; break;
            case 65: this.x--; break;
            case 68: this.x++; break;
            default: break;
        }

        this.update();
        console.log(this.x + ", " + this.y);
        gameWorld.render(21, $("#map"));
    }
    
    this.update = () => {
        gameWorld.entityMap[this.x][this.y] = this;

    }

    this.changeMoney = (newAmount) => {
        this.money = newAmount;
        $("#currentCurrency").html(newAmount);
    }

    this.init = () => {
        $("#currentCurrency").html(this.money);
        gameWorld.entityMap[this.x][this.y] = this;
    }
}