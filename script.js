const tbody = document.getElementById('tbody'); // élément tbody du tableau
const students = []; // liste des étudiants

// fonction de création de ligne
const createLine = (tbody, student) => {
  const newRow   = tbody.insertRow();
  let counter = 0
  for (const key in student) {
    const newCell  = newRow.insertCell(counter);
    const newText  = document.createTextNode(student[key]);
    newCell.appendChild(newText);
    counter++
  }
}


const sendForm = (firsName,lastName,grade,numberClass) => {
const student  = {id: '',firsName,lastName,grade,numberClass};
const xhr = new XMLHttpRequest();
xhr.open ('POST', 'https://reqres.in/api/users');
xhr.addEventListener('readystatechange', function(){
    if (xhr.readyState === 4)
    {
        if(xhr.status === 201)
        {
            const data= JSON.parse(xhr.response);
            student.id = data.id;
            createLine(tbody, student);
        } else{
            alert ('Erreur')
        }
    }
});

xhr.send(student)
};
