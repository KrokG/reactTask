import {pic_local} from './Slider'

function getFile(){
  let files = document.querySelector('input[type=file]').files;
	let reader =  new FileReader();

  let countImg = files.length;
	let indexImg = countImg - 1;
	if(files.length > 0){
		reader.readAsDataURL(files[indexImg]);
	}
	reader.onloadend = function(event){
    indexImg--;
    //
    pic_local.push(reader.result);
    //
		if(indexImg >= 0 ){
			reader.readAsDataURL(files[indexImg]);
		}
	}
}

export default getFile;
