
var intervalID;

function biggerDecorationHandler(){
    var textArea = document.getElementById('txt_maintxt');
    intervalID = setInterval(increaseFontSize , 500 , textArea);
    
    //document.getElementById('txt_maintxt').style.fontSize='24px';
}

function increaseFontSize(textArea )
{
    var fontsize = document.getElementById('txt_maintxt').style.fontSize;
    if(fontsize=='') fontsize='16px';
    var fontsizenumber = Number( fontsize.substring(0,2));
    if(fontsizenumber==24) clearInterval(intervalID);
    else
    {
        fontsizenumber+=2;
        document.getElementById('txt_maintxt').style.fontSize= fontsizenumber + 'px' ;
    }


}


function blingHandler(blingCheckbox){
    var textArea = document.getElementById('txt_maintxt');
    if(blingCheckbox.checked)
    {
        textArea.style.textDecoration='underline';
        textArea.style.color='green';
        textArea.style.fontWeight='bold';
        document.body.style.backgroundImage = "url('b.jpg')";
    }
    else
    {
        textArea.style.textDecoration='none';
        textArea.style.color='black';
        textArea.style.fontWeight='normal';
        document.body.style.backgroundImage ='';
    }
    
}

function bigLatinHandler(){

}

function MalkovitchHandler(){
    var textArea = document.getElementById('txt_maintxt');

    var result = '';
    var words = textArea.value.split(" ");
    for (var i = 0; i < words.length; i += 1) {

        if(words[i].length>=5) result+=' ' + 'Malkovitch';
        else result+=' ' + words[i];
    }
    textArea.value = result.substring(1,result.length-1);
}