import axios from "axios"

export const trackingService = {
    async getData(){
        try{

                  const token = localStorage.getItem("authToken");

  const result = await axios.get(`http://127.0.0.1:8000/api/transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
            console.log(result);
            return result;

        }catch{
            return null
        }

    }
}