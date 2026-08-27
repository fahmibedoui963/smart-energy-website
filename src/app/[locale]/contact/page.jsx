"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const content = {
  fr: {
    title: "Contactez-nous",
    desc: "Étude gratuite, sans engagement. Réponse sous 24h. Déplacement sur site dans toute la Tunisie.",
    call: "Nous appeler",
    phone: ["+216 50 722 277", "+216 55 105 481"],
    hours: "",
    email: "Nous écrire",
    emailAddr: "smart.energy.pv2@gmail.com",
    response: "Réponse sous 24h ouvrées",
    address: "Notre siège",
    addressVal: "Tunisie",
    coverage: "Zone d'intervention : Tout le pays",
    formTitle: "Demande d'étude gratuite",
    name: "Nom complet",
    formEmail: "Email",
    formPhone: "Téléphone",
    city: "Ville / Région",
    cityPlaceholder: "Sélectionnez",
    projectType: "Type de projet",
    projectPlaceholder: "Sélectionnez",
    message: "Détails du projet, questions, contraintes...",
    messagePlaceholder: "Ex: Toiture plate 80m², orientation Sud, ombre cheminée matin, budget ~15k TND, veux batterie pour secours...",
    submit: "Envoyer ma demande",
    success: "Message envoyé !",
    successDesc: "Merci. Nous vous recontactons sous 24h pour votre étude gratuite.",
    newRequest: "Nouvelle demande",
    mapTitle: "Notre localisation",
  },
  en: {
    title: "Contact us",
    desc: "Free study, no commitment. Reply within 24 hours. Site visit anywhere in Tunisia.",
    call: "Call us",
    phone: ["+216 50 722 277", "+216 55 105 481"],
    hours: "",
    email: "Email us",
    emailAddr: "smart.energy.pv2@gmail.com",
    response: "Reply within 24 working hours",
    address: "Our office",
    addressVal: "Tunisia",
    coverage: "Service area: The whole country",
    formTitle: "Free study request",
    name: "Full name",
    formEmail: "Email",
    formPhone: "Phone",
    city: "City / Region",
    cityPlaceholder: "Select",
    projectType: "Project type",
    projectPlaceholder: "Select",
    message: "Project details, questions, constraints...",
    messagePlaceholder: "Ex: Flat roof 80m², South facing, chimney shade in the morning, budget ~15k TND, want backup battery...",
    submit: "Send my request",
    success: "Message sent!",
    successDesc: "Thank you. We'll get back to you within 24 hours for your free study.",
    newRequest: "New request",
    mapTitle: "Our location",
  }
};

const cities = [
  { fr: "Tunis / Grand Tunis", en: "Tunis / Greater Tunis" },
  { fr: "Ariana", en: "Ariana" },
  { fr: "Ben Arous", en: "Ben Arous" },
  { fr: "Manouba", en: "Manouba" },
  { fr: "Nabeul", en: "Nabeul" },
  { fr: "Zaghouan", en: "Zaghouan" },
  { fr: "Bizerte", en: "Bizerte" },
  { fr: "Beja", en: "Beja" },
  { fr: "Jendouba", en: "Jendouba" },
  { fr: "Kef", en: "Kef" },
  { fr: "Siliana", en: "Siliana" },
  { fr: "Sousse", en: "Sousse" },
  { fr: "Monastir", en: "Monastir" },
  { fr: "Mahdia", en: "Mahdia" },
  { fr: "Kairouan", en: "Kairouan" },
  { fr: "Kasserine", en: "Kasserine" },
  { fr: "Sidi Bouzid", en: "Sidi Bouzid" },
  { fr: "Sfax", en: "Sfax" },
  { fr: "Gabes", en: "Gabes" },
  { fr: "Mednine", en: "Mednine" },
  { fr: "Tataouine", en: "Tataouine" },
  { fr: "Gafsa", en: "Gafsa" },
  { fr: "Tozeur", en: "Tozeur" },
  { fr: "Kebili", en: "Kebili" },
  { fr: "Autre région", en: "Other region" },
];

const projectTypes = [
  { value: "raccorde", fr: "Raccordé au réseau (On-Grid)", en: "Grid-connected (On-Grid)" },
  { value: "isole", fr: "Site isolé (Off-Grid)", en: "Off-grid (Off-Grid)" },
  { value: "pompage", fr: "Pompage solaire agricole", en: "Agricultural solar pumping" },
  { value: "eclairage", fr: "Éclairage public solaire", en: "Solar street lighting" },
  { value: "autre", fr: "Autre / Étude de faisabilité", en: "Other / Feasibility study" },
];

