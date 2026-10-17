import {
  FaAmbulance, FaFaucet, FaBroom, FaUtensils, FaGraduationCap, FaPrayingHands,
  FaShieldAlt, FaDrumstickBite, FaRing,
} from 'react-icons/fa';

import ambulanceImg from '../assets/images/abmulance.png';
import waterImg from '../assets/images/water.png';
import cleanlinessImg from '../assets/images/cleanliness.png';
import foodImg from '../assets/images/food.png';
import studyImg from '../assets/images/studyfund.png';
import burialImg from '../assets/images/burial.png';
import sweepAlley from '../assets/images/image3.jpg';
import sweepShutters from '../assets/images/image9.jpg';
import streetLight from '../assets/images/image8.jpg';
import cameraSign from '../assets/images/image10.jpg';
import groupEvent from '../assets/images/image5.jpg';
import officeAward from '../assets/images/image4.jpg';
import awardOne from '../assets/images/image2.png';
import awardTwo from '../assets/images/pic1.png';
import officeVisit from '../assets/images/image1.png';
import dilnawaz from '../assets/team/dilnawaz.jpg';
import shabir from '../assets/team/shabirmehmood.jpg';
import saeed from '../assets/team/saeed.png';
import saad from '../assets/team/saad.jpeg';
import akhter from '../assets/team/akhter.png';

export const DEVELOPER = {
  name: 'Sharyar Khan',
  display: '0326-5652667',
  tel: '+923265652667',
  whatsapp: '923265652667',
};

export const SITE = {
  name: 'Shinka Welfare Society',
  tagline: 'Empowering Communities, Enriching Lives',
  url: 'https://www.shinkawelfaresociety.com',
  founded: 2019,
  phones: [
    { label: 'Emergency / General', display: '0300-9786788', tel: '+923009786788' },
    { label: 'Support', display: '0331-2006300', tel: '+923312006300', whatsapp: '923312006300' },
  ],
  email: 'zaman14268@gmail.com',
  facebook: 'https://web.facebook.com/profile.php?id=100070742473712',
  youtube: 'https://www.youtube.com/@Shinka455',
  location: 'Village Shinka, Pakistan',
};

// Fill this in with the society's real bank / mobile-wallet details and the
// Donate page will list them automatically. Left empty on purpose.
// Example: { method: 'Bank transfer', title: 'Shinka Welfare Society', number: 'PK00 XXXX 0000 0000 0000 0000', note: 'Bank name, branch' }
export const DONATION_ACCOUNTS = [];

export const galleryImages = {
  sweepAlley, sweepShutters, streetLight, cameraSign, groupEvent, officeAward,
  awardOne, awardTwo, officeVisit,
};

export const heroSlides = [
  { image: streetLight, caption: 'Streetlights & signage for a safer Shinka' },
  { image: sweepAlley, caption: 'Daily sanitation drives in every lane' },
  { image: groupEvent, caption: 'A community that gives together' },
  { image: officeAward, caption: 'Volunteers serving without salary' },
];

export const homeGallery = [
  { image: sweepAlley, alt: 'Sanitation workers sweeping a village lane', span: 'md:col-span-2' },
  { image: awardOne, alt: 'Members receiving a commemorative shield' },
  { image: streetLight, alt: 'Volunteers installing a street sign and light' },
  { image: groupEvent, alt: 'Community gathering of Shinka Welfare Society', span: 'md:col-span-2' },
  { image: cameraSign, alt: 'Security camera installed by the society' },
  { image: sweepShutters, alt: 'Workers cleaning the bazaar street' },
];

export const NAV = [
  { name: 'Home', to: '/' },
  {
    name: 'About',
    submenu: [
      { name: 'About Us', to: '/about' },
      { name: 'Our Mission', to: '/mission' },
      { name: 'Our History', to: '/history' },
      { name: 'Our Team', to: '/team' },
    ],
  },
  { name: 'Services', to: '/service' },
  { name: 'Transparency', to: '/financial' },
  { name: 'Contact', to: '/contact' },
];

