function passwordChecker() {
    let password = document.getElementById('pass');
    
    if (password.value.length < 5) {
        event.preventDefault();
        alert(`Boss your password is too short`);
    } else {
        alert('Success');
    }
}