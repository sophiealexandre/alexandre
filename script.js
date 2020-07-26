 fetch("https://www.hatchways.io/api/assessment/work_orders")
      .then(response => response.json())
      .then((data) => {

      var deadlines = data.orders.map(order => order.deadline);
      var descriptions = data.orders.map(order => order.description);
      var ids = data.orders.map(order => order.id);
      var names = data.orders.map(order => order.name);
      var workerIds = data.orders.map(order => order.workerId);
      console.log(deadlines)
      //for (let i = 0; i < ids.length; i++)
      //console.log(deadlines[i])
  })

      fetch("https://www.hatchways.io/api/assessment/workers/" + 1)
      .then(response => response.json())
      .then((data) => {
      for (let i = 0; i < data.worker.id; i++)
      var email = data.worker.email
      console.log(email)

  });


