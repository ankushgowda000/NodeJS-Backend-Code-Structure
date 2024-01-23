/* eslint-disable no-unused-vars */
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { SNSClient, AddPermissionCommand, PublishCommand } = require("@aws-sdk/client-sns");
const AWS = require("aws-sdk");

const dynamoose = require("dynamoose");
const dotenv = require("dotenv");
dotenv.config();

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
    maxRetries: 2,
    httpOptions: {
        timeout: 60000,
        connectTimeout: 60000
    }
});

const ddb = new dynamoose.aws.ddb.DynamoDB({
    "credentials": {
        "accessKeyId": process.env.ACCESS_KEY_ID,
        "secretAccessKey": process.env.SECRET_ACCESS_KEY
    },
    "region": process.env.REGION
});

// Set DynamoDB instance to the Dynamoose DDB instance
dynamoose.aws.ddb.set(ddb);

const s3Config = {
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY
    },
    region: process.env.REGION
};

// exports.s3 = new S3Client(s3Config);
exports.s3 = new AWS.S3();

exports.sns = new SNSClient({ region: process.env.REGION });

exports.snsPublish = new PublishCommand();
