//================================CUSTOM MIXIT UP =============
const mixBlock = document.querySelector('#mixit-block');
if(mixBlock){
	const mixitBtns = mixBlock.querySelectorAll('.mixitBlock-toggle button');
	const mixitContents = mixBlock.querySelectorAll('.mixitBlock-content');
		for (let i = 0; i <  mixitBtns.length; i++){
			mixitBtns[i].addEventListener('click',
			(e)=>{
				e.preventDefault();
				if(!e.target.classList.contains('active'))e.target.classList.add('active')
	
				for(let j = 0; j < mixitBtns.length; j++){
					if(i != j) mixitBtns[j].classList.remove('active');
				}
				const thisData = mixitBtns[i].getAttribute('data-btn');
				for(let k=0; k < mixitContents.length; k++){
					mixitContents[k].classList.remove('active');
					const contentData = mixitContents[k].getAttribute('data-content');
					if(contentData == thisData) mixitContents[k].classList.add('active');
				}
			});
		} 
	}
//======================= END CUSTOM MIXIT UP =============
//======================= FOOTER ACCORDION =============
const accordeonTitle = document.querySelectorAll('.accordeon-item-header');
const accordeonContent = document.querySelectorAll('.accordeon-item-content');
let loock;

for (i = 0; i < accordeonTitle.length; i++) {
    accordeonTitle[i].addEventListener('click', function() {
        if (!(this.classList.contains('show'))) {

            for(j = 0; j < accordeonTitle.length; j++) {
                accordeonTitle[j].classList.remove('show');

                for (k = 0; k < accordeonContent.length; k++) {
                    this.nextElementSibling;
                    accordeonContent[k].style.maxHeight = '0';
                }
                
            }
            
            this.classList.add('show');
            loock = this.nextElementSibling;
            loock.style.maxHeight = loock.scrollHeight + 'px';
            
        } else if (this.classList.contains('show')) {
            
            for(l = 0; l < accordeonTitle.length; l++) {
                accordeonTitle[l].classList.remove('show');
                loock.style.maxHeight = '0';

            }
        }
    })
}



