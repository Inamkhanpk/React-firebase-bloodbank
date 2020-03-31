import DonorAction from './../action/donorAction';

const INITIAL_STATE = {
    isProcessing : false,
    isError : false,
    errorMessage: {},
    donorList: [],
    donorIdDetail : {},
    isDetailUpdated: false,
    
}

function DonorReducer(state=INITIAL_STATE,action){
    switch(action.type){
        case DonorAction.REGISTER_DONOR :
        return {...state,isProcessing: true, isError : false,isDetailUpdated:false};
        case DonorAction.REGISTER_DONOR_SUCCESSFUL:
        return {...state, isProcessing: false ,isError : false, errorMessage: {},isDetailUpdated:true};            
        case DonorAction.REGISTER_DONOR_REJECTED:
        return {...state, isProcessing: false, isError : true, errorMessage: action.payload,isDetailUpdated:false};
        case DonorAction.GET_DONOR_LIST:
        return {...state, isProcessing: true, isError : false,donorList:[]};
        case DonorAction.GET_DONOR_LIST_SUCCESSFUL:
        return {...state, isProcessing: false, isError : false, donorList:action.payload};
        case DonorAction.ADD_DONOR:
        var newDonorList = [...state.donorList];
        newDonorList.push(action.payload);
        return {...state, isProcessing: false, isError : false, donorList:newDonorList};
        case DonorAction.GET_DONOR_DETAIL:
        return {...state, isProcessing: true, isError : false, donorIdDetail: {}};
        case DonorAction.GET_DONOR_DETAIL_SUCCESSFUL:
        return {...state, isProcessing: false ,isError : false, errorMessage: {},donorIdDetail:action.payload};            
        case DonorAction.GET_DONOR_DETAIL_REJECTED:
        return {...state, isProcessing: false, isError : true, errorMessage: action.payload, donorIdDetail:{}};
        default:
        return state; 
    }
    
}

export default DonorReducer;