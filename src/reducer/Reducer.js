
/*const getCurrentDate=(separator='')=>{

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
    
}*/

export const initialState = {
    user:{ idusers:"", nameuser:"",pass:"",phone:"",address:"",state:"" },
    datausers:null,
    combodisplay:false,
    accname:"",
    dataacc:null,
    amount: []
      

}





export const actiontype = {
    SET_VALUE: "SET_VALUE",
    CHANGE_VALUE: "CHANGE_VALUE",
    UPDATE_MADEN: "UPDATE_MADEN",
    UPDATE_DAEN: "UPDATE_DAEN",
    UPDATE_BEYAN: "UPDATE_BEYAN",
    UPDATE_RqmWasel: "UPDATE_RqmWasel",
    UPDATE_DateWasel: "UPDATE_DateWasel",
    UPDATE_ACCID: "UPDATE_ACCID",
    UPDATE_ACCNAME: "UPDATE_ACCNAME",
    UPDATE_DATEQED: "UPDATE_DATEQED",
    UPDATE_NOQED: "UPDATE_NOQED",
    UPDATE_RQMQED: "UPDATE_RQMQED",
    UPDATE_NOTE: "UPDATE_NOTE",
    SET_DATA: "SET_DATA",
    ADD_Hystory: "ADD_Hystory",
    ADD_Namehusab: "ADD_Namehusab",
    SET_SHOWCOMB: "SET_SHOWCOMB",
     
    SET_UESER: "SET_UESER",
     SET_DATAUESER: "SET_DATAUESER"
}

