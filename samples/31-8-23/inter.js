let name = 'Jose';

function sayMyName() {
    let firstName = "Jose";
    function sayMyDob() {
        let myDob = 'June';
        console.log(firstName);
        console.log(myDob);
        console.log(name);
    }
    return sayMyDob;
}

const profile = sayMyName();
profile();
