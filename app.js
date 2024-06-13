#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Student = /** @class */ (function () {
    function Student(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 1000;
    }
    Student.prototype.enroll_courses = function (course) {
        this.courses.push(course);
    };
    Student.prototype.view_balance = function () {
        console.log("Balance for ".concat(this.name, " : $").concat(this.balance));
    };
    Student.prototype.pay_fees = function (fees_amount) {
        this.balance -= +fees_amount;
        console.log("".concat(fees_amount, " has paid the fees successfully for ").concat(this.name, ". "));
    };
    Student.prototype.show_Status = function () {
        console.log("id : ".concat(this.id, " "));
        console.log("name : ".concat(this.name));
        console.log("courses : ".concat(this.courses));
        console.log("Balance : ".concat(this.balance));
    };
    Student.counter = 1000;
    return Student;
}());
var Student_manager = /** @class */ (function () {
    function Student_manager() {
        this.students = [];
    }
    //method to add the student name
    Student_manager.prototype.add_student = function (name) {
        var student = new Student(name);
        this.students.push(student); //push data to constructor.
        console.log("Student : ".concat(name, " has successfully added. Student ID : ").concat(student.id, " "));
    };
    //method to enroll the courses
    Student_manager.prototype.enroll_courses = function (studnet_id, course) {
        var student = this.students.find(function (std) { return std.id === studnet_id; });
        if (student) {
            student.enroll_courses(course);
            console.log("Student Name : ".concat(student.name, " enroll in ").concat(course, " successfully."));
        }
    };
    Student_manager.prototype.find_student = function (student_id) {
        return this.students.find(function (std) { return std.id === student_id; });
    };
    Student_manager.prototype.view_student_balance = function (student_id) {
        var student = this.find_student(student_id);
        if (student) {
            student.view_balance();
        }
        else {
            console.log("student id not found. Please enter correct student ID");
        }
    };
    Student_manager.prototype.pay_tution_fees = function (student_id, Amount) {
        var student = this.find_student(student_id);
        if (student) {
            student.pay_fees(Amount);
        }
        else {
            console.log("student id not found. Please enter correct student ID");
        }
    };
    Student_manager.prototype.show_student_status = function (student_id) {
        var student = this.find_student(student_id);
        if (student) {
            student.show_Status();
        }
    };
    return Student_manager;
}());
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var student_manager, choice, _a, name_input, course_input, balance_input, PayFees_input, showStatus_input;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("WelCome to CodeWith Fahad Warsi - Student Managment System");
                    console.log("-".repeat(50));
                    student_manager = new Student_manager();
                    _b.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 15];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: "choice",
                                type: "list",
                                message: "Select an option",
                                choices: [
                                    "Add student",
                                    "Enroll courses",
                                    "View Balance",
                                    "Pay Fees",
                                    "Show Status",
                                    "Exit",
                                ],
                            },
                        ])];
                case 2:
                    choice = _b.sent();
                    _a = choice.choice;
                    switch (_a) {
                        case "Add student": return [3 /*break*/, 3];
                        case "Enroll courses": return [3 /*break*/, 5];
                        case "View Balance": return [3 /*break*/, 7];
                        case "Pay Fees": return [3 /*break*/, 9];
                        case "Show Status": return [3 /*break*/, 11];
                        case "Exit": return [3 /*break*/, 13];
                    }
                    return [3 /*break*/, 14];
                case 3: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "std_name",
                            type: "input",
                            message: "Please enter student name",
                        },
                    ])];
                case 4:
                    name_input = _b.sent();
                    student_manager.add_student(name_input.std_name);
                    return [3 /*break*/, 14];
                case 5: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "std_id",
                            type: "number",
                            message: "Please enter Student ID",
                        },
                        {
                            name: "course_name",
                            type: "input",
                            message: "Please enter course name",
                        },
                    ])];
                case 6:
                    course_input = _b.sent();
                    student_manager.enroll_courses(course_input.std_id, course_input.course_name);
                    return [3 /*break*/, 14];
                case 7: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "std_id",
                            type: "number",
                            message: "Please enter Student ID",
                        },
                    ])];
                case 8:
                    balance_input = _b.sent();
                    student_manager.view_student_balance(balance_input.std_id);
                    return [3 /*break*/, 14];
                case 9: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "std_id",
                            type: "number",
                            message: "Please enter Student ID",
                        },
                        {
                            name: "Amount",
                            type: "number",
                            message: "please enter an Amount",
                        },
                    ])];
                case 10:
                    PayFees_input = _b.sent();
                    student_manager.pay_tution_fees(PayFees_input.std_id, PayFees_input.Amount);
                    return [3 /*break*/, 14];
                case 11: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "std_id",
                            type: "number",
                            message: "Please enter Student ID",
                        },
                    ])];
                case 12:
                    showStatus_input = _b.sent();
                    student_manager.show_student_status(showStatus_input.std_id);
                    return [3 /*break*/, 14];
                case 13:
                    console.log("Exiting....");
                    process.exit();
                    _b.label = 14;
                case 14: return [3 /*break*/, 1];
                case 15: return [2 /*return*/];
            }
        });
    });
}
//calling a main function
main();
