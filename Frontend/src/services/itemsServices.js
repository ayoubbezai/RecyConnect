import axios from "axios";

export const itemsServices = {
  async getAllItems(
    page = 1,
    search = "",
    category = "",
    location = "",
    startPrice = "",
    endPrice = "",
    isYours = false
  ) {
    try {
      const queryParams = new URLSearchParams();

      queryParams.append("page", page);
      if (search) queryParams.append("search", search);
      if (category) queryParams.append("category", category);
      if (location) queryParams.append("location", location);
      if (startPrice) queryParams.append("startPrice", startPrice);
      if (endPrice) queryParams.append("endPrice", endPrice);
      if (isYours) queryParams.append("isYours", isYours);

      const token = localStorage.getItem("authToken");

      const result = await axios.get(
        `http://127.0.0.1:8000/api/items?${queryParams.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return result?.data;
    } catch (error) {
      console.error("Error fetching items:", error);
      return {
        success: false,
        message: error.message,
        data: [],
      };
    }
  },

  async addItem(
    title,
    category,
    price,
    expiry_date,
    location,
    status,
    content,
    pictures
  ) {
    try {
      const token = localStorage.getItem("authToken");

      const payload = {
        title,
        category,
        price,
        expiry_date,
        location,
        status,
        content,
        pictures,
      };

      const result = await axios.post(
        "http://127.0.0.1:8000/api/items",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return result?.data;
    } catch (error) {
      console.error("Error adding item:", error);
      return {
        success: false,
        message: error.response?.data?.message || error.message,
        data: null,
      };
    }
  },
  async getPostDetails(id){
    try{
      const token = localStorage.getItem("authToken");

      const result = await axios.get(`http://127.0.0.1:8000/api/items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return result?.data;
    }catch(e){
console.error("Error getting  item:", e);
return {
  success: false,
  message: e.response?.data?.message || e.message,
  data: null,
};
    

  }
}};

