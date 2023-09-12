import { googleAuth } from "./google.auth";
import axios from "axios";

const getCurrentUserToken = async () => {
  try {
    await googleAuth.auth.authStateReady();
    const user = googleAuth?.auth.currentUser;
    if (user == null) {
      return null;
    }
    const token = await user?.getIdToken();
    return token;
  } catch (er) {
    throw new Error("error in fetching from store");
  }
};

export const createUser = async () => {
  const userToken = await getCurrentUserToken();
  try {
    await axios.post("/api/createUser", null, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
  } catch (e) {
    throw new Error("Failed to create user", e.message);
  }
};

export const fetchCollectionsApi = async () => {
  const userToken = await getCurrentUserToken();
  try {
    const response = await axios.get("/api/fetchCollections", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return response;
  } catch (e) {
    throw new Error("Error in fetching collection", e.message);
  }
};

export const verifyCollectionsApi = async ({ collectionId }) => {
  const userToken = await getCurrentUserToken();
  try {
    const response = await axios.post(
      "/api/verifyCollection",
      {
        collectionId,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );

    return response;
  } catch (e) {
    throw new Error("Error in fetching collection", e.message);
  }
};

export const deleteCollectionApi = async ({ collectionId }) => {
  const userToken = await getCurrentUserToken();
  try {
    const response = await axios.delete("/api/deleteCollection", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      data: {
        collectionId,
      },
    });
    return response;
  } catch (e) {
    throw new Error("Error in deleting collection", e.message);
  }
};

export const uploadDocumentApi = async ({ formData }) => {
  const userToken = await getCurrentUserToken();
  try {
    const response = await axios.post("/api/upload", formData, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (e) {
    throw new Error("Error in uploading documents", e.message);
  }
};

export const youtubeTranscribeApi = async ({ ytUrl }) => {
  const userToken = await getCurrentUserToken();
  try {
    const response = await axios.post(
      "/api/ytTranscribe",
      {
        ytUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    return response;
  } catch (e) {
    throw new Error("Error in transcribing video", e.message);
  }
};

export const downloadDocApi = async ({ pdfUrl }) => {
  const userToken = await getCurrentUserToken();
  try {
    const response = await axios.post(
      "/api/download",
      {
        pdfUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    return response;
  } catch (e) {
    throw new Error("Error in downloading document", e.message);
  }
};

export const createCheckoutSessionApi = async ({ priceId }) => {
  const userToken = await getCurrentUserToken();
  try {
    const response = await axios.post(
      "/api/create-checkout-session",
      {
        priceId,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    return response;
  } catch (e) {
    throw new Error("Error in creating checkout session", e.message);
  }
};

export const chatApi = async ({ question, history, collectionId }) => {
  const userToken = await getCurrentUserToken();
  try {
    const response = await axios.post(
      "/api/chat",
      {
        question,
        history,
        collectionId,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    return response;
  } catch (e) {
    throw new Error("Error in processing the user query", e.message);
  }
};
