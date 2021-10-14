//Form Validation
const email = document.querySelectorAll('#email');

//Hamburger JS
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "right-nav") {
      x.className += " responsive";
    } else {
      x.className = "right-nav";
    }
  }

    
  //delete script
      console.log("connected")
      const del = document.querySelector('a.delete')
      del.addEventListener('click', (e) => {
          e.preventDefault()
          console.log('asdasdas')
          const endpoint = `/${del.dataset.doc}`
  
          fetch(endpoint, {
              method: 'DELETE'
          })
          .then((response)=> response.json())
          .then(data => window.location.href = data.redirect)
  
          .catch((err)=> console.log(err) )
      })
  







 // Function to delete a note
// function deleteNote(index) {

//       let confirmDel = confirm("Delete this note?");
//       if (confirmDel == true) {
//           let notes = localStorage.getItem("notes");
//           if (notes == null) {
//               notesObj = [];
//           } else {
//               notesObj = JSON.parse(notes);
//           }
  
//           notesObj.splice(index, 1);
//           localStorage.setItem("notes", JSON.stringify(notesObj));
//           showNotes();
//       }
    
//   }