function Player(initialX, initialY, initalMoney, char) {
    this.x = initialX;
    this.y = initialY;
    this.money = initalMoney;
    this.char = char;


    this.changeMoney = (newAmount) => {
        this.money = newAmount;
        $("#currentCurrency").html(newAmount);
    }

    this.init = () => {
        $("#currentCurrency").html(this.money);
        gameWorld.entityMap[this.x][this.y] = this;

    }
}