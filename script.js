let add_book = document.querySelector(".add_new")
let title = document.querySelector(".title")
let author = document.querySelector(".author")
let year = document.querySelector(".year")
let qunti = document.querySelector(".qunti")
let book_content = document.querySelector(".book_content")
let form_clear = document.querySelector(".form_clear")
let search_input = document.querySelector(".search_input")
let update = document.getElementById("update")

let book_data = [];

add_book.addEventListener("click", (e) => {
               e.preventDefault();
               registrantion();
               get_from_locaStorage()
               form_clear.reset(' ')

})
if ((localStorage.getItem("books1")) !== null) {
               book_data = JSON.parse(localStorage.getItem("books1"));
}
function registrantion() {
               book_data.push({
                              title_el: title.value,
                              author_El: author.value,
                              year_El: year.value,
                              qunt_El: qunti.value
               })
               var user_String = JSON.stringify(book_data)
               localStorage.setItem("books1", user_String)
               swal("Good job!", "SuccessFully Added", "success");
}

function get_from_locaStorage() {
               book_content.innerHTML = ""
               book_data.forEach((data, index) => {
                              book_content.innerHTML += `
                              <tr index="${index}">
                              <td>${index + 1}</td>
                              <td>${data.title_el}</td>
                              <td>${data.author_El}</td>
                              <td>${data.year_El}</td>
                              <td>${data.qunt_El}</td>
                             <td>
                                             <button class="remove_button"><i class="fa-solid fa-trash"></i></button>
                                             <button class="updateall"><i class="fa-solid fa-edit"></i></button
                             </td>
               </tr>`
               })

               let remove_button = document.querySelectorAll(".remove_button")
               for (let i = 0; i < remove_button.length; i++) {
                              remove_button[i].onclick = function () {
                                             var tr = this.parentElement.parentElement;
                                             console.log(tr);
                                             var index = tr.getAttribute("index");
                                             swal({
                                                            title: "Are you sure?",
                                                            text: "Once deleted, you will not be able to recover this imaginary file!",
                                                            icon: "warning",
                                                            buttons: true,
                                                            dangerMode: true,
                                             }).then((willDelete) => {
                                                            if (willDelete) {
                                                                           book_data.splice(index, 1)
                                                                           var user_String = JSON.stringify(book_data)
                                                                           localStorage.setItem("books1", user_String)
                                                                           tr.remove()
                                                                           swal("Successfully deleted!", {
                                                                                          icon: "success",
                                                                           });
                                                            } else {
                                                                           swal("Data Is Safe", {
                                                                                          icon: "success",
                                                                           });
                                                                           swal("Your Data Is safe...");
                                                            }
                                             });
                              }
               }

               let updateall = document.querySelectorAll(".updateall")
               for (let i = 0; i < updateall.length; i++) {
                              updateall[i].onclick = function () {
                                             var tr = this.parentElement.parentElement;
                                             var index = tr.getAttribute("index")
                                             var td = tr.getElementsByTagName("td")
                                             var title_update = td[1].innerHTML;
                                             var author_update = td[2].innerHTML;
                                             var year_update = td[3].innerHTML;
                                             var qunti_update = td[4].innerHTML;
                                             update.style.display = "block"
                                             title.value = title_update;
                                             author.value = author_update;
                                             year.value = year_update;
                                             qunti.value = qunti_update;
                                             update.addEventListener("click", () => {
                                                            book_data.push({
                                                                           title_el: title.value,
                                                                           author_El: author.value,
                                                                           year_El: year.value,
                                                                           qunt_El: qunti.value
                                                            })
                                                            update.style.display = "none";
                                                            var userstring = JSON.stringify(book_data);
                                                            localStorage.setItem("books1", userstring)
                                             })
                              }
               }
}
get_from_locaStorage()

search_input.addEventListener("input", () => {
               search_bar()
})

search_input.oninput = function () {
               var tr = book_data.querySelectorAll          ("tr");
               console.log(tr);
               // var filter = search_input.value.toLowerCase();
               // for (let i = 0; i < tr.length; i++) {
               //                var td = tr[i].getElementsByTagName("td")[0];
               //                var id = td.innerHTML;
               //                if (id.toLowerCase().indexOf(filter) > -1) {
               //                               tr[i].style.display = "";
               //                } else {
               //                               tr[i].style.display = "none";
               //                }
               // }
}


