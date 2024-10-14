const users = [{firstName: "hema",lastName: "viraja",email: "john.doe@example.com",type: "user"},
{firstName: "hema",lastName: "viraja",email: "jane.smith@example.com",type: "admin"},
{firstName: "Michael",lastName: "Brown",email: "michael.brown@example.com",type: "user"
}, {firstName: "Emily",lastName: "Davis",email: "emily.davis@example.com",type: "moderator"
}, {firstName: "David",lastName: "Wilson",email: "david.wilson@example.com",type: "user"
}, {firstName: "Emma",lastName: "Jones",email: "emma.jones@example.com",type: "user"
}, {firstName: "Chris",lastName: "Garcia",email: "chris.garcia@example.com",type: "admin"
}, {firstName: "Sophia",lastName: "Martinez",email: "sophia.martinez@example.com",type: "user"
}, {firstName: "Daniel",lastName: "Anderson",email: "daniel.anderson@example.com",type: "moderator"
}, {firstName: "Olivia",lastName: "Taylor",email: "olivia.taylor@example.com",type: "user"
}, {firstName: "James",lastName: "Thomas",email: "james.thomas@example.com",type: "user"
}, {firstName: "Isabella",lastName: "Moore",email: "isabella.moore@example.com",type: "admin"
}, {firstName: "Benjamin",lastName: "Jackson",email: "benjamin.jackson@example.com",type: "user"
}, {firstName: "Mia",lastName: "Harris",email: "mia.harris@example.com",type: "user"
}, {firstName: "Jacob",lastName: "White",email: "jacob.white@example.com",type: "moderator"
}
];

var searchType = document.getElementById("type-of-users")
let searchBar = document.getElementById("search-bar")
var table = document.getElementById("table");


function createRow() {
    let divTableRow = document.createElement("div");
    divTableRow.classList.add("table-row");

    for(let i = 1; i <= 5; i++) {
        let divChild = document.createElement("div");

        if(i != 4)
            divChild.classList.add("table-content", "captilize-text")

        divTableRow.append(divChild);
    }

    return divTableRow;
}

function cleanUp() {
    let rows = Array.from(document.getElementsByClassName("table-row"));
    rows.forEach(row => row.remove());
}

function addContentByUserObject(user) {
    let row = createRow()
    let childs = row.children;
    let keys = Object.keys(user);
    
    childs[0].innerText = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`

    for(let i = 0; i < 4; i++) {
        if(user[keys[i]])
            childs[i+1].innerText = user[keys[i]]
        else 
            childs[i+1].innerText = "---"
    }

    table.append(row);    
}

function sortByFullName(user1, user2) {
    return `${user1.firstName} ${user1.lastName}`.localeCompare(`${user2.firstName} ${user2.lastName}`)
}

function search() {
    cleanUp();

    if(searchType.value == "all-types") {
        users.sort(sortByFullName);

        users
        .filter(user => {
            let fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            return fullName.includes(searchBar.value.toLowerCase())
        })
        .forEach(user => addContentByUserObject(user));
    }
    else {
        let filteredUsers = users
        .filter(user => user.type == searchType.value)
        .filter(user => {
            let fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            return fullName.includes(searchBar.value.toLowerCase())
        });

        filteredUsers.sort(sortByFullName);
        filteredUsers.forEach(user => addContentByUserObject(user));
    }
} 

searchType.addEventListener("change", search);

searchBar.addEventListener("input", search);

(function() {
    search("all-types");
})();