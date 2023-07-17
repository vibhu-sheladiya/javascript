
var tableData = []; // Array to store the table data

function validateform() {
  let name = document.forms['myform']['fname'].value;
  let fullname = document.forms['myform']['lname'].value;
  let phone = document.forms['myform']['phoneno'].value;
  let email = document.forms['myform']['email'].value;
  let borndate = document.forms['myform']['dob'].value;
  // let age = document.forms['myform']['age'].value;
  let address = document.forms['myform']['address'].value;
  let gender = document.querySelector('input[name="gender"]:checked');

  let nameError = document.getElementById('Error_name');
  let longnameError = document.getElementById('nameError');
  let phoneError = document.getElementById('phoneError');
  let emailError = document.getElementById('emailError');
  let dornError = document.getElementById('dobError');
  // let agesError = document.getElementById('ageError');
  let genderError = document.getElementById('genderError');
  try {
    nameError.textContent = "";
    longnameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    dornError.textContent = "";
    // agesError.textContent = "";
    genderError.textContent = "";

    if (name === "") throw 'Name cannot be empty';
    if (!isNaN(name)) throw 'Name cannot be a number';
    if (name.length < 4) throw 'Name must be at least 3 characters';
    if (name.length > 10) throw 'Name must be less than 10 characters';
    
    if (fullname === "") throw 'Name cannot be empty';
    if (!isNaN(fullname)) throw 'Name cannot be a number';
    if (fullname.length < 3) throw 'Name must be at least 3 characters';
    if (fullname.length > 10) throw 'Name must be less than 10 characters';
    if (phone === "") throw 'Phone Number cannot be empty';
    if (isNaN(phone)) throw 'Phone Number must be a number';
    if (phone.length !== 10) throw 'Phone Number must be 10 digits';
    
    if (email === "") throw 'Email cannot be empty';
    if (!validateEmail(email)) throw 'Invalid Email format';

    if (!gender) throw 'Please select a Gender';

 
    // Create an object for the input values
    var dataObj = {
      firstname:name,
      lastname:fullname,
      phone: phone,
      email: email,
      dateofbirth:borndate,
      // age:age,
      address:address,
      gender: gender.value
    };

    // Push the object into the tableData array
    tableData.push(dataObj);//store variable
    console.log(dataObj);
   

    // Clear the form inputs
    document.forms['myform'].reset();
    // Clear the table
    clearTable(); 
    // Re-render the table
    renderTable(tableData);
   
  } catch (err) {
    switch (err) {
      case 'Name cannot be empty':
        nameError.textContent = err;
        break;
      case 'Name cannot be a number':
        nameError.textContent = err;
        break;
      case 'Name must be at least 3 characters':
        nameError.textContent = err;
        break;
      case 'Name must be less than 10 characters':
        nameError.textContent = err;
        break;
      case 'last Name cannot be empty':
        longnameError.textContent = err;
        break;
      case 'last Name cannot be a number':
        longnameError.textContent = err;
        break;
      case 'last Name must be at least 3 characters':
        longnameError.textContent = err;
        break;
      case 'last Name must be less than 10 characters':
        longnameError.textContent = err;
        break;
      case 'Phone Number cannot be empty':
        phoneError.textContent = err;
        break;
      case 'Phone Number must be a number':
        phoneError.textContent = err;
        break;
      case 'Phone Number must be 10 digits':
        phoneError.textContent = err;
        break;
      case 'Email cannot be empty':
        emailError.textContent = err;
        break;
      case 'Invalid Email format':
        emailError.textContent = err;
        break;
      case 'Please select a Gender':
        genderError.textContent = err;
        break;
      default:
        console.log(err);
    }
  }

  return false; // Prevent form submission
}
function clearTable() {
  var dataTable = document.getElementById("dataTable");
  while (dataTable.rows.length > 1) {
    dataTable.deleteRow(1);
  }
}
function validateEmail(email) {
  // Email validation logic here (you can use regular expressions or any other validation approach)
  // This is a simple example, not a comprehensive validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
    
    var maleNamesTable = document.getElementById("maleNamesTable");//id
    while (maleNamesTable.rows.length > 1) {
      maleNamesTable.deleteRow(1);
    }
    
  function renderTable(data) {
    var dataTable = document.getElementById("dataTable");
    var maleNamesTable = document.getElementById("maleNamesTable");
            
    data.map(function (item) {
      var row = dataTable.insertRow(-1);
      
      var nameCell = row.insertCell(0);
      // nameCell.innerHTML = item.name;
      nameCell.innerHTML = item.firstname.charAt(0).toUpperCase() +item.firstname.slice(1) + " " + item.lastname.charAt(0).toUpperCase() +item.lastname.slice(1);//concat 
      
      // console.log(nameCell);

    var phoneCell = row.insertCell(1);
    phoneCell.innerHTML = item.phone;
    
    var emailCell = row.insertCell(2);
    emailCell.innerHTML = item.email;
    
    var dateobCell = row.insertCell(3);
    dateobCell.innerHTML = item.dateofbirth;
    
    // var ageCell = row.insertCell(4);
    // ageCell.innerHTML = item.age;
    
    var adressCell = row.insertCell(4);
    adressCell.innerHTML = item.address;
     
    var genderCell = row.insertCell(5);
    genderCell.innerHTML = item.gender;
   
    if (item.gender === 'male') {
      var maleRow = maleNamesTable.insertRow(-1);
      var maleNameCell = maleRow.insertCell(0);
      maleNameCell.innerHTML = item.firstname.toUpperCase();
      
    }
  });
 
}

var x = document.getElementById("heading");
setInterval(() => {
  const randomColor = getRandomColor();
  x.style.color = randomColor;
}, 1000);
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}