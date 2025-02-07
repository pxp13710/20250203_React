// contactStore.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASELONG = 'http://localhost:8000/contacts_long'
const BASEURL = 'http://localhost:8000/contacts/'

// const BASELONG = process.env.REACT_APP_BASELONG;
// const BASEURL = process.env.REACT_APP_BASEURL;

// 비동기 Action
// 처리 메서드의 매개변수는 1개만 허용된다. 1개 이상이면 객체로 전달한다
// data => {no: 1, size: 10}
export const getContactListAction = createAsyncThunk('CONTACT/GETCONTACTLIST', async (data) => {
  const params = { pageno: data.no, pagesize: data.size }
  const resp = await axios.get(BASELONG, { params })
  return resp.data;
});
// data => { id: '', name: ?, tel: ?, address: ?, photo: '' }
export const addContactAction = createAsyncThunk('CONTACT/ADDCONTACT', async (data) => {
  const headers = { 'Content-Type': 'application/json' }
  const resp = await axios.post(BASEURL, data, { headers })
  return resp.data;
});
// data => no
export const getContactAction = createAsyncThunk('CONTACT/GETCONTACT', async (data) => {
  const resp = await axios.get(BASEURL + data)
  return resp.data;
});
// data => no
export const deleteContactAction = createAsyncThunk('CONTACT/DELETECONTACT', async (data) => {
  const resp = await axios.delete(BASEURL + data)
  return resp.data;
})

const contactStore = createSlice({
  name: 'contactStore',
  initialState: {
    contactList: { pageno: '', pagesize: '', totalcount: '', contacts: [] },
    contact: { id: '', name: '', tel: '', address: '', photo: '' },
    statusData: { status: '', message: '' },
    loading: false,
    error: null,
  },
  // 동기
  reducers: {
    // action.payload => evt.target
    changeContact: (state, action) => {
      // console.log(action.payload)
      // serializableCheck: true => false로 변경. 전달되는 값이 문자열이 아닌 객체가 전달된다
      state.contact[action.payload.name] = action.payload.value;
    },

  },
  // 비동기
  extraReducers: (builder) => {
    // 1개의 처리당 3개의 상태 값을 갖는다
    // pending => 로딩되는 동안의 처리
    // fulfilled => 로딩이 완료되면 처리
    // rejected => 처리 실패
    builder.addCase(getContactListAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.contactList = { pageno: '', pagesize: '', totalcount: '', contacts: [] };
      state.contact = { id: '', name: '', tel: '', address: '', photo: '' };
      state.statusData = { status: '', message: '' };
    });
    builder.addCase(getContactListAction.fulfilled, (state, action) => {
      state.loading = false;
      state.contactList = action.payload;
    });
    builder.addCase(getContactListAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;     // payload가 Error 객체
    });

    // ADD
    builder.addCase(addContactAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.contact = { id: '', name: '', tel: '', address: '', photo: '' };
      state.statusData = { status: '', message: '' };
    });
    builder.addCase(addContactAction.fulfilled, (state, action) => {
      state.loading = false;
      state.statusData = action.payload;
    });
    builder.addCase(addContactAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;     // payload가 Error 객체
    });

    // GET
    builder.addCase(getContactAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.contact = { id: '', name: '', tel: '', address: '', photo: '' };
      state.statusData = { status: '', message: '' };
    });
    builder.addCase(getContactAction.fulfilled, (state, action) => {
      state.loading = false;
      state.contact = action.payload;
    });
    builder.addCase(getContactAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;     // payload가 Error 객체
    });

    // DELETE
    builder.addCase(deleteContactAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.contact = { id: '', name: '', tel: '', address: '', photo: '' };
      state.statusData = { status: '', message: '' };
    });
    builder.addCase(deleteContactAction.fulfilled, (state, action) => {
      state.loading = false;
      state.statusData = action.payload;
    });
    builder.addCase(deleteContactAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;     // payload가 Error 객체
    });
  }
})
export default contactStore;

// 동기 Action Export
export const { changeContact } = contactStore.actions;
