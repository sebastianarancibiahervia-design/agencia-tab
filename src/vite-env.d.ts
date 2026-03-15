/// <reference types="vite/client" />

interface WpData {
  logo: string;
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  contact_email: string;
  rrss_instagram: string;
  rrss_linkedin: string;
  footer_text: string;
  ajax_url?: string;
  rest_url?: string;
}

interface Window {
  wpData?: WpData;
}
