//Linhtn23

import {
    LAY_DANH_SACH_DON_HANG,
    LAY_DANH_SACH_DON_HANG_THAT_BAI,
    LAY_DANH_SACH_DON_HANG_THANH_CONG
} from '../actions/actionTypes';

const initialState = {
    fetchingDonHang: false,
    responseDonHang: undefined,
    errorDonHang: undefined
}

const appReducers = (state = initialState, action) => {

    switch (action.type) {
        case LAY_DANH_SACH_DON_HANG:
            //console.log(action.response)
            return Object.assign({}, state, {
                fetchingDonHang: true,
                responseDonHang: undefined,
                errorDonHang: undefined
            })

        case LAY_DANH_SACH_DON_HANG_THANH_CONG:
            return Object.assign({}, state, {
                fetchingDonHang: false,
                responseDonHang: action.response,
                errorDonHang: undefined
            })
        case LAY_DANH_SACH_DON_HANG_THAT_BAI:
            return Object.assign({}, state, {
                fetchingDonHang: false,
                responseDonHang: undefined,
                errorDonHang: action.error
            })

        default:
            return state;
    }
}

export default appReducers;