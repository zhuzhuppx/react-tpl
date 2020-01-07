import React from "react";
import { Table } from "antd";
import "./index.less";
import moment from 'moment'
const dataSource = [
   
        {
          "universityName": "北京工业大学",
          "sourceId": null,
          "examPaperTime": null,
          "createUserId": 8947,
          "education": "",
          "campusName": "本部",
          "humanRemark": "",
          "signCount": null,
          "placeId": 9001666,
          "modifyUserId": 8947,
          "project": {
            "projectId": 1004156,
            "projectName": "劳务费全流程测试项目",
            "projectCode": "CX300720192422",
            "projectOrderCode": "CP2019073060263",
            "soProjectOrderCode": null,
            "projectFinanceCode": null,
            "soProjectFinanceCode": null,
            "cpEffectDate": null,
            "soEffectDate": null,
            "zhaopinAccount": 1001,
            "friendId": 17804,
            "customerName": "北京华联综合超市股份有限公司",
            "projectIndustry": null,
            "projectDesc": null,
            "projectLevel": null,
            "preProject": 0,
            "projectStatus": 3,
            "projectApStatus": 3,
            "isAp": 1,
            "projectClass": 1001,
            "projectType": 1004,
            "resumeSysClass": 2,
            "domainLifeClass": 1,
            "workType": 1003,
            "bdManager": null,
            "bdManagerName": "王立军",
            "offlineWorkStartDate": null,
            "offlineWorkEndDate": null,
            "contractStartDate": 1564416000000,
            "contractEndDate": 1596124800000,
            "planConReturnDate": null,
            "planRevenueDate": 1596124800000,
            "projectPrice": 40000.000000,
            "pmId": 8947,
            "pmName": "王立军",
            "pmCityName": "北京",
            "pmCityId": 70,
            "projectStartDate": null,
            "projectEndDate": null,
            "createUserId": 8947,
            "createUserName": "王立军",
            "createTime": 1564465550587,
            "modifyUserId": 8947,
            "modifyTime": 1564466687486,
            "logoUrl": null,
            "logoPath": null,
            "changeReason": null,
            "changeType": null,
            "dataSource": null,
            "empId": "12700381",
            "saleName": "霍丽婷",
            "saleCityId": null,
            "saleCity": "北分",
            "planEndDate": null,
            "isSaleCreate": 0,
            "isRecycleGaap": null,
            "actualGaapDate": null,
            "gaapAmount": null,
            "isSendNps": 1,
            "isNewProject": 1,
            "specialBak": null,
            "isChannelProject": 0,
            "noNpsReason": "",
            "cpCreateTime": 1564416000000,
            "customerAttr": "上市公司",
            "customerCityName": "北京市",
            "saleArea": "北京区域",
            "saleLevel": "直销",
            "pmArea": "北京",
            "projectIndustryName": "",
            "zhaopinAccountName": "北京网聘咨询有限公司",
            "rejectReason": null,
            "rejectTime": null,
            "approvedTime": 1564466687486,
            "firstScore": null,
            "apProjectId": "29736",
            "costAmount": null,
            "incomeAmount": null,
            "isSysnData": null,
            "industryBigName": null,
            "industryBigId": null,
            "benchmarkingCustomer": 0,
            "parentId": -1,
            "applyAmount": 40000.000000,
            "projectVersion": 9,
            "isStepFinish": null,
            "isOverseas": 0,
            "rejectDetail": null,
            "cpBdManager": null,
            "cpBdManagerId": null,
            "osBdManager": null,
            "osBdManagerId": null,
            "bdManagerValid": 1,
            "cpBdManagerLine": null,
            "osBdManagerLine": null,
            "bdManagerLine": 1,
            "bdManagerId": "lj.wang",
            "cancelReason": null,
            "rejectName": null,
            "isRollback": 0
          },
          "createUserName": "王立军",
          "cityId": 70,
          "costStandardMode": "个人",
          "isPd": "",
          "modifyTime": 1566822945987,
          "rejectReason": null,
          "major": "",
          "qrCode": null,
          "messageType": "",
          "arrivalTime": "21:25",
          "backupVenues": "",
          "id": 51496,
          "shadowRequire": "",
          "examCount": null,
          "examPaperCount": null,
          "requireType": 1,
          "planStartTime": "21:30",
          "feedbacks": [
            {
              "id": 14821,
              "taskId": 81804,
              "placeName": "学生综合服务中心四层多功能厅",
              "seatCount": 400,
              "cost": "0",
              "planTime": "21:30-21:45",
              "arrivalTime": "21:25",
              "payLimit": "2019-08-26",
              "teacherContact": "15911077226",
              "createUserId": 8947,
              "createUserName": "王立军",
              "createTime": 1566822946000,
              "payeeMoney": 1.00,
              "isBill": "否",
              "placeId": 9001666
            }
          ],
          "invigilatePerRemark": null,
          "sealAllTime": null,
          "placeReserveCost": "0.00元/免费/0小时",
          "seatCount": "400",
          "planDate": 1566777600000,
          "chairRequire": "是",
          "humanCount": null,
          "placeType": "1",
          "companyId": null,
          "cityExamName": "",
          "scheduleType": null,
          "examineeSubmitTime": null,
          "costLimit": "",
          "attendanceRate": "0%",
          "presentId": null,
          "examCitysInfo": "",
          "projectName": "劳务费全流程测试项目",
          "examRoomSum": null,
          "projectId": 1004156,
          "status": null,
          "statusPlace": 12,
          "isSort": "",
          "invigilatePerSum": null,
          "statusHuman": null,
          "dataChangeLog": 0,
          "remark": "",
          "useType": "宣讲会",
          "partTimeNum": "",
          "examineeSum": null,
          "modifyUserName": "王立军",
          "interfacePeople": null,
          "preHour": null,
          "cityName": "北京",
          "projectCode": "CX300720192422",
          "payPrice": 30.00,
          "showSignCode": 0,
          "cancelReason": null,
          "scheduleIds": null,
          "examRoomNum": null,
          "fieldPrice": null,
          "isScore": "",
          "campusId": 33,
          "alternative": "",
          "isPhoto": "",
          "isAll": "",
          "universityId": 28,
          "screenRequire": "",
          "signNum": null,
          "posterRequire": "",
          "friendId": 17804,
          "createTime": 1566822821880,
          "planTime": "21:30-21:45",
          "sealTime": null,
          "mikeRequire": "",
          "examPaperSource": "",
          "planEndTime": "21:45",
          "writtenExamType": "",
          "placeName": "学生综合服务中心四层多功能厅",
          "pm": {
            "userId": 8947,
            "userName": "王立军",
            "userMobile": 15116952753,
            "userEmail": "lj.wang@zhaopin.com.cn",
            "userExtNumber": 62496,
            "leaderId": null,
            "leaderName": "喻强",
            "empId": 13035431,
            "empCode": "ZL49633",
            "cityId": 70,
            "cityName": "北京",
            "userType": 1,
            "dingtalkUserId": "142325355929420795",
            "wechatUserId": "",
            "status": 1,
            "createTime": 1546524895448,
            "modifyTime": 1577776686696,
            "createUserId": -1,
            "modifyUserId": 8947,
            "roleNames": "海外渠道、运营、培训运营、内勤、产品管理员、线下宣传分配站长、面试官管理员、超级用户、临时角色（测试用）、项目经理、就业网分配站长、执行团队、BBS分配站长、智能终端分配站长、智能屏幕执行人员、新媒体分配站长、TL、智联盟执行、智联盟站长、新媒体执行人员、内部劳务管理员",
            "dataCityNames": "广州、北京、北京、武汉、武汉、北京、北京、武汉、武汉、上海、上海、北京、北京、北京、北京、武汉、武汉、武汉、武汉、上海、上海、北京、北京、北京、北京、北京、北京、北京、北京、武汉、武汉、武汉、武汉、武汉、武汉、武汉、武汉、上海、上海、上海、上海、东莞、东莞、深圳、深圳",
            "loginName": "lj.wang"
          },
          "markingInfo": ""
        },
        {
          "universityName": "北京工业大学",
          "sourceId": null,
          "examPaperTime": null,
          "createUserId": 8947,
          "education": "",
          "campusName": "本部",
          "humanRemark": "",
          "signCount": null,
          "placeId": 9001666,
          "modifyUserId": 8947,
          "project": {
            "projectId": 1004156,
            "projectName": "劳务费全流程测试项目",
            "projectCode": "CX300720192422",
            "projectOrderCode": "CP2019073060263",
            "soProjectOrderCode": null,
            "projectFinanceCode": null,
            "soProjectFinanceCode": null,
            "cpEffectDate": null,
            "soEffectDate": null,
            "zhaopinAccount": 1001,
            "friendId": 17804,
            "customerName": "北京华联综合超市股份有限公司",
            "projectIndustry": null,
            "projectDesc": null,
            "projectLevel": null,
            "preProject": 0,
            "projectStatus": 3,
            "projectApStatus": 3,
            "isAp": 1,
            "projectClass": 1001,
            "projectType": 1004,
            "resumeSysClass": 2,
            "domainLifeClass": 1,
            "workType": 1003,
            "bdManager": null,
            "bdManagerName": "王立军",
            "offlineWorkStartDate": null,
            "offlineWorkEndDate": null,
            "contractStartDate": 1564416000000,
            "contractEndDate": 1596124800000,
            "planConReturnDate": null,
            "planRevenueDate": 1596124800000,
            "projectPrice": 40000.000000,
            "pmId": 8947,
            "pmName": "王立军",
            "pmCityName": "北京",
            "pmCityId": 70,
            "projectStartDate": null,
            "projectEndDate": null,
            "createUserId": 8947,
            "createUserName": "王立军",
            "createTime": 1564465550587,
            "modifyUserId": 8947,
            "modifyTime": 1564466687486,
            "logoUrl": null,
            "logoPath": null,
            "changeReason": null,
            "changeType": null,
            "dataSource": null,
            "empId": "12700381",
            "saleName": "霍丽婷",
            "saleCityId": null,
            "saleCity": "北分",
            "planEndDate": null,
            "isSaleCreate": 0,
            "isRecycleGaap": null,
            "actualGaapDate": null,
            "gaapAmount": null,
            "isSendNps": 1,
            "isNewProject": 1,
            "specialBak": null,
            "isChannelProject": 0,
            "noNpsReason": "",
            "cpCreateTime": 1564416000000,
            "customerAttr": "上市公司",
            "customerCityName": "北京市",
            "saleArea": "北京区域",
            "saleLevel": "直销",
            "pmArea": "北京",
            "projectIndustryName": "",
            "zhaopinAccountName": "北京网聘咨询有限公司",
            "rejectReason": null,
            "rejectTime": null,
            "approvedTime": 1564466687486,
            "firstScore": null,
            "apProjectId": "29736",
            "costAmount": null,
            "incomeAmount": null,
            "isSysnData": null,
            "industryBigName": null,
            "industryBigId": null,
            "benchmarkingCustomer": 0,
            "parentId": -1,
            "applyAmount": 40000.000000,
            "projectVersion": 9,
            "isStepFinish": null,
            "isOverseas": 0,
            "rejectDetail": null,
            "cpBdManager": null,
            "cpBdManagerId": null,
            "osBdManager": null,
            "osBdManagerId": null,
            "bdManagerValid": 1,
            "cpBdManagerLine": null,
            "osBdManagerLine": null,
            "bdManagerLine": 1,
            "bdManagerId": "lj.wang",
            "cancelReason": null,
            "rejectName": null,
            "isRollback": 0
          },
          "createUserName": "王立军",
          "cityId": 70,
          "costStandardMode": "个人",
          "isPd": "",
          "modifyTime": 1565245541391,
          "rejectReason": null,
          "major": "",
          "qrCode": null,
          "messageType": "",
          "arrivalTime": "05:05",
          "backupVenues": "",
          "id": 48772,
          "shadowRequire": "",
          "examCount": null,
          "examPaperCount": null,
          "requireType": 3,
          "planStartTime": "16:00",
          "feedbacks": [
            {
              "id": 14612,
              "taskId": 77272,
              "placeName": "学生综合服务中心四层多功能厅",
              "seatCount": 400,
              "cost": "0",
              "planTime": "16:00-17:00",
              "arrivalTime": "05:05",
              "payLimit": "2019-08-31",
              "teacherContact": "15911077226",
              "createUserId": 8947,
              "createUserName": "王立军",
              "createTime": 1565245541406,
              "payeeMoney": 1.00,
              "isBill": "否",
              "placeId": 9001666
            }
          ],
          "invigilatePerRemark": null,
          "sealAllTime": null,
          "placeReserveCost": "0.00元/免费/0小时",
          "seatCount": "400",
          "planDate": 1565222400000,
          "chairRequire": "",
          "humanCount": 1,
          "placeType": "1",
          "companyId": null,
          "cityExamName": "",
          "scheduleType": null,
          "examineeSubmitTime": null,
          "costLimit": "",
          "attendanceRate": "0%",
          "presentId": null,
          "examCitysInfo": "",
          "projectName": "劳务费全流程测试项目",
          "examRoomSum": null,
          "projectId": 1004156,
          "status": null,
          "statusPlace": 12,
          "isSort": "",
          "invigilatePerSum": null,
          "statusHuman": 1,
          "dataChangeLog": 0,
          "remark": "",
          "useType": "笔试",
          "partTimeNum": "",
          "examineeSum": null,
          "modifyUserName": "王立军",
          "interfacePeople": null,
          "preHour": null,
          "cityName": "北京",
          "projectCode": "CX300720192422",
          "payPrice": 30.00,
          "showSignCode": 0,
          "cancelReason": null,
          "scheduleIds": null,
          "examRoomNum": null,
          "fieldPrice": null,
          "isScore": "",
          "campusId": 33,
          "alternative": "",
          "isPhoto": "",
          "isAll": "",
          "universityId": 28,
          "screenRequire": "",
          "signNum": null,
          "posterRequire": "",
          "friendId": 17804,
          "createTime": 1565245482342,
          "planTime": "16:00-17:00",
          "sealTime": null,
          "mikeRequire": "",
          "examPaperSource": "",
          "planEndTime": "17:00",
          "writtenExamType": "",
          "placeName": "学生综合服务中心四层多功能厅",
          "pm": {
            "userId": 8947,
            "userName": "王立军",
            "userMobile": 15116952753,
            "userEmail": "lj.wang@zhaopin.com.cn",
            "userExtNumber": 62496,
            "leaderId": null,
            "leaderName": "喻强",
            "empId": 13035431,
            "empCode": "ZL49633",
            "cityId": 70,
            "cityName": "北京",
            "userType": 1,
            "dingtalkUserId": "142325355929420795",
            "wechatUserId": "",
            "status": 1,
            "createTime": 1546524895448,
            "modifyTime": 1577776686696,
            "createUserId": -1,
            "modifyUserId": 8947,
            "roleNames": "海外渠道、运营、培训运营、内勤、产品管理员、线下宣传分配站长、面试官管理员、超级用户、临时角色（测试用）、项目经理、就业网分配站长、执行团队、BBS分配站长、智能终端分配站长、智能屏幕执行人员、新媒体分配站长、TL、智联盟执行、智联盟站长、新媒体执行人员、内部劳务管理员",
            "dataCityNames": "广州、北京、北京、武汉、武汉、北京、北京、武汉、武汉、上海、上海、北京、北京、北京、北京、武汉、武汉、武汉、武汉、上海、上海、北京、北京、北京、北京、北京、北京、北京、北京、武汉、武汉、武汉、武汉、武汉、武汉、武汉、武汉、上海、上海、上海、上海、东莞、东莞、深圳、深圳",
            "loginName": "lj.wang"
          },
          "markingInfo": ""
        },
        {
          "universityName": "北京工业大学",
          "sourceId": null,
          "examPaperTime": null,
          "createUserId": 8947,
          "education": "",
          "campusName": "本部",
          "humanRemark": "",
          "signCount": null,
          "placeId": 9001666,
          "modifyUserId": 8947,
          "project": {
            "projectId": 1004156,
            "projectName": "劳务费全流程测试项目",
            "projectCode": "CX300720192422",
            "projectOrderCode": "CP2019073060263",
            "soProjectOrderCode": null,
            "projectFinanceCode": null,
            "soProjectFinanceCode": null,
            "cpEffectDate": null,
            "soEffectDate": null,
            "zhaopinAccount": 1001,
            "friendId": 17804,
            "customerName": "北京华联综合超市股份有限公司",
            "projectIndustry": null,
            "projectDesc": null,
            "projectLevel": null,
            "preProject": 0,
            "projectStatus": 3,
            "projectApStatus": 3,
            "isAp": 1,
            "projectClass": 1001,
            "projectType": 1004,
            "resumeSysClass": 2,
            "domainLifeClass": 1,
            "workType": 1003,
            "bdManager": null,
            "bdManagerName": "王立军",
            "offlineWorkStartDate": null,
            "offlineWorkEndDate": null,
            "contractStartDate": 1564416000000,
            "contractEndDate": 1596124800000,
            "planConReturnDate": null,
            "planRevenueDate": 1596124800000,
            "projectPrice": 40000.000000,
            "pmId": 8947,
            "pmName": "王立军",
            "pmCityName": "北京",
            "pmCityId": 70,
            "projectStartDate": null,
            "projectEndDate": null,
            "createUserId": 8947,
            "createUserName": "王立军",
            "createTime": 1564465550587,
            "modifyUserId": 8947,
            "modifyTime": 1564466687486,
            "logoUrl": null,
            "logoPath": null,
            "changeReason": null,
            "changeType": null,
            "dataSource": null,
            "empId": "12700381",
            "saleName": "霍丽婷",
            "saleCityId": null,
            "saleCity": "北分",
            "planEndDate": null,
            "isSaleCreate": 0,
            "isRecycleGaap": null,
            "actualGaapDate": null,
            "gaapAmount": null,
            "isSendNps": 1,
            "isNewProject": 1,
            "specialBak": null,
            "isChannelProject": 0,
            "noNpsReason": "",
            "cpCreateTime": 1564416000000,
            "customerAttr": "上市公司",
            "customerCityName": "北京市",
            "saleArea": "北京区域",
            "saleLevel": "直销",
            "pmArea": "北京",
            "projectIndustryName": "",
            "zhaopinAccountName": "北京网聘咨询有限公司",
            "rejectReason": null,
            "rejectTime": null,
            "approvedTime": 1564466687486,
            "firstScore": null,
            "apProjectId": "29736",
            "costAmount": null,
            "incomeAmount": null,
            "isSysnData": null,
            "industryBigName": null,
            "industryBigId": null,
            "benchmarkingCustomer": 0,
            "parentId": -1,
            "applyAmount": 40000.000000,
            "projectVersion": 9,
            "isStepFinish": null,
            "isOverseas": 0,
            "rejectDetail": null,
            "cpBdManager": null,
            "cpBdManagerId": null,
            "osBdManager": null,
            "osBdManagerId": null,
            "bdManagerValid": 1,
            "cpBdManagerLine": null,
            "osBdManagerLine": null,
            "bdManagerLine": 1,
            "bdManagerId": "lj.wang",
            "cancelReason": null,
            "rejectName": null,
            "isRollback": 0
          },
          "createUserName": "王立军",
          "cityId": 70,
          "costStandardMode": "个人",
          "isPd": "",
          "modifyTime": 1565245139446,
          "rejectReason": null,
          "major": "",
          "qrCode": null,
          "messageType": "",
          "arrivalTime": "05:00",
          "backupVenues": "",
          "id": 48768,
          "shadowRequire": "",
          "examCount": null,
          "examPaperCount": null,
          "requireType": 3,
          "planStartTime": "17:00",
          "feedbacks": [
            {
              "id": 14611,
              "taskId": 77266,
              "placeName": "学生综合服务中心四层多功能厅",
              "seatCount": 400,
              "cost": "0",
              "planTime": "17:00-18:00",
              "arrivalTime": "05:00",
              "payLimit": "2019-08-08",
              "teacherContact": "15911077226",
              "createUserId": 8947,
              "createUserName": "王立军",
              "createTime": 1565245139463,
              "payeeMoney": 0.01,
              "isBill": "否",
              "placeId": 9001666
            }
          ],
          "invigilatePerRemark": null,
          "sealAllTime": null,
          "placeReserveCost": "0.00元/免费/0小时",
          "seatCount": "400",
          "planDate": 1565222400000,
          "chairRequire": "",
          "humanCount": 1,
          "placeType": "1",
          "companyId": null,
          "cityExamName": "",
          "scheduleType": null,
          "examineeSubmitTime": null,
          "costLimit": "",
          "attendanceRate": "0%",
          "presentId": null,
          "examCitysInfo": "",
          "projectName": "劳务费全流程测试项目",
          "examRoomSum": null,
          "projectId": 1004156,
          "status": null,
          "statusPlace": 12,
          "isSort": "",
          "invigilatePerSum": null,
          "statusHuman": 1,
          "dataChangeLog": 0,
          "remark": "",
          "useType": "面试",
          "partTimeNum": "1",
          "examineeSum": null,
          "modifyUserName": "王立军",
          "interfacePeople": null,
          "preHour": null,
          "cityName": "北京",
          "projectCode": "CX300720192422",
          "payPrice": 30.00,
          "showSignCode": 0,
          "cancelReason": null,
          "scheduleIds": null,
          "examRoomNum": null,
          "fieldPrice": null,
          "isScore": "",
          "campusId": 33,
          "alternative": "",
          "isPhoto": "",
          "isAll": "",
          "universityId": 28,
          "screenRequire": "",
          "signNum": null,
          "posterRequire": "",
          "friendId": 17804,
          "createTime": 1565244140923,
          "planTime": "17:00-18:00",
          "sealTime": null,
          "mikeRequire": "",
          "examPaperSource": "",
          "planEndTime": "18:00",
          "writtenExamType": "",
          "placeName": "学生综合服务中心四层多功能厅",
          "pm": {
            "userId": 8947,
            "userName": "王立军",
            "userMobile": 15116952753,
            "userEmail": "lj.wang@zhaopin.com.cn",
            "userExtNumber": 62496,
            "leaderId": null,
            "leaderName": "喻强",
            "empId": 13035431,
            "empCode": "ZL49633",
            "cityId": 70,
            "cityName": "北京",
            "userType": 1,
            "dingtalkUserId": "142325355929420795",
            "wechatUserId": "",
            "status": 1,
            "createTime": 1546524895448,
            "modifyTime": 1577776686696,
            "createUserId": -1,
            "modifyUserId": 8947,
            "roleNames": "海外渠道、运营、培训运营、内勤、产品管理员、线下宣传分配站长、面试官管理员、超级用户、临时角色（测试用）、项目经理、就业网分配站长、执行团队、BBS分配站长、智能终端分配站长、智能屏幕执行人员、新媒体分配站长、TL、智联盟执行、智联盟站长、新媒体执行人员、内部劳务管理员",
            "dataCityNames": "广州、北京、北京、武汉、武汉、北京、北京、武汉、武汉、上海、上海、北京、北京、北京、北京、武汉、武汉、武汉、武汉、上海、上海、北京、北京、北京、北京、北京、北京、北京、北京、武汉、武汉、武汉、武汉、武汉、武汉、武汉、武汉、上海、上海、上海、上海、东莞、东莞、深圳、深圳",
            "loginName": "lj.wang"
          },
          "markingInfo": ""
        },
        {
          "universityName": "北京工业大学",
          "sourceId": null,
          "examPaperTime": null,
          "createUserId": 8947,
          "education": "",
          "campusName": "本部",
          "humanRemark": "",
          "signCount": null,
          "placeId": 9001666,
          "modifyUserId": 8947,
          "project": {
            "projectId": 1004084,
            "projectName": "测试项目",
            "projectCode": "CX240720192350",
            "projectOrderCode": "",
            "soProjectOrderCode": "",
            "projectFinanceCode": "",
            "soProjectFinanceCode": "",
            "cpEffectDate": null,
            "soEffectDate": null,
            "zhaopinAccount": 1025,
            "friendId": 27198863,
            "customerName": "宁德时代新能源科技股份有限公司",
            "projectIndustry": 130000,
            "projectDesc": "",
            "projectLevel": null,
            "preProject": 1,
            "projectStatus": 0,
            "projectApStatus": 0,
            "isAp": 1,
            "projectClass": 1002,
            "projectType": 1002,
            "resumeSysClass": 1,
            "domainLifeClass": 2,
            "workType": 1003,
            "bdManager": null,
            "bdManagerName": "王立军",
            "offlineWorkStartDate": null,
            "offlineWorkEndDate": null,
            "contractStartDate": 1563897600000,
            "contractEndDate": 1564502400000,
            "planConReturnDate": null,
            "planRevenueDate": 1564502400000,
            "projectPrice": null,
            "pmId": 8947,
            "pmName": "王立军",
            "pmCityName": "北京",
            "pmCityId": 70,
            "projectStartDate": null,
            "projectEndDate": null,
            "createUserId": 8947,
            "createUserName": "王立军",
            "createTime": 1563938847226,
            "modifyUserId": 8947,
            "modifyTime": 1563939396147,
            "logoUrl": "",
            "logoPath": "",
            "changeReason": "",
            "changeType": null,
            "dataSource": "",
            "empId": "12862451",
            "saleName": "余翠霞",
            "saleCityId": null,
            "saleCity": "福州",
            "planEndDate": null,
            "isSaleCreate": 0,
            "isRecycleGaap": null,
            "actualGaapDate": null,
            "gaapAmount": null,
            "isSendNps": 1,
            "isNewProject": 1,
            "specialBak": "",
            "isChannelProject": 0,
            "noNpsReason": "",
            "cpCreateTime": null,
            "customerAttr": "外商独资",
            "customerCityName": "宁德市",
            "saleArea": "华南大区",
            "saleLevel": "KA",
            "pmArea": "北京",
            "projectIndustryName": "能源/矿产/采掘/冶炼",
            "zhaopinAccountName": "北京网聘咨询有限公司哈尔滨分公司",
            "rejectReason": "",
            "rejectTime": null,
            "approvedTime": null,
            "firstScore": null,
            "apProjectId": "",
            "costAmount": null,
            "incomeAmount": null,
            "isSysnData": null,
            "industryBigName": "能源|矿产|环保",
            "industryBigId": 11600,
            "benchmarkingCustomer": 0,
            "parentId": -1,
            "applyAmount": null,
            "projectVersion": 9,
            "isStepFinish": null,
            "isOverseas": 0,
            "rejectDetail": null,
            "cpBdManager": "",
            "cpBdManagerId": "",
            "osBdManager": "",
            "osBdManagerId": "",
            "bdManagerValid": 1,
            "cpBdManagerLine": null,
            "osBdManagerLine": null,
            "bdManagerLine": 1,
            "bdManagerId": "lj.wang",
            "cancelReason": null,
            "rejectName": null,
            "isRollback": 0
          },
          "createUserName": "王立军",
          "cityId": 70,
          "costStandardMode": "个人",
          "isPd": "",
          "modifyTime": 1564984246611,
          "rejectReason": null,
          "major": "",
          "qrCode": null,
          "messageType": "",
          "arrivalTime": "05:10",
          "backupVenues": "",
          "id": 48544,
          "shadowRequire": "",
          "examCount": null,
          "examPaperCount": null,
          "requireType": 3,
          "planStartTime": "14:45",
          "feedbacks": [
            {
              "id": 14606,
              "taskId": 76873,
              "placeName": "学生综合服务中心四层多功能厅",
              "seatCount": 400,
              "cost": "0",
              "planTime": "14:45-15:00",
              "arrivalTime": "05:10",
              "payLimit": "2019-08-05",
              "teacherContact": "15911077226",
              "createUserId": 8947,
              "createUserName": "王立军",
              "createTime": 1564984246622,
              "payeeMoney": 1.00,
              "isBill": "否",
              "placeId": 9001666
            }
          ],
          "invigilatePerRemark": null,
          "sealAllTime": null,
          "placeReserveCost": "0.00元/免费/0小时",
          "seatCount": "400",
          "planDate": 1564963200000,
          "chairRequire": "",
          "humanCount": 1,
          "placeType": "1",
          "companyId": null,
          "cityExamName": "",
          "scheduleType": null,
          "examineeSubmitTime": null,
          "costLimit": "",
          "attendanceRate": "0%",
          "presentId": null,
          "examCitysInfo": "",
          "projectName": "测试项目",
          "examRoomSum": null,
          "projectId": 1004084,
          "status": null,
          "statusPlace": 12,
          "isSort": "",
          "invigilatePerSum": null,
          "statusHuman": 1,
          "dataChangeLog": 0,
          "remark": "",
          "useType": "面试",
          "partTimeNum": "1",
          "examineeSum": null,
          "modifyUserName": "王立军",
          "interfacePeople": null,
          "preHour": null,
          "cityName": "北京",
          "projectCode": "CX240720192350",
          "payPrice": 30.00,
          "showSignCode": 0,
          "cancelReason": null,
          "scheduleIds": null,
          "examRoomNum": null,
          "fieldPrice": null,
          "isScore": "",
          "campusId": 33,
          "alternative": "",
          "isPhoto": "",
          "isAll": "",
          "universityId": 28,
          "screenRequire": "",
          "signNum": null,
          "posterRequire": "",
          "friendId": 27198863,
          "createTime": 1564984175763,
          "planTime": "14:45-15:00",
          "sealTime": null,
          "mikeRequire": "",
          "examPaperSource": "",
          "planEndTime": "15:00",
          "writtenExamType": "",
          "placeName": "学生综合服务中心四层多功能厅",
          "pm": {
            "userId": 8947,
            "userName": "王立军",
            "userMobile": 15116952753,
            "userEmail": "lj.wang@zhaopin.com.cn",
            "userExtNumber": 62496,
            "leaderId": null,
            "leaderName": "喻强",
            "empId": 13035431,
            "empCode": "ZL49633",
            "cityId": 70,
            "cityName": "北京",
            "userType": 1,
            "dingtalkUserId": "142325355929420795",
            "wechatUserId": "",
            "status": 1,
            "createTime": 1546524895448,
            "modifyTime": 1577776686696,
            "createUserId": -1,
            "modifyUserId": 8947,
            "roleNames": "海外渠道、运营、培训运营、内勤、产品管理员、线下宣传分配站长、面试官管理员、超级用户、临时角色（测试用）、项目经理、就业网分配站长、执行团队、BBS分配站长、智能终端分配站长、智能屏幕执行人员、新媒体分配站长、TL、智联盟执行、智联盟站长、新媒体执行人员、内部劳务管理员",
            "dataCityNames": "广州、北京、北京、武汉、武汉、北京、北京、武汉、武汉、上海、上海、北京、北京、北京、北京、武汉、武汉、武汉、武汉、上海、上海、北京、北京、北京、北京、北京、北京、北京、北京、武汉、武汉、武汉、武汉、武汉、武汉、武汉、武汉、上海、上海、上海、上海、东莞、东莞、深圳、深圳",
            "loginName": "lj.wang"
          },
          "markingInfo": ""
        }
      
];

const columns = [
  {
    title: "城市",
    dataIndex: "cityName",
    key: "cityName"
  },
  {
    title: "学校",
    dataIndex: "universityName",
    key: "universityName"
  },
  {
    title: "校区",
    dataIndex: "campusName",
    key: "campusName"
  },
  {
    title: "场地",
    dataIndex: "placeName",
    key: "placeName"
  },
  {
    title: "日期",
    dataIndex: "planDate",
    key: "planDate",render(text,record,index){
        return text?moment(text).format('YYYY-MM-DD'):''
    }
  },
  {
    title: "使用时段",
    dataIndex: "planTime",
    key: "planTime"
  },
  {
    title: "用途",
    dataIndex: "useType",
    key: "useType"
  },
  {
    title: "场地状态",
    dataIndex: "statusPlace",
    key: "statusPlace"
  }
];

class Schedule extends React.Component {
  render() {
    return (
      <div>
        <Table dataSource={dataSource} columns={columns} pagination={false}/>
      </div>
    );
  }
}
export default Schedule;
