var request = new XMLHttpRequest();
request.open('GET', 'date.txt', false);
request.send();
if(request.status === 200){
    console.log(request);
    document.writeln(request.responseText);
}

// boolean specifies that if is async (true) or not (false)
