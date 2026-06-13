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
            gambar: "Mie-kocok.png",
            deskripsi: "Ingin makanan berkuah? Bandung juga punya Mie Kocok yang tak kalah lezat. Kuliner ini berisi mie yang berbentuk pipih, yang disajikan dengan aneka sayuran, tauge, dan tambahan sedikit kikil sapi. Penamaan kuliner ini disesuaikan dengan cara pembuatannya, karena sebelum disajikan, mie akan dicampur dan bahan lain akan diaduk dan dikocok.",
            rasa: "Rasanya gurih, hangat, dan segar. Biasanya makin nikmat jika diberi sambal dan perasan jeruk limau.",
            sejarah: "Mie Kocok sudah lama dikenal sebagai makanan khas Bandung. Hidangan ini banyak dijual di warung sederhana sampai tempat makan terkenal."
        },
        "Batagor": {
            gambar: "batagor.png",
            deskripsi: "Siapa yang tak kenal Batagor? kuliner khas Bandung ini ternyata sudah sampai dimana-mana. Namanya merupakan singkatan dari ‘bakso tahu goreng’, yang merujuk pada bahan serta cara pembuatannya. Sementara itu resepnya terbuat dari adonan ikan dan tepung kanji, yang disajikan dengan saus kacang dan perasan jeruk limau yang segar.",
            rasa: "Rasanya gurih dan renyah, lalu semakin enak karena disiram bumbu kacang, kecap, dan perasan jeruk.",
            sejarah: "Batagor mulai populer di Bandung sebagai jajanan praktis. Namanya berasal dari bakso tahu goreng."
        },
        "Siomay Bandung": {
            gambar: "siomaybdg.jpg",
            deskripsi: "Siomay Bandung (atau lebih sering disebut Baso Tahu oleh warga lokal Bandung) adalah jajanan pasar legendaris khas Jawa Barat yang terbuat dari adonan ikan tenggiri dan tepung tapioka. Makanan kuliner ini dikukus bersama bahan pelengkap seperti tahu putih, kentang, kubis, telur rebus, dan pare, lalu disiram dengan saus kacang kental yang manis-gurih, kecap manis, serta perasan jeruk limau.",
            rasa: "Rasanya lembut dan gurih. Bumbu kacang membuat rasanya menjadi manis, gurih, dan sedikit pedas.",
            sejarah: "Siomay Bandung berkembang dari makanan kukus yang kemudian disesuaikan dengan selera lokal memakai bumbu kacang."
        },
        "Surabi": {
            gambar: "Surabi.png",
            deskripsi: "Kamu pasti sudah tidak asing lagi dengan salah satu jajanan tradisional dari Bandung ini, bukan? Kuliner lezat yang terbuat dari tepung beras dan santan yang dibakar di atas kayu ini memang memiliki rasa yang unik. Kamu akan menemukan tekstur lembut pada bagian atas, dengan luaran yang kriuk dan sedikit rasa gosong.Dimasak dengan tungku dan cetakan khusus dari tanah liat, membuat kue surabi memiliki cita rasa khas yang nikmat. Kamu bisa menikmatinya dengan cairan gula merah atau kinca, oncom yang pedas, atau rasa asin dari campuran telur.",
            rasa: "Rasanya lembut dan harum. Surabi bisa dibuat manis dengan kinca, atau gurih dengan oncom dan topping lain.",
            sejarah: "Surabi adalah jajanan tradisional Sunda yang dulu banyak dimasak memakai tungku kecil. Sekarang surabi punya banyak topping modern."
        },
        "Seblak": {
            gambar: "seblak.jpg",
            deskripsi: "Tak hanya Batagor, makanan khas Bandung lainnya yang sudah sampai di berbagai kota di Indonesia adalah Seblak. Makanan ini terbuat dari kerupuk yang direbus, lalu dicampur dengan racikan bumbu yang terdiri dari bawang putih, kencur, cabai, dan garam. Setelah bumbu halus dimasak hingga harum, barulah bahan-bahan tambahannya dimasukkan. Seperti aneka sayuran, potongan daging ayam, bakso, sosis, hingga ceker ayam. Kuliner lezat ini ternyata juga bisa disajikan dengan kuah atau basah dan kering.",
            rasa: "Rasanya pedas, gurih, dan punya aroma kencur yang khas. Tingkat pedasnya bisa disesuaikan.",
            sejarah: "Seblak dikenal sebagai makanan khas Bandung yang makin populer karena rasa pedasnya dan isiannya yang bisa divariasikan."
        },
        "Colenak": {
            gambar: "Colenak.jpg",
            deskripsi: "jajanan tradisional khas Sunda, Jawa Barat, yang merupakan singkatan dari 'dicocol enak'. Kudapan legendaris ini terbuat dari peuyeum (tapai singkong) yang dibakar di atas arang atau teflon, lalu disajikan bersama saus kinca manis gurih yang terbuat dari campuran gula merah cair dan parutan kelapa.",
            rasa: "Rasanya manis, legit, sedikit asam dari tape, dan harum karena proses pembakaran.",
            sejarah: "Colenak pertama kali diperkenalkan oleh Aki Murdi pada tahun 1930 di kawasan Cicadas, Bandung. Awalnya makanan ini hanya dikenal sebagai peuyeum digulaan (tapai diberi gula). Berkat cita rasanya yang khas, kudapan ini sangat populer bahkan sempat menjadi salah satu hidangan istimewa saat Konferensi Tingkat Tinggi Asia-Afrika (KTT KAA) di Bandung pada tahun 1955"
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
        tombolDetail[i].addEventListener("click", function () {
            var kartu = this.parentElement;
            var namaMakanan = kartu.getAttribute("data-nama");
            bukaPopup(namaMakanan);
        });
    }

    tutupPopup.addEventListener("click", sembunyikanPopup);

    popupKuliner.addEventListener("click", function (event) {
        if (event.target === popupKuliner) {
            sembunyikanPopup();
        }
    });

    cariKuliner.addEventListener("input", function () {
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
