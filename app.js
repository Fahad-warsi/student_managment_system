import inquirer from "inquirer";
class Student {
    static counter = 1000;
    id;
    name;
    courses;
    balance;
    constructor(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 1000;
    }
    enroll_courses(course) {
        this.courses.push(course);
    }
    view_balance() {
        console.log(`Balance for ${this.name} : $${this.balance}`);
    }
    pay_fees(fees_amount) {
        this.balance -= +fees_amount;
        console.log(`${fees_amount} has paid the fees successfully for ${this.name}. `);
    }
    show_Status() {
        console.log(`id : ${this.id} `);
        console.log(`name : ${this.name}`);
        console.log(`courses : ${this.courses}`);
        console.log(`Balance : ${this.balance}`);
    }
}
class Student_manager {
    students;
    constructor() {
        this.students = [];
    }
    //method to add the student name
    add_student(name) {
        let student = new Student(name);
        this.students.push(student); //push data to constructor.
        console.log(`Student : ${name} has successfully added. Student ID : ${student.id} `);
    }
    //method to enroll the courses
    enroll_courses(studnet_id, course) {
        let student = this.students.find((std) => std.id === studnet_id);
        if (student) {
            student.enroll_courses(course);
            console.log(`Student Name : ${student.name} enroll in ${course} successfully.`);
        }
    }
    find_student(student_id) {
        return this.students.find((std) => std.id === student_id);
    }
    view_student_balance(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.view_balance();
        }
        else {
            console.log(`student id not found. Please enter correct student ID`);
        }
    }
    pay_tution_fees(student_id, Amount) {
        let student = this.find_student(student_id);
        if (student) {
            student.pay_fees(Amount);
        }
        else {
            console.log(`student id not found. Please enter correct student ID`);
        }
    }
    show_student_status(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.show_Status();
        }
    }
}
async function main() {
    console.log(`WelCome to CodeWith Fahad Warsi - Student Managment System`);
    console.log("-".repeat(50));
    let student_manager = new Student_manager();
    //while loop keep runing program
    while (true) {
        let choice = await inquirer.prompt([
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
        ]);
        //using switch case handle a user choice...
        switch (choice.choice) {
            case "Add student":
                let name_input = await inquirer.prompt([
                    {
                        name: "std_name",
                        type: "input",
                        message: "Please enter student name",
                    },
                ]);
                student_manager.add_student(name_input.std_name);
                break;
            case "Enroll courses":
                let course_input = await inquirer.prompt([
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
                ]);
                student_manager.enroll_courses(course_input.std_id, course_input.course_name);
                break;
            case "View Balance":
                let balance_input = await inquirer.prompt([
                    {
                        name: "std_id",
                        type: "number",
                        message: "Please enter Student ID",
                    },
                ]);
                student_manager.view_student_balance(balance_input.std_id);
                break;
            case "Pay Fees":
                let PayFees_input = await inquirer.prompt([
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
                ]);
                student_manager.pay_tution_fees(PayFees_input.std_id, PayFees_input.Amount);
                break;
            case "Show Status":
                let showStatus_input = await inquirer.prompt([
                    {
                        name: "std_id",
                        type: "number",
                        message: "Please enter Student ID",
                    },
                ]);
                student_manager.show_student_status(showStatus_input.std_id);
                break;
            case "Exit":
                console.log("Exiting....");
                process.exit();
        }
    }
}
//calling a main function
main();
