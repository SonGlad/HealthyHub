import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpenRecord: false,
    isModalOpenWater: false,
    isModalUpdateRecord: false,
    mealTypeBreakfast: null,
    isModalCloseUserMenu: false,
    isModalShowGoal: false,
    isModalShowWeight: false,
  },

  reducers: {
    openModalRecord: (state) => {
      state.isModalOpenRecord = true;
    },
    closeModalRecord: (state) => {
      state.isModalOpenRecord = false;
    },
    openModalWater: (state) => {
      state.isModalOpenWater = true;
    },
    closeModalWater: (state) => {
      state.isModalOpenWater = false;
    },
    showMealType: (state, action) => {
      state.mealTypeBreakfast = action.payload;
    },
    openUpdateRecord: (state) => {
      state.isModalUpdateRecord = true;
    },
    closeUpdateRecord: (state) => {
      state.isModalUpdateRecord = false;
    },
    openModalUserMenu: (state) => {
      state.isModalCloseUserMenu = true;
    },
    closeModalUserMenu: (state) => {
      state.isModalCloseUserMenu = false;
    },
    openModalGoal: (state) => {
      state.isModalShowGoal = true;
    },
    closeModalGoal: (state) => {
      state.isModalShowGoal = false;
    },
    openModalWeight: (state) => {
      state.isModalShowWeight = true;
    },
    closeModalWeight: (state) => {
      state.isModalShowWeight = false;
    },
  },
});

export const modalReducer = modalSlice.reducer;

export const {
  openModalRecord,
  closeModalRecord,
  openModalWater,
  closeModalWater,
  showMealType,
  openModalUserMenu,
  closeModalUserMenu,
  openModalGoal,
  closeModalGoal,
  openModalWeight,
  closeModalWeight,
  openUpdateRecord,
  closeUpdateRecord,
} = modalSlice.actions;
