import api from '../../utils/api';
//import common from '../../utils/common';

export default {
  getFeeStatistics(pageIndex, organizeId, pageSize = 10) {
    return api.postData('/api/MobileMethod/MGetFeeStatistics', {
      pageIndex,
      pageSize,
      organizeId,
    });
  },
  //楼栋或者车库
  getBuildings(keyvalue) {
    // return api.getData('/api/MobileMethod/MGetPStructs', {keyvalue, type: 2});
    return api.getData('/api/MobileMethod/MGetFeePStructs', {
      keyvalue,
      type: 2,
    });
  },
  //楼层
  getFloors(keyvalue) {
    return api.getData('/api/MobileMethod/MGetFeePStructs', {
      keyvalue,
      type: 4,
    });
  },
  //车位
  getParkings(keyvalue) {
    return api.getData('/api/MobileMethod/MGetFeePStructs', {
      keyvalue,
      type: 9,
    });
  },
  //房间
  getRooms(keyvalue) {
    return api.getData('/api/MobileMethod/MGetFeePStructs', {
      keyvalue,
      type: 5,
    });
  },

  //获取系统参数，楼盘id
  getSettingInfo(organizeId) {
    return api.getData('/api/MobileMethod/MGetSettingInfo', {
      organizeId
    });
  },

  //账单
  getBillList(type, id, isShow, pageIndex, pageSize = 10) {
    let url = '/api/MobileMethod/MGetNotChargeBillList';
    if (type === '已收') {
      url = '/api/MobileMethod/MGetChargeBillList';
    }
    return api.postData(url, {
      pageIndex,
      pageSize,
      unitId: id,
      isShow: isShow,
    });
  },
  //服务单
  serviceList(
    pageIndex,
    billStatus,
    //treeType,
    organizeId,
    billType,
    startTime,
    endTime,
  ) {
    /*
        {:,treeType:,organizeId:billType:,startTime:,endTime:,}
         */

    // if (billType === '报修') {
    //     url = '/api/MobileMethod/MGetRepairPageList';
    // } else if (billType === '投诉') {
    //     url = '/api/MobileMethod/MGetComplaintPageList';
    // }

    return api.postData('/api/MobileMethod/MGetServiceDeskPageList', {
      pageIndex,
      pageSize: 10,
      billStatus,
      status: billStatus,
      //treeType,
      organizeId,
      billType,
      startTime,
      endTime,
    });
  },

  weixiuList(
    pageIndex,
    billStatus,
    //treeType,
    organizeId,
    startTime,
    endTime,
    repairArea,
  ) {
    /*
        {:,treeType:,organizeId:billType:,startTime:,endTime:,}
         */

    // if (billType === '报修') {
    //     url = '';
    // } else if (billType === '投诉') {
    //     url = '/api/MobileMethod/MGetComplaintPageList';
    // }

    return api.postData('/api/MobileMethod/MGetRepairPageListForNavigator', {
      pageIndex,
      pageSize: 10,
      //billStatus,
      status: billStatus,
      //treeType,
      organizeId,
      startTime,
      endTime,
      repairArea,
    });
  },

  tousuList(
    pageIndex,
    billStatus,
    //treeType,
    organizeId,
    billType,
    startTime,
    endTime,
  ) {
    return api.postData('/api/MobileMethod/MGetComplaintPageList', {
      pageIndex,
      pageSize: 10,
      //billStatus,
      status: billStatus,
      //treeType,
      organizeId,
      billType,
      startTime,
      endTime,
    });
  },
  //服务单详情
  // serviceDetail(type,keyvalue) {
  //     let url = '/api/MobileMethod/MGetServicedeskEntity';
  //     if (billType === '报修') {
  //         url = '/api/MobileMethod/MGetRepairEntity';
  //     } else if (billType === '投诉') {
  //         url = '/api/MobileMethod/MGetComplaintEntity';
  //     }
  //     return api.getData(url,{keyvalue});
  // }

  collectionRate(page, estateId, type) {
    let url;
    switch (page) {
      case 1: {
        url = '/api/MobileMethod/MGetCollectionRate';
        break;
      }
      case 2: {
        url = '/api/MobileMethod/MGetCashFlow';
        break;
      }
      case 3: {
        url = '/api/MobileMethod/MGetArrearsAge';
        break;
      }
      case 4: {
        url = '/api/MobileMethod/MGetRepairCompletionRate';
        break;
      }
      case 5: {
        url = '/api/MobileMethod/MGetComplaintCompletionRate';
        break;
      }
      case 6: {
        url = '/api/MobileMethod/MGetVisitSatisfactionRate';
        break;
      }
      default:
        break;
    }
    return api.postData(url, { estateId, type });
  },

  // createOrder(linkId) {
  //     return api.postData('/api/MobileMethod/MCreateTradeno', {linkId});
  // },

  //创建预订单号
  createOrder(linkId, isML, mlType, mlScale) {
    return api.postData('/api/MobileMethod/MCreateTradeno', {
      linkId,
      isML,
      mlType,
      mlScale,
    });
  },

  //嘉联扫码
  jlScanPay(auth_code, tbout_trade_no) {
    return api.postData('/api/MobileMethod/JLScanPay', {
      auth_code,
      tbout_trade_no,
    });
  },

  //嘉联扫码，查询支付结果
  jlScanPayQuery(tbout_trade_no) {
    return api.postData(
      '/api/MobileMethod/JLScanPayQuery',
      { tbout_trade_no },
      false,
    );
  },

  //威富通扫码
  wftScanPay(auth_code, tbout_trade_no) {
    return api.postData('/api/MobileMethod/WFTScanPay', {
      auth_code,
      tbout_trade_no,
    });
  },
  //威富通扫码，查询支付结果
  wftScanPayQuery(tbout_trade_no) {
    return api.postData(
      '/api/MobileMethod/WFTScanPayQuery',
      { tbout_trade_no },
      false,
    );
  },
  //扫付款码,威富通接口支付失败，冲正接口进行关单
  wftScanPayReserve(tbout_trade_no) {
    return api.postData(
      '/api/MobileMethod/WFTScanPayReserve',
      { tbout_trade_no },
      false,
    );
  },

  //威富通生成收款码
  qrcodePay(tbout_trade_no) {
    return api.postData('/api/MobileMethod/WFTPay', { tbout_trade_no });
  },

  //嘉联生成收款码
  jlqrcodePay(tbout_trade_no) {
    return api.postData('/api/MobileMethod/JLQrcodePay', { tbout_trade_no });
  },

  //兴生活小程序二维码
  qrcodePayCIB(unitId, linkId) {
    return api.postData('/api/MobileMethod/CIBQrCode', { unitId, linkId });
  },

  //现金收款
  cashPay(linkId, isML, mlType, mlScale) {
    return api.postData('/api/MobileMethod/MCharge', {
      linkId,
      isML,
      mlType,
      mlScale,
    });
  },

  cashPayPrint(linkId) {
    return api.postData('/api/MobileMethod/MGetCashPrintInfo', { linkId });
  },

  orderStatus(out_trade_no) {
    return api.postData(
      '/api/MobileMethod/WFTPayResult',
      { out_trade_no },
      false,
    );
  },

  printInfo(out_trade_no) {
    return api.getData('/api/MobileMethod/MGetPrintInfo', { out_trade_no });
  },
  RePrintInfo(billId) {
    return api.getData('/api/MobileMethod/MGetRePrintInfo', { billId });
  },

  getFeeItemTreeJson(unitId) {
    return api.getData('/api/MobileMethod/GetFeeItemTreeJson', { unitId });
  },
  getFeeItemDetail(unitId, feeItemId) {
    return api.getData('/api/MobileMethod/GetFeeItemDetail', {
      unitId,
      feeItemId,
    });
  },
  saveFee(unitId, bills) {
    return api.postData('/api/MobileMethod/SaveFee', {
      bills: JSON.stringify(bills),
    });
  },
  invalidBillForm(keyvalue) {
    return api.postData('/api/MobileMethod/InvalidBillForm', { keyvalue });
  },
  billDetailList(billId) {
    return api.postData('/api/MobileMethod/MGetChargeBillDetailList', {
      billId,
    });
  },

  //计算费用金额
  CalFee(isML, mlType, mlScale, ids) {
    return api.postData(
      '/api/MobileMethod/MCalFee',
      { isML, mlType, mlScale, ids },
      false,
    );
  },

  // 收缴率、资金流、账龄分析
  GetReceiveFeeItems() {
    return api.getData('/api/MobileMethod/MGetReceiveFeeItems');
  },
  // 维修完成率
  GetDataItemTreeJsonRepairMajor() {
    return api.getData('/api/MobileMethod/MGetDataItemTreeJson', {
      code: 'RepairMajor',
    });
  },
  // 投诉完成率下拉接口
  GetDataItemTreeJsonComplainType() {
    return api.getData('/api/MobileMethod/MGetDataItemTreeJson', {
      code: 'ComplainType',
    });
  },
};
