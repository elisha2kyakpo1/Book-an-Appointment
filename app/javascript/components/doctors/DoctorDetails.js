import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'; 


function DoctorDetails() {
    const storeDoctors = useSelector((state) => state.doctorReducer); 
    const { id } = useParams();
    console.log(storeDoctors)
    return (
        <div> 
              {storeDoctors.filter(doctor => doctor.id == id).map(doc => (
     <ul>
         <li>
      {doc.name}
    </li>
    <li>
        {doc.email}
    </li>
    <li>
     {doc.phone}
    </li>
     </ul>
  ))}
  <form action="/articles/42" method="post" accept-charset="UTF-8" >
  <input name="authenticity_token" type="hidden" value="..." />
  <input type="text" name="article[title]" id="article_title" value="My Title" />
  <textarea name="article[body]" id="article_body" cols="60" rows="10">
    My Body
  </textarea>
  <input type="submit" name="commit" value="Update Article" data-disable-with="Update Article">
</form>
  <button>Reserve</button>
        </div>
    )
}

export default DoctorDetails;