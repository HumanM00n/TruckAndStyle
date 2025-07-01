import { NextResponse } from 'next/server';
import pool from '@/app/_lib/db';

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT truck_latitude, truck_longitude FROM tns_truck WHERE id_truck = 1');

    if (Array.isArray(rows) && rows.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { truck_latitude, truck_longitude } = rows[0] as any;
      return NextResponse.json({ latitude: truck_latitude, longitude: truck_longitude });
    }

    return NextResponse.json({ error: 'Hair truck non trouvé' }, { status: 404 });
  } catch (error) {
    console.error('Erreur API /api/truck:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
