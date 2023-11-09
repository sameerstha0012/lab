// 1. Arrow function

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(student => {
            console.log(this.title + ": " + student
            );
        });
    }
};
group.showList();

// 2. Self pattern

let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        const self = this;
        self.students.forEach(function (student) {
            console.log(self.title + ": " + student
            );
        });
    }
};
group2.showList();

// 3. bind

let group3 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        }.bind(this));
    }
};
group3.showList();

// 4. call + wrapper
let group4 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((stu) => {
            (function (student) {
                console.log(this.title + ": " + student);
            }).call(this, stu);
        });
    }
};
group4.showList();

// 5. apply + wrapper
let group5 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((stu) => {
            (function (student) {
                console.log(this.title + ": " + student);
            }).apply(this, [stu]);
        });
    }
};
group5.showList();