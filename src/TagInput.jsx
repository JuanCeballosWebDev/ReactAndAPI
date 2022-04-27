import React, { useState } from "react";

function TagInput({student, addTag}) {

    const [tagInput, setTagInput] = useState("");
  
    function handleTagSubmit(e) {
        e.preventDefault();
        if (tagInput.trim().length) {
           addTag(tagInput, student);
           setTagInput("");
        }
    }
  
    const handleTagInput = (e) => {
      setTagInput(e.target.value);
    }
    
    return (
     
       <form onSubmit={(e) => handleTagSubmit(e)}>
            <input
                className="input input__tag"
                placeholder="Add tag"
                type="text"
                value={tagInput}
                onChange={(e) => handleTagInput(e)}
            />
                
        </form>
      
      );
    }
  
  export default TagInput;