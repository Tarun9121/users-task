const users = [{
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    type: "user"
},
{
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    type: "admin"
},
{
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@example.com",
    type: "user"
}, {
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@example.com",
    type: "moderator"
}, {
    firstName: "David",
    lastName: "Wilson",
    email: "david.wilson@example.com",
    type: "user"
}, {
    firstName: "Emma",
    lastName: "Jones",
    email: "emma.jones@example.com",
    type: "user"
}, {
    firstName: "Chris",
    lastName: "Garcia",
    email: "chris.garcia@example.com",
    type: "admin"
}, {
    firstName: "Sophia",
    lastName: "Martinez",
    email: "sophia.martinez@example.com",
    type: "user"
}, {
    firstName: "Daniel",
    lastName: "Anderson",
    email: "daniel.anderson@example.com",
    type: "moderator"
}, {
    firstName: "Olivia",
    lastName: "Taylor",
    email: "olivia.taylor@example.com",
    type: "user"
}, {
    firstName: "James",
    lastName: "Thomas",
    email: "james.thomas@example.com",
    type: "user"
}, {
    firstName: "Isabella",
    lastName: "Moore",
    email: "isabella.moore@example.com",
    type: "admin"
}, {
    firstName: "Benjamin",
    lastName: "Jackson",
    email: "benjamin.jackson@example.com",
    type: "user"
}, {
    firstName: "Mia",
    lastName: "Harris",
    email: "mia.harris@example.com",
    type: "user"
}, {
    firstName: "Jacob",
    lastName: "White",
    email: "jacob.white@example.com",
    type: "moderator"
}
];

var searchType = document.getElementById("type-of-users")
let searchBar = document.getElementById("search-bar")
var table = document.getElementById("table");



function createRow() {
    let divTableRow = document.createElement("div");
    divTableRow.classList.add("table-row");

    for(let i = 1; i <= 4; i++) {
        let divChild = document.createElement("div");
        divChild.classList.add("table-content");
        divTableRow.append(divChild);
    }

    return divTableRow;
}

function addContentByUserObject(user) {
    let row = createRow()
    let childs = row.children;
    let keys = Object.keys(user);
    
    for(let i = 0; i < 4; i++) {
        childs[i].innerText = user[keys[i]]
    }

    table.append(row);    
}

function cleanUp() {
    let rows = Array.from(document.getElementsByClassName("table-row"));
    rows.forEach(row => row.remove());
}

function search() {
    cleanUp();

    if(searchType.value == "all-types") {
        users
        .filter(user => {
            let fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            return fullName.includes(searchBar.value.toLowerCase())
        })
        .forEach(user => addContentByUserObject(user));
    }
    else {
        users
        .filter(user => user.type == searchType.value)
        .filter(user => {
            let fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            return fullName.includes(searchBar.value.toLowerCase())
        })
        .forEach(user => addContentByUserObject(user));
    }
}

searchType.addEventListener("change", function() {
    search();
});

searchBar.addEventListener("input", function() {
    search();
});

(function() {
    search("all-types")
})();