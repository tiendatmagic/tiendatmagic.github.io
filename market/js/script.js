const formatter = new Intl.NumberFormat("en-US", {
    currency: "VND",
    minimumFractionDigits: 0,
});
const container = document.querySelector(".container");

function update() {
    var datac = "";
    fetch("https://exchange.vndc.io/exchange/api/v1/showup-prices")
        .then((res) => res.json())
        .then((json) => {
            const coins = Object.getOwnPropertyNames(json);

            for (let coin of coins) {
                if (coin.substr(coin.length - 4) == "VNDC") {
                    const coinInfo = json[`${coin}`];
                    const price = formatter.format(coinInfo.bid);
                    const currency_unit = coin.substr(coin.length - 4);

                    datac += `
                <div class="coin rising">
                    <div class="coin-logo">
                    </div>
                    <div class="coin-name">
                        <h3>${coin.slice(0, coin.length - 4)}</h3>
                        <span>/${currency_unit}</span>
                    </div>
                    <div class="coin-price">
                        <span class="price">$${price}</span>

                    </div>
                </div>
            `;
                }
            }
            container.innerHTML = datac;
        })
        .catch(function (error) {
            console.log("Request failed", error);
        });
}
update();
// setInterval(update, 1000);
