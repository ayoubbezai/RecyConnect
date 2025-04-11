import axios from "axios";

export const commentsServices = {     
  async addComment(item_id, content) {
    try {
        const token = localStorage.getItem("authToken");
      const response = await axios.post(
        "http://127.0.0.1:8000/api/comments",
        {
          item_id,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to add comment:", error);
      throw error;
    }
  },
};
