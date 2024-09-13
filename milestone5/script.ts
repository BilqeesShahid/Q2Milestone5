// listing elements
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
  event.preventDefault();
//type Assertion

const profilePictureInput=document.getElementById('profilePicture') as HTMLInputElement;
const nameElement= document.getElementById('name') as HTMLInputElement;
const emailElement= document.getElementById('email') as HTMLInputElement;
const contactElement= document.getElementById('contact') as HTMLInputElement;
const giaicIdElement= document.getElementById('giaicId') as HTMLInputElement;
const quarterElement= document.getElementById('quarter') as HTMLInputElement;

const educationElement= document.getElementById('education') as HTMLTextAreaElement;
const experienceElement= document.getElementById('experience') as HTMLTextAreaElement;
const skillsElement= document.getElementById('skills') as HTMLTextAreaElement;
const syllabusElement= document.getElementById('syllabus') as HTMLTextAreaElement;
const goalsElement= document.getElementById('goals') as HTMLTextAreaElement;
//** 

const usernameElement= document.getElementById('username') as HTMLInputElement;


if(profilePictureInput && nameElement 
  && emailElement && contactElement 
  && giaicIdElement && quarterElement
   &&educationElement && experienceElement 
   && skillsElement && syllabusElement 
  && goalsElement && usernameElement){
   const name= nameElement.value;
  const email= emailElement.value;
  const contact= contactElement.value;
  const giaicId= giaicIdElement.value;
  const quarter= quarterElement.value;
  const education= educationElement.value;
  const experience= experienceElement.value;
  const skills= skillsElement.value;
  const syllabus= syllabusElement.value;
  const goals= goalsElement.value;
  //** 
const username=usernameElement.value;



    

//profile picture element
const profilePictureFile=profilePictureInput.files?.[0];
const profilePictureURL=profilePictureFile?URL.createObjectURL(profilePictureFile):'';


//create Output resume
const resumeHTML=
`<h2>@My Profile!</h2>
${profilePictureURL? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`: ''}
<p><strong>Name: </strong>${name}</p>
<p><strong>Email: </strong>${ email}</p>
<p><strong>Contact: </strong>${contact}</p>
<p><strong>GIAICId: </strong>${giaicId}</p>
<p><strong>Quarter: </strong>${quarter}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>

<h3>Syllabus</h3>
<p>${syllabus}</p>
<h3>Goals</h3>
<p>${goals}</p>`;

// **
 
 

//display the resume
const resumeOutputElement= document.getElementById('resumeOutput')
if(resumeOutputElement){
  resumeOutputElement.innerHTML=resumeHTML;
  resumeOutputElement.classList.remove("hidden");


//create container for button
const buttonsContainer=document.createElement("div");
buttonsContainer.id="buttonsContainer";
resumeOutputElement.appendChild(buttonsContainer);

//add download PDF button
const downloadButton=document.createElement("button");
downloadButton.textContent="Download as PDF";
downloadButton.addEventListener("click", ()=> {
  window.print();
});
  buttonsContainer.appendChild(downloadButton);

  //add sharable link button
  const shareLinkButton= document.createElement("button");
  shareLinkButton.textContent="Copy Sharable Link";
  shareLinkButton.addEventListener("click",async () => {
    try{
      const shareableLink=`https://yourdomain.com/resumes/${name.replace(/\s+/g, '_')}_cv.html`;

      //use clipboard API to copy the sharable link
      await navigator.clipboard.writeText(shareableLink);
      alert("Sharable Link copied to clipboard");
    } catch(err){
      console.log("Failed to copy Link: ", err );
      alert("Failed to copy Link on clipboard.Please try again")
    }
  });
  buttonsContainer.appendChild(shareLinkButton);
} else{
  console.error("Resume output container is missing");
 }
}else{
console.error("form elements are missing")

}
});
 
// function makeEditable(){
//   const editableElements= document.querySelectorAll('.editable')
//   editableElements.forEach(element  =>  {
//     element.addEventListener('click', function(){
//       const currentElement= element as HTMLElement;
//       const currentValue= currentElement.textContent || "";
//       // replace content
//       if(currentElement.tagName=== "p" || currentElement.tagName=== "SPAN"){
//         const input= document.createElement('input');
//         input.type="text"
//         input.value=currentValue
//         input.classList.add("editing input")
//         currentElement.style.display="none"
//         currentElement.parentNode?.insertBefore(input,currentElement)
//         input.focus();
//       }
        
//     })
//   })
// }


