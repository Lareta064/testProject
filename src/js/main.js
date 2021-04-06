$(document).ready(function(){
	//====== SHOW MODAL FORM ======
	const overlay = document.getElementById('overlay');
	const bodyEl = document.body;
	const modalForm = document.getElementById('modal-block');
	const btnOpenModalForm = document.getElementsByClassName('btn-open-modal');
	const btnCloseModalForm = document.querySelector('.close-modal');

		for(let item of btnOpenModalForm){
			item.addEventListener('click', function(){
				overlay.classList.add('active');
				modalForm.classList.add('active');
				bodyEl.classList.add('noscroll');
			})
		}

	if(btnCloseModalForm){
		btnCloseModalForm.addEventListener('click', function(){
			console.log('555');
			overlay.classList.remove('active');
			modalForm.classList.remove('active');
			bodyEl.classList.remove('noscroll');
		});
		overlay.addEventListener('click', function(){
			this.classList.remove('active');
			modalForm.classList.remove('active');
			bodyEl.classList.remove('noscroll');
		});
	}
	//form
	$(".contact-form").on('submit', function (event) {
		event.preventDefault();
		let string = $(".contact-form").serialize(); 
		$.ajax({
			type: "POST", 
			url: "php/mail.php", 
			data: string, 
			success: function (html) {
				$(".contact-form").slideUp(800);
				setTimeout(function(){
				$('.success-massage').fadeIn();	
				},(800))
				
			}
		});

		return false;
		
		});
	
})