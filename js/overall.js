const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  }

const sections = document.getElementsByName('main');

const sectBtns = document.getElementById('nav-links');
const sectBtn = document.querySelectorAll('.nav-link')


const allSections = document.querySelectorAll('.main-content')
console.log(sectBtns);
function PageTransitions(){
    //Sections Activator
    sectBtns.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            document.body.dataset.nav = document.body.dataset.nav = "false";
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
                section.classList.remove('animateOnStartUpIn');
                section.classList.remove('animateOnNavedIn')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
            element.classList.add('animateOnNavedIn')
        }
    })
     
    
}

PageTransitions();
