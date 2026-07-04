import React, { useState } from "react"
import "./styles.css"

const PLANS = [
  { name: "Starter", price: 29, desc: "Para quem esta comecando", features: ["1 usuario", "50 transacoes/mes", "Dashboard basico", "Suporte email"], popular: false },
  { name: "Profissional", price: 79, desc: "Para negocios em crescimento", features: ["5 usuarios", "500 transacoes/mes", "Dashboard completo", "Suporte prioritario", "API", "Relatorios"], popular: true },
  { name: "Enterprise", price: 199, desc: "Para empresas com alto volume", features: ["Usuarios ilimitados", "Transacoes ilimitadas", "Dashboard customizado", "Suporte 24/7", "API completa", "White label", "SLA 99.9%"], popular: false },
]

export default function App() {
  const [selected, setSelected] = useState("Profissional")
  const [annual, setAnnual] = useState(false)
  const [checkout, setCheckout] = useState(false)
  const [done, setDone] = useState(false)

  const plan = PLANS.find(p => p.name === selected)!

  if (done) return React.createElement("div", { className: "app" },
    React.createElement("header", { className: "header" },
      React.createElement("div", { className: "container header-inner" },
        React.createElement("h1", null, "✅ Assinatura Ativa!")
      )
    ),
    React.createElement("main", { className: "container", style: { textAlign: "center", padding: "60px 0" } },
      React.createElement("div", { style: { fontSize: "4rem", marginBottom: "16px" } }, "🎉"),
      React.createElement("h2", null, `Bem-vindo ao plano ${selected}!`),
      React.createElement("p", { style: { color: "#a1a1aa", margin: "12px 0" } }, "Sua assinatura foi ativada com sucesso."),
      React.createElement("button", { className: "btn", onClick: () => { setDone(false); setCheckout(false) } }, "Voltar")
    )
  )

  if (checkout) return React.createElement("div", { className: "app" },
    React.createElement("header", { className: "header" },
      React.createElement("div", { className: "container header-inner" },
        React.createElement("h1", null, "💳 Checkout"),
        React.createElement("button", { className: "btn-outline", onClick: () => setCheckout(false) }, "< Voltar")
      )
    ),
    React.createElement("main", { className: "container", style: { maxWidth: 500, margin: "32px auto" } },
      React.createElement("div", { className: "checkout-plan" },
        React.createElement("h3", null, plan.name),
        React.createElement("span", { className: "checkout-price" }, `R$ ${annual ? plan.price * 10 : plan.price}${annual ? "/ano" : "/mes"}`)
      ),
      React.createElement("div", { className: "form-group" },
        React.createElement("label", null, "Nome no cartao"),
        React.createElement("input", { placeholder: "Nome como esta no cartao" })
      ),
      React.createElement("div", { className: "form-group" },
        React.createElement("label", null, "Numero do cartao"),
        React.createElement("input", { placeholder: "1234 5678 9012 3456" })
      ),
      React.createElement("div", { className: "form-row" },
        React.createElement("div", { className: "form-group" },
          React.createElement("label", null, "Validade"),
          React.createElement("input", { placeholder: "MM/AA" })
        ),
        React.createElement("div", { className: "form-group" },
          React.createElement("label", null, "CVV"),
          React.createElement("input", { placeholder: "123" })
        )
      ),
      React.createElement("button", { className: "btn", style: { width: "100%", marginTop: 16, padding: 14 }, onClick: () => setDone(true) },
        React.createElement("i", { className: "fa-solid fa-lock" }), " Pagar R$", (annual ? plan.price * 10 : plan.price).toFixed(2)
      )
    )
  )

  return React.createElement("div", { className: "app" },
    React.createElement("header", { className: "header" },
      React.createElement("div", { className: "container header-inner" }, React.createElement("h1", null, "💳 PayLink SaaS"))
    ),
    React.createElement("main", { className: "container" },
      React.createElement("div", { className: "billing-toggle" },
        React.createElement("span", { className: !annual ? "active" : "" }, "Mensal"),
        React.createElement("label", { className: "switch" },
          React.createElement("input", { type: "checkbox", checked: annual, onChange: () => setAnnual(!annual) }),
          React.createElement("span", { className: "slider" })
        ),
        React.createElement("span", { className: annual ? "active" : "" }, "Anual ", React.createElement("span", { className: "savings" }, "2 meses gratis"))
      ),
      React.createElement("div", { className: "plans-grid" },
        PLANS.map(p => React.createElement("div", { key: p.name, className: `plan-card ${selected === p.name ? "selected" : ""} ${p.popular ? "popular" : ""}`,
          onClick: () => setSelected(p.name) },
          p.popular && React.createElement("span", { className: "popular-badge" }, "Mais popular"),
          React.createElement("h3", null, p.name),
          React.createElement("div", { className: "plan-price" },
            React.createElement("span", { className: "price" }, `R$ ${annual ? p.price * 10 : p.price}`),
            React.createElement("span", { className: "period" }, annual ? "/ano" : "/mes")
          ),
          React.createElement("p", { className: "plan-desc" }, p.desc),
          React.createElement("ul", { className: "plan-features" },
            p.features.map(f => React.createElement("li", { key: f }, React.createElement("i", { className: "fa-solid fa-check" }), f))
          ),
          React.createElement("button", { className: `btn ${selected === p.name ? "btn-primary" : "btn-outline"}`, onClick: () => { setSelected(p.name); setCheckout(true) } },
            selected === p.name ? "Assinar Agora" : "Escolher Plano"
          )
        ))
      )
    )
  )
}
