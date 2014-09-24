function clearMaintId()
{
  console.log("clear");
   var elemId = document.getElementById("idMaintInput");
   elemId.value = "";
}

function deleteMaintRow(id)
{
 console.log("Delete " + id)
 row = document.getElementById('Mrow' + id);
 table = document.getElementById('Maintbody');
 console.log(table);
 table.removeChild(row);
  console.log(row);
 //need php call to update csv file
}

function selectMaintenanceWorksRow(id)
{
 console.log("Select " + id)
 //Get Forms
  var elemId = document.getElementById("idMaintInput");
  var elemDate = document.getElementById("dateMaintInput");
  var elemTime = document.getElementById("timeMaintInput");
  var elemWorksDescription = document.getElementById("worksDescriptionMaintInput");
  var elemEquipmentId = document.getElementById("equipmentIdMaintInput");
  var elemTimeTaken = document.getElementById("timeTakenMaintInput");
   //Get Values
  var tableId = document.getElementById('Id' + id).innerText;
  var tableDate = document.getElementById('Date' + id).innerText;
  var tableTime = document.getElementById('Time' + id).innerText;
  var tableWorksDescription = document.getElementById('WorksDescription' + id).innerText;
  var tableEquipmentId = document.getElementById('EquipmentId' + id).innerText;
  var tableTimeTaken = document.getElementById('TimeTaken' + id).innerText;
 //Assign
  elemId.value = tableId;
  elemDate.value = tableDate;
  elemTime.value = tableTime;
  elemWorksDescription.value = tableWorksDescription;
  elemEquipmentId.value = tableEquipmentId;
  elemTimeTaken.value = tableTimeTaken;
}

function newMaintenanceRow()
{
    console.log("new element");
    var elemId = document.getElementById("idMaintInput");
    var elemDate = document.getElementById("dateMaintInput");
    var elemTime = document.getElementById("timeMaintInput");
    var elemWorksDescription = document.getElementById("worksDescriptionMaintInput");
    var elemEquipmentId = document.getElementById("equipmentIdMaintInput");
    var elemTimeTaken = document.getElementById("timeTakenMaintInput");
    var table = document.getElementById("Maintbody");
    //get last element id (to avoid duplication when a lower note is deleted)
    var sample = parseInt(table.rows[table.rows.length - 1].innerText) + 1;
    console.log(sample);
    var row = table.insertRow(-1);
    row.id = 'Mrow' + table.rows.length;
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    cell0.innerHTML = '<a href="JavaScript:selectMaintenanceWorksRow('+ sample +')">'+ sample +'</a>';
    cell0.className = 'Id'
    cell0.id = 'Id' + sample;
    cell1.innerHTML = elemDate.value;
    cell1.className = 'Date'
    cell1.id = 'Date' +  sample;
    cell2.innerHTML = elemTime.value;
    cell2.className = 'Time'
    cell2.id = 'Time' +  sample;
    cell3.innerHTML = elemWorksDescription.value;
    cell3.className = 'WorksDescription'
    cell3.id = 'WorksDescription' +  sample;
    cell4.innerHTML = elemEquipmentId.value;
    cell4.className = 'EquipmentId'
    cell4.id = 'EquipmentId' +  sample;
    cell5.innerHTML = elemTimeTaken.value;
    cell5.className = 'TimeTaken'
    cell5.id = 'TimeTaken' +  sample;
    cell6.innerHTML = '<button onclick="deleteMaintRow('+ sample +')">X</button>'
    cell6.className = 'Delete'
      //need php call to update csv file
     $.ajax({
         type: 'GET',
         url: 'newCSV.php?type=MaintenanceWorks.csv&f0='+ sample + '&f1=' + elemDate.value+ '&f2=' + elemTime.value+ '&f3=' + elemWorksDescription.value+ '&f4=' + elemEquipmentId.value + '&f5=' + elemTimeTaken.value,
         data: null,
         success: function(text) { 
         }
       });
}

function updateMaintenanceRow()
{
  var elemId = document.getElementById("idMaintInput");
  var elemDate = document.getElementById("dateMaintInput");
  var elemTime = document.getElementById("timeMaintInput");
  var elemWorksDescription = document.getElementById("worksDescriptionMaintInput");
  var elemEquipmentId = document.getElementById("equipmentIdMaintInput");
  var elemTimeTaken = document.getElementById("timeTakenMaintInput");
   //Assign
    if ((document.getElementById('Id' + elemId.value))) {
    console.log("update element");
    document.getElementById('Date' + elemId.value).innerText = elemDate.value;
    document.getElementById('Time' + elemId.value).innerText =elemTime.value ;
    document.getElementById('WorksDescription' + elemId.value).innerText =  elemWorksDescription.value;
    document.getElementById('EquipmentId' + elemId.value).innerText = elemEquipmentId.value;
    document.getElementById('TimeTaken' + elemId.value).innerText = elemTimeTaken.value;
    //need php call to update csv file
   } 
}