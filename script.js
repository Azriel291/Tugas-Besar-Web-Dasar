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

var popupKuliner = document.getElementById("popupKuliner");

if (popupKuliner) {
    var dataKuliner = {
        "Mie Kocok Bandung": {
            gambar: "makanan.png",
            deskripsi: "Mie Kocok Bandung adalah makanan berkuah gurih dengan mi kuning, tauge, kikil sapi, seledri, bawang goreng, dan kuah kaldu sapi yang hangat.",
            rasa: "Rasanya gurih, hangat, dan segar. Biasanya makin nikmat jika diberi sambal dan perasan jeruk limau.",
            sejarah: "Mie Kocok sudah lama dikenal sebagai makanan khas Bandung. Hidangan ini banyak dijual di warung sederhana sampai tempat makan terkenal."
        },
        "Batagor": {
            gambar: "makanan.png",
            deskripsi: "Batagor adalah singkatan dari bakso tahu goreng. Makanan ini dibuat dari adonan ikan dan tepung, lalu digoreng sampai bagian luarnya renyah.",
            rasa: "Rasanya gurih dan renyah, lalu semakin enak karena disiram bumbu kacang, kecap, dan perasan jeruk.",
            sejarah: "Batagor mulai populer di Bandung sebagai jajanan praktis. Namanya berasal dari bakso tahu goreng."
        },
        "Siomay Bandung": {
            gambar: "makanan.png",
            deskripsi: "Siomay Bandung biasanya berisi siomay ikan, tahu, kentang, kol, pare, dan telur yang dikukus.",
            rasa: "Rasanya lembut dan gurih. Bumbu kacang membuat rasanya menjadi manis, gurih, dan sedikit pedas.",
            sejarah: "Siomay Bandung berkembang dari makanan kukus yang kemudian disesuaikan dengan selera lokal memakai bumbu kacang."
        },
        "Surabi": {
            gambar: "makanan.png",
            deskripsi: "Surabi adalah kue tradisional berbahan tepung beras dan santan. Biasanya dimasak memakai cetakan kecil.",
            rasa: "Rasanya lembut dan harum. Surabi bisa dibuat manis dengan kinca, atau gurih dengan oncom dan topping lain.",
            sejarah: "Surabi adalah jajanan tradisional Sunda yang dulu banyak dimasak memakai tungku kecil. Sekarang surabi punya banyak topping modern."
        },
        "Seblak": {
            gambar: "makanan.png",
            deskripsi: "Seblak adalah makanan pedas yang dibuat dari kerupuk basah, bumbu kencur, cabai, telur, dan berbagai tambahan seperti bakso atau sosis.",
            rasa: "Rasanya pedas, gurih, dan punya aroma kencur yang khas. Tingkat pedasnya bisa disesuaikan.",
            sejarah: "Seblak dikenal sebagai makanan khas Bandung yang makin populer karena rasa pedasnya dan isiannya yang bisa divariasikan."
        },
        "Colenak": {
            gambar: "makanan.png",
            deskripsi: "Colenak adalah tape singkong bakar yang disajikan dengan saus gula merah dan kelapa parut.",
            rasa: "Rasanya manis, legit, sedikit asam dari tape, dan harum karena proses pembakaran.",
            sejarah: "Colenak adalah makanan khas Bandung yang namanya berasal dari kata dicocol enak, karena tape bakarnya dicocol ke saus gula."
        }
    };

    var kartuKuliner = document.querySelectorAll(".kuliner-card");
    var tombolDetail = document.querySelectorAll(".tombol-detail");
    var popupNama = document.getElementById("popupNama");
    var popupGambar = document.getElementById("popupGambar");
    var tutupPopup = document.getElementById("tutupPopup");
    var popupDeskripsi = document.getElementById("popupDeskripsi");
    var popupRasa = document.getElementById("popupRasa");
    var popupSejarah = document.getElementById("popupSejarah");
    var cariKuliner = document.getElementById("cariKuliner");
    var namaAktif = "";

    function tampilkanInfo() {
        popupDeskripsi.textContent = dataKuliner[namaAktif].deskripsi;
        popupRasa.textContent = dataKuliner[namaAktif].rasa;
        popupSejarah.textContent = dataKuliner[namaAktif].sejarah;
    }

    function bukaPopup(namaMakanan) {
        namaAktif = namaMakanan;
        popupNama.textContent = namaMakanan;
        popupGambar.src = dataKuliner[namaMakanan].gambar;
        popupGambar.alt = namaMakanan;
        tampilkanInfo();
        popupKuliner.classList.add("muncul");
        document.body.classList.add("popup-aktif");
    }

    function sembunyikanPopup() {
        popupKuliner.classList.remove("muncul");
        document.body.classList.remove("popup-aktif");
    }

    for (var i = 0; i < tombolDetail.length; i++) {
        tombolDetail[i].addEventListener("click", function() {
            var kartu = this.parentElement;
            var namaMakanan = kartu.getAttribute("data-nama");
            bukaPopup(namaMakanan);
        });
    }

    tutupPopup.addEventListener("click", sembunyikanPopup);

    popupKuliner.addEventListener("click", function(event) {
        if (event.target === popupKuliner) {
            sembunyikanPopup();
        }
    });

    cariKuliner.addEventListener("input", function() {
        var kataKunci = cariKuliner.value.toLowerCase();

        for (var i = 0; i < kartuKuliner.length; i++) {
            var namaMakanan = kartuKuliner[i].getAttribute("data-nama").toLowerCase();

            if (namaMakanan.indexOf(kataKunci) > -1) {
                kartuKuliner[i].classList.remove("sembunyi");
            } else {
                kartuKuliner[i].classList.add("sembunyi");
            }
        }
    });
}
