const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  }

const sections = document.getElementsByName('main');

const sectBtns = document.querySelectorAll('.nav-links');
const sectBtn = document.querySelectorAll('.nav-link')


const allSections = document.querySelectorAll('.main-content')
console.log(allSections);
function PageTransitions(){
    //Sections Activator
    allSections[0].addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        console.log(id);
        if(id){
            document.body.dataset.nav = document.body.dataset.nav = "false";
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
     
    
}

PageTransitions();
