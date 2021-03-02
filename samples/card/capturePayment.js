const {Client, Config, CardCheckout} = require("../../dist/src/index");
const {SeerBitConfig} = require("../config");
const config = new Config(
    {
        publicKey: SeerBitConfig.PUBLIC_KEY,
        secretKey: SeerBitConfig.SECRET_KEY,
        bearerToken: SeerBitConfig.TOKEN
    });

const client = new Client(config);

const checkout = new CardCheckout(client);
const payload = {
    amount:100,
    country: "NG",
    currency: "NGN",
    productDescription: "preauth test capture",
    paymentReference: ""
}

checkout.CapturePreAuth(payload)
    .then(res=>console.log(res))
    .catch(e=>console.log(e))




