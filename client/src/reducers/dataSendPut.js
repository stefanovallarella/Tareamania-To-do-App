
let initialState = {};

const dataSend = (state = initialState, action) => {
    switch(action.type){
        case 'DATASEND':

            let titleSend = action.payload.dataName;
            let descriptionSend = action.payload.dataDescription;

            console.log(titleSend, descriptionSend);


            return state = {title: titleSend, description: descriptionSend};
        default:
            return state;
    }
}

export default dataSend;