/*
  Services. `en` / `ur` hold the page text; a service with no `ur` simply hides
  the language switch. Stat labels may carry a `labelUr`.
*/
export const SERVICES = [
  {
    slug: 'ambulance',
    icon: FaAmbulance,
    image: ambulanceImg,
    accent: 'from-rose-500 to-red-600',
    short: 'Free 24/7 ambulances for emergencies and medical transport.',
    stats: [{ value: '24/7', label: 'Always available' }, { value: 'Free', label: 'For those in need' }],
    en: {
      title: 'Ambulance Service',
      sections: [{
        paragraphs: [
          'Our ambulance service operates 24/7 and is free for those in need, especially for the underprivileged. We are committed to providing timely assistance during emergencies and ensuring the well-being of our community.',
          'It is where Shinka Welfare Society began: one ambulance, bought with the donations of villagers at home and abroad. Today we run multiple vehicles so that no one in Shinka waits for help again.',
          'Transparency is at the core of our operations. Every donation is used efficiently, and our accounts are published every month.',
        ],
      }],
    },
  },
  {
    slug: 'water',
    icon: FaFaucet,
    image: waterImg,
    accent: 'from-sky-500 to-cyan-600',
    short: 'Free filtered drinking water and water bores for homes without supply.',
    stats: [
      { value: '108', label: 'Households given water bores', labelUr: 'بورنگ والے گھرانے' },
      { value: '45,000', label: 'PKR per water bore', labelUr: 'روپے فی بورنگ' },
    ],
    en: {
      title: 'Free Filtered Water & Boring Fund',
      sections: [
        {
          heading: 'Free Filtered Water',
          paragraphs: [
            'We provide free access to clean and safe drinking water for all residents of Shinka. Through water filtration systems installed in several locations, the community has consistent access to potable water. Our systems are built to meet growing demand and keep a sustainable supply of clean water.',
            'Our goal is to improve public health by eliminating waterborne diseases. We keep improving our operations while ensuring transparency and accountability in every phase.',
          ],
        },
        {
          heading: 'Boring Fund',
          paragraphs: [
            'Shinka Welfare Society has arranged water bores for 108 deserving households.',
            'Each bore costs 45,000 PKR.',
          ],
        },
      ],
    },
    ur: {
      title: 'مفت فلٹر پانی اور بورنگ فنڈ',
      sections: [
        {
          heading: 'مفت فلٹر پانی',
          paragraphs: [
            'ہم نے گانوں کے تمام رہائشیوں کو صاف اور محفوظ پینے کے پانی تک مفت رسائی فراہم کی ہے۔ مختلف مقامات پر واٹر فلٹریشن سسٹم کی تنصیب کے ذریعے ہم یہ یقینی بناتے ہیں کہ کمیونٹی کو مستقل طور پر پینے کے پانی تک رسائی حاصل ہو۔ ہمارے سسٹمز کو بڑھتی ہوئی مانگ کو پورا کرنے اور صاف پانی کی پائیدار فراہمی کو برقرار رکھنے کے لئے ڈیزائن کیا گیا ہے۔',
            'ہمارا مقصد فلٹر شدہ پانی کی فراہمی کے ذریعے پانی سے پیدا ہونے والی بیماریوں کو ختم کرکے عوامی صحت کو بہتر بنانا ہے۔ ہم اپنے کام کو بہتر بنانے کے لئے مسلسل کام کر رہے ہیں اور ہر مرحلے میں شفافیت اور جوابدہی کو یقینی بناتے ہیں۔',
          ],
        },
        {
          heading: 'بورنگ فنڈ',
          paragraphs: [
            'شینکہ ویلفیئر سوسائٹی نے گانوں میں 108 مستحق گھرانوں کے لئے پانی کے بورنگ کروائے ہیں۔',
            'ہر بورنگ پر 45 ہزار روپے خرچ آتا ہے۔',
          ],
        },
      ],
    },
  },
  {
    slug: 'cleanliness',
    icon: FaBroom,
    image: cleanlinessImg,
    gallery: [sweepAlley, sweepShutters],
    accent: 'from-emerald-500 to-green-600',
    short: 'Trash bins, daily sweeping and waste collection to keep Shinka clean.',
    stats: [{ value: '200', label: 'Trash bins placed' }, { value: '4', label: 'Sanitation workers' }, { value: '1', label: 'Trolley of waste collected daily' }],
    en: {
      title: 'Cleanliness Project',
      sections: [{
        paragraphs: [
          'In the village, 200 trash bins have been placed for proper garbage disposal. A team of 4 sanitation workers is responsible for keeping the area clean.',
          'Every day, the streets and alleys are swept thoroughly and waste is removed from the drains to ensure proper hygiene. The collected garbage is transported and disposed of in designated areas. On average, one trolley of waste is collected daily.',
          'The workers also regularly sanitize the trash bins and clean public areas to maintain a healthy and safe environment for residents. Public awareness campaigns encourage responsible waste disposal.',
        ],
      }],
    },
  },
  {
    slug: 'food',
    icon: FaUtensils,
    image: foodImg,
    accent: 'from-amber-500 to-orange-600',
    short: 'Ramadan food packages so every family has enough for the whole month.',
    stats: [{ value: 'Ramadan', label: 'Annual package drive' }],
    en: {
      title: 'Ramadan Food Packages',
      sections: [{
        paragraphs: [
          'Our food distribution program is conducted during the holy month of Ramadan. We provide nutritious food packages to families in need, so they have enough supplies for the entire month.',
          'This initiative helps alleviate hunger and brings joy to many households during this special time of the year. Transparency and efficiency are paramount, so that every donation is used effectively.',
        ],
      }],
    },
  },
  {
    slug: 'educational',
    icon: FaGraduationCap,
    image: studyImg,
    accent: 'from-indigo-500 to-violet-600',
    short: 'Full education costs for 635 students, a college bus and university support.',
    stats: [
      { value: '635', label: 'Students supported', labelUr: 'طلبہ و طالبات' },
      { value: '380,000', label: 'PKR spent per year', labelUr: 'سالانہ خرچ (روپے)' },
      { value: '35', label: 'Girls ride the college bus', labelUr: 'کالج بس کی طالبات' },
    ],
    en: {
      title: 'Educational Funds',
      sections: [{
        paragraphs: [
          'The total educational expenses of 635 students from Shinka are covered by Shinka Welfare Society. The annual cost is 380,000 PKR.',
          'Initially, only 5 girls from Shinka used to go to college. Now, with the society\'s college bus, 35 girls travel from Shinka to Hazro College to continue their education, most of them from underprivileged families.',
          'Three deserving girls from the village are pursuing higher education at Allama Iqbal Open University, fully supported by the society.',
        ],
      }],
    },
    ur: {
      title: 'تعلیم فنڈ',
      sections: [{
        paragraphs: [
          'گانوں شینکہ کے 635 طلبہ و طالبات کا ٹوٹل تعلیم خرچ شینکہ ویلفیئر سوسائٹی برداشت کر رہی ہے۔ ایک سال کا خرچ 3 لاکھ اسی ہزار روپے آتا ہے۔',
          'پہلے گانوں شینکہ سے 5 بچیاں کالج جایا کرتی تھیں۔ اب شینکہ ویلفیئر سوسائٹی کی کالج بس کے ذریعے 35 طالبات شینکہ سے حضرو کالج تک سفر کرکے اپنی تعلیم جاری رکھے ہوئے ہیں۔ ان میں سے زیادہ تر طالبات کا تعلق غریب گھرانوں سے ہے۔',
          'گائوں کی 3 مستحق طالبات علامہ اقبال اوپن یونیورسٹی سے اعلی تعلیم حاصل کر رہی ہیں، جن کو ویلفیئر مکمل سپورٹ کر رہی ہے۔',
        ],
      }],
    },
  },
  {
    slug: 'burial',
    icon: FaPrayingHands,
    image: burialImg,
    accent: 'from-slate-500 to-slate-700',
    short: 'Support with funeral and burial costs for families who cannot bear them.',
    stats: [{ value: 'Kafan', label: 'Shroud & funeral costs covered' }],
    en: {
      title: 'Burial Funds',
      sections: [{
        paragraphs: [
          'Our burial fund assists families with funeral and burial expenses. We understand the emotional and financial burden of losing a loved one, and we aim to support families through these difficult times.',
          'Transparency is key. All donations are managed responsibly and used to provide dignified burials for those in need.',
        ],
      }],
    },
  },
  {
    slug: 'security',
    icon: FaShieldAlt,
    image: cameraSign,
    gallery: [streetLight],
    accent: 'from-blue-600 to-indigo-700',
    short: '40 CCTV cameras, night guard patrols and streetlights across the village.',
    stats: [
      { value: '40', label: 'Security cameras', labelUr: 'سیکیورٹی کیمرے' },
      { value: '22.4 lakh', label: 'PKR total cost (2,240,000)', labelUr: 'کل لاگت (روپے)' },
    ],
    en: {
      title: 'Security System',
      sections: [{
        paragraphs: [
          'A total of 40 security cameras have been installed throughout the village, costing 2,240,000 PKR.',
          'A security guard also patrols the village at night.',
          'Streetlights have also been installed in the village streets.',
        ],
      }],
    },
    ur: {
      title: 'سیکیورٹی سسٹم',
      sections: [{
        paragraphs: [
          'پورے گائوں میں 40 عدد سیکیورٹی کیمرے نصب کیے گئے ہیں۔ جن پر ٹوٹل 22 لاکھ 40 ہزار روپے لاگت آئی ہے۔',
          'رات کو گائوں میں سیکیورٹی گارڈ پیرہ بھی دیتا ہے۔',
          'گائوں کی گلیوں میں اسٹریٹ لائٹس بھی نصب کی گئی ہیں۔',
        ],
      }],
    },
  },
  {
    slug: 'eiduladha',
    icon: FaDrumstickBite,
    image: null,
    accent: 'from-teal-500 to-emerald-700',
    short: 'Collective sacrifice with meat shared among every deserving household.',
    stats: [{ value: '5 kg', label: 'Meat per household', labelUr: 'گوشت فی گھرانہ' }],
    en: {
      title: 'Eid-ul-Adha',
      sections: [{
        paragraphs: [
          'Every year, a collective sacrifice is organized on the occasion of Eid-ul-Adha.',
          'The meat is distributed to all deserving households in the village, with 5 kilograms per household.',
        ],
      }],
    },
    ur: {
      title: 'عید الاضحیٰ',
      sections: [{
        paragraphs: [
          'ہر سال عید الاضحی کے موقع پر اجتماعی قربانی بھی کی جاتی ہے۔',
          'جس میں گائوں کے تمام مستحق گھروں میں 5 کلو گوشت فی گھرانہ کے حساب سے تقسیم کیا جاتا ہے۔',
        ],
      }],
    },
  },
  {
    slug: 'marriage',
    icon: FaRing,
    image: null,
    accent: 'from-pink-500 to-rose-600',
    short: 'Weddings arranged for deserving girls with essentials and financial support.',
    stats: [
      { value: '100+', label: 'Weddings arranged', labelUr: 'شادیاں کروائیں' },
      { value: '150,000', label: 'PKR spent per wedding', labelUr: 'روپے فی شادی' },
    ],
    en: {
      title: 'Marriage Fund',
      sections: [{
        paragraphs: [
          'A total of 150,000 PKR is spent on the marriage of one girl.',
          'Shinka Welfare Society has arranged the marriages of over 100 girls to date.',
        ],
      }],
    },
    ur: {
      title: 'شادی فنڈ',
      sections: [{
        paragraphs: [
          'ایک بچی کی شادی پر کل 150000 روپے خرچ آتے ہیں۔',
          'شینکہ ویلفیئر سوسائٹی نے اب تک 100 سے زائد بچیوں کی شادیاں کروائیں ہیں۔',
        ],
      }],
    },
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);

export const IMPACT = [
  { value: 635, suffix: '', label: 'Students funded' },
  { value: 100, suffix: '+', label: 'Weddings arranged' },
  { value: 108, suffix: '', label: 'Water bores installed' },
  { value: 40, suffix: '', label: 'Security cameras' },
  { value: 200, suffix: '', label: 'Trash bins placed' },
];

export const TEAM = [
  { name: 'Dil Nawaz', title: 'President (Sadar)', img: dilnawaz },
  { name: 'Shabeer Mehmood', title: 'Vice President (Naib Sadar)', img: shabir },
  { name: 'Saeed Ahmed Khan', title: 'Founder & Financial Secretary', img: saeed },
  { name: 'Muhammad Saad', title: 'General Secretary', img: saad },
  { name: 'Muhammad Akhter', title: 'Secretary of Public Affairs', img: akhter },
];

const fb = (id, www = false) =>
  `https://${www ? 'www' : 'web'}.facebook.com/photo.php?fbid=${id}&set=pb.100070742473712.-2207520000&type=3`;

export const LEDGERS = [
  { year: 2024, month: 'January', url: fb('429135179454561') },
  { year: 2024, month: 'February', url: fb('442618134772932') },
  { year: 2024, month: 'March', url: fb('461410762893669') },
  { year: 2024, month: 'April', url: fb('478066284561450') },
  { year: 2024, month: 'May', url: fb('498449415856470') },
  { year: 2024, month: 'June', url: fb('513357521032326', true) },
  { year: 2024, month: 'July', url: fb('532981859069892', true) },
  { year: 2024, month: 'August', url: fb('553088800392531', true) },
];
