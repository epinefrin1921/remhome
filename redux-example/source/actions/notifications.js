import axios from "axios";
import { FETCH_ALL_DATA } from "../constants/app";

const fetchNotifications = (data) => ({
  type: FETCH_ALL_DATA,
  data,
});

export const fetchAllNotifications = () => (dispatch) => {
  axios
    .get(
      "https://remhome-3b40d-default-rtdb.europe-west1.firebasedatabase.app/notifications.json"
    )
    .then((response) => {
      dispatch(fetchNotifications(response.data));
    });
};
