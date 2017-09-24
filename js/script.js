var inputs = [''],
    fullString,
    mathOperatorsArr = ['+', '-', '/', '*'],
    dotArr = ['.'],
    numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    opFlag = false;

$(document).ready(function() {

function getValue(input) {
    if(dotArr.includes(inputs[inputs.length -1]) === true && input === '.'){
    }else if(inputs.length === 1 && mathOperatorsArr.includes(input) === false){
        inputs.push(input);
        opFlag = true;
    }else if(mathOperatorsArr.includes(inputs[inputs.length - 1]) === false){
        inputs.push(input);
        opFlag = false;
    }else if(numbersArr.includes(Number(input))){
        inputs.push(input);
        opFlag = true;

    }

    getUpdate();
    console.log(fullString);
    console.log(opFlag);
}
    console.log(inputs);
function getUpdate() {
    fullString = inputs.join('');
    $('#digits').html(fullString);
}
function getSum() {
    fullString = inputs.join('');
    if(fullString.includes('.')) {
        $('#digits').html(eval(fullString).toFixed(2));
    } else {$('#digits').html(eval(fullString).toFixed(2));
    }
    //update all buffers
    inputs = [''];
    inputs = eval(fullString).toFixed(2);
    inputs = inputs.split(' ');
    inputs.push(' ');

}
$('button').on('click', function () {
   if ($(this).attr('value') === 'ac'){
        inputs = [''];
        getUpdate();
        console.log($(this).attr('value'));
   }
   else if ($(this).attr('value') === 'ce'){
        inputs.pop();
        getUpdate();
        console.log($(this).attr('value'));
   }
   else if ($(this).attr('value') === '='){
        getSum();
        console.log($(this).attr('value'));
  }
  else if($(this).attr('value') === '.'&& opFlag === false){
          inputs.push('0');
          inputs.push('.');
    getUpdate();
   }else{
       if(inputs[inputs.length-1].indexOf('+','-','/','*') === -1){

          getValue($(this).attr('value'));

       }else{

        getValue($(this).attr('value'))
       }

   }

});
});