const reducer = (state, action) => {
    switch (action.type) {
        
         ///////////////set all users
         case actiontype.SET_DATAUESER:
            return { ...state, datausers: action.items }
        
         ///////////////set one users
         case actiontype.SET_UESER:
            return { ...state, user: action.items }
        
         ///////////////set combobox
         case actiontype.SET_SHOWCOMB:
            return { ...state, combodisplay: action.items}
        ///////////////get namehusab from combobox
         case actiontype.ADD_Namehusab:
            return { ...state, accname: action.items}
        ///////////////get data frpm api
 case actiontype.SET_DATA:
            return { ...state, dataacc: action.items}

        ///////////////ADD value
        case actiontype.SET_VALUE:
            return { ...state, amount: [...state.amount, action.item] }

        ///////////////Delete value
        case actiontype.CHANGE_VALUE:
            const index = state.amount.findIndex((amountitem) => amountitem.id === action.id);
            let newamount = [...state.amount];
            console.log(newamount[index])
            if (index => 0) {
            newamount.splice(index, 1);
            
            }
            else {
            console.warn(`Cant remove ${action.id}`)
            };
            return { ...state, amount: newamount }
                
            ///////////////UPDATE_MADEN
        case actiontype.UPDATE_MADEN:
            let tempcart = [...state.amount];
            
            const selectproduct = tempcart.find(item => item.ID === action.ID);
                         

            const indexx = tempcart.indexOf(selectproduct);
            const product = tempcart[indexx];

            product.ID = action.ID;
            console.log(product)
                        console.log(tempcart)

           // return { ...state, amount: [...tempcart] }
            
           
                
        ///////////////UPDATE_DAEN
        case actiontype.UPDATE_DAEN:
            let tempcart2 = [...state.amount];
            const selectproduct2 = tempcart2.find(item => item.id === action.id);

            const indexx2 = tempcart2.indexOf(selectproduct2);
            const product2 = tempcart2[indexx2];
            product2.pricedaen = action.e;
            product2.pricemden = 0;
            return { ...state, amount: [...tempcart2] }
        ///////////////UPDATE_BEYAN
         case actiontype.UPDATE_BEYAN:
            let tempBeayn = [...state.amount];
            const selectBeayn = tempBeayn.find(item => item.id === action.id);

            const indexBeayn = tempBeayn.indexOf(selectBeayn);
            const Beayn = tempBeayn[indexBeayn];
            Beayn.Beayn = action.e;
            return { ...state, amount: [...tempBeayn] }
        
        ///////////////UPDATE_RqmWasel
         case actiontype.UPDATE_RqmWasel:
            let tempRqmWasel = [...state.amount];
            const selectRqmWasel = tempRqmWasel.find(item => item.id === action.id);

            const indexRqmWasel = tempRqmWasel.indexOf(selectRqmWasel);
            const RqmWasel = tempRqmWasel[indexRqmWasel];
            RqmWasel.RqmWasel = action.e;
            return { ...state, amount: [...tempRqmWasel] }
        
        ///////////////UPDATE_RqmWasel
         case actiontype.UPDATE_DateWasel:
            let tempDateWasel = [...state.amount];
            const selectDateWasel = tempDateWasel.find(item => item.id === action.id);

            const indexDateWasel = tempDateWasel.indexOf(selectDateWasel);
            const DateWasel = tempDateWasel[indexDateWasel];
            DateWasel.DateWasel = action.e;
            return { ...state, amount: [...tempDateWasel] }
        
        ///////////////UPDATE_ACCID
         case actiontype.UPDATE_ACCID:
            let tempAccID = [...state.amount];
            const selectAccID = tempAccID.find(item => item.id === action.id);

            const indexAccID = tempAccID.indexOf(selectAccID);
            const AccID = tempAccID[indexAccID];
            AccID.AccID = action.e;
            return { ...state, amount: [...tempAccID] }
        
        ///////////////ACCNAME
         case actiontype.UPDATE_ACCNAME:
            let tempAccName = [...state.amount];
            const selectAccName = tempAccName.find(item => item.id === action.id);

            const indexAccName = tempAccName.indexOf(selectAccName);
            const AccName = tempAccName[indexAccName];
            AccName.AccName = action.e;
            return { ...state, amount: [...tempAccName] }
         ///////////////date qed  
         case actiontype.UPDATE_DATEQED:
            let tempdateqed = [...state.amount];
            const selectdateqed = tempdateqed.find(item => item.id === action.id);

            const indexdateqed = tempdateqed.indexOf(selectdateqed);
            const dateqed = tempdateqed[indexdateqed];
            dateqed.dateqed = action.e;
            return { ...state, amount: [...tempdateqed] }
         ///////////////noqed 
         case actiontype.UPDATE_NOQED:
            let tempnoqed = [...state.amount];
            const selectnoqed = tempnoqed.find(item => item.id === action.id);

            const indexnoqed = tempnoqed.indexOf(selectnoqed);
            const noqed = tempnoqed[indexnoqed];
            noqed.noqed = action.e;
            return { ...state, amount: [...tempnoqed] }
         ///////////////rqmqed dateqed:"",noqed:"",rqmqed:1,noteqed:""
         case actiontype.UPDATE_RQMQED:
            let temprqmqed = [...state.amount];
            const selectrqmqed = temprqmqed.find(item => item.id === action.id);

            const indexrqmqed = temprqmqed.indexOf(selectrqmqed);
            const rqmqed = temprqmqed[indexrqmqed];
            rqmqed.rqmqed = action.e;
            return { ...state, amount: [...temprqmqed] }
         ///////////////noteqed
         case actiontype.UPDATE_NOTE:
            let tempnoteqed = [...state.amount];
            const selectnoteqed = tempnoteqed.find(item => item.id === action.id);

            const indexnoteqed = tempnoteqed.indexOf(selectnoteqed);
            const noteqed = tempnoteqed[indexnoteqed];
            noteqed.noteqed = action.e;
            return { ...state, amount: [...tempnoteqed] }
         ///////////////noteqed
         case actiontype.ADD_Hystory:
            let temphystory = [...state.amount];
            const selecthystory = temphystory.find(item => item.id === action.id);

            const indexhystory = temphystory.indexOf(selecthystory);
            const hystory = temphystory[indexhystory];
            hystory.hystory = action.e;
            return { ...state, amount: [...temphystory] }

        default:
            return state

  
    
    }
}

export default reducer;
