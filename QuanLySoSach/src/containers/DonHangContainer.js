import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/home/Home'
import { layDanhSachDonHangAction } from '../redux/actions/index'
import { formatNowDate } from '../components/custom/CustomFunctions'
class DonHangContainer extends Component {

    constructor(props) {
        super(props)

    }
    componentDidMount() {
        let nowDate = formatNowDate()
        const sql = 'select * from DonHang join KhachHang ON DonHang.idKhachHang = KhachHang.id WHERE ngayTao= \'' + nowDate + '\''

        this.props.layDanhSachDonHangAction(sql)
    }

    render() {
        return (
            <Home {...this.props} />
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingDonHang: state.appReducers.fetchingDonHang,
        responseDonHang: state.appReducers.responseDonHang,
        errorDonHang: state.appReducers.errorDonHang
    }
}

const mapDispatchToProps = dispatch => {
    return {
        layDanhSachDonHangAction: (sql) => {
            dispatch(layDanhSachDonHangAction(sql))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonHangContainer)