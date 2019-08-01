function Player(initialX, initialY, initalMoney, name, char, description) {
    this.x = initialX;
    this.y = initialY;
    this.money = initalMoney;
    this.name = name;
    this.char = char;
    this.description = description;


    this.changeMoney = (newAmount) => {
        this.money = newAmount;
        $("#currentCurrency").html(newAmount);
    }

    this.init = () => {
        $("#currentCurrency").html(this.money);
        gameWorld.entityMap[this.x][this.y] = this;

    }
}