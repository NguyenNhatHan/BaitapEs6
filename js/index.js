import { Person, Student, Employee, Customer } from './person.js'

// helper
function getEle(selector) {
    return document.querySelector(selector);
}

//
let ListPerson = [];

const getElee = (id) => document.getElementById(id);
getElee("categoryTable").onchange = () => {
    const value = getElee("categoryTable").value;
    switch (value) {
        case "hs": {
            getElee("modalSinhVien").style.display = "block";
            getElee("modalEmployee").style.display = "none";
            getElee("modalCustomer").style.display = "none";
            getElee("btnThem").style.display = "block";
            getElee("tableHs").style.display = "block";
            getElee("tableNv").style.display = "none";
            getElee("tableKh").style.display = "none";

            break;
        }
        case "nv": {
            getElee("modalSinhVien").style.display = "none";
            getElee("modalEmployee").style.display = "block";
            getElee("modalCustomer").style.display = "none";
            getElee("btnThem").style.display = "block";
            getElee("tableHs").style.display = "none";
            getElee("tableNv").style.display = "block";
            getElee("tableKh").style.display = "none";
            break;
        }
        case "kh": {
            getElee("modalSinhVien").style.display = "none";
            getElee("modalEmployee").style.display = "none";
            getElee("modalCustomer").style.display = "block";
            getElee("btnThem").style.display = "block";
            getElee("tableHs").style.display = "none";
            getElee("tableNv").style.display = "none";
            getElee("tableKh").style.display = "block";
            break;
        }
        case "": {
            getElee("btnThem").style.display = "none";
            getElee("tableHs").style.display = "none";
            getElee("tableNv").style.display = "none";
            getElee("tableKh").style.display = "none";
            break;
        }
        default:
            break;
    }
}


// Hiển thị danh sách Học sinh
function renderStudent(student) {
    let html = student.reduce((result, student) => {
        return (result +
            `
            <tr>
                <td>${student.id}</td>
                <td>${student.fullName}</td>
                <td>${student.address}</td>
                <td>${student.email}</td>
                <td>${student.math}</td>
                <td>${student.physics}</td>
                <td>${student.chemistry}</td>
                <td>${student.averageGrade()}</td>
                <td>
                    <button class="btn btn-primary my-1" data-toggle="modal" data-target="#personModal" data-id="${student.id}" title="Sửa"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="btn btn-danger my-1" onclick="window.deleteStudent(${student.id})" title="Xóa"><i class="fa-regular fa-trash-can"></i></button>
                </td>
            </tr>
            `
        );
    }, "");

    getEle("#ListHs").innerHTML = html;
}

// Hiển thị danh sách Nhân viên
function renderEmployee(employee) {
    let html = employee.reduce((result, employee) => {
        return (result +
            `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.fullName}</td>
                <td>${employee.address}</td>
                <td>${employee.email}</td>
                <td>${employee.day}</td>
                <td>${employee.totalSalary()}</td>
                <td>
                    <button class="btn btn-primary my-1" data-toggle="modal" data-target="#personModal" data-id="${employee.id}" title="Sửa"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="btn btn-danger my-1" onclick="window.deleteEmployee(${employee.id})" title="Xóa"><i class="fa-regular fa-trash-can"></i></button>
                </td>
            </tr>
            `
        );
    }, "");

    getEle("#ListNv").innerHTML = html;
}

// Hiển thị danh sách khách hàng
function renderCustomer(customer) {
    let html = customer.reduce((result, customer) => {
        return (result +
            `
            <tr>
                <td class="text-center">${customer.id}</td>
                <td class="text-center">${customer.fullName}</td>
                <td class="text-center">${customer.address}</td>
                <td class="text-center">${customer.email}</td>
                <td class="text-center">${customer.company}</td>
                <td class="text-center">${customer.invoice}</td>
                <td class="text-center">${customer.comment}</td>
                <td class="text-center">
                    <button class="btn btn-primary my-1" data-toggle="modal" data-target="#personModal" data-id="${customer.id}" title="Sửa"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="btn btn-danger my-1" onclick="window.deleteCustomer(${customer.id})" title="Xóa"><i class="fa-regular fa-trash-can"></i></button>
                </td>
            </tr>
            `
        );
    }, "");

    getEle("#ListKh").innerHTML = html;
}

// Thêm  học sinh
window.createStudent = function createStudent() {
    let id = getEle("#id").value;
    let fullName = getEle("#fullName").value;
    let email = getEle("#email").value;
    let address = getEle("#address").value;
    let math = getEle("#math").value;
    let physics = getEle("#physics").value
    let chemistry = getEle("#chemistry").value
    
    const student = new Student(id, fullName, address, email, math, physics, chemistry);

    ListPerson.push(student);

    renderStudent(ListPerson);

    // $('#exampleModal').modal('hide')
}
// Thêm học sinh
window.createEmployee = function createEmployee () {
    let id = getEle("#id").value;
    let fullName = getEle("#fullName").value;
    let email = getEle("#email").value;
    let address = getEle("#address").value;
    let days = getEle("#days").value;
    let baseSalary = getEle("#baseSalary").value;
    console.log(id)
    const employee = new Employee(id, fullName, address, email, days, baseSalary);

    ListPerson.push(employee);

    renderEmployee(ListPerson);
}