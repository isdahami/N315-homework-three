export function changePage(pageId) {
  // goes into pages folder to find the page user clicks on
    $.get(`pages/${pageId}/${pageId}.html`, function(data) {
      // injects HTML onto the page
      $("#app").html(data);
    }).fail((error) => {
      if(error.status == "404") {
        alert("PAGE CAN NOT BE FOUND, PLEASE CHECK URL.")
      }
      console.log("error ", error.status);
    });
}