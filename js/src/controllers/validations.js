function showOrHide(elm, isShowed) {
    if (isShowed){
        elm.innerText = isShowed;
        elm.style.display = 'inline';
        return false;
    } else {
        elm.innerText = '';
        elm.style.display = 'none';
        return true;
    }
}

function validateFieldAccount() {
    const MIN = 4;
    const MAX = 6;
    const messElm = getElm('tbTKNV');
    const value = getElm('tknv').value;
    const label = getElm('tknv').placeholder;
    const result = validateRequiredField(value,label)
        || validateMinMaxLength(value, label, MIN, MAX);

    return showOrHide(messElm, result);
}

function validateFieldName() {
    const messElm = getElm('tbTen');
    const value = getElm('name').value;
    const label = getElm('name').placeholder;
    const result = validateRequiredField(value,label)
        || validateNotAllowNumber(value, label);

    return showOrHide(messElm, result);
}

function validateFieldEmail() {
    const messElm = getElm('tbEmail');
    const value = getElm('email').value;
    const label = getElm('email').placeholder;
    const result = validateRequiredField(value,label)
        || validateEmailFormat(value, label);

    return showOrHide(messElm, result);
}

function validateFieldPassword() {
    const MIN = 6;
    const MAX = 10;
    const messElm = getElm('tbMatKhau');
    const value = getElm('password').value;
    const label = getElm('password').placeholder;
    const result = validateRequiredField(value, label)
        || validatePasswordFormat(value, label)
        || validateMinMaxLength(value, label, MIN, MAX);

    return showOrHide(messElm, result);
}

function validateFieldStartDate() {
    const messElm = getElm('tbNgay');
    const value = getElm('datepicker').value;
    const label = getElm('datepicker').placeholder;
    const result = validateRequiredField(value, label)
        || validateDateFormat(value, label);

    return showOrHide(messElm, result);
}

function validateFieldBaseSalary() {
    const MIN = 10**6;
    const MAX = 2 * 10**10;
    const messElm = getElm('tbLuongCB');
    const value = getElm('luongCB').value;
    const label = getElm('luongCB').placeholder;
    const result = validateRequiredField(value, label)
        || validateOnlyAllowNumber(value, label)
        || validateMinMaxAmount(value, label, MIN, MAX);

    return showOrHide(messElm, result);
}

function validateFieldPosition() {
    const messElm = getElm('tbChucVu');
    const value = getElm('chucvu').value;
    const label = 'Chức vụ'
    const index = getElm('chucvu').selectedIndex;
    const result = validateRequiredField(value, label)
        || validateSelectbox(value, label, index);

    return showOrHide(messElm, result);
}

function validateFieldWorkTime() {
    const MIN = 80;
    const MAX = 200;
    const messElm = getElm('tbGiolam');
    const value = getElm('gioLam').value;
    const label = getElm('gioLam').placeholder;
    const result = validateRequiredField(value, label)
        || validateOnlyAllowNumber(value, label)
        || validateMinMaxAmount(value, label, MIN, MAX);

    return showOrHide(messElm, result);
}


function validateRequiredField(str, label) {
    if (!str || !str.length > 0){
        return `${label} là nội dung bắt buộc`;
    }
    return null;
}

function validateMinMaxLength(str, label, minLen, maxLen) {
    if (str.length < minLen  ||  str.length > maxLen) {
        return `${label} phải có độ dài từ ${minLen} ~ ${maxLen} ký tự`;
    }
    return null;
}

function validateMinMaxAmount(str, label, minAmount, maxAmount) {
    var number = Number(str);
    if (number < minAmount  ||  number > maxAmount) {
        return `${label} phải có giá trị từ ${minAmount} đến ${maxAmount}`;
    }
    return null;
}

function validateNotAllowNumber(str, label) {
    const NUMBER_REGEX = new RegExp('[0-9]');
    if (NUMBER_REGEX.test(str)) {
        return `${label} chỉ được nhập chữ, không được nhập số`;
    }
    return null;
}

function validateOnlyAllowNumber(str, label) {
    const NUMBER_REGEX = new RegExp('^[0-9]+$');
    if (!NUMBER_REGEX.test(str)) {
        return `${label} chỉ được nhập số`;
    }
    return null;
}

function validateEmailFormat(str, label) {
    const EMAIL_REGEX = new RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$');
    if (!EMAIL_REGEX.test(str)) {
        return `${label} chưa đúng định dạng email address`;
    }
    return null;
}

function validatePasswordFormat(str, label) {
    const PASSWORD_REGEX = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{3,}$');
    if (!PASSWORD_REGEX.test(str)) {
        return `${label} cần nhập ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt`;
    }
    return null;
}

function validateDateFormat(str, label) {
    const DATE_REGEX = new RegExp("^02\\/(?:[01]\\d|2\\d)\\/(?:19|20)(?:0[048]|[13579][26]|[2468][048])$|^(?:0[13578]|10|12)\\/(?:[0-2]\\d|3[01])\\/(?:19|20)\\d{2}$|^(?:0[469]|11)\\/(?:[0-2]\\d|30)\\/(?:19|20)\\d{2}$|^02\\/(?:[0-1]\\d|2[0-8])\\/(?:19|20)\\d{2}$");
    if (!DATE_REGEX.test(str)) {
        return `${label} cần nhập theo format mm/dd/yyyy`;
    }
    return null;
}

function validateSelectbox(str, label, index) {
    if (index <= 0) {
        return `${label} cần chọn nội dung hợp lệ`;
    }
    return null;
}