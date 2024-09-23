function validateForm() {
    const name = document.getElementById('namee').value.trim();
    const email = document.getElementById('email').value.trim();
    const rollno = document.getElementById('rollno').value.trim();
    const course = document.getElementById('course').value;
    const technologies = document.querySelectorAll('input[name="Tech"]:checked');

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    if (rollno === "") {
        alert("Please enter a register number");
        return false;
    }

    if (course === "") {
        alert("Please select a course");
        return false;
    }

    if (technologies.length === 0) {
        alert("Please select at least one technology");
        return false;
    }

    document.getElementById('contactForm').submit();
}
