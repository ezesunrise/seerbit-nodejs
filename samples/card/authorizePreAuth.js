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
    expiryMonth:"05",
    expiryYear:"21",
    cardNumber:"5123450000000008",
    cvv:"100",
    email:"testmerchant@mailinator.com",
    paymentReference: Date.now()
}

checkout.AuthorizePreAuth(payload)
    .then(res=>console.log(res))
    .catch(e=>console.log(e))



