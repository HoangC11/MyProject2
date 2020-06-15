import { all } from 'redux-saga/effects';

import { watchLogin,  } from './loginSagas';
import {watchLayDanhSachDonHang} from './appSagas'


export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchLayDanhSachDonHang(),
    ]);
}