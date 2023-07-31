import { getAddress } from "../../services/apiGeocoding";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

export const fetchAdress = createAsyncThunk(
  "user/fetchAdress",
  async function fetchAddress() {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdress.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchAdress.fulfilled, (state, action) => {
      state.status = "idle";
      state.position = action.payload.position;
      state.address = action.payload.address;
    });
    builder.addCase(fetchAdress.rejected, (state, action) => {
      state.status = "error";
      state.error =
        "There was an error fetching the address, Make sure to fill this field correctly.";
    });
  },
});

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export default userSlice.reducer;
export const { updateName } = userSlice.actions;