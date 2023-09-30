function StaffList() {
    const STAFF_LIST_KEY = "staffList";

    this._getStaffList = function () {
        return getStorageData(STAFF_LIST_KEY, []);
    }

    this._addNewStaff = function (staffInfo) {
        //Tạo một biến mới và gán các giá trị nhập từ Form
        var newStaff = this._createStaffFromInput(staffInfo);

        if (!newStaff) {
            return null
        }

        //Đẩy vào danh sách tạm
        var tempArray = this._getStaffList();
        tempArray.push(newStaff);
        setStorageData(STAFF_LIST_KEY, tempArray);

        return true;
    }

    this._createStaffFromInput = function(staffInfo) {

        //Không xử lý tiếp nếu không có giá trị hợp lệ
        if (!staffInfo) {
            return null;
        }

        return new Staff(
            staffInfo.account,
            staffInfo.name,
            staffInfo.email,
            staffInfo.password,
            staffInfo.startDate,
            staffInfo.position,
            staffInfo.baseSalary,
            staffInfo.workTime,
        );
    }

    this._getStaff = function (account) {
        //Đẩy vào danh sách tạm
        var tempArray = this._getStaffList();

        for(var i = 0; i < tempArray.length; i++){
            if (tempArray[i].account === account){
                //Xóa phần tử ở vị trí i trong mảng tạm
                //Slice: Bắt đầu từ vị trí i, xóa đi 1 phần tử => Chỉ xóa chính nó
                return tempArray[i];
            }
        }

        return null;
    }

    this._deleteStaff = function (account) {
        //Đẩy vào danh sách tạm
        var tempArray = this._getStaffList();

        for(var i = 0; i < tempArray.length; i++){
            if (tempArray[i].account === account){
                //Xóa phần tử ở vị trí i trong mảng tạm
                //Slice: Bắt đầu từ vị trí i, xóa đi 1 phần tử => Chỉ xóa chính nó
                tempArray.splice(i, 1);
                break;
            }
        }

        return setStorageData(STAFF_LIST_KEY, tempArray);
    }

    this._updateStaff = function (account, oldData, newData) {
        //Đẩy vào danh sách tạm
        var tempArray = this._getStaffList();

        for(var i = 0; i < tempArray.length; i++){
            if (tempArray[i].account === account){
                //Tạo một biến mới và gán các giá trị nhập từ Form
                var newStaff = this._createStaffFromInput(newData);

                if (!newStaff) {
                    return null
                }

                //Đẩy vào danh sách tạm
                tempArray.splice(i, 1, newStaff);

                break;
            }
        }

        return setStorageData(STAFF_LIST_KEY, tempArray);
    }

    this._findStaffByRate = function (rate) {
        var tempArray = this._getStaffList();
        var targetArray = [];

        if (!rate) {
            return null;
        }

        for (var i = 0; i < tempArray.length; i++){
            if (tempArray[i].rate === rate){
                targetArray.push(tempArray[i]);
            }
        }

        return targetArray;
    }
}




