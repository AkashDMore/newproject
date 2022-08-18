let form = document.getElementById("note")
let noteText = document.getElementById("note-text")
let list = document.getElementById("list")
// checking for note list
// if notes are present then intialize with array variable arr
// if not present then in should be a empty array
let arr
if(localStorage.getItem("my-notes")){
    arr = JSON.parse(localStorage.getItem("my-notes"))
}else{
    arr = []
}
form.addEventListener("submit", (e) => {
    e.preventDefault() // prevent the defafault action i.e (refresh the page)
    let text = noteText.value // grap the value on click on save
    arr.push(text) // push in our list items

    // on click we need to store the value on local storage
    // however local storage accecpt only string value
    // so we need to convert arr in string format
    
    let store = JSON.stringify(arr)
    localStorage.setItem("my-notes", store)
    noteText.value ="" //  after submit (on click on save we need to empty our form box) so use empty string here
    let noteItem = document.createElement("div")
    let del = document.createElement("button")
    del.setAttribute("id",i)
    del.classList.add("delete")
    del.addEventListener("click", deleteItem)

    noteItem.classList.add("note-items")
    noteItem.innerHTML = text
    list.appendChild(noteItem)

})
function listNoteItems(){
    for(let i = 0; i < arr.length; i++){
        let noteItem = document.createElement("div")
        let del = document.createElement("button")
        del.setAttribute("id", i)
        del.innerHTML = "Delete"
        del.classList.add("delete")
        del.addEventListener("click", (e)=>{
            console.log("hey delete " +i)
            arr.splice(i, 1)


            let store = JSON.stringify(arr)
            localStorage.setItem("my-notes", store)
        })
        list.appendChild(del)

        noteItem.classList.add("note-items")
        noteItem.innerHTML = arr[i]
        list.appendChild(noteItem)
    }
}



listNoteItems()

