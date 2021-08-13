const firebase_api_key = process.env.REACT_APP_FIREBASE_APIKEY;
const firebase_auth_domain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const firebase_project_id = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const firebase_storage_bucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const firebase_messaging_sender_id =
  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
const firebase_app_id = process.env.REACT_APP_FIREBASE_APP_ID;

const config = {
  firebase: {
    api_key: `${firebase_api_key}`,
    auth_domain: `${firebase_auth_domain}`,
    project_id: `${firebase_project_id}`,
    storage_bucket: `${firebase_storage_bucket}`,
    messaging_sender_id: `${firebase_messaging_sender_id}`,
    app_id: `${firebase_app_id}`,
  },
};

module.exports = config;
