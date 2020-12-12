function loadData() {
    $.ajax({
        url: 'http://api.manhnv.net/api/customers',
        method: 'GET',
        data: null,
        dataType: 'json',
        contentType: 'application/json'
    }).done(function (response) {
        $("#tbListData .table-customer").remove();
        for (var i = 0; i < response.length; i++) {
            var item = response[i];
            var customerCode = item['CustomerCode'];
            var fullName = item['FullName'];
            var genderName = item['GenderName'];
            var dob = formatDate(item['DateOfBirth']);
            var customerGroupName = item['CustomerGroupName'];
            var phoneNumber = item['PhoneNumber'];
            var email = item['Email'];
            var address = item['Address'];
            var debt = formatDebt(item['DebitAmount']);
            var memberCardCode = item["MemberCardCode"];
            var trHTML = `<tr>
                            <td>${customerCode}</td>
                            <td>${fullName}</td>
                            <td>${genderName}</td>
                            <td>${dob}</td>
                            <td>${customerGroupName}</td>
                            <td>${phoneNumber}</td>
                            <td>${email}</td>
                            <td>${address}</td>
                            <td>${debt}</td>
                            <td>${memberCardCode}</td>
                          </tr>`;
            $("#tbListData tbody").append(trHTML);
        }
    }).fail(function (response) {

    })
}

function onClickAddBtn() {
    $('#btn-add').click(function () {
        $(".m-dialog").show();
    })
}

function onClickCancelBtnDialog() {
    $("#btnCancel").click(function () {
        $(".m-dialog").hide();
    })
}

function onClickSaveBtnDialog() {
    $("#btnSave").click(function () {
        var customerCode = $("#txtCustomerCode").val();
        var fullName = $("#txtFullName").val();
        var memberCardCode = $("#txtMemberCardCode").val();
        var customerGroupName = $("#cbxCustomerGroup").children("option").filter(":selected").text();
        var dob = formatDate($("#dtDateOfBirth").val());
        var gender = $("#cbxGender").children("option").filter(":selected").text();
        var email = $("#txtEmail").val();
        var phoneNumber = $("#txtPhoneNumber").val();
        var address = $("#txtAdrress").val();
        var trHTML = `<tr>
                            <td>${customerCode}</td>
                            <td>${fullName}</td>
                            <td>${gender}</td>
                            <td>${dob}</td>
                            <td>${customerGroupName}</td>
                            <td>${phoneNumber}</td>
                            <td>${email}</td>
                            <td>${address}</td>
                            <td>${"Chưa rõ"}</td>
                            <td>${memberCardCode}</td>
                          </tr>`;
        $("#tbListData tbody").append(trHTML);
        $(".m-dialog").hide();
    })
}

function formatDate(date) {
    date = new Date(date);
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    return day + "/" + month + "/" + year;
}

function formatDebt(debt) {
    if (debt == null) return "Chưa rõ";
    return debt;
}

$(document).ready(function () {
    onClickAddBtn();
    onClickCancelBtnDialog();
    onClickSaveBtnDialog();
    loadData();
})