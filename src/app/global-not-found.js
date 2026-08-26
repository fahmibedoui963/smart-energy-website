import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "404 - Smart Energy",
  description: "Page not found",
};

export default function GlobalNotFound() {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <main className="flex flex-col min-h-[80vh] items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page non trouvée</h2>
          <p className="text-gray-600 mb-8 max-w-md">Désolé, la page que vous cherchez n'existe pas ou a été déplacée.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/fr/" className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">Retour à l'accueil</a>
            <a href="/fr/contact" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">Nous contacter</a>
          </div>
        </main>
      </body>
    </html>
  );
}
