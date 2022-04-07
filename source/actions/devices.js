import axios from "axios";
import { FETCH_ALL_DATA, FETCH_SINGLE_DATA } from "../constants/app";

const fetchDevices = (data) => ({
  type: FETCH_ALL_DATA,
  data,
});

const fetchDevice = (data) => ({
  type: FETCH_SINGLE_DATA,
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

export const fetchSingleDevice = (id) => (dispatch) => {
  axios
    .get(
      "https://remhome-3b40d-default-rtdb.europe-west1.firebasedatabase.app/devices/" +
        id +
        ".json"
    )
    .then((response) => {
      dispatch(fetchDevice(response.data));
    });
};
