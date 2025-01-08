function toggleChatWindow() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
}

const translations = {
    EN: {
      "home": "Home",
      "services": "Our Services",
      "offers": "Offers",
      "contact": "Contact Us",
      "main-title": "The Best Partner for Your Trips",
      "main-desc": "Founded in 2019, Magic Travel for Travel and Tourism has established itself as a major player in the travel and tourism sector in Kuwait.",
      "vision-title": "Our Vision",
      "vision-text": "To be the first choice for travelers by consistently providing innovative, reliable, and seamless travel solutions",
      "mission-title": "Our Mission",
      "mission-text": "We aim to revolutionize the travel experience by offering personalized services, leveraging industry partnerships, and exceeding client expectations at every step of their journey.",
      "Our Services": "Our Services",
    "Tickets": "Tickets",
    "Hotels": "Hotels",
    "Cruise Packages": "Cruise Packages",
    "Visas": "Visas",
    "Match Tickets": "Match Tickets",
    "Car Rentals": "Car Rentals",
    "Activity Bookings": "Activity Bookings",
    "Airport Reception Services": "Airport Reception Services",
    "Contact Us": "Contact Us",
    "Our Current Offers": "Our Current Offers",
    "Let us plan your dream vacation": "Let us plan your dream vacation",
    "Quote": "Quote",
    "Euro Cup Tickets": "Euro Cup Tickets",
    "Special Hotel Rates": "Special Hotel Rates",
    "Cruise Offers": "Cruise Offers",
    "Name": "Name",
    "*Phone Number": "*Phone Number",
    "Send": "Send",
    "Commercial Tower, Sharq, Kuwait": "Commercial Tower, Sharq, Kuwait",
    "Al-Bahr Center, Hawally, Kuwait": "Al-Bahr Center, Hawally, Kuwait",
    "mission-desc": "With two conveniently located branches in Kuwait, we are committed to meeting the diverse needs of individual travelers, families, and businesses.",
    "vision-desc": "Our expertise, combined with strong partnerships across the travel and hospitality industries, allows us to offer first-class services that redefine the travel experience."
    },
    AR: {
      "home": "الرئيسية",
      "services": "خدماتنا",
      "offers": "العروض",
      "contact": "اتصل بنا",
      "main-title": "أفضل شريك لرحلاتك",
      "main-desc": "تأسست Magic Travel للسفر والسياحة في عام 2019 وأثبتت نفسها كلاعب رئيسي في قطاع السفر والسياحة في الكويت.",
      "vision-title": "رؤيتنا",
      "vision-text": "أن نكون الخيار الأول للمسافرين من خلال تقديم حلول سفر مبتكرة وموثوقة وسلسة بشكل مستمر.",
      "mission-title": "مهمتنا",
      "mission-text": "نهدف إلى تغيير تجربة السفر من خلال تقديم خدمات مخصصة، والاستفادة من الشراكات وتجاوز توقعات العملاء في كل خطوة من رحلتهم.",
      "Our Services": "خدماتنا",
    "Tickets": "التذاكر",
    "Hotels": "الفنادق",
    "Cruise Packages": "حزم الرحلات البحرية",
    "Visas": "التأشيرات",
    "Match Tickets": "تذاكر المباريات",
    "Car Rentals": "تأجير السيارات",
    "Activity Bookings": "حجز الأنشطة",
    "Airport Reception Services": "خدمات الاستقبال في المطار",
    "Contact Us": "اتصل بنا",
    "Our Current Offers": "عروضنا الحالية",
    "Let us plan your dream vacation": "دعونا نخطط لعطلتك المثالية",
    "Quote": "اقتباس",
    "Euro Cup Tickets": "تذاكر كأس أوروبا",
    "Special Hotel Rates": "أسعار الفنادق الخاصة",
    "Cruise Offers": "عروض الرحلات البحرية",
    "Name": "الاسم",
    "*Phone Number": "رقم الهاتف",
    "Send": "إرسال",
    "Commercial Tower, Sharq, Kuwait":"برج التجارية , شرق ,  الكويت",
    "Al-Bahr Center, Hawally, Kuwait":"مجمع البحر سنتر , حولي , الكويت",
    "mission-desc": "مع فرعين يقعان في مكان مناسب بالكويت، ونحن ملتزمون لتلبية الاحتياجات المتنوعة للمسافرين الأفراد والعائلات، والشركات.",
    "vision-desc": "خبرتنا، جنبًا إلى جنب مع شراكات قوية عبر صناعة السفر والضيافة، تسمح لنا بتقديم خدمات من الدرجة الأولى لإعادة تعريف تجربة السفر."
    }
  };
  const navbarList = document.getElementById('navbarList');
  const textStart = document.querySelectorAll('.start-trans');
  const justiEnd = document.querySelectorAll('.justi-end');
  const itemsEnd = document.querySelectorAll('.items-end');
  function toggleLanguage(language) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
      const key = element.getAttribute("data-translate");
      element.textContent = translations[language][key];
    });
    if (language === 'AR') {
        textStart.forEach((text)=>{
            text.classList.remove("text-end")
            text.classList.add("text-start")
        })
        itemsEnd.forEach((text)=>{
            text.classList.add("align-items-end")
        })
        justiEnd.forEach((text)=>{
            text.classList.add("justify-content-end")
        })
        navbarList.setAttribute('dir', 'rtl'); // Arabic (Right-to-Left)
    } else {
        textStart.forEach((text)=>{
            text.classList.remove("text-start")
            text.classList.add("text-end")
        })
        itemsEnd.forEach((text)=>{
            text.classList.remove("align-items-end")
        })
        justiEnd.forEach((text)=>{
            text.classList.remove("justify-content-end")
        })
        navbarList.setAttribute('dir', 'ltr'); // English (Left-to-Right)
      }
  }
  
