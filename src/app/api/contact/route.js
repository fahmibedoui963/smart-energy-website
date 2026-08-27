import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request) {
  try {
    const body = await request.json();
    const { nom, email, telephone, ville, typeProjet, message } = body;

    const errors = {};
    if (!nom?.trim()) errors.nom = 'Nom requis';
    if (!email?.trim()) {
      errors.email = 'Email requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Email invalide';
    }
    if (!telephone?.trim()) errors.telephone = 'Téléphone requis';
    if (!ville?.trim()) errors.ville = 'Ville requise';
    if (!typeProjet?.trim()) errors.typeProjet = 'Type de projet requis';

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const contact = await prisma.contact.create({
      data: {
        nom: nom.trim(),
        email: email.trim(),
        telephone: telephone.trim(),
        ville: ville.trim(),
        typeProjet: typeProjet.trim(),
        message: message?.trim() || null,
      },
    });

    return NextResponse.json({ ok: true, id: contact.id }, { status: 200 });
  } catch (error) {
    console.error('[API /api/contact]', error);
    return NextResponse.json(
      { ok: false, error: 'Erreur serveur. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
