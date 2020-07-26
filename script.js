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

         var uniqueWorkerIds = workerIds.filter(function(item, pos) {
             return workerIds.indexOf(item) == pos;
         });
         console.log(uniqueWorkerIds);
         for (let i = 0; i < uniqueWorkerIds; i++) {
             fetch("https://www.hatchways.io/api/assessment/workers/" + i)
                 .then(response => response.json())
                 .then((data) => {
                     var emails = data.workers.map(worker => worker.deadline);
                     console.log(emails)
                 });

         };



     });
