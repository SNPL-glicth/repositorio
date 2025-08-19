import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import Stripe from 'stripe'

const app = express()
const port = process.env.PORT || 4242
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder')

app.use(cors())
app.use(express.json())

app.get('/', (_,res)=> res.json({ ok:true, service:'payments-backend', provider:'stripe', mode:'test' }))

app.post('/create-checkout-session', async (req,res)=>{
  try{
    const { amount_cents, product_name, quantity=1, success_url, cancel_url } = req.body || {}
    if(!amount_cents || !product_name) return res.status(400).json({ error:'Faltan amount_cents y product_name' })
    const domain = process.env.DOMAIN || 'http://localhost:5173'
    const session = await stripe.checkout.sessions.create({
      mode:'payment',
      line_items:[{ quantity, price_data:{ currency:'cop', product_data:{ name:product_name }, unit_amount: Math.round(amount_cents) } }],
      success_url: success_url || `${domain}/pago/resultado?status=success&session_id={{CHECKOUT_SESSION_ID}}`,
      cancel_url:  cancel_url  || `${domain}/pago/resultado?status=cancel`
    })
    res.json({ url: session.url })
  }catch(err){ console.error(err); res.status(400).json({ error: err.message }) }
})

app.listen(port, ()=> console.log(`[payments] http://localhost:${port}`))


app.post('/checkout/cart', async (req,res)=>{
  try{
    const items = (req.body && Array.isArray(req.body.items)) ? req.body.items : []
    if(!items.length) return res.status(400).json({ error:'Carrito vacío' })
    const domain = process.env.DOMAIN || 'http://localhost:5173'
    const line_items = items.map(it => ({
      quantity: it.quantity || 1,
      price_data: {
        currency: 'cop',
        product_data: { name: it.name },
        unit_amount: Math.round(it.amount_cents)
      }
    }))
    const session = await stripe.checkout.sessions.create({
      mode:'payment',
      line_items,
      success_url: `${domain}/pago/resultado?status=success&session_id={{CHECKOUT_SESSION_ID}}`,
      cancel_url:  `${domain}/pago/resultado?status=cancel`
    })
    res.json({ url: session.url })
  }catch(err){ console.error(err); res.status(400).json({ error: err.message }) }
})


app.get('/checkout/session/:id', async (req,res)=>{
  try{
    const { id } = req.params
    const s = await stripe.checkout.sessions.retrieve(id, { expand: ['line_items'] })
    res.json({ id: s.id, amount_total: s.amount_total, currency: s.currency, payment_status: s.payment_status, customer_email: s.customer_details?.email || null, line_items: s.line_items?.data?.map(li => ({ description: li.description, qty: li.quantity, amount_unit: li.price?.unit_amount })) || [] })
  }catch(err){ console.error(err); res.status(400).json({ error: err.message }) }
})
