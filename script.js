const contactForm = document.getElementById("contactForm");

if (contactForm) {
    const namaInput = document.getElementById("nama");
    const emailInput = document.getElementById("email");
    const topikInput = document.getElementById("topik");
    const pesanInput = document.getElementById("pesan");
    const charCount = document.getElementById("charCount");
    const successMessage = document.getElementById("successMessage");
    const resetButton = document.getElementById("resetForm");

    const setError = (input, message) => {
        const group = input.closest(".form-group");
        const errorText = document.getElementById(`${input.id}Error`);

        group.classList.add("error");
        errorText.textContent = message;
    };

    const clearError = (input) => {
        const group = input.closest(".form-group");
        const errorText = document.getElementById(`${input.id}Error`);

        group.classList.remove("error");
        errorText.textContent = "";
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const updateCharacterCount = () => {
        charCount.textContent = pesanInput.value.length;
    };

    const validateForm = () => {
        let isValid = true;

        if (namaInput.value.trim().length < 3) {
            setError(namaInput, "Nama minimal 3 karakter.");
            isValid = false;
        } else {
            clearError(namaInput);
        }

        if (!isValidEmail(emailInput.value.trim())) {
            setError(emailInput, "Masukkan email yang valid.");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        if (topikInput.value === "") {
            setError(topikInput, "Pilih salah satu topik pesan.");
            isValid = false;
        } else {
            clearError(topikInput);
        }

        if (pesanInput.value.trim().length < 1) {
            setError(pesanInput, "Pesan tidak boleh kosong.");
            isValid = false;
        } else {
            clearError(pesanInput);
        }

        return isValid;
    };

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        successMessage.textContent = "";

        if (!validateForm()) {
            return;
        }

        successMessage.textContent = `Terima kasih, ${namaInput.value.trim()}! Pesan kamu tentang ${topikInput.value} sudah berhasil dikirim.`;
        contactForm.reset();
        updateCharacterCount();
    });

    resetButton.addEventListener("click", () => {
        contactForm.reset();
        [namaInput, emailInput, topikInput, pesanInput].forEach(clearError);
        successMessage.textContent = "";
        updateCharacterCount();
    });

    [namaInput, emailInput, topikInput, pesanInput].forEach((input) => {
        input.addEventListener("input", () => {
            clearError(input);
            successMessage.textContent = "";
        });
    });

    pesanInput.addEventListener("input", updateCharacterCount);
    updateCharacterCount();
}
