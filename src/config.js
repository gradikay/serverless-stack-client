const dev = {
    STRIPE_KEY: "pk_test_YUpMQJF4PXYOuZq2Bet9TFGs00vPzIiJtH",
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-2020-pro-attachmentsbucket-xs8bw28iurog"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://vvthjtbtdh.execute-api.us-east-2.amazonaws.com/pro"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_MbNY7GIkg",
        APP_CLIENT_ID: "kjjsgb5u1uekve13ik7oh63hq",
        IDENTITY_POOL_ID: "us-east-2:e4752970-9587-4014-ac66-5cdffdc531a7"
    }
};

const prod = {
    STRIPE_KEY: "pk_test_YUpMQJF4PXYOuZq2Bet9TFGs00vPzIiJtH",
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-2020-dev-attachmentsbucket-kykp6rfjen1n"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://gjvbv4a625.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_I87l4Ba6N",
        APP_CLIENT_ID: "3cmssu3krfoge5qv3392s26fsr",
        IDENTITY_POOL_ID: "us-east-2:607ee497-0654-4a87-b1a2-7c178936fbb8"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};