var coll = document.getElementsByClassName('collapsible1');
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function() {
		this.classList.toggle('active');
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + 'px';
		}
	});
}
var coll = document.getElementsByClassName('collapsible2');
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function() {
		this.classList.toggle('active');
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + 'px';
		}
	});
}
var coll = document.getElementsByClassName('collapsible3');
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function() {
		this.classList.toggle('active');
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + 'px';
		}
	});
}
