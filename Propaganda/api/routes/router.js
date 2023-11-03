const BASE_URL = "http://localhost:3000/";

export const baseRequest = async (urlPath, method = "GET", body = null) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

return await fetch(`${BASE_URL}${urlPath}`, reqParams);

  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};
import { baseRequest } from "../index.js";

const PROPAGANDA_URL = "/propaganda";

export const getPropaganda = async (search) => {
    const response = await baseRequest(PROPAGANDA_URL + "?search=" + search);

    if (response.ok) {
        return await response.json();
      } else {
        throw new Error("Failed to fetch propaganda data");
      }
}

export const getPropagandaById = async (id) => {
    const response = await baseRequest(PROPAGANDA_URL + "/" + id);

    if (response.ok) {
        return await response.json();
      } else {
        throw new Error("Failed to fetch propaganda data");
      }
}

export const getPropagandaCount = async () => {
    const response = await baseRequest(PROPAGANDA_URL + "/count");

  return await response.json();
}

export const createPropaganda = (body) => baseRequest(PROPAGANDA_URL, "POST", body);

export const updatePropaganda = (id, body) => baseRequest(PROPAGANDA_URL + "/" + id, "PUT", body);

export const deletePropaganda = (body) => baseRequest(PROPAGANDA_URL + "/", "DELETE", body);