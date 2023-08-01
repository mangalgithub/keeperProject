import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
function CreateArea(props){
const [note,setNote]=useState({
  title:"",
  content:""
});
  function handleChange(event){
    const {name,value}=event.target;
  setNote(prevNote=>{
    return {
      ...prevNote,
      [name]:value
    };
  });
  }
  function submitNote(event){
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    });
    event.preventDefault();
  }
    return(
        <div>
      <form>
        <input onChange={handleChange} name="title"
        value={note.title} placeholder='Title'></input>
        <textarea onChange={handleChange} name="content" value={note.content} rows="3" placeholder='Take a note...'></textarea>
        <button onClick={submitNote}>
          <AddIcon/>
        </button>
       </form>
        </div>     
    )
    }
export default CreateArea;