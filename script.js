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

const popupKuliner = document.getElementById("popupKuliner");

if (popupKuliner) {
    const dataKuliner = {
        "Mie Kocok Bandung": {
            gambar: "Mie-kocok.png",
            deskripsi: "Ingin makanan berkuah? Bandung juga punya Mie Kocok yang tak kalah lezat. Kuliner ini berisi mie yang berbentuk pipih, yang disajikan dengan aneka sayuran, tauge, dan tambahan sedikit kikil sapi. Penamaan kuliner ini disesuaikan dengan cara pembuatannya, karena sebelum disajikan, mie akan dicampur dan bahan lain akan diaduk dan dikocok.",
            rasa: "Rasanya gurih, hangat, dan segar. Biasanya makin nikmat jika diberi sambal dan perasan jeruk limau.",
            sejarah: "Mie Kocok konon sudah ada sejak tahun 1958. Istilah 'kocok' pada nama makanan ini merujuk pada proses memasaknya, yaitu dengan mengocok-ngocok mi kuning dan tauge di dalam wadah logam berongga sambil dicelupkan ke dalam air panas hingga matang. Hidangan legendaris ini telah lama menjadi primadona kuliner Bandung, terutama saat udara dingin."
        },
        "Batagor": {
            gambar: "batagor.jpg",
            deskripsi: "Siapa yang tak kenal Batagor? kuliner khas Bandung ini ternyata sudah sampai dimana-mana. Namanya merupakan singkatan dari ‘bakso tahu goreng’, yang merujuk pada bahan serta cara pembuatannya. Sementara itu resepnya terbuat dari adonan ikan dan tepung kanji, yang disajikan dengan saus kacang dan perasan jeruk limau yang segar.",
            rasa: "Rasanya gurih dan renyah, lalu semakin enak karena disiram bumbu kacang, kecap, dan perasan jeruk.",
            sejarah: "Batagor, singkatan dari Bakso Tahu Goreng, diciptakan pada era 1980-an secara tidak sengaja. Awalnya, pedagang bakso tahu kukus yang tidak habis dagangannya mencoba menggoreng sisa bakso tahu tersebut agar tidak basi, lalu menyajikannya dengan bumbu kacang. Inovasi ini ternyata sangat disukai dan akhirnya melahirkan kuliner ikonik Bandung."
        },
        "Siomay Bandung": {
            gambar: "siomaybdg.jpg",
            deskripsi: "Siomay Bandung (atau lebih sering disebut Baso Tahu oleh warga lokal Bandung) adalah jajanan pasar legendaris khas Jawa Barat yang terbuat dari adonan ikan tenggiri dan tepung tapioka. Makanan kuliner ini dikukus bersama bahan pelengkap seperti tahu putih, kentang, kubis, telur rebus, dan pare, lalu disiram dengan saus kacang kental yang manis-gurih, kecap manis, serta perasan jeruk limau.",
            rasa: "Rasanya lembut dan gurih. Bumbu kacang membuat rasanya menjadi manis, gurih, dan sedikit pedas.",
            sejarah: "Siomay sebenarnya berakar dari kuliner Tiongkok (Shumai), namun di Bandung hidangan ini mengalami akulturasi budaya. Alih-alih menggunakan daging babi, Siomay Bandung menggunakan daging ikan tenggiri agar halal, dan disajikan dengan saus kacang khas Nusantara yang kaya rasa. Sejak dekade 1970-an, Siomay Bandung mulai populer dijajakan dengan sepeda keliling."
        },
        "Surabi": {
            gambar: "Surabi.png",
            deskripsi: "Kamu pasti sudah tidak asing lagi dengan salah satu jajanan tradisional dari Bandung ini, bukan? Kuliner lezat yang terbuat dari tepung beras dan santan yang dibakar di atas kayu ini memang memiliki rasa yang unik. Kamu akan menemukan tekstur lembut pada bagian atas, dengan luaran yang kriuk dan sedikit rasa gosong.Dimasak dengan tungku dan cetakan khusus dari tanah liat, membuat kue surabi memiliki cita rasa khas yang nikmat. Kamu bisa menikmatinya dengan cairan gula merah atau kinca, oncom yang pedas, atau rasa asin dari campuran telur.",
            rasa: "Rasanya lembut dan harum. Surabi bisa dibuat manis dengan kinca, atau gurih dengan oncom dan topping lain.",
            sejarah: "Surabi merupakan jajanan tradisional peninggalan leluhur Sunda yang telah ada sejak tahun 1920-an. Awalnya, surabi dimasak menggunakan tungku tanah liat dan kayu bakar dengan rasa original yang disajikan bersama kinca (gula merah cair). Seiring perkembangan zaman, surabi di Bandung bertransformasi menjadi kuliner kekinian dengan puluhan varian topping modern seperti keju, sosis, dan mayones."
        },
        "Seblak": {
            gambar: "seblak.jpg",
            deskripsi: "Tak hanya Batagor, makanan khas Bandung lainnya yang sudah sampai di berbagai kota di Indonesia adalah Seblak. Makanan ini terbuat dari kerupuk yang direbus, lalu dicampur dengan racikan bumbu yang terdiri dari bawang putih, kencur, cabai, dan garam. Setelah bumbu halus dimasak hingga harum, barulah bahan-bahan tambahannya dimasukkan. Seperti aneka sayuran, potongan daging ayam, bakso, sosis, hingga ceker ayam. Kuliner lezat ini ternyata juga bisa disajikan dengan kuah atau basah dan kering.",
            rasa: "Rasanya pedas, gurih, dan punya aroma kencur yang khas. Tingkat pedasnya bisa disesuaikan.",
            sejarah: "Seblak mulai meroket popularitasnya di Bandung pada awal tahun 2000-an, meskipun asal-usulnya sering dikaitkan dengan camilan lawas bernama kerupuk leor. Makanan berbahan dasar kerupuk mentah yang direbus ini dimasak dengan bumbu utama kencur (cikur) yang memberikan aroma dan rasa pedas yang sangat khas. Kini seblak menjadi salah satu ikon street food paling digemari di Indonesia."
        },
        "Colenak": {
            gambar: "Colenak.jpg",
            deskripsi: "jajanan tradisional khas Sunda, Jawa Barat, yang merupakan singkatan dari 'dicocol enak'. Kudapan legendaris ini terbuat dari peuyeum (tapai singkong) yang dibakar di atas arang atau teflon, lalu disajikan bersama saus kinca manis gurih yang terbuat dari campuran gula merah cair dan parutan kelapa.",
            rasa: "Rasanya manis, legit, sedikit asam dari tape, dan harum karena proses pembakaran.",
            sejarah: "Colenak pertama kali diperkenalkan oleh Aki Murdi pada tahun 1930 di kawasan Cicadas, Bandung. Awalnya makanan ini hanya dikenal sebagai peuyeum digulaan (tapai diberi gula). Berkat cita rasanya yang khas, kudapan ini sangat populer bahkan sempat menjadi salah satu hidangan istimewa saat Konferensi Tingkat Tinggi Asia-Afrika (KTT KAA) di Bandung pada tahun 1955"
        },
        "Nasi Timbel": {
            gambar: "nasi-timbel.jpg",
            deskripsi: "Nasi Timbel adalah hidangan khas Sunda yang nasi putihnya dikukus atau dibungkus dalam daun pisang sehingga menghasilkan aroma yang khas dan harum. Disajikan dengan lauk-pauk lengkap seperti ayam goreng, ikan goreng, tempe, tahu, lalapan segar, dan sambal terasi yang pedas menggugah selera.",
            rasa: "Rasanya gurih dan harum khas daun pisang, dipadu dengan lauk yang kaya rempah dan sambal yang segar.",
            sejarah: "Nasi Timbel sudah menjadi sajian sehari-hari masyarakat Sunda sejak zaman dahulu. Kata 'timbel' merujuk pada cara penyajian nasi yang dibungkus daun pisang, tradisi yang diwariskan turun-temurun sebagai bagian dari budaya kuliner Jawa Barat."
        },
        "Cireng": {
            gambar: "cireng.jpg",
            deskripsi: "Cireng atau aci goreng adalah jajanan khas Sunda yang terbuat dari adonan tepung kanji (aci) yang dicampur bumbu dan digoreng hingga renyah di luar namun kenyal di dalam. Cireng tersedia dalam berbagai varian isian seperti abon, keju, hingga sosis, menjadikannya jajanan yang digemari semua kalangan.",
            rasa: "Rasanya gurih dan renyah di luar, kenyal di dalam, dengan aroma bawang putih yang khas. Makin nikmat dengan cocolan sambal rujak.",
            sejarah: "Cireng mulai populer di Bandung pada era 1990-an sebagai jajanan murah meriah. Seiring waktu, cireng berkembang dengan berbagai inovasi isian dan bumbu, dan kini menjadi salah satu ikon jajanan khas Bandung yang terkenal hingga ke seluruh Indonesia."
        },
        "Bandros": {
            gambar: "bandros.jpg",
            deskripsi: "Bandros adalah kue tradisional Sunda yang terbuat dari campuran tepung beras, santan, dan kelapa parut yang dipanggang dalam cetakan khusus berbentuk setengah lingkaran. Teksturnya sedikit crispy di bagian luar namun lembut dan gurih di bagian dalam, biasanya dinikmati bersama teh manis hangat.",
            rasa: "Rasanya gurih dan sedikit manis dari santan dan kelapa parut, dengan aroma pandan yang harum dan tekstur unik krispy-lembut.",
            sejarah: "Bandros sudah ada sejak zaman kolonial dan menjadi bagian dari warisan kuliner Sunda. Nama 'bandros' sendiri konon berasal dari kata dalam bahasa Sunda. Kue ini dulu banyak dijajakan keliling kampung dan kini masih bisa ditemukan di pasar tradisional Bandung."
        },
        "Peuyeum": {
            gambar: "peuyeum.jpg",
            deskripsi: "Peuyeum (tapai singkong) adalah makanan fermentasi khas Sunda yang terbuat dari singkong yang difermentasi selama beberapa hari menggunakan ragi tradisional. Hasilnya adalah singkong yang empuk, manis-asam, beralkohol ringan, dan sangat aromatis. Peuyeum Bandung dari daerah Cimenyan terkenal sebagai yang terbaik.",
            rasa: "Rasanya manis-asam segar dengan tekstur lembut dan sedikit berair. Ada rasa unik hasil fermentasi yang membuat ketagihan.",
            sejarah: "Peuyeum sudah menjadi bagian budaya kuliner Sunda sejak berabad-abad lalu. Peuyeum Bandung, khususnya dari Cimenyan, sudah sangat terkenal dan menjadi oleh-oleh khas Bandung yang banyak dicari wisatawan sejak masa kolonial hingga kini."
        }
    };

    const kartuKuliner = document.querySelectorAll(".kuliner-card");
    const tombolDetail = document.querySelectorAll(".tombol-detail");
    const popupNama = document.getElementById("popupNama");
    const popupGambar = document.getElementById("popupGambar");
    const tutupPopup = document.getElementById("tutupPopup");
    const popupDeskripsi = document.getElementById("popupDeskripsi");
    const popupRasa = document.getElementById("popupRasa");
    const popupSejarah = document.getElementById("popupSejarah");
    const cariKuliner = document.getElementById("cariKuliner");
    let namaAktif = "";

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


document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});

