let select = () => {
	let selectCurrent = document.querySelectorAll('.select__header'),
		selectItem = document.querySelectorAll('.select__item');
	selectCurrent.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.parentElement.classList.toggle('select--opened');
		})
	});
	selectItem.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.closest('.select').querySelector('.select__current').innerHTML = e.currentTarget.innerHTML;
			e.currentTarget.closest('.select').classList.remove('select--opened');
		})
	});
};

select();