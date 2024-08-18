import { createSlice } from "@reduxjs/toolkit";


const initialState={
    cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],
    // cartItems:"Bansi"
}

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        
        addToCart:(state, value)=>{
            // console.log(value.payload);
            let present=false;

            for(let val of state.cartItems){
                if(val.id==value.payload.id){
                    present=true;
                }
            }
            if(!present){
                state.cartItems.push(value.payload);

            }
            // console.log(state.cartItems)
        },
        removeFromCart:(state, value)=>{
            let newCart=state.cartItems.filter((ele)=>{
                return ele.id!==value.payload.id
            })

            state.cartItems=newCart;
        },
        incrementAmount:(state, value)=>{
            
            for(let i=0; i<state.cartItems.length; i++){
                if(state.cartItems[i].id===value.payload.id){
                    state.cartItems[i].amount++;
                }
            }
        },
        decrementAmount:(state, value)=>{
            
            for(let i=0; i<state.cartItems.length; i++){
                if(state.cartItems[i].id===value.payload.id){
                    if(state.cartItems[i].amount>1){

                        state.cartItems[i].amount--;
                    }
                }
            }
        },

        


    }

})

export const {addToCart, removeFromCart, incrementAmount, decrementAmount} =cartSlice.actions

export default cartSlice.reducer;