
  // fetch the work orders

      fetch("https://www.hatchways.io/api/assessment/work_orders")
      .then(response => response.json())
      .then((data) => {

      var deadlines = data.orders.map(order => order.deadline);
      var descriptions = data.orders.map(order => order.description);
      var ids = data.orders.map(order => order.id);
      var names = data.orders.map(order => order.name);
      var workerIds = data.orders.map(order => order.workerId);
      for (let i = 0; i < ids.length; i++)
      console.log(deadlines[i])

      //fetch the workers ID

      // show orders

      for (let i = 0; i < ids.length; i++)
        document.getElementById("demo").insertAdjacentHTML('beforeend' , '<div class="card bg-light">' +
         '<div>' +'Work Order: ' + ids[i] + '</div>' +
         '<div>' + 'Description: ' + descriptions[i] + '</div>' +
         '<div>' + 'Deadline: ' + deadlines[i] + '</div>' +
         '<div>' + "Name" + names[i] + '</div>' +
         '<div>' + "Worker ID" + workerIds[i] + '</div>' +
          '</div>')



  fetch("https://www.hatchways.io/api/assessment/workers/" + 1)
  .then(response => response.json())
  .then((data) => {
    console.log(data.email);

    console.log(companyName)
    var email = data.worker.email
    var id = data.worker.id
    var image = data.worker.image
    var name = data.worker.name
    console.log(email)
    console.log(id)
    console.log(image)
    console.log(companyName)


  });

  };




