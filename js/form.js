document.getElementById("supportForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("patientName").value;
    const email = document.getElementById("patientEmail").value;
    const phone = document.getElementById("patientPhone").value;
    const supportType = document.getElementById("supportType").value;
    const message = document.getElementById("patientMessage").value;

    if (name === "" ||
        email === "" ||
        phone === "" ||
        supportType === "" ||
        message === "") {

        alert("Please fill in all required fields.");
        return;
    }

    // Save demo request in browser LocalStorage

    const supportRequest = {

        name: name,
        email: email,
        phone: phone,
        supportType: supportType,
        message: message,
        submittedAt: new Date().toLocaleString()

    };

    localStorage.setItem(
        "jaruratSupportRequest",
        JSON.stringify(supportRequest)
    );


    // Show success message

    document.getElementById("successMessage").style.display = "block";


    // Reset form

    document.getElementById("supportForm").reset();


    // Scroll to success message

    document.getElementById("successMessage")
        .scrollIntoView({
            behavior: "smooth"
        });

});
