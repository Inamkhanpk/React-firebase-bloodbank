export default class DonorAction{
    static REGISTER_DONOR = "REGISTER_DONOR";
    static REGISTER_DONOR_SUCCESSFUL = "REGISTER_DONOR_SUCCESSFUL";
    static REGISTER_DONOR_REJECTED = "REGISTER_DONOR_REJECTED";

    static GET_DONOR_LIST = 'GET_DONOR_LIST';
    static GET_DONOR_LIST_SUCCESSFUL = 'GET_DONOR_LIST_SUCCESSFUL';
    static GET_DONOR_LIST_REJECTED = 'GET_DONOR_LIST_REJECTED';

    static ADD_DONOR = 'ADD_DONOR';


    static GET_DONOR_DETAIL = 'GET_DONOR_DETAIL';
    static GET_DONOR_DETAIL_SUCCESSFUL = 'GET_DONOR_DETAIL_SUCCESSFUL';
    static GET_DONOR_DETAIL_REJECTED = 'GET_DONOR_DETAIL_REJECTED';


    static registerDonor() {
        return {
            type: DonorAction.REGISTER_DONOR
        }
    }

    static registerDonorSuccessful() {
        return {
            type: DonorAction.REGISTER_DONOR_SUCCESSFUL,
            
        }
    }

    static registerDonorRejected(error) {
        return {
            type: DonorAction.REGISTER_DONOR_REJECTED,
            payload: error
        }
    }  
    
    static getDonorList() {
        return {
            type: DonorAction.GET_DONOR_LIST
        }
    }

    static getDonorListSuccessful(donorList) {
        return {
            type: DonorAction.GET_DONOR_LIST_SUCCESSFUL,
            payload: donorList
        }
    }

    static addDonorToList(donorList) {
        return {
            type: DonorAction.ADD_DONOR,
            payload: donorList
        }
    }

    static getDonorDetail() {
        return {
            type: DonorAction.GET_DONOR_DETAIL
        }
    }

    static getDonorDetailSuccessful(donorIdDetail) {
        return {
            type: DonorAction.GET_DONOR_DETAIL_SUCCESSFUL,
            payload: donorIdDetail
        }
    }

    static getDonorDetailRejected(error) {
        return {
            type: DonorAction.GET_DONOR_DETAIL_REJECTED,
            payload: error
        }
    }    
}