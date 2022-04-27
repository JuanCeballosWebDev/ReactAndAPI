import React from 'react'

function Tag({tag, student, deleteTag}) {

    const handleTagDelete = (e) => {
        e.prevent.Default();
        deleteTag(tag, student);
    }

    return (
        <div className="tag" onClick={(e) => handleTagDelete(e)}>
             {tag}
             <span className="tagDelete">X</span>
        </div>
    )
}

export default Tag;