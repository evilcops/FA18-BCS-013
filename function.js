$(function(){
    
    read_data(1);
    $("#page1").click(function(){
        read_data(1);
    });
    $("#page2").click(function(){
        read_data(2);
    });
})





function read_data(pageNumber){
    $.ajax({
        url: `https://reqres.in/api/users?page=${pageNumber}`,
        method: "GET",
        success: function(response){
            console.log(response);
            var user=$("#our-table #table-body");
            user.empty();
            for (var i = 0; i < response.data.length; i++){
                var temp = response.data[i];
                var row = `<tr>
                  <td>${temp.id}</td>
                  <td>${temp.email}</td>
                  <td>${temp.first_name}</td>
                  <td>${temp.last_name}</td>
                  <td><img src="${temp.avatar}" width="100" height="100"></td>
                  </tr>
                  `
                  user.append(row);
            }

        }

    })
}