//Khởi tạo đối tượng "Danh sách Staf" (Staff List)
var staffList = new StaffList();
renderList();

function renderList(staffs) {
    if (!staffs) {
        staffs = staffList._getStaffList();
    }
    var content = '';

    for (var i = 0; i < staffs.length; i++){
        if(!staffs[i]){
            console.log("Dữ liệu bị sai ở", i);
            break;
        }
        content += `
            <tr>
                <td>${staffs[i].account}</td>
                <td>${staffs[i].name}</td>
                <td>${staffs[i].email}</td>
                <td>${staffs[i].startDate}</td>
                <td>${staffs[i].position}</td>
                <td>${new Intl.NumberFormat("vn-VN").format(staffs[i].salary)}</td>
                <td>${staffs[i].rate}</td>
                <td style="white-space: nowrap">
                    <button id="update-${i}" class="btn fa fa-pencil mx-1" 
                    style="padding: 0.25rem 0.75rem; background-color: white; color: dodgerblue; border: 1px solid dodgerblue"
                    data-toggle="modal" data-target="#myModal"
                    onclick="getStaff('${staffs[i].account}')"
                    >
                    </button>
                    <button id="delete-${i}" class="btn fa fa-trash mx-1" 
                    style="padding: 0.25rem 0.75rem; background-color: white; color: orangered; border: 1px solid orangered"
                    onclick="deleteStaff('${staffs[i].account}')"
                    >
                    </button>
                </td>
            </tr>
        `;
    }

    getElm('tableDanhSach').innerHTML = content;
}

function getElm(id) {
    return document.getElementById(id);
}

function getStaffInfoFormInput() {
    //Khởi tạo đối tượng mới từ Staff
    var newStaff = {};

    //Set giá trị cho đối tượng với input tương ứng từ Form
    newStaff.account = getElm('tknv').value;
    newStaff.name = getElm('name').value;
    newStaff.email = getElm('email').value;
    newStaff.password = getElm('password').value;
    newStaff.startDate = getElm('datepicker').value;
    newStaff.position = getElm('chucvu').value;
    newStaff.baseSalary = getElm('luongCB').value;
    newStaff.workTime = getElm('gioLam').value;

    var isAllValid = validationStaffForm();

    if (!isAllValid) {
        return null;
    }

    return newStaff;
}

function renderForm(existedData) {
    if (existedData){
        getElm('tknv').value = existedData.account;
        getElm('name').value = existedData.name;
        getElm('email').value = existedData.email;
        getElm('password').value = existedData.password;
        getElm('datepicker').value = existedData.startDate;
        getElm('chucvu').value = existedData.position;
        getElm('luongCB').value = existedData.baseSalary;
        getElm('gioLam').value = existedData.workTime;
    } else {
        getElm('tknv').value = '';
        getElm('name').value = '';
        getElm('email').value = '';
        getElm('password').value = '';
        getElm('datepicker').value = '';
        getElm('chucvu').value = '';
        getElm('luongCB').value = '';
        getElm('gioLam').value = '';
    }
}

function validationStaffForm(){
    var isAllValid = true;

    isAllValid &= validateFieldAccount();
    isAllValid &= validateFieldName();
    isAllValid &= validateFieldEmail();
    isAllValid &= validateFieldPassword();
    isAllValid &= validateFieldStartDate();
    isAllValid &= validateFieldBaseSalary();
    isAllValid &= validateFieldPosition();
    isAllValid &= validateFieldWorkTime();

    return isAllValid;
}

function addNewStaff() {
    var staffInfo = getStaffInfoFormInput();
    var result = staffList._addNewStaff(staffInfo);

    if (result) {
        renderList();
        renderForm();
    }}


function updateStaff(account, oldData) {
    var newData = getStaffInfoFormInput();
    var result = staffList._updateStaff(account, oldData, newData);
    if (result) {
        renderList();
        getStaff(newData.account);
    }
}

function deleteStaff(account) {
    staffList._deleteStaff(account);
    renderList();
}

function getStaff(account) {
    var result = staffList._getStaff(account);
    getElm("btnCapNhat").onclick = function () {
        updateStaff(account, result);
    };
    renderForm(result);
}


function findStaffByRate() {
    var targetRate = getElm("searchRate").value;
    var result = staffList._findStaffByRate(targetRate);
    renderList(result);
}