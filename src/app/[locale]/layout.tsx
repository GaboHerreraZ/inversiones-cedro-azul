import "./globals.css";
import { Changa } from "next/font/google";
import { notFound } from "next/navigation";
import { createTranslator, NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { Metadata } from "next";
import icon from "./logo-cedro-azul.png";
const changa = Changa({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ["en", "es"].map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const messages = await getMessages(locale);

  const t = createTranslator({ locale, messages });

  return {
    metadataBase: new URL(`https://www.grupocedroazul.com`),
    title: {
      default: t("LocaleLayout.title"),
      template: `%s | ${t("LocaleLayout.title")}`,
    },
    description: "Página web de Constructora Grupo cedro azul",
    icons: {
      icon: {
        rel: "icon",
        url: icon.src,
      },
    },
    verification: {
      google:
        "google-site-verification=j4qbfRUaRloQ7WypWFJItiZVxeoc55Fr42tf_tz7PWw",
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(locale);

  return (
    <html lang="es" className="light">
      <body className={changa.className} style={{ fontSize: "14px" }}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
