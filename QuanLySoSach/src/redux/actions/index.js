//Linhtn23

import { 
    INCREMENT, DECREMENT, POST_LOGIN, DID_LOGIN_ACTION,
    LAY_DANH_SACH_DON_HANG 
} from './actionTypes';

export const layDanhSachDonHangAction = (sql) => {
    return {
        type: LAY_DANH_SACH_DON_HANG,
        sql: sql
    }
}
export const increaseAction = (step) => {
    return {
        type: INCREMENT,
        step: step
    }
}

export const onDidLogin = () => {
    return {
        type: DID_LOGIN_ACTION,
        
    }
}



export const decreaseAction = (step) => {
    return {
        type: DECREMENT,
        step: step
    }
}

export const loginAction = (user, password) => {
    return {
        type: POST_LOGIN,
        data: { user, password }
    }
}
