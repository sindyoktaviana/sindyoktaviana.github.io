var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'imge/gambar3.JPG'){
		myImage.setAttribute ('src','imge/gambar5.JPG');
	}else{
		myImage.setAttribute ('src','imge/gambar3.JPG');
	}
}

