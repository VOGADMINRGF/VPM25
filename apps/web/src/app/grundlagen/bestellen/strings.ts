import { DEFAULT_LOCALE, type SupportedLocale } from "@/config/locales";

type OrderStrings = {
  label: string;
  title: string;
  body: string;
  priceLabel: string;
  cta: string;
  note: string;
  fields: {
    band: string;
    price: string;
    address: string;
  };
  back: string;
};

const STRINGS: Record<SupportedLocale, OrderStrings> = {
  de: {
    label: "Grundlagen",
    title: "Print-Edition bestellen",
    body: "Gedruckte Ausgabe auf Anfrage. Bestellung per E-Mail.",
    priceLabel: "Preis",
    cta: "Bestellung per E-Mail",
    note: "Bitte gib deine Lieferadresse an.",
    fields: {
      band: "Band",
      price: "Preis",
      address: "Lieferadresse",
    },
    back: "Zurück zu den Grundlagen",
  },
  en: {
    label: "Foundations",
    title: "Order print edition",
    body: "Printed edition on request. Order via email.",
    priceLabel: "Price",
    cta: "Order via email",
    note: "Please include your delivery address.",
    fields: {
      band: "Volume",
      price: "Price",
      address: "Delivery address",
    },
    back: "Back to foundations",
  },
  fr: {
    label: "Fondations",
    title: "Commander l’édition imprimée",
    body: "Édition imprimée sur demande. Commande par e-mail.",
    priceLabel: "Prix",
    cta: "Commander par e-mail",
    note: "Merci d’indiquer votre adresse de livraison.",
    fields: {
      band: "Volume",
      price: "Prix",
      address: "Adresse de livraison",
    },
    back: "Retour aux fondations",
  },
  pl: {
    label: "Podstawy",
    title: "Zamów wydanie drukowane",
    body: "Wydanie drukowane na zamówienie. Zamówienie e-mailem.",
    priceLabel: "Cena",
    cta: "Zamówienie e-mailem",
    note: "Podaj adres dostawy.",
    fields: {
      band: "Tom",
      price: "Cena",
      address: "Adres dostawy",
    },
    back: "Powrót do podstaw",
  },
  es: {
    label: "Fundamentos",
    title: "Pedir edición impresa",
    body: "Edición impresa bajo pedido. Pedido por correo electrónico.",
    priceLabel: "Precio",
    cta: "Pedir por correo",
    note: "Incluye tu dirección de entrega.",
    fields: {
      band: "Volumen",
      price: "Precio",
      address: "Dirección de entrega",
    },
    back: "Volver a fundamentos",
  },
  it: {
    label: "Fondamenti",
    title: "Ordinare l’edizione stampata",
    body: "Edizione stampata su richiesta. Ordine via email.",
    priceLabel: "Prezzo",
    cta: "Ordina via email",
    note: "Indica l’indirizzo di consegna.",
    fields: {
      band: "Volume",
      price: "Prezzo",
      address: "Indirizzo di consegna",
    },
    back: "Torna ai fondamenti",
  },
  tr: {
    label: "Temeller",
    title: "Basılı sürüm siparişi",
    body: "Basılı sürüm talep üzerine. Sipariş e-posta ile.",
    priceLabel: "Fiyat",
    cta: "E-posta ile sipariş",
    note: "Lütfen teslimat adresinizi ekleyin.",
    fields: {
      band: "Cilt",
      price: "Fiyat",
      address: "Teslimat adresi",
    },
    back: "Temellere dön",
  },
  ar: {
    label: "الأسس",
    title: "طلب النسخة المطبوعة",
    body: "النسخة المطبوعة حسب الطلب. الطلب عبر البريد الإلكتروني.",
    priceLabel: "السعر",
    cta: "الطلب عبر البريد",
    note: "يرجى إضافة عنوان التسليم.",
    fields: {
      band: "مجلد",
      price: "السعر",
      address: "عنوان التسليم",
    },
    back: "العودة إلى الأسس",
  },
  ru: {
    label: "Основы",
    title: "Заказать печатное издание",
    body: "Печатное издание по запросу. Заказ по электронной почте.",
    priceLabel: "Цена",
    cta: "Заказать по электронной почте",
    note: "Пожалуйста, укажите адрес доставки.",
    fields: {
      band: "Том",
      price: "Цена",
      address: "Адрес доставки",
    },
    back: "Назад к основам",
  },
  zh: {
    label: "基础",
    title: "订购纸质版",
    body: "纸质版按需提供。通过电子邮件订购。",
    priceLabel: "价格",
    cta: "通过邮件订购",
    note: "请注明收货地址。",
    fields: {
      band: "卷",
      price: "价格",
      address: "收货地址",
    },
    back: "返回基础",
  },
};

export function getOrderStrings(locale: SupportedLocale | string): OrderStrings {
  const normalized = (locale || DEFAULT_LOCALE) as SupportedLocale;
  return STRINGS[normalized] ?? STRINGS[DEFAULT_LOCALE];
}
