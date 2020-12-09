$(document).ready(function () {
    loadData();
})


function btnAddOneClick() {

}

function loadData() {
    alert("Hello Misa");
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
            var dob = item['DateOfBirth'];
            var customerGroupName = item['CustomerGroupName'];
            var phoneNumber = item['PhoneNumber'];
            var email = item['Email'];
            var address = item['Address'];
            var debt = item['DebitAmount'];
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