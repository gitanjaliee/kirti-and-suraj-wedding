/* =========================================
   WEDDING COUNTDOWN
========================================= */

const weddingDate = new Date(
    "December 9, 2026 18:00:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const difference = weddingDate - now;

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    if (!days || !hours || !minutes || !seconds) {
        return;
    }

    if (difference <= 0) {

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;
    }

    days.textContent = String(
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        )
    ).padStart(2, "0");

    hours.textContent = String(
        Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        )
    ).padStart(2, "0");

    minutes.textContent = String(
        Math.floor(
            (difference / (1000 * 60)) % 60
        )
    ).padStart(2, "0");

    seconds.textContent = String(
        Math.floor(
            (difference / 1000) % 60
        )
    ).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuBtn.textContent = "×";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");
            menuBtn.textContent = "☰";

        });

    });

}


/* =========================================
   EVENT DETAILS
========================================= */

const eventData = {

    mata: {
        title: "Mata Pujan",
        date: "08 December 2026 · Morning",
        description:
            "The wedding celebrations begin with Mata Pujan, seeking blessings and starting this beautiful journey with our families."
    },

    haldi: {
        title: "Haldi",
        date: "08 December 2026 · After Mata Pujan",
        description:
            "A joyful family celebration filled with laughter, blessings, happiness and beautiful moments before the wedding."
    },

    mehndi: {
        title: "Mehndi",
        date: "08 December 2026 · Evening",
        description:
            "An evening filled with mehndi, music, laughter and the warmth of family and friends."
    },

    sangeet: {
        title: "Mahila Sangeet",
        date: "08 December 2026 · Evening",
        description:
            "A celebration of music, dance and performances as our loved ones come together to celebrate the couple."
    },

    mandap: {
        title: "Mandap",
        date: "08 December 2026 · Evening",
        description:
            "A special family gathering around the mandap as everyone comes together before the main wedding day."
    },

    wedding: {
        title: "Main Wedding Day",
        date: "09 December 2026 · 6:00 PM onwards",
        description:
            "The main celebration at Arora Bhavan, Indore — bringing together the wedding ceremony, sacred pheras, reception and dinner."
    }

};


/* =========================================
   EVENT MODAL
========================================= */

const eventModal = document.getElementById("eventModal");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalDescription = document.getElementById("modalDescription");
const modalClose = document.getElementById("modalClose");
const modalOk = document.getElementById("modalOk");

const eventButtons = document.querySelectorAll(".event-btn");

eventButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const eventName = this.dataset.event;
        const event = eventData[eventName];

        if (!event) {
            return;
        }

        modalTitle.textContent = event.title;
        modalDate.textContent = event.date;
        modalDescription.textContent = event.description;

        eventModal.classList.add("active");
        eventModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
    });

});


function closeEventModal() {

    eventModal.classList.remove("active");
    eventModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


if (modalClose) {
    modalClose.addEventListener(
        "click",
        closeEventModal
    );
}


if (modalOk) {
    modalOk.addEventListener(
        "click",
        closeEventModal
    );
}


/* =========================================
   VENUE DETAILS
========================================= */

const venueInfoBtn =
    document.getElementById("venueInfoBtn");

if (venueInfoBtn) {

    venueInfoBtn.addEventListener("click", function () {

        modalTitle.textContent = "Arora Bhavan";
        modalDate.textContent =
            "Indore · Main Wedding Venue";

        modalDescription.textContent =
            "Arora Bhavan is the main venue for the wedding day, " +
            "where the families will come together for the " +
            "wedding ceremony, pheras, reception and dinner.";

        eventModal.classList.add("active");
        eventModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
    });

}


/* =========================================
   RSVP MODAL
========================================= */

const rsvpButton =
    document.getElementById("rsvpButton");

const rsvpModal =
    document.getElementById("rsvpModal");

const rsvpClose =
    document.getElementById("rsvpClose");

const confirmRsvp =
    document.getElementById("confirmRsvp");

const guestName =
    document.getElementById("guestName");

const rsvpMessage =
    document.getElementById("rsvpMessage");


if (rsvpButton) {

    rsvpButton.addEventListener("click", function () {

        rsvpModal.classList.add("active");
        rsvpModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        setTimeout(function () {

            if (guestName) {
                guestName.focus();
            }

        }, 200);

    });

}


function closeRsvpModal() {

    rsvpModal.classList.remove("active");
    rsvpModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


if (rsvpClose) {

    rsvpClose.addEventListener(
        "click",
        closeRsvpModal
    );

}


/* =========================================
   CONFIRM RSVP
========================================= */

if (confirmRsvp) {

    confirmRsvp.addEventListener("click", function () {

        const name = guestName.value.trim();

        if (name === "") {

            rsvpMessage.textContent =
                "Please enter your name first.";

            guestName.focus();

            return;
        }

        rsvpMessage.textContent =
            `Thank you, ${name}! ❤️ We look forward to celebrating with you.`;

        guestName.value = "";

    });

}


/* =========================================
   CLOSE MODALS BY CLICKING OUTSIDE
========================================= */

if (eventModal) {

    eventModal.addEventListener("click", function (event) {

        if (event.target === eventModal) {
            closeEventModal();
        }

    });

}


if (rsvpModal) {

    rsvpModal.addEventListener("click", function (event) {

        if (event.target === rsvpModal) {
            closeRsvpModal();
        }

    });

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (
            eventModal &&
            eventModal.classList.contains("active")
        ) {
            closeEventModal();
        }

        if (
            rsvpModal &&
            rsvpModal.classList.contains("active")
        ) {
            closeRsvpModal();
        }

    }

});
