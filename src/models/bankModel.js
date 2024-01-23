const dynamoose = require("dynamoose");
const { v4: uuidv4 } = require('uuid');

const schema = new dynamoose.Schema(
    {
        "id": { type: String, default: () => uuidv4(), hashKey: true },
        "firstName": { type: String },
        "lastName": { type: String },
        "email": {
            type: String,
            index: {
                "global": true,
                "name": "email-index"
            }
        },
        "age": { type: Number },
        "password": { type: String },
        "balance": { type: Number },
    },
    {
        "timestamps": true
    }
);

const bankModel = dynamoose.model("customerTable", schema, {
    create: true,
    throughput: "ON_DEMAND",
});
module.exports = bankModel;
