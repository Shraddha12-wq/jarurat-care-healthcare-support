document.getElementById("volunteerForm").addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("volunteerName").value;

    const email =
        document.getElementById("volunteerEmail").value;

    const phone =
        document.getElementById("volunteerPhone").value;

    const skill =
        document.getElementById("volunteerSkill").value;

    const availability =
        document.getElementById("volunteerAvailability").value;

    const message =
        document.getElementById("volunteerMessage").value;


    // Create volunteer object

    const volunteer = {

        name: name,

        email: email,

        phone: phone,

        skill: skill,

        availability: availability,

        message: message,

        registeredAt: new Date().toLocaleString()

    };


    // Save volunteer information

    localStorage.setItem(
        "jaruratVolunteer",
        JSON.stringify(volunteer)
    );


    // Show success message

    document.getElementById("volunteerSuccess").style.display = "block";


    // Reset form

    document.getElementById("volunteerForm").reset();


    // Scroll to success message

    document.getElementById("volunteerSuccess")
        .scrollIntoView({
            behavior: "smooth"
        });

});