const tombolSapa = document.getElementById("tombolSapaWarga");
const containerSapaan = document.getElementById("container-sapaan");

if (tombolSapa && containerSapaan) {
    

    const daftarSapaanBersih = [
        "Sampurasun! Wilujeng sumping di Bandung. Semoga harimu menyenangkan di Kota Kembang.",
        "Kumaha damang? Semoga kamu sehat dan betah menikmati suasana Bandung.",
        "Wilujeng enjing! Pagi di Bandung paling cocok ditemani udara sejuk dan makanan hangat.",
        "Halo Wargi Bandung! Tetap tersenyum dan jaga kebersihan selama menjelajah kota ini.",
        "Punten, mampir heula! Jangan lupa mencoba batagor, seblak, surabi, dan kuliner khas Bandung.",
        "Sampurasun! Wilujeng sumping di Bandung! ❤️ (Selamat datang di Bandung!)",
        "Kumaha damang? Semoga harimu di Kota Kembang menyenangkan! ✨",
        "Punten... Tong hilap nyobian seblak sareng batagor dinten ieu! 🍲",
        "Wilujeng enjing! Bandung selalu rindu dengan kehadiranmu. 🏔️",
        "Halo Wargi! Tetap tersenyum dan jaga kebersihan selama di Bandung ya! 🌸"
    ];

    tombolSapa.addEventListener("click", function() {
        var nomorAcak = Math.floor(Math.random() * daftarSapaanBersih.length);
        var sapaanAcak = daftarSapaanBersih[nomorAcak];
        var kartuSapaan = document.createElement("div");

        kartuSapaan.classList.add("kartu-sapaan-aktif");
        kartuSapaan.innerHTML = `
            <span class="ikon-sapaan">BDG</span>
            <div class="isi-sapaan">
                <h3>Sapaan Bandung</h3>
                <p>${sapaanAcak}</p>
            </div>
        `;

        containerSapaan.appendChild(kartuSapaan);

        setTimeout(function() {
            kartuSapaan.classList.add("sapaan-hilang");
        }, 3500);

        setTimeout(function() {
            kartuSapaan.remove();
        }, 4300);
    });
}
