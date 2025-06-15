import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
 
const initialState={ 
  allNews:{
    isLoading: true,
    error: false,
    data:false,
  },

}

 export const FetchallNews=createAsyncThunk("/news",async()=>{


try {
	const response = await Axios.get("https://newsdata.io/api/1/latest?apikey=pub_245cf87b4166441b81b4c265c6082f25&q=health")

    return response.data.results
} catch (error) {
	console.error(error);
}
  })


const newsSlice=createSlice({
    name:"news",initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(FetchallNews.pending, (state) => {
        state.allNews.isLoading = true;
        state.allNews.error = null;
      })
      .addCase(FetchallNews.fulfilled, (state, action) => {
        state.allNews.isLoading = false;
        state.allNews.data = action.payload;
      })
      .addCase(FetchallNews.rejected, (state, action) => {
        state.allNews.isLoading = false;
        state.allNews.error=action.error.message;
      })
    }
})
 

 export default newsSlice.reducer;