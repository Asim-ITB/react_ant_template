const dev = {
  API_ENDPOINT_URL: "https://prepared-polliwog-tolerant.ngrok-free.app/api",
  MEDIA_ENDPOINT_URL: "",
};

const prod = {
  API_ENDPOINT_URL: "",
  MEDIA_ENDPOINT_URL: "",
};

const NODE_ENV = "development";

const getEnv = () => {
  switch (NODE_ENV) {
    case "development":
      return dev;
    case "production":
      return prod;
    default:
      break;
  }
};

export const env = getEnv();
