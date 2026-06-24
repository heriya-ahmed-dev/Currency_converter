

document.getElementById('convert').addEventListener('click',()=>{
    const input = parseFloat(document.getElementById('input').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const result = document.getElementById('result');
    let curr;
    let Result
    if(isNaN(input)){
        result.innerHTML = "Please inter number value"
        return
    }


    if(from == "USD"){
        curr = input
    }
    else if(from == 'Euro'){
        curr = (input/0.86)
    }
    else if(from == "Pound"){
        curr = (input/0.76)
    }
    else if(from == "Yen"){
        curr = (input / 145)
    }
    else if(from == "Rupee"){
        curr = (86 + input)
    }
    else if(from == "Ruble"){
        curr = (78 + input)
    }
    else if(from == "Won"){
        curr = (1380 + input)
    }
    else if(from == "Riyal"){
        curr = (45 + input)
    }
    else if(from == "Dirham"){
        curr = (3.67 + input)
    }
    else if(from == "Birr"){
        curr = (input - 130)
    }


     if(to == "USD"){
       Result = curr
    }
      else if(to == 'Euro'){
        Result = ( curr*0.86)
    }
    else if(to == "Pound"){
        Result = (curr* 0.74)
    }
    else if(to == "Yen"){
        Result = (curr - 145)
    }
    else if(to == "Rupee"){
        Result = (curr - 86)
    }
    else if(to == "Ruble"){
        Result = (curr - 78)
    }
    else if(to == "Won"){
        Result = (curr - 1380)
    }
    else if(to == "Riyal"){
        Result = (curr - 45)
    }
    else if(to == "Dirham"){
        Result = (curr - 3.67)
    }
    else if(to == "Birr"){
        Result = (curr + 130)
    }
   result.innerHTML = Result
   console.log(Result)


})