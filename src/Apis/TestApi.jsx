import axios from "axios";
import { env } from "../config/EnvironmentConfig";

async function login({ email, password }) {
  try {
    const response = await axios({
      method: "post",
      url: `${env.API_ENDPOINT_URL}/login`,
      data: { email, password },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response;
  }
}
async function questionList() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${env.API_ENDPOINT_URL}/question`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    if (error.response.statusText === "Unauthorized") {
      localStorage.removeItem("token");
    }
    throw error.response;
  }
}
async function questionAdd({ data }) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios({
      method: "post",
      url: `${env.API_ENDPOINT_URL}/question`,
      headers: {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
      data: data,
    });
    return response.data;
  } catch (error) {
    throw error.response;
  }
}
async function questionSort({ data }) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios({
      method: "post",
      url: `${env.API_ENDPOINT_URL}/question/sort`,
      headers: {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
      data: data,
    });
    return response.data;
  } catch (error) {
    throw error.response;
  }
}
async function questionDelete({ id }) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios({
      method: "delete",
      url: `${env.API_ENDPOINT_URL}/question/delete/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}
async function answerAdd({ data }) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios({
      method: "post",
      url: `${env.API_ENDPOINT_URL}/question`,
      headers: {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
      data: data,
    });
    return response.data;
  } catch (error) {
    throw error.response;
  }
}
async function edit({ userName, password, id }) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios({
      method: "put",
      url: `${env.API_ENDPOINT_URL}/credentials/edit/${id._id}`,
      headers: { Authorization: `Bearer ${token}` },
      data: { userName, password },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}
async function user() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${env.API_ENDPOINT_URL}/credentials/user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export {
  edit,
  login,
  questionList,
  questionAdd,
  questionSort,
  questionDelete,
  user,
  answerAdd,
};
