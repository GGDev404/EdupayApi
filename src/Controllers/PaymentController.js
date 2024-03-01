// Importa la librería de Stripe
import stripe from 'stripe';
import { Prisma } from '@prisma/client';

// Importa el modelo de Extra_Activity

// Controlador para procesar el pago de una actividad extra
const processPayment = async (req, res) => {
  try {
    // Obtén los datos de la actividad extra a pagar
    const { activityId, amount } = req.body;

    // Busca la actividad extra en la base de datos
    const activity = await Prisma.findById(activityId);

    // Verifica si la actividad existe
    if (!activity) {
      return res.status(404).json({ error: 'Actividad no encontrada' });
    }

    // Crea una sesión de pago en Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: activity.Name,
              description: activity.Description,
              images: [activity.Image],
            },
            unit_amount: amount * 100, // El precio se debe proporcionar en centavos
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://tu_sitio.com/pago-exitoso',
      cancel_url: 'https://tu_sitio.com/pago-cancelado',
    });

    // Retorna la URL de redirección a la página de pago de Stripe
    res.json({ redirectUrl: session.url });
  } catch (error) {
    console.error('Error al procesar el pago:', error);
    res.status(500).json({ error: 'Error al procesar el pago' });
  }
};

// Exporta el controlador
module.exports = {
  processPayment,
};
