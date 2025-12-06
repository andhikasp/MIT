export type Locale = 'id' | 'en'

type TranslationMap = {
  [K in Locale]: Record<string, string>
}

export const translations: TranslationMap = {
  id: {
    nav_home: 'Home',
    nav_about: 'About & Leadership',
    nav_services: 'Our Services',
    nav_projects: 'Our Projects',
    nav_products: 'Our Products',
    nav_subsidiaries: 'Subsidiaries',
    nav_contact: 'Contact',

    hero_kicker: 'Technology Solutions',
    hero_title: 'PT MOXELE INDO GROUP: Multi-Industry Technology Solution Architect',
    hero_body:
      'PT MOXELE INDO GROUP adalah penyedia solusi teknologi yang didedikasikan untuk melayani beragam industri, dengan keahlian inti dalam sistem Jaringan Sinyal dan ISP (Internet Service Protocol).',
    hero_cta_primary: 'Konsultasi Gratis',
    hero_cta_secondary: 'Lihat Portofolio',
    hero_badge_speed: 'PageSpeed A',
    hero_badge_seo: 'SEO-friendly',
    hero_badge_mobile: 'Mobile-first',
    hero_badge_certified: 'Bersertifikat',
    hero_badge_quality: 'Kualitas Terjamin',
    hero_badge_support: 'Dukungan 24/7',
    hero_badge_guarantee: 'Bergaransi',

    trust_title: 'Mengapa Memilih Kami?',
    trust_subtitle: 'Kami berkomitmen memberikan solusi teknologi terbaik dengan standar profesional tinggi.',
    trust_item1: 'Tim Berpengalaman & Bersertifikat',
    trust_item2: 'Standar Kualitas Internasional',
    trust_item3: 'Layanan 24/7 Support',
    trust_item4: 'Garansi & After Sales Service',
    trust_stat1_number: '100+',
    trust_stat1_label: 'Proyek Selesai',
    trust_stat2_number: '50+',
    trust_stat2_label: 'Klien Puas',
    trust_stat3_number: '10+',
    trust_stat3_label: 'Tahun Pengalaman',

    stats_heading: 'Angka yang menggambarkan dampak',
    stats_kicker: 'Results',
    stats_1: 'Projects Delivered',
    stats_2: 'Client Satisfaction',
    stats_3: 'Avg. Load Time',
    stats_4: 'SEO Uplift',

    services_kicker: 'Our Services',
    services_title: 'Layanan Profesional untuk Instalasi Tower Seluler',
    services_body:
      'Kami menyediakan solusi lengkap untuk instalasi, pemeliharaan, dan pengelolaan menara seluler dengan standar tertinggi.',
    svc_brand_title: 'Survey Lokasi',
    svc_brand_desc:
      'Kami menyediakan layanan survei lokasi untuk mengidentifikasi lokasi yang paling cocok untuk instalasi menara seluler Anda. Para ahli kami melakukan survei lokasi yang teliti untuk memastikan bahwa lokasi yang akan Anda bangun sesuai dengan semua peraturan yang berlaku.',
    svc_saas_title: 'Team Teknisi Ahli & Profesional',
    svc_saas_desc:
      'Tim profesional berpengalaman kami memiliki keterampilan dan pengetahuan yang diperlukan untuk membangun menara dengan berbagai ketinggian dan jenis. Kami menggunakan peralatan dan teknologi terbaru untuk memastikan bahwa menara Anda dibangun dengan standar tertinggi.',
    svc_perf_title: 'Peralatan Instalasi',
    svc_perf_desc:
      'Kami menyediakan layanan instalasi peralatan komprehensif untuk semua jenis sel menara, termasuk antena, pemancar, dan komponen lainnya yang diperlukan. Kami memastikan bahwa semua peralatan terinstal dengan benar dan efisien.',
    svc_design_title: 'Pemeliharaan Perangkat Signal & Optic',
    svc_design_desc:
      'Kami menyediakan layanan perawatan berkala untuk memastikan bahwa tower sel Anda beroperasi dengan kinerja terbaik. Layanan perawatan kami mencakup inspeksi, perbaikan, dan peningkatan pada peralatan dan komponen.',
    svc_copy_title: 'Keselamatan dan Kepatuhan',
    svc_copy_desc:
      'Keselamatan dan kepatuhan adalah prioritas utama kami. Kami mematuhi semua peraturan, standar, dan kode yang relevan untuk memastikan bahwa instalasi menara sel Anda aman dan sesuai dengan peraturan yang berlaku.',

    work_kicker: 'Our Projects',
    work_title: 'Proyek Instalasi dan Infrastruktur Menara Sel',
    work_body:
      'PT MOXELE INDO GROUP menawarkan layanan lengkap untuk instalasi, pemeliharaan, dan pengelolaan menara seluler dengan standar tertinggi.',
    work_item1_title: 'Pekerjaan Sipil Pembangunan Menara',
    work_item1_type: 'Civil Work',
    work_item1_desc:
      'Kami melaksanakan seluruh pekerjaan sipil yang diperlukan, mulai dari perencanaan tapak, persiapan lahan, hingga konstruksi fondasi menara yang kokoh dan presisi. Ini termasuk pekerjaan pengecoran, penanaman grounding system, dan pembangunan struktur pendukung lainnya sesuai standar keselamatan dan spesifikasi teknis tertinggi.',
    work_item2_title: 'Instalasi dan Pemasangan Aksesori Menara',
    work_item2_type: 'Tower Accessories',
    work_item2_desc:
      'Menyediakan layanan pemasangan menyeluruh untuk semua aksesori menara, termasuk feeder cable, antena, bracket, anti-climbing device, aviation light, dan semua perangkat keras struktural lainnya. Kami menjamin setiap aksesori terpasang dengan tepat untuk memaksimalkan integritas struktural dan kinerja transmisi sinyal.',
    work_item3_title: 'Sistem Kelistrikan dan Jaringan Daya',
    work_item3_type: 'Electrical System',
    work_item3_desc:
      'Melaksanakan instalasi sistem kelistrikan yang dirancang khusus untuk operasional Menara Sinyal dan site telekomunikasi. Ruang lingkup ini mencakup pemasangan panel daya, sistem proteksi petir, grounding system yang teruji, dan instalasi jalur daya utama maupun cadangan untuk memastikan pasokan energi yang stabil dan aman bagi seluruh perangkat di menara.',
    work_item4_title: 'Pemeliharaan Perangkat & Tower',
    work_item4_type: 'Maintenance Services',
    work_item4_desc:
      'Kami dapat melakukan pekerjaan dalam lingkup pemeliharaan Tower Signal, dalam kualifikasi Ringan, Menengah maupun Berat. Pemeliharaan ini dilakukan secara rutin agar Tower Signal selalu dalam kondisi terbaik dan terjaga.',
    work_item5_title: 'Instal dan Dismantle Tower',
    work_item5_type: 'Installation & Dismantling',
    work_item5_desc:
      'Kami dapat melakukan Pemasangan dan Pembongkaran Tower Signal, Peralatan Radio Unit atau peralatan pendukung yang terdapat di Tower Signal tersebut dengan mengutamakan Keselamatan kerja dan peralatan yang sesuai dengan standarisasi pekerjaan.',
    work_item6_title: 'Instalasi Perangkat dan Aplikasi',
    work_item6_type: 'Smart Cluster Installation',
    work_item6_desc:
      'Kami juga dapat melakukan pekerjaan dalam lingkup pembangunan Smart Cluster untuk perumahan dengan teknologi pengamanan terbaik.',

    testi_kicker: 'Testimonials',
    testi_title: 'Klien berkata',
    testi_body:
      'Cerita singkat dari tim yang sudah kami bantu mempercepat website dan meningkatkan konversi.',
    testi_1_quote:
      'Moxelle delivered a blazing fast site. Bounce rate turun drastis dan lead masuk stabil.',
    testi_1_name: 'Sarah L.',
    testi_1_role: 'CMO, Fintech',
    testi_2_quote:
      'Timnya responsif dan paham bisnis. Konversi trial SaaS kami naik lebih dari 3x.',
    testi_2_name: 'Randy K.',
    testi_2_role: 'Founder, SaaS',
    testi_3_quote:
      'Desainnya modern dan rapih di mobile. PageSpeed hijau semua. Sangat direkomendasikan.',
    testi_3_name: 'Amira P.',
    testi_3_role: 'Head of Digital, Retail',

    cta_title: 'Ingin tampilan sekelas brand besar?',
    cta_body:
      'Kami siap mendesain, membangun, dan mengoptimasi website Anda. Cepat, ringan, dan berorientasi hasil.',
    cta_primary: 'Hubungi Kami',
    cta_secondary: 'Lihat Portofolio',

    contact_kicker: 'Contact',
    contact_title: 'Mari diskusikan kebutuhanmu',
    contact_body:
      'Ceritakan tujuan proyek, target hasil, dan timeline. Kami akan merespons cepat dengan rencana singkat dan estimasi.',
    contact_name: 'Nama',
    contact_email: 'Email',
    contact_phone: 'Telepon',
    contact_desc: 'Ceritakan singkat kebutuhanmu',
    contact_placeholder_desc:
      'Contoh: redesign landing page, optimasi performa, dll.',
    contact_submit: 'Kirim Pesan',
    contact_submitting: 'Mengirim...',
    contact_success: 'Pesan berhasil dikirim! Kami akan menghubungi Anda segera.',
    contact_error: 'Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.',
    contact_address: 'Alamat',
    contact_address_full:
      'PT. MOXELE INDO GROUP\nJl. Ring Road, Jl. Raya Bubulak No. A-4,\nRT.01/RW.11, Bubulak, Bogor Barat,\nBogor City, West Java 16115, Indonesia',
    contact_phone_full: '+62 813 3012 7518',
    contact_email_full: 'info@pt-moxelindogroup.com',
    contact_website: 'www.pt-moxelindogroup.com',
    footer_location_title: 'Lokasi Kami',
    footer_company_name: 'PT. MOXELE INTEGRASI TEKNOLOGI',
    footer_address_new:
      'Jl. Ring Road Jl. Raya Bubulak No.A-4, RT.01/RW.11, Bubulak, Kec. Bogor Bar., Kota Bogor, Jawa Barat 16115',
    footer_operational_hours: 'Jam Operasional',
    footer_operational_weekday: 'Senin - Jumat: 08:00 - 17:00',
    footer_operational_saturday: 'Sabtu: 09:00 - 13:00',
    footer_operational_sunday: 'Minggu: Tutup',
    contact_inquiry:
      'For inquiries, partnerships, or project collaboration, please contact us through the details above. Our team will be delighted to assist you.',

    footer_desc:
      'Studio web modern yang fokus pada performa, UX rapi, dan konversi tinggi. Kami membangun website yang terasa premium dan efektif.',
    footer_quicklinks: 'Quick Links',
    footer_contact: 'Contact',
    footer_city: 'Jakarta — Remote',

    about_kicker: 'About & Leadership',
    about_title: 'PT MOXELE INDO GROUP: Arsitek Solusi Teknologi Multi-Industri.',
    about_body:
      'PT MOXELE INDO GROUP adalah penyedia solusi teknologi yang didedikasikan untuk melayani beragam industri, dengan keahlian inti di Bidang Jaringan Signal dan ISP (Internet Service Protocol). Kami didorong oleh fokus tunggal: memberikan solusi inovatif yang mengatasi tantangan konektivitas paling kompleks. Kami memiliki pemahaman yang mendalam tentang kompleksitas instalasi infrastruktur telekomunikasi. Tim ahli kami yang berpengalaman siap menangani proyek instalasi tower apa pun—termasuk proyek yang paling menantang dan berkompleksitas tinggi. Komitmen kami terhadap keunggulan tercermin dalam setiap aspek pekerjaan, mulai dari kualitas instalasi yang presisi hingga tingkat layanan pelanggan yang tak tertandingi. Kami berdedikasi untuk terus berada di garis depan industri, secara aktif mencari teknologi dan teknik terbaru untuk memastikan klien kami selalu selangkah lebih maju. Kami percaya bahwa keberhasilan klien adalah kunci kesuksesan kami. Oleh karena itu, PT MOXELE INDO GROUP berkomitmen penuh untuk melakukan yang terbaik demi membantu Anda mencapai tujuan bisnis Anda.',
    about_card_about: 'Tentang',
    about_card_vision: 'Visi',
    about_card_mission: 'Misi',
    about_pill1_title: 'Strategi',
    about_pill1_desc: 'Menyelaraskan tujuan bisnis dengan eksekusi digital.',
    about_pill2_title: 'Eksekusi Cepat',
    about_pill2_desc: 'Stack modern, CI/CD, dan eksperimen terukur.',
    about_pill3_title: 'Kolaborasi',
    about_pill3_desc: 'Transparan, async-friendly, dan iterasi rutin.',
    about_vision: 'Visi',
    about_mission: 'Misi',
    about_vision_body:
      'Menjadi Kekuatan Solusi Teknologi Kelas Dunia yang membentuk ulang efisiensi industri. Kami berkomitmen sebagai mitra terdepan yang diakui atas inovasi dan keandalan di Indonesia dan kancah Internasional. Menjadi Jembatan Solusi Terbaik. Kami bercita-cita menjadi mitra strategis yang tak tergantikan bagi setiap klien, memberikan solusi Instalasi dan Teknologi Jaringan Signal/ISP yang dirancang khusus dan inovatif, didukung oleh investasi berkelanjutan pada alat dan teknologi paling terdepan.',
    about_mission_body:
      'Untuk menghadirkan solusi instalasi jaringan telekomunikasi yang paling inovatif dan unggul, didukung oleh teknologi mutakhir dan layanan pelanggan yang berkomitmen penuh untuk melampaui setiap ekspektasi klien.',

    products_kicker: 'Our Products',
    products_title: 'Paket siap pakai untuk hasil cepat',
    products_body: 'Pilih paket yang paling sesuai dengan kebutuhan Anda.',
    products_maintenance_title: 'Under Maintenance',
    products_maintenance_desc: 'Halaman ini sedang dalam pengembangan. Kami akan segera hadir dengan produk terbaik untuk Anda.',
    products_item1_title: 'Site Accelerator',
    products_item1_desc:
      'Bundle optimasi kecepatan & SEO untuk existing site.',
    products_item2_title: 'Launch Kit',
    products_item2_desc:
      'Paket landing premium + copy + integrasi form/CRM.',
    products_item3_title: 'Design System Starter',
    products_item3_desc: 'UI kit + guideline untuk tim product Anda.',

    subs_kicker: 'Subsidiaries',
    subs_title: 'Unit bisnis dalam ekosistem Moxelle',
    subs_body:
      'Spesialisasi berbeda, tujuan sama: performa, brand yang kuat, dan hasil bisnis nyata.',
    subs_item1_title: 'Moxelle Labs',
    subs_item1_desc: 'R&D untuk eksperimen performa dan UX.',
    subs_item2_title: 'Moxelle Commerce',
    subs_item2_desc: 'Fokus pada e-commerce experience dan checkout optimization.',
    subs_item3_title: 'Moxelle Growth',
    subs_item3_desc: 'Tim optimasi konversi, A/B testing, dan analytics.',
    subs_item4_title: 'MIT',
    subs_item4_desc: 'Moxelle Integrasi Teknologi.',
    subs_item5_title: 'MIL',
    subs_item5_desc: 'Moxelle Integrasi Logistik.',
    subs_item6_title: 'MIB',
    subs_item6_desc: 'Moxelle Integrasi Bisnis.',
    subs_item7_title: 'MIP',
    subs_item7_desc: 'Moxelle Integrasi Proyek.',

    leader_section_title: 'Leadership',
    leader_message_title: 'Chairman and Key Leader Message',
    leader_read_more: 'Baca Selengkapnya',
    leader_yudie_name: 'Yudie Rahman',
    leader_yudie_title: 'Komisaris & CEO',
    leader_yudie_preview:
      'Di tengah tuntutan koneksi yang tak terhenti, kami tidak hanya menyediakan layanan; kami menjamin keandalan maksimal...',
    leader_yudie_full:
      'Di tengah tuntutan koneksi yang tak terhenti, kami tidak hanya menyediakan layanan; kami menjamin keandalan maksimal. Komitmen inti kami adalah memberikan layanan instalasi dan pemeliharaan tower sel berkualitas tertinggi. Tim teknisi kami yang sangat terampil berdedikasi untuk satu tujuan: memastikan jaringan Anda selalu beroperasi secara optimal dan efisien. Fokus kami adalah meminimalkan waktu jaringan turun (downtime) dan memaksimalkan potensi penuh jaringan Anda. Fokus teguh pada Kualitas, Inovasi, dan Kepuasan Klien telah memposisikan kami sebagai penyedia layanan instalasi tower sel terkemuka. Kami bersemangat untuk terus mengeksplorasi teknologi baru dan memperluas jangkauan kami. Saya bangga dengan pencapaian kami dan sangat antusias untuk membangun masa depan jaringan Anda bersama. Terima kasih telah mempertimbangkan PT Moxele Indo Group untuk memberikan Solusi Teknologi di Industri Anda, dan saya berharap untuk kesempatan untuk bekerja sama dengan Anda.',
    leader_vendra_name: 'Vendra Vandoko Subagio',
    leader_vendra_title: 'COO',
    leader_vendra_preview:
      'Operasional bukan sekadar menjalankan sistem, melainkan memastikan setiap proses bergerak selaras dengan visi besar perusahaan...',
    leader_vendra_full:
      'Operasional bukan sekadar menjalankan sistem, melainkan memastikan setiap proses bergerak selaras dengan visi besar perusahaan. Kami mengintegrasikan teknologi terdepan dengan praktik operasional yang efisien untuk memastikan setiap proyek berjalan dengan sempurna. Tim operasional kami bekerja dengan presisi tinggi, memastikan setiap detail dari perencanaan hingga eksekusi berjalan sesuai standar tertinggi. Kami percaya bahwa operasional yang solid adalah fondasi dari setiap kesuksesan proyek.',
    leader_buddy_name: 'Buddy Sanjaya',
    leader_buddy_title: 'CEO MIT',
    leader_buddy_preview:
      'Inovasi adalah fondasi dari setiap solusi yang kami ciptakan...',
    leader_buddy_full:
      'Inovasi adalah fondasi dari setiap solusi yang kami ciptakan. Di MIT, kami tidak hanya mengikuti tren teknologi, tetapi juga menciptakan solusi yang mengubah cara industri bekerja. Kami berkomitmen untuk terus berinovasi dan memberikan nilai tambah yang signifikan bagi klien kami melalui teknologi yang canggih dan pendekatan yang kreatif.',
    leader_rahma_name: 'Rahma Padhila',
    leader_rahma_title: 'CFO MIT',
    leader_rahma_preview:
      'Di balik setiap strategi besar, ada fondasi keuangan yang kuat dan transparan...',
    leader_rahma_full:
      'Di balik setiap strategi besar, ada fondasi keuangan yang kuat dan transparan. Sebagai CFO, saya memastikan bahwa setiap keputusan finansial didasarkan pada analisis yang mendalam dan visi jangka panjang. Kami mengelola sumber daya dengan efisien untuk memastikan keberlanjutan bisnis dan pertumbuhan yang berkelanjutan.',

    org_chart_title: 'Struktur Organisasi',
    org_chart_subtitle: 'Hierarki dan alur kerja perusahaan',
    org_komut: 'KOMUT',
    org_komisaris: 'KOMISARIS',
    org_direktur_utama: 'DIREKTUR UTAMA',
    org_direktur_finance: 'DIREKTUR FINANCE & HRGA',
    org_hse: 'HSE/K3 (SMK3)',
    org_manager_operation: 'MANAGER OPERATION & PROJECT',
    org_manager_business: 'MANAGER BUSINESS DEVELOPMENT & ENGINEERING',
    org_accounting: 'ACCOUNTING & COLLECTING',
    org_ga_legal: 'GA (ASSET) & LEGAL/PERMIT',
    org_hrd_procurement: 'HRD-ADMIN & PROCUREMENT',
    org_vendor_management: 'VENDOR MANAGEMENT',
    org_project_management: 'PROJECT MANAGEMENT',
    org_maintenance_service: 'MAINTENANCE SERVICE',
    org_product_service: 'PRODUCT & SERVICE SOLUTION',
    org_marketing: 'MARKETING',
    org_design_estimator: 'DESIGN & ESTIMATOR',
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About & Leadership',
    nav_services: 'Our Services',
    nav_projects: 'Our Projects',
    nav_products: 'Our Products',
    nav_subsidiaries: 'Subsidiaries',
    nav_contact: 'Contact',

    hero_kicker: 'Technology Solutions',
    hero_title: 'PT MOXELE INDO GROUP: Multi-Industry Technology Solution Architect',
    hero_body:
      'PT MOXELE INDO GROUP is a technology solutions provider dedicated to serving diverse industries, with core expertise in Signal Network and ISP (Internet Service Protocol) systems.',
    hero_cta_primary: 'Free Consultation',
    hero_cta_secondary: 'See Portfolio',
    hero_badge_speed: 'PageSpeed A',
    hero_badge_seo: 'SEO-friendly',
    hero_badge_mobile: 'Mobile-first',
    hero_badge_certified: 'Certified',
    hero_badge_quality: 'Quality Assured',
    hero_badge_support: '24/7 Support',
    hero_badge_guarantee: 'Warranty Guaranteed',

    trust_title: 'Why Choose Us?',
    trust_subtitle: 'We are committed to providing the best technology solutions with high professional standards.',
    trust_item1: 'Experienced & Certified Team',
    trust_item2: 'International Quality Standards',
    trust_item3: '24/7 Support Service',
    trust_item4: 'Warranty & After Sales Service',
    trust_stat1_number: '100+',
    trust_stat1_label: 'Projects Completed',
    trust_stat2_number: '50+',
    trust_stat2_label: 'Satisfied Clients',
    trust_stat3_number: '10+',
    trust_stat3_label: 'Years of Experience',

    stats_heading: 'Numbers that reflect impact',
    stats_kicker: 'Results',
    stats_1: 'Projects Delivered',
    stats_2: 'Client Satisfaction',
    stats_3: 'Avg. Load Time',
    stats_4: 'SEO Uplift',

    services_kicker: 'Our Services',
    services_title: 'Professional Services for Cell Tower Installation',
    services_body:
      'We provide comprehensive solutions for installation, maintenance, and management of cell towers with the highest standards.',
    svc_brand_title: 'Location Survey',
    svc_brand_desc:
      'We provide location survey services to identify the most suitable location for your cell tower installation. Our experts conduct thorough location surveys to ensure that the location you will build complies with all applicable regulations.',
    svc_saas_title: 'Expert & Professional Technical Team',
    svc_saas_desc:
      'Our experienced professional team has the skills and knowledge needed to build towers of various heights and types. We use the latest equipment and technology to ensure your tower is built to the highest standards.',
    svc_perf_title: 'Installation Equipment',
    svc_perf_desc:
      'We provide comprehensive equipment installation services for all types of cell towers, including antennas, transmitters, and other necessary components. We ensure that all equipment is installed correctly and efficiently.',
    svc_design_title: 'Signal & Optic Device Maintenance',
    svc_design_desc:
      'We provide regular maintenance services to ensure your cell tower operates at peak performance. Our maintenance services include inspection, repair, and upgrades to equipment and components.',
    svc_copy_title: 'Safety and Compliance',
    svc_copy_desc:
      'Safety and compliance are our top priorities. We comply with all relevant regulations, standards, and codes to ensure that your cell tower installation is safe and complies with applicable regulations.',

    work_kicker: 'Our Projects',
    work_title: 'Cell Tower Installation and Infrastructure Projects',
    work_body:
      'PT MOXELE INDO GROUP offers comprehensive services for installation, maintenance, and management of cell towers with the highest standards.',
    work_item1_title: 'Civil Work for Tower Construction',
    work_item1_type: 'Civil Work',
    work_item1_desc:
      'We carry out all necessary civil work, from site planning, land preparation, to construction of strong and precise tower foundations. This includes concrete work, grounding system installation, and construction of other supporting structures in accordance with the highest safety standards and technical specifications.',
    work_item2_title: 'Tower Accessory Installation and Mounting',
    work_item2_type: 'Tower Accessories',
    work_item2_desc:
      'Providing comprehensive installation services for all tower accessories, including feeder cables, antennas, brackets, anti-climbing devices, aviation lights, and all other structural hardware. We ensure every accessory is installed correctly to maximize structural integrity and signal transmission performance.',
    work_item3_title: 'Electrical System and Power Network',
    work_item3_type: 'Electrical System',
    work_item3_desc:
      'Carrying out installation of electrical systems specifically designed for Signal Tower operations and telecommunications sites. This scope includes installation of power panels, lightning protection systems, tested grounding systems, and installation of main and backup power lines to ensure stable and safe energy supply for all devices on the tower.',
    work_item4_title: 'Device & Tower Maintenance',
    work_item4_type: 'Maintenance Services',
    work_item4_desc:
      'We can perform work in the scope of Signal Tower maintenance, in Light, Medium, or Heavy qualifications. This maintenance is carried out regularly so that the Signal Tower is always in the best condition and maintained.',
    work_item5_title: 'Tower Installation & Dismantling',
    work_item5_type: 'Installation & Dismantling',
    work_item5_desc:
      'We can perform Installation and Dismantling of Signal Towers, Radio Unit equipment or supporting equipment on Signal Towers by prioritizing work safety and equipment that complies with work standardization.',
    work_item6_title: 'Device and Application Installation',
    work_item6_type: 'Smart Cluster Installation',
    work_item6_desc:
      'We can also perform work in the scope of Smart Cluster development for residential areas with the best security technology.',

    testi_kicker: 'Testimonials',
    testi_title: 'What clients say',
    testi_body:
      'Stories from teams we helped accelerate their websites and lift conversions.',
    testi_1_quote:
      'Moxelle delivered a blazing fast site. Bounce rate dropped significantly and inbound leads stabilized.',
    testi_1_name: 'Sarah L.',
    testi_1_role: 'CMO, Fintech',
    testi_2_quote:
      'Responsive and business-savvy team. Our SaaS trial conversions rose more than 3x.',
    testi_2_name: 'Randy K.',
    testi_2_role: 'Founder, SaaS',
    testi_3_quote:
      'Modern design and tidy on mobile. PageSpeed is all green. Highly recommended.',
    testi_3_name: 'Amira P.',
    testi_3_role: 'Head of Digital, Retail',

    cta_title: 'Want a brand-level experience?',
    cta_body:
      'We design, build, and optimize your website. Fast, lightweight, and outcome-focused.',
    cta_primary: 'Contact Us',
    cta_secondary: 'See Portfolio',

    contact_kicker: 'Contact',
    contact_title: "Let's discuss your needs",
    contact_body:
      "Share your project goals, desired outcomes, and timeline. We'll reply quickly with a short plan and estimate.",
    contact_name: 'Name',
    contact_email: 'Email',
    contact_phone: 'Phone',
    contact_desc: 'Briefly describe your needs',
    contact_placeholder_desc:
      'E.g., landing redesign, performance optimization, etc.',
    contact_submit: 'Send Message',
    contact_submitting: 'Sending...',
    contact_success: 'Message sent successfully! We will contact you soon.',
    contact_error: 'An error occurred. Please try again or contact us directly.',
    contact_address: 'Address',
    contact_address_full:
      'PT. MOXELE INDO GROUP\nJl. Ring Road, Jl. Raya Bubulak No. A-4,\nRT.01/RW.11, Bubulak, Bogor Barat,\nBogor City, West Java 16115, Indonesia',
    contact_phone_full: '+62 813 3012 7518',
    contact_email_full: 'info@pt-moxelindogroup.com',
    contact_website: 'www.pt-moxelindogroup.com',
    footer_location_title: 'Our Location',
    footer_company_name: 'PT. MOXELE INTEGRASI TEKNOLOGI',
    footer_address_new:
      'Jl. Ring Road Jl. Raya Bubulak No.A-4, RT.01/RW.11, Bubulak, Kec. Bogor Bar., Kota Bogor, Jawa Barat 16115',
    footer_operational_hours: 'Operating Hours',
    footer_operational_weekday: 'Monday - Friday: 08:00 - 17:00',
    footer_operational_saturday: 'Saturday: 09:00 - 13:00',
    footer_operational_sunday: 'Sunday: Closed',
    contact_inquiry:
      'For inquiries, partnerships, or project collaboration, please contact us through the details above. Our team will be delighted to assist you.',

    footer_desc:
      'A modern web studio focused on performance, clean UX, and strong conversions. We build sites that feel premium and effective.',
    footer_quicklinks: 'Quick Links',
    footer_contact: 'Contact',
    footer_city: 'Jakarta — Remote',

    about_kicker: 'About & Leadership',
    about_title:
      'PT MOXELE INDO GROUP: Architects of Multi-Industry Technology Solutions.',
    about_body:
      'PT MOXELE INDO GROUP provides technology solutions across industries, with core expertise in Signal Networks and ISP. We focus on delivering innovative answers to the most complex connectivity challenges. Our seasoned experts handle any tower installation project—even the toughest, most complex ones. Our commitment to excellence shows in every detail, from precise installation quality to unmatched customer service. We stay ahead by actively adopting the latest technologies and techniques so our clients are always one step in front. We believe client success is our success, so we are fully committed to helping you achieve your business goals.',
    about_card_about: 'About',
    about_card_vision: 'Vision',
    about_card_mission: 'Mission',
    about_pill1_title: 'Strategy',
    about_pill1_desc: 'Align business goals with digital execution.',
    about_pill2_title: 'Fast Execution',
    about_pill2_desc: 'Modern stack, CI/CD, and measured experiments.',
    about_pill3_title: 'Collaboration',
    about_pill3_desc: 'Transparent, async-friendly, and iterative.',
    about_vision: 'Vision',
    about_mission: 'Mission',
    about_vision_body:
      'To be a world-class technology solutions force reshaping industrial efficiency, recognized for innovation and reliability in Indonesia and globally. To be the best bridge of solutions—an irreplaceable strategic partner delivering tailored, innovative Signal/ISP network solutions, supported by continuous investment in leading-edge tools and technology.',
    about_mission_body:
      'To deliver the most innovative and superior telecommunications network installation solutions, backed by cutting-edge technology and customer service fully committed to exceeding every client expectation.',

    products_kicker: 'Our Products',
    products_title: 'Ready-to-use packages for fast results',
    products_body: 'Pick the package that best fits your needs.',
    products_maintenance_title: 'Under Maintenance',
    products_maintenance_desc: 'This page is currently under development. We will be back soon with the best products for you.',
    products_item1_title: 'Site Accelerator',
    products_item1_desc: 'Speed & SEO optimization bundle for existing sites.',
    products_item2_title: 'Launch Kit',
    products_item2_desc: 'Premium landing + copy + form/CRM integration.',
    products_item3_title: 'Design System Starter',
    products_item3_desc: 'UI kit + guidelines for your product team.',

    subs_kicker: 'Subsidiaries',
    subs_title: 'Business units in the Moxelle ecosystem',
    subs_body:
      'Different specializations, same goal: performance, strong brand, and real business outcomes.',
    subs_item1_title: 'Moxelle Labs',
    subs_item1_desc: 'R&D for performance and UX experiments.',
    subs_item2_title: 'Moxelle Commerce',
    subs_item2_desc:
      'Focused on e-commerce experiences and checkout optimization.',
    subs_item3_title: 'Moxelle Growth',
    subs_item3_desc: 'Conversion optimization, A/B testing, and analytics team.',
    subs_item4_title: 'MIT',
    subs_item4_desc: 'Moxelle Technology Integration.',
    subs_item5_title: 'MIL',
    subs_item5_desc: 'Moxelle Logistics Integration.',
    subs_item6_title: 'MIB',
    subs_item6_desc: 'Moxelle Business Integration.',
    subs_item7_title: 'MIP',
    subs_item7_desc: 'Moxelle Project Integration.',

    leader_section_title: 'Leadership',
    leader_message_title: 'Chairman and Key Leader Message',
    leader_read_more: 'Read More',
    leader_yudie_name: 'Yudie Rahman',
    leader_yudie_title: 'Commissioner & CEO',
    leader_yudie_preview:
      "Amidst unceasing connection demands, we don't just provide services; we guarantee maximum reliability...",
    leader_yudie_full:
      "Amidst unceasing connection demands, we don't just provide services; we guarantee maximum reliability. Our core commitment is delivering the highest quality cell tower installation and maintenance services. Our highly skilled technical team is dedicated to one goal: ensuring your network always operates optimally and efficiently. Our focus is minimizing network downtime and maximizing your network's full potential. Our unwavering focus on Quality, Innovation, and Client Satisfaction has positioned us as a leading cell tower installation service provider. We are excited to continue exploring new technologies and expanding our reach. I am proud of our achievements and very enthusiastic about building your network's future together. Thank you for considering PT Moxele Indo Group to provide Technology Solutions in Your Industry, and I look forward to the opportunity to work with you.",
    leader_vendra_name: 'Vendra Vandoko Subagio',
    leader_vendra_title: 'COO',
    leader_vendra_preview:
      "Operations is not just about running systems, but ensuring every process moves in alignment with the company's big vision...",
    leader_vendra_full:
      "Operations is not just about running systems, but ensuring every process moves in alignment with the company's big vision. We integrate cutting-edge technology with efficient operational practices to ensure every project runs perfectly. Our operations team works with high precision, ensuring every detail from planning to execution meets the highest standards. We believe that solid operations are the foundation of every project success.",
    leader_buddy_name: 'Buddy Sanjaya',
    leader_buddy_title: 'CEO MIT',
    leader_buddy_preview:
      'Innovation is the foundation of every solution we create...',
    leader_buddy_full:
      "Innovation is the foundation of every solution we create. At MIT, we don't just follow technology trends, but also create solutions that change how industries work. We are committed to continuously innovating and providing significant added value to our clients through advanced technology and creative approaches.",
    leader_rahma_name: 'Rahma Padhila',
    leader_rahma_title: 'CFO MIT',
    leader_rahma_preview:
      'Behind every big strategy, there is a strong and transparent financial foundation...',
    leader_rahma_full:
      'Behind every big strategy, there is a strong and transparent financial foundation. As CFO, I ensure that every financial decision is based on in-depth analysis and long-term vision. We manage resources efficiently to ensure business sustainability and continuous growth.',

    org_chart_title: 'Organization Structure',
    org_chart_subtitle: 'Company hierarchy and workflow',
    org_komut: 'KOMUT',
    org_komisaris: 'KOMISARIS',
    org_direktur_utama: 'DIREKTUR UTAMA',
    org_direktur_finance: 'DIREKTUR FINANCE & HRGA',
    org_hse: 'HSE/K3 (SMK3)',
    org_manager_operation: 'MANAGER OPERATION & PROJECT',
    org_manager_business: 'MANAGER BUSINESS DEVELOPMENT & ENGINEERING',
    org_accounting: 'ACCOUNTING & COLLECTING',
    org_ga_legal: 'GA (ASSET) & LEGAL/PERMIT',
    org_hrd_procurement: 'HRD-ADMIN & PROCUREMENT',
    org_vendor_management: 'VENDOR MANAGEMENT',
    org_project_management: 'PROJECT MANAGEMENT',
    org_maintenance_service: 'MAINTENANCE SERVICE',
    org_product_service: 'PRODUCT & SERVICE SOLUTION',
    org_marketing: 'MARKETING',
    org_design_estimator: 'DESIGN & ESTIMATOR',
  },
}

