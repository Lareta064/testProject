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
//================================END CUSTOM MIXIT UP =============


