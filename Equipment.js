function clearEquipId()
{
  console.log("clear");
   var elemId = document.getElementById("idEquipmentInput");
   elemId.value = "";
}

function deleteEquipmentRow(id)
{
 console.log("Delete " + id)
 row = document.getElementById('Erow' + id);
 table = document.getElementById('Equipbody');
 console.log(table);
 table.removeChild(row);
  console.log(row);
 //need php call to update csv file
}

function selectEquipmentRow(id)
{
 console.log("Select " + id)
 //Get Forms
  var elemId = document.getElementById("idEquipmentInput");
  var elemDate = document.getElementById("nameEquipmentInput");

  //Get Values
  var tableId = document.getElementById('eqId' + id).innerText;
  var tableDate = document.getElementById('eqName' + id).innerText;

 //Assign
  elemId.value = tableId;
  elemDate.value = tableDate;
}

function newEquipmentRow()
{
    console.log("new element");
    var elemId = document.getElementById("idEquipmentInput");
    var elemName = document.getElementById("nameEquipmentInput");
    var table = document.getElementById("Equipbody");
    //get last element id (to avoid duplication when a lower note is deleted)
    var sample = parseInt(table.rows[table.rows.length - 1].innerText) + 1;
    console.log(sample);
    var row = table.insertRow(-1);
    row.id = 'Erow' + table.rows.length;
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    cell0.innerHTML = '<a href="JavaScript:updateEquipmentRow('+ sample +')">'+ sample +'</a>';
    cell0.className = 'eqId'
    cell0.id = 'eqId' + sample;
    cell1.innerHTML = elemName.value;
    cell1.className = 'eqName'
    cell1.id = 'eqName' +  sample;
    cell2.innerHTML = '<button onclick="deleteEquipmentRow('+ sample +')">X</button>'
    cell2.className = 'Delete'
    //need php call to update csv file
     $.ajax({
         type: 'GET',
         url: 'newCSV.php?type=Equipment.csv&f0='+ sample + '&f1=' + elemName.value,
         data: null,
         success: function(text) { 
         }
       });
}

function updateEquipmentRow()
{
  var elemId = document.getElementById("idEquipmentInput");
  var elemName = document.getElementById("nameEquipmentInput");
   //Assign
    if ((document.getElementById('eqId' + elemId.value))) {
    console.log("update element");
    document.getElementById('eqName' + elemId.value).innerText = elemName.value;
    //need php call to update csv file
   } 
}