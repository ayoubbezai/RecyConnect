import axios from "axios";

export const likeService = {
    try{
        const data = await axios.put("http://localhost:8000/api/like/{itemsId}",{
            item_id
        })
    }catch{

    }
}