export default function Contact() {
  const params = useParams();
  const locale = params.locale || "fr";
  const t = content[locale] || content.fr;

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    ville: "",
    typeProjet: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (submitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [submitted]);

  const validate = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = locale === "fr" ? "Nom requis" : "Name required";
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = locale === "fr" ? "Email valide requis" : "Valid email required";
    if (!formData.telephone.trim()) newErrors.telephone = locale === "fr" ? "Téléphone requis" : "Phone required";
    if (!formData.ville.trim()) newErrors.ville = locale === "fr" ? "Ville requise" : "City required";
    if (!formData.typeProjet) newErrors.typeProjet = locale === "fr" ? "Type de projet requis" : "Project type required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setServerError(data.error || (locale === "fr" ? "Une erreur est survenue." : "An error occurred."));
        return;
      }

      setSubmitted(true);
      setFormData({ nom: "", email: "", telephone: "", ville: "", typeProjet: "", message: "" });
    } catch (err) {
      console.error(err);
      setServerError(locale === "fr" ? "Impossible de contacter le serveur. Vérifiez votre connexion." : "Cannot reach the server. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  return (
    <main className="flex flex-col">
      {submitted ? (
        <section className="flex flex-col min-h-[60vh] items-center justify-center px-4 py-24">
          <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md w-full text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-10 w-10 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.success}</h2>
            <p className="text-gray-600 mb-6">{t.successDesc}</p>
            <button onClick={() => setSubmitted(false)} className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">{t.newRequest}</button>
          </div>
        </section>
      ) : (
        <>
          <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="animate-rise text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
              <p className="animate-rise text-xl text-gray-600 max-w-2xl mx-auto" style={{ animationDelay: "0.15s" }}>{t.desc}</p>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1 space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.call}</h3>
                    <div className="flex flex-col gap-1">
                      {t.phone.map((num, i) => (
                        <p key={i} className="text-lg font-medium text-gray-900">{num}</p>
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{t.hours}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.email}</h3>
                    <a href={`mailto:${t.emailAddr}`} className="text-green-600 hover:text-green-700 transition-colors">{t.emailAddr}</a>
                    <p className="text-gray-500 text-sm mt-1">{t.response}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.address}</h3>
                    <address className="not-italic text-gray-600">{t.addressVal}<br />{t.coverage}</address>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.formTitle}</h2>
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">{t.name} <span className="text-red-500">*</span></label>
                          <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder:text-gray-400 ${errors.nom ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-green-500 focus:border-green-500`} placeholder="Votre nom" aria-invalid={!!errors.nom} />
                          {errors.nom && <p className="mt-1 text-sm text-red-500" role="alert">{errors.nom}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t.formEmail}</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder:text-gray-400 ${errors.email ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-green-500 focus:border-green-500`} placeholder="vous@email.com" aria-invalid={!!errors.email} />
                          {errors.email && <p className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>}
                        </div>
                        <div>
                          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">{t.formPhone} <span className="text-red-500">*</span></label>
                          <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder:text-gray-400 ${errors.telephone ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-green-500 focus:border-green-500`} placeholder="+216 XX XXX XXX" aria-invalid={!!errors.telephone} />
                          {errors.telephone && <p className="mt-1 text-sm text-red-500" role="alert">{errors.telephone}</p>}
                        </div>
                        <div>
                          <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-2">{t.city} <span className="text-red-500">*</span></label>
                          <select id="ville" name="ville" value={formData.ville} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border text-gray-900 ${errors.ville ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-green-500 focus:border-green-500`} aria-invalid={!!errors.ville}>
                            <option value="">{t.cityPlaceholder}</option>
                            {cities.map((city, i) => (
                              <option key={i} value={city.fr}>{locale === "fr" ? city.fr : city.en}</option>
                            ))}
                          </select>
                          {errors.ville && <p className="mt-1 text-sm text-red-500" role="alert">{errors.ville}</p>}
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="typeProjet" className="block text-sm font-medium text-gray-700 mb-2">{t.projectType} <span className="text-red-500">*</span></label>
                          <select id="typeProjet" name="typeProjet" value={formData.typeProjet} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border text-gray-900 ${errors.typeProjet ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-green-500 focus:border-green-500`} aria-invalid={!!errors.typeProjet}>
                            <option value="">{t.projectPlaceholder}</option>
                            {projectTypes.map((pt, i) => (
                              <option key={i} value={pt.value}>{locale === "fr" ? pt.fr : pt.en}</option>
                            ))}
                          </select>
                          {errors.typeProjet && <p className="mt-1 text-sm text-red-500" role="alert">{errors.typeProjet}</p>}
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t.message}</label>
                          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder={t.messagePlaceholder} />
                        </div>
                      </div>
                      {serverError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm" role="alert">
                          {serverError}
                        </div>
                      )}
                      <button type="submit" disabled={loading} className="w-full md:w-auto bg-green-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        {loading ? (locale === "fr" ? "Envoi en cours..." : "Sending...") : t.submit}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t.mapTitle}</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://maps.google.com/maps?q=36.569359,10.856885&z=17&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Smart Energy location"
                />
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}