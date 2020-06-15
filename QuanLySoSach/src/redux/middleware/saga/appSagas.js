import {
    LAY_DANH_SACH_DON_HANG,
    LAY_DANH_SACH_DON_HANG_THANH_CONG,
    LAY_DANH_SACH_DON_HANG_THAT_BAI
} from '../../actions/actionTypes';


import { call, takeEvery, put } from 'redux-saga/effects';

import { callApi } from '../api/apiApp'

function* layDanhSachDonHang(action) {
    try {
        const response = yield callApi(action.sql)
        if (response !== undefined) {
            yield put({ type: LAY_DANH_SACH_DON_HANG_THANH_CONG, response })
        } else {
            yield put({ type: LAY_DANH_SACH_DON_HANG_THAT_BAI, error: 'Không lấy được thông tin' })
        }
    } catch (error) {
        console.log(error)
        yield put({ type: LAY_DANH_SACH_DON_HANG_THAT_BAI, error })
    }
}

export function* watchLayDanhSachDonHang() {
    yield takeEvery(LAY_DANH_SACH_DON_HANG, layDanhSachDonHang);
}