function getStorageData(key, defaultValue) {
    //Lấy giá trị đang lưu của key tương ứng ở LocalStorage
    //Trường hợp chưa có key tương ứng ở LocalStorage
    //  thì gọi hàm initStorageData để khởi tạo

    if (!localStorage[key] && defaultValue) {
        setStorageData(key, defaultValue);
    }

    var data = localStorage.getItem(key);
    return JSON.parse(data);
}

function setStorageData(key, newValue) {
    //Thay đổi giá trị cho key tương ứng ở LocalStorage

    let data = JSON.stringify(newValue);
    localStorage.setItem(key, data);

    return getStorageData(key);
}