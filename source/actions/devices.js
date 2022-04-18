import axios from "axios";
import { FETCH_ALL_DEVICES } from "../constants/app";

const fetchDevices = (data) => ({
  type: FETCH_ALL_DEVICES,
  data,
});

export const fetchAllDevices = () => (dispatch) => {
  axios
    .get(
      "https://remhome-3b40d-default-rtdb.europe-west1.firebasedatabase.app/devices.json"
    )
    .then((response) => {
      dispatch(fetchDevices(response.data));
    });
};
