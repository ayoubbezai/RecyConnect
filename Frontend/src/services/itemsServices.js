import axios from "axios";

export const itemsServices = {
  async getAllItems(
    page = 1,
    search = "",
    category = "",
    location = "",
    startPrice = "",
    endPrice = ""
  ) {
    try {
      const queryParams = new URLSearchParams();

      queryParams.append("page", page);
      if (search) queryParams.append("search", search);
      if (category) queryParams.append("category", category);
      if (location) queryParams.append("location", location);
      if (startPrice) queryParams.append("startPrice", startPrice);
      if (endPrice) queryParams.append("endPrice", endPrice);

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
};
