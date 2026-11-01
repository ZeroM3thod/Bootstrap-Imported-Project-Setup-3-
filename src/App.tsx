import { useEffect, useState, type ReactNode } from "react"

type Page = "home" | "work" | "earn" | "team" | "profile"

function Icon({
  name,
  size = 24,
  strokeWidth = 2,
}: {
  name: string
  size?: number
  strokeWidth?: number
}) {
  const paths: Record<string, ReactNode> = {
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h5v-6h4v6h5V10" />
      </>
    ),
    work: (
      <>
        <path d="m4 8 8 4 8-4-8-4-8 4Z" />
        <path d="M4 8v9l8 4 8-4V8M12 12v9" />
      </>
    ),
    chart: (
      <>
        <path d="M5 20v-7M12 20V7M19 20V3" />
      </>
    ),
    handshake: (
      <>
        <path d="m4 11 4-4 4 2 3-2 5 5" />
        <path d="m2 9 4-4 3 2M22 9l-4-4-3 2M7 14l3 3 6-6M11 18l2 2 5-5" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20a6 6 0 0 1 12 0M14 15a5 5 0 0 1 7 4.5" />
      </>
    ),
    wallet: (
      <>
        <path d="M4 6h14a2 2 0 0 1 2 2v11H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h11" />
        <path d="M16 11h6v5h-6a2.5 2.5 0 0 1 0-5Z" />
      </>
    ),
    coins: (
      <>
        <ellipse cx="9" cy="6" rx="5" ry="2.5" />
        <path d="M4 6v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V6M4 11v5c0 1.4 2.2 2.5 5 2.5 1 0 2-.2 2.8-.5" />
        <path d="M14 11c3 0 5 1 5 2.5V18c0 1.4-2.2 2.5-5 2.5S9 19.4 9 18v-1" />
      </>
    ),
    gift: (
      <>
        <rect x="3" y="9" width="18" height="12" rx="2" />
        <path d="M12 9v12M3 13h18M12 9H8.5a2.5 2.5 0 1 1 2.3-3.5L12 9Zm0 0h3.5a2.5 2.5 0 1 0-2.3-3.5L12 9Z" />
      </>
    ),
    deposit: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V4h8v3M12 17V10M9 13l3-3 3 3" />
      </>
    ),
    withdraw: (
      <>
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <path d="M8 17v3h8v-3M12 7v7M9 11l3 3 3-3" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v6l4 2" />
      </>
    ),
    target: (
      <>
        <circle cx="11" cy="13" r="8" />
        <circle cx="11" cy="13" r="4" />
        <path d="m13 11 8-8M16 3h5v5" />
      </>
    ),
    cursor: (
      <>
        <path d="M7 3v10M7 8H5a2 2 0 0 0-2 2v3l4 7h8a4 4 0 0 0 4-4v-6a2 2 0 0 0-4 0V8a2 2 0 0 0-4 0V6a2 2 0 0 0-4 0" />
      </>
    ),
    share: (
      <>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {paths[name] ?? paths.work}
    </svg>
  )
}

function AppHeader({ onNotice }: { onNotice: () => void }) {
  return (
    <header className="app-header">
      <div className="avatar">
        <Icon name="user" size={41} strokeWidth={1.7} />
      </div>
      <div className="identity">
        <strong>
          <span className="crown">♛</span> বরজাজ
        </strong>
        <span>পরিচয় সংখ্যা: ৫৮৯৯৬৩৮০</span>
        <span>
          <i className="diamond">◆</i> বিশিষ্ট স্তর ০
        </span>
      </div>
      <button
        className="notice-button"
        aria-label="নোটিফিকেশন"
        onClick={onNotice}
      >
        <Icon name="bell" size={30} />
        <b />
      </button>
    </header>
  )
}

const navItems: { id: Page; icon: string; label: string }[] = [
  { id: "home", icon: "home", label: "মূল অফিস" },
  { id: "work", icon: "work", label: "কর্মক্ষেত্র" },
  { id: "earn", icon: "chart", label: "অর্জনের পথ" },
  { id: "team", icon: "handshake", label: "সাফল্যের সঙ্গী" },
  { id: "profile", icon: "user", label: "আমার পরিসর" },
]

function BottomNav({
  page,
  onChange,
}: {
  page: Page
  onChange: (page: Page) => void
}) {
  return (
    <nav className="bottom-nav" aria-label="প্রধান নেভিগেশন">
      {navItems.map((item) => (
        <button
          className={page === item.id ? "active" : ""}
          key={item.id}
          onClick={() => onChange(item.id)}
        >
          <Icon name={item.icon} size={27} />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

type DashboardTransaction = {
  id: number
  label: string
  amount: number
  type: "credit" | "debit"
  date: string
}

type FixedDeposit = {
  principal: number
  profitRate: number
  profit: number
  maturityAmount: number
  startedAt: string
  expiresAt: string
  maturesAt: number
}

function HomePage({
  action,
  balance,
  investment,
  transactions,
  onDeposit,
  onWithdraw,
  onNavigate,
  fixedDeposit,
  onFixedDeposit,
}: {
  action: (message: string) => void
  balance: number
  investment: ActiveInvestment | null
  transactions: DashboardTransaction[]
  onDeposit: (amount: number) => void
  onWithdraw: (amount: number) => void
  onNavigate: (page: Page) => void
  fixedDeposit: FixedDeposit | null
  onFixedDeposit: () => void
}) {
  const [moneyAction, setMoneyAction] = useState<"deposit" | "withdraw" | null>(
    null,
  )
  const [amount, setAmount] = useState(500)
  const [showFixedDeposit, setShowFixedDeposit] = useState(false)
  const dailyProfit = investment
    ? (investment.amount * investment.package.dailyRate) / 100
    : 0
  const totalDeposited = transactions
    .filter((item) => item.type === "credit")
    .reduce((total, item) => total + item.amount, 0)
  const totalWithdrawn = transactions
    .filter(
      (item) => item.type === "debit" && item.label.includes("উত্তোলন"),
    )
    .reduce((total, item) => total + item.amount, 0)

  const submitMoneyAction = () => {
    if (!moneyAction || amount <= 0) {
      action("সঠিক একটি অঙ্ক লিখুন")
      return
    }
    if (moneyAction === "withdraw" && amount > balance) {
      action("উত্তোলনের অঙ্কটি আপনার বর্তমান সঞ্চয়ের চেয়ে বেশি")
      return
    }

    if (moneyAction === "deposit") {
      onDeposit(amount)
    } else {
      onWithdraw(amount)
    }
    setMoneyAction(null)
    setAmount(500)
  }

  const confirmFixedDeposit = () => {
    if (balance <= 0) {
      action("স্থির সঞ্চয়ে রাখার মতো ব্যবহারযোগ্য অর্থ নেই")
      return
    }
    onFixedDeposit()
    setShowFixedDeposit(false)
  }

  return (
    <>
      <main className="home-page office-page page-content">
        <section className="office-hero">
          <div className="office-welcome">
            <span>আপনার মূল অফিস</span>
            <h1>স্বাগতম, বরজাজ</h1>
            <p>সঞ্চয়, প্রাপ্তি আর অগ্রযাত্রার সব খবর এক আকাশের নিচে।</p>
          </div>
          <div className="office-balance">
            <span>
              <Icon name="wallet" size={26} />
            </span>
            <div>
              <small>ব্যবহারযোগ্য সঞ্চয়</small>
              <strong>{money(balance)}</strong>
            </div>
          </div>
          <div className="office-vip-pill">
            <Icon name={investment ? "check" : "clock"} size={16} />
            {investment ? investment.package.name : "কোনো প্যাকেজ সক্রিয় নেই"}
          </div>
        </section>

        <section className="office-actions" aria-label="দ্রুত কার্যক্রম">
          {[
            ["deposit", "সঞ্চয় জমা", () => setMoneyAction("deposit")],
            ["withdraw", "অর্থ উত্তোলন", () => setMoneyAction("withdraw")],
            ["chart", "প্যাকেজ কিনুন", () => onNavigate("earn")],
            ["work", "কর্মক্ষেত্র", () => onNavigate("work")],
          ].map(([icon, label, onClick]) => (
            <button key={label as string} onClick={onClick as () => void}>
              <span>
                <Icon name={icon as string} size={26} />
              </span>
              <b>{label as string}</b>
            </button>
          ))}
        </section>

        <section
          className={
            fixedDeposit
              ? "fixed-deposit-card active"
              : "fixed-deposit-card"
          }
        >
          <div className="fixed-deposit-mark">
            <Icon name={fixedDeposit ? "check" : "calendar"} size={27} />
          </div>
          <div className="fixed-deposit-copy">
            <span>৭ দিনের স্থির সঞ্চয়</span>
            <h2>
              {fixedDeposit
                ? "আপনার সঞ্চয় নিরাপদ মেয়াদে আবদ্ধ"
                : "পূর্ণ সঞ্চয়ে ২% নিশ্চিত সম্ভাবনা"}
            </h2>
            <p>
              {fixedDeposit
                ? `${money(fixedDeposit.principal)} মেয়াদ ফুরোনো পর্যন্ত উত্তোলন করা যাবে না।`
                : "বর্তমান ব্যবহারযোগ্য সম্পূর্ণ সঞ্চয় ৭ দিনের জন্য স্থির রেখে মেয়াদ শেষে ২% লাভ পান।"}
            </p>
          </div>
          {fixedDeposit ? (
            <div className="fixed-deposit-status">
              <small>মেয়াদ ফুরোবে</small>
              <strong>{fixedDeposit.expiresAt}</strong>
            </div>
          ) : (
            <button onClick={() => setShowFixedDeposit(true)}>
              বিস্তারিত দেখুন
            </button>
          )}
        </section>

        {fixedDeposit && (
          <section className="fixed-deposit-summary">
            {[
              ["wallet", "আবদ্ধ মূলধন", money(fixedDeposit.principal)],
              [
                "chart",
                "সাত দিনের লাভ",
                money(fixedDeposit.profit),
              ],
              [
                "gift",
                "মেয়াদশেষে প্রাপ্য",
                money(fixedDeposit.maturityAmount),
              ],
              ["calendar", "মুনাফার হার", "২%"],
            ].map(([icon, label, value]) => (
              <article key={label}>
                <span>
                  <Icon name={icon} size={19} />
                </span>
                <small>{label}</small>
                <strong>{value}</strong>
              </article>
            ))}
          </section>
        )}

        <section className="office-summary">
          <div className="office-section-heading">
            <div>
              <span>
                <Icon name="chart" size={20} />
              </span>
              <div>
                <h2>আজকের হিসাবচিত্র</h2>
                <p>আপনার অর্থযাত্রার সংক্ষিপ্ত প্রতিচ্ছবি</p>
              </div>
            </div>
          </div>
          <div className="office-stat-grid">
            {[
              ["coins", "আজকের সম্ভাব্য লাভ", money(dailyProfit)],
              ["deposit", "মোট জমা", money(totalDeposited)],
              ["withdraw", "মোট উত্তোলন", money(totalWithdrawn)],
              [
                "calendar",
                "সক্রিয় মেয়াদ",
                investment
                  ? `${bengaliNumber(investment.package.durationDays)} দিন`
                  : "নেই",
              ],
            ].map(([icon, label, value]) => (
              <article key={label}>
                <span>
                  <Icon name={icon} size={20} />
                </span>
                <small>{label}</small>
                <strong>{value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="office-vip-card">
          <div className="office-section-heading">
            <div>
              <span>
                <Icon name="gift" size={20} />
              </span>
              <div>
                <h2>ভিআইপি অগ্রযাত্রা</h2>
                <p>আপনার সক্রিয় প্যাকেজ ও মেয়াদের খবর</p>
              </div>
            </div>
            <button onClick={() => onNavigate(investment ? "work" : "earn")}>
              {investment ? "বিস্তারিত" : "প্যাকেজ নিন"}
            </button>
          </div>
          {investment ? (
            <div className="office-active-vip">
              <div className="office-vip-badge">
                <span>{investment.package.name}</span>
                <small>সক্রিয়</small>
              </div>
              <div>
                <small>রোপিত পুঁজি</small>
                <strong>{money(investment.amount)}</strong>
              </div>
              <div>
                <small>প্রতিদিনের হার</small>
                <strong>
                  {bengaliNumber(investment.package.dailyRate)}%
                </strong>
              </div>
              <div>
                <small>মেয়াদ ফুরোবে</small>
                <strong>{investment.expiresAt}</strong>
              </div>
            </div>
          ) : (
            <div className="office-no-vip">
              <Icon name="chart" size={34} />
              <div>
                <strong>অর্জনের প্রথম সোপান এখনও বাকি</strong>
                <p>৳৫০০ থেকে শুরু হওয়া ভিআইপি প্যাকেজে আপনার পথচলা শুরু করুন।</p>
              </div>
            </div>
          )}
        </section>

        <section className="office-transactions">
          <div className="office-section-heading">
            <div>
              <span>
                <Icon name="clock" size={20} />
              </span>
              <div>
                <h2>সাম্প্রতিক হিসাব</h2>
                <p>জমা, উত্তোলন ও প্যাকেজ ক্রয়ের পদচিহ্ন</p>
              </div>
            </div>
            <b>{bengaliNumber(transactions.length)}টি</b>
          </div>
          <div className="office-transaction-list">
            {transactions.slice(0, 5).map((item) => (
              <article key={item.id}>
                <span className={item.type}>
                  <Icon
                    name={item.type === "credit" ? "deposit" : "withdraw"}
                    size={19}
                  />
                </span>
                <div>
                  <strong>{item.label}</strong>
                  <small>{item.date}</small>
                </div>
                <b className={item.type}>
                  {item.type === "credit" ? "+" : "−"} {money(item.amount)}
                </b>
              </article>
            ))}
          </div>
        </section>

        <section className="office-tools">
          {[
            ["users", "সাফল্যের সঙ্গী", "দল ও কমিশনের খতিয়ান", "team"],
            ["bell", "বার্তা ও ঘোষণা", "নতুন কোনো ঘোষণা নেই", null],
            ["settings", "নিরাপত্তা ও বিন্যাস", "হিসাবের সুরক্ষা যাচাই করুন", null],
          ].map(([icon, title, subtitle, destination]) => (
            <button
              key={title}
              onClick={() =>
                destination
                  ? onNavigate(destination as Page)
                  : action(`${title} শীঘ্রই উন্মুক্ত হবে`)
              }
            >
              <span>
                <Icon name={icon as string} size={21} />
              </span>
              <div>
                <strong>{title}</strong>
                <small>{subtitle}</small>
              </div>
              <b>›</b>
            </button>
          ))}
        </section>
      </main>

      {moneyAction && (
        <div
          className="purchase-modal-backdrop"
          onClick={() => setMoneyAction(null)}
        >
          <section
            aria-modal="true"
            className="purchase-modal office-money-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <div className="purchase-modal-head">
              <div>
                <span>
                  <Icon
                    name={moneyAction === "deposit" ? "deposit" : "withdraw"}
                    size={22}
                  />
                </span>
                <div>
                  <small>নিরাপদ হিসাব কার্যক্রম</small>
                  <h2>
                    {moneyAction === "deposit"
                      ? "সঞ্চয় জমা করুন"
                      : "অর্থ উত্তোলন করুন"}
                  </h2>
                </div>
              </div>
              <button
                aria-label="বন্ধ করুন"
                onClick={() => setMoneyAction(null)}
              >
                <Icon name="close" size={20} />
              </button>
            </div>
            <div className="office-current-balance">
              <small>বর্তমান ব্যবহারযোগ্য সঞ্চয়</small>
              <strong>{money(balance)}</strong>
            </div>
            <label className="office-amount-field">
              <span>অঙ্ক লিখুন</span>
              <div>
                <b>৳</b>
                <input
                  inputMode="numeric"
                  onChange={(event) =>
                    setAmount(parseBengaliNumber(event.target.value))
                  }
                  type="text"
                  value={toBengaliDigits(amount)}
                />
              </div>
            </label>
            <div className="office-amount-presets">
              {[500, 1000, 2500].map((preset) => (
                <button key={preset} onClick={() => setAmount(preset)}>
                  {money(preset)}
                </button>
              ))}
            </div>
            <div className="purchase-actions">
              <button className="cancel" onClick={() => setMoneyAction(null)}>
                বাতিল করুন
              </button>
              <button className="confirm" onClick={submitMoneyAction}>
                {moneyAction === "deposit"
                  ? "জমা নিশ্চিত করুন"
                  : "উত্তোলন নিশ্চিত করুন"}
              </button>
            </div>
          </section>
        </div>
      )}

      {showFixedDeposit && !fixedDeposit && (
        <div
          className="purchase-modal-backdrop"
          onClick={() => setShowFixedDeposit(false)}
        >
          <section
            aria-modal="true"
            className="purchase-modal fixed-deposit-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <div className="purchase-modal-head">
              <div>
                <span>
                  <Icon name="calendar" size={22} />
                </span>
                <div>
                  <small>সাত দিনের নিরাপদ অঙ্গীকার</small>
                  <h2>পূর্ণ সঞ্চয় স্থির করুন</h2>
                </div>
              </div>
              <button
                aria-label="বন্ধ করুন"
                onClick={() => setShowFixedDeposit(false)}
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            <div className="fixed-deposit-balance">
              <small>স্থির সঞ্চয়ে আবদ্ধ হবে</small>
              <strong>{money(balance)}</strong>
              <span>আপনার সম্পূর্ণ ব্যবহারযোগ্য সঞ্চয়</span>
            </div>

            <div className="fixed-deposit-projection">
              <div>
                <small>সাত দিনে লাভ</small>
                <strong>{money(balance * 0.02)}</strong>
              </div>
              <div>
                <small>মেয়াদশেষে মোট প্রাপ্য</small>
                <strong>{money(balance * 1.02)}</strong>
              </div>
              <div>
                <small>মেয়াদ ফুরোনোর দিন</small>
                <strong>{expiryDateFromToday(7)}</strong>
              </div>
            </div>

            <div className="fixed-deposit-rules">
              <h3>স্থির সঞ্চয়ের নিয়মাবলি</h3>
              <ol>
                <li>বর্তমান ব্যবহারযোগ্য সম্পূর্ণ সঞ্চয় একসঙ্গে আবদ্ধ হবে।</li>
                <li>সাত দিন পূর্ণ হওয়ার আগে এই অর্থ উত্তোলন করা যাবে না।</li>
                <li>মেয়াদ শেষে মূলধনের সঙ্গে ২% লাভ যুক্ত হবে।</li>
                <li>পরে জমা করা নতুন অর্থ আলাদা থাকবে এবং উত্তোলনযোগ্য হবে।</li>
                <li>নিশ্চিত করার পর এই সাত দিনের অঙ্গীকার বাতিল করা যাবে না।</li>
              </ol>
            </div>

            <div className="purchase-actions">
              <button
                className="cancel"
                onClick={() => setShowFixedDeposit(false)}
              >
                এখন নয়
              </button>
              <button
                className="confirm"
                disabled={balance <= 0}
                onClick={confirmFixedDeposit}
              >
                সম্পূর্ণ সঞ্চয় স্থির করুন
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

function WorkPage({
  investment,
  onExplore,
}: {
  investment: ActiveInvestment | null
  onExplore: () => void
}) {
  const dailyRate = investment ? investment.package.dailyRate / 100 : 0
  const dailyRows = investment
    ? Array.from({ length: investment.package.durationDays }, (_, index) => {
        const openingBalance =
          investment.amount * Math.pow(1 + dailyRate, index)
        const profit = openingBalance * dailyRate
        return {
          day: index + 1,
          openingBalance,
          profit,
          closingBalance: openingBalance + profit,
        }
      })
    : []
  const firstDayProfit = dailyRows[0]?.profit ?? 0
  const termProfit = investment
    ? investment.amount *
        Math.pow(1 + dailyRate, investment.package.durationDays) -
      investment.amount
    : 0

  return (
    <main className="earn-page work-investment-page page-content">
      <section className="earn-hero">
        <div className="earn-hero-icon">
          <Icon name="work" size={38} />
        </div>
        <div>
          <span className="earn-kicker">সঞ্চয়ের বীজ থেকে প্রাপ্তির ফুল</span>
          <h1>আপনার কর্মক্ষেত্র</h1>
          <p>
            যে পুঁজি আজ আশার মাটিতে রাখলেন, তার প্রতিদিনের লভ্যাংশ এখানে
            ভোরের আলোর মতো ফুটে উঠবে।
          </p>
        </div>
        <div className="earn-overview">
          <div>
            <small>সক্রিয় প্যাকেজ</small>
            <strong>{investment ? investment.package.name : "এখনও নেই"}</strong>
          </div>
          <div>
            <small>প্রতিদিনের প্রাপ্তি</small>
            <strong>{investment ? money(firstDayProfit) : money(0)}</strong>
          </div>
        </div>
      </section>

      <section className="package-section">
        <div className="package-heading">
          <div>
            <span>
              <Icon name="wallet" size={21} />
            </span>
            <div>
              <h2>সক্রিয় প্যাকেজের খতিয়ান</h2>
              <p>পুঁজি, হার ও প্রতিদিনের প্রাপ্তি—সবটুকু এক নজরে</p>
            </div>
          </div>
          {investment && <b>চলমান</b>}
        </div>

        {investment ? (
          <>
            <article className="vip-package active-investment-card">
              <div className="package-number">
                <Icon name="check" size={21} />
              </div>
              <div className="package-main">
                <div className="package-name">
                  <span>{investment.package.name}</span>
                  <small>
                    {bengaliNumber(investment.package.durationDays)} দিনের
                    প্রাপ্তির সোপান
                  </small>
                </div>
                <div className="package-range">
                  <small>যাত্রা শুরুর দিন</small>
                  <strong>{investment.startedAt}</strong>
                  <small>মেয়াদ ফুরোনোর দিন</small>
                  <strong>{investment.expiresAt}</strong>
                </div>
                <div className="package-profit">
                  <span>
                    <Icon name="chart" size={17} />
                  </span>
                  <div>
                    <small>প্রতিদিন সম্ভাব্য লভ্যাংশ</small>
                    <strong>
                      {bengaliNumber(investment.package.dailyRate)}% ·{" "}
                      {money(firstDayProfit)}
                    </strong>
                  </div>
                </div>
                <span className="investment-status">সক্রিয়</span>
              </div>
            </article>

            <div className="investment-metrics">
              {[
                ["wallet", "রোপিত পুঁজি", money(investment.amount)],
                [
                  "chart",
                  "প্রতিদিনের হার",
                  `${bengaliNumber(investment.package.dailyRate)}%`,
                ],
                ["coins", "প্রথম দিনের প্রাপ্তি", money(firstDayProfit)],
                [
                  "calendar",
                  "মেয়াদ শেষে মোট লাভ",
                  money(termProfit),
                ],
              ].map(([icon, label, value]) => (
                <article key={label}>
                  <span>
                    <Icon name={icon} size={20} />
                  </span>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="investment-empty">
            <span>
              <Icon name="work" size={42} />
            </span>
            <h2>এখনও সঞ্চয়ের বীজ বোনা হয়নি</h2>
            <p>
              অর্জনের পথ থেকে একটি প্যাকেজ বেছে নিন; তারপর প্রতিদিনের প্রাপ্তির
              কাব্য এই পাতায় লেখা হবে।
            </p>
            <button onClick={onExplore}>প্যাকেজ বেছে নিন</button>
          </div>
        )}
      </section>

      {investment && (
        <section className="daily-ledger">
          <div className="package-heading">
            <div>
              <span>
                <Icon name="calendar" size={21} />
              </span>
              <div>
                <h2>দিনে দিনে প্রাপ্তির পঙ্‌ক্তি</h2>
                <p>প্রতিটি ভোরে একই হারে সম্ভাবনার নতুন অঙ্কুর</p>
              </div>
            </div>
            <b>দৈনিক</b>
          </div>
          <div className="daily-profit-list">
            {dailyRows.map((row, index) => (
              <article key={row.day}>
                <span>{bengaliNumber(index + 1)}</span>
                <div>
                  <strong>
                    {bengaliNumber(row.day)}তম দিনের সম্ভাব্য প্রাপ্তি
                  </strong>
                  <small>
                    দিনের শুরু {money(row.openingBalance)} · দিনশেষে{" "}
                    {money(row.closingBalance)}
                  </small>
                </div>
                <b>+ {money(row.profit)}</b>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="earn-note">
        <span>
          <Icon name="check" size={20} />
        </span>
        <div>
          <h2>মনে রাখার কথা</h2>
          <p>
            প্রতিদিনের লাভ আগের দিনের পুঁজি ও প্রাপ্তি মিলিয়ে নতুন অঙ্কের ওপর
            হিসাব হয়; তাই সঞ্চয়ের নদী দিনে দিনে আরও প্রশস্ত হয়ে বয়ে চলে।
          </p>
        </div>
      </section>
    </main>
  )
}

const vipPackages = [
  {
    name: "ভিআইপি ০",
    price: 500,
    dailyRate: 0.8,
    durationDays: 5,
  },
  {
    name: "ভিআইপি ১",
    price: 1500,
    dailyRate: 1,
    durationDays: 10,
  },
  {
    name: "ভিআইপি ২",
    price: 5000,
    dailyRate: 1.2,
    durationDays: 20,
  },
  {
    name: "ভিআইপি ৩",
    price: 10000,
    dailyRate: 1.4,
    durationDays: 30,
  },
  {
    name: "ভিআইপি ৪",
    price: 20000,
    dailyRate: 1.6,
    durationDays: 40,
  },
  {
    name: "ভিআইপি ৫",
    price: 35000,
    dailyRate: 1.8,
    durationDays: 50,
  },
]

type VipPackage = (typeof vipPackages)[number]

type ActiveInvestment = {
  package: VipPackage
  amount: number
  startedAt: string
  expiresAt: string
}

function EarnPage({
  action,
  balance,
  onPurchase,
}: {
  action: (message: string) => void
  balance: number
  onPurchase: (selectedPackage: VipPackage) => void
}) {
  const [selectedPackage, setSelectedPackage] = useState<
    (typeof vipPackages)[number] | null
  >(null)
  const suggestedPackage = [...vipPackages]
    .reverse()
    .find((item) => balance >= item.price)
  const amountError = selectedPackage
    ? balance < selectedPackage.price
      ? "এই প্যাকেজে পা রাখার মতো পর্যাপ্ত সঞ্চয় এখনও জমেনি।"
      : ""
    : ""
  const selectedExpiry = selectedPackage
    ? expiryDateFromToday(selectedPackage.durationDays)
    : ""

  const openPackage = (item: VipPackage) => {
    setSelectedPackage(item)
  }

  const confirmPurchase = () => {
    if (!selectedPackage) return
    if (amountError) {
      action(amountError)
      return
    }

    onPurchase(selectedPackage)
    setSelectedPackage(null)
  }

  return (
    <>
      <main className="earn-page page-content">
        <section className="earn-hero">
          <div className="earn-hero-icon">
            <Icon name="chart" size={38} />
          </div>
          <div>
            <span className="earn-kicker">বিনিয়োগ পরিকল্পনা</span>
            <h1>আপনার অর্জনের পথ</h1>
            <p>
              নিজের সামর্থ্য অনুযায়ী একটি ভিআইপি প্যাকেজ বেছে নিয়ে প্রতিদিনের
              সম্ভাব্য লাভের পথে এগিয়ে যান।
            </p>
          </div>
          <div className="earn-overview">
            <div>
              <small>মোট প্যাকেজ</small>
              <strong>৬টি</strong>
            </div>
            <div>
              <small>দৈনিক সম্ভাব্য লাভ</small>
              <strong>০.৮% – ১.৮%</strong>
            </div>
          </div>
        </section>

        <section className="package-section">
          <div className="package-heading">
            <div>
              <span>
                <Icon name="wallet" size={21} />
              </span>
              <div>
                <h2>ভিআইপি প্যাকেজসমূহ</h2>
                <p>নির্ধারিত মূল্য, দৈনিক লাভ ও মেয়াদ দেখে প্যাকেজ বেছে নিন</p>
              </div>
            </div>
            <b>৬টি স্তর</b>
          </div>

          {suggestedPackage && (
            <div className="package-recommendation">
              <span>
                <Icon name="target" size={20} />
              </span>
              <div>
                <small>আপনার সঞ্চয়ের সঙ্গে মানানসই প্রস্তাব</small>
                <strong>{suggestedPackage.name}</strong>
                <p>
                  বর্তমান {money(balance)} সঞ্চয়ে এই নির্ধারিত মূল্যের প্যাকেজটি
                  সবচেয়ে মানানসই।
                </p>
              </div>
            </div>
          )}

          <div className="package-list" aria-label="ভিআইপি প্যাকেজের তালিকা">
            {vipPackages.map((item, index) => (
              <article
                className={
                  suggestedPackage?.name === item.name
                    ? "vip-package suggested-package"
                    : "vip-package"
                }
                key={item.name}
              >
                <div className="package-number">{bengaliNumber(index)}</div>
                <div className="package-main">
                  <div className="package-name">
                    <span>{item.name}</span>
                    <small>
                      {suggestedPackage?.name === item.name
                        ? "আপনার জন্য প্রস্তাবিত সোপান"
                        : "বিনিয়োগ স্তর"}
                    </small>
                  </div>
                  <div className="package-range">
                    <small>নির্ধারিত মূল্য</small>
                    <strong>{money(item.price)}</strong>
                  </div>
                  <div className="package-profit">
                    <span>
                      <Icon name="chart" size={17} />
                    </span>
                    <div>
                      <small>
                        প্রতিদিনের লাভ · {bengaliNumber(item.durationDays)} দিন
                      </small>
                      <strong>{bengaliNumber(item.dailyRate)}%</strong>
                    </div>
                  </div>
                  <button onClick={() => openPackage(item)}>
                    প্যাকেজ কিনুন
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="earn-note">
          <span>
            <Icon name="check" size={20} />
          </span>
          <div>
            <h2>গুরুত্বপূর্ণ তথ্য</h2>
            <p>
              প্রতিটি প্যাকেজের মূল্য ও মেয়াদ নির্ধারিত। প্রতিদিনের লাভ আগের
              দিনের মোট অঙ্কে যুক্ত হয়ে মেয়াদ ফুরোনো পর্যন্ত নতুন লাভের বীজ
              বুনবে।
            </p>
          </div>
        </section>
      </main>

      {selectedPackage && (
        <div
          className="purchase-modal-backdrop"
          onClick={() => setSelectedPackage(null)}
        >
          <section
            aria-labelledby="purchase-modal-title"
            aria-modal="true"
            className="purchase-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <div className="purchase-modal-head">
              <div>
                <span>
                  <Icon name="wallet" size={22} />
                </span>
                <div>
                  <small>প্যাকেজ কেনার অনুমোদন</small>
                  <h2 id="purchase-modal-title">{selectedPackage.name}</h2>
                </div>
              </div>
              <button
                aria-label="বন্ধ করুন"
                onClick={() => setSelectedPackage(null)}
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            <div className="purchase-package-summary">
              <div>
                <small>প্যাকেজের নির্ধারিত মূল্য</small>
                <strong>{money(selectedPackage.price)}</strong>
              </div>
              <div>
                <small>দৈনিক সম্ভাব্য লাভ</small>
                <strong>
                  {bengaliNumber(selectedPackage.dailyRate)}%
                </strong>
              </div>
              <div>
                <small>প্যাকেজের মেয়াদ</small>
                <strong>
                  {bengaliNumber(selectedPackage.durationDays)} দিন
                </strong>
              </div>
              <div>
                <small>মেয়াদ ফুরোনোর দিন</small>
                <strong>{selectedExpiry}</strong>
              </div>
            </div>

            <div className="purchase-balance">
              <div>
                <span>
                  <Icon name="wallet" size={21} />
                </span>
                <div>
                  <small>আপনার সম্পূর্ণ ব্যালেন্স</small>
                  <strong>{money(balance)}</strong>
                </div>
              </div>
              <div>
                <small>প্যাকেজের নির্ধারিত মূল্য</small>
                <strong>{money(selectedPackage.price)}</strong>
              </div>
            </div>

            {amountError && <p className="balance-warning">{amountError}</p>}

            <div className="purchase-rules">
              <h3>প্যাকেজ কেনার নিয়ম</h3>
              <ol>
                <li>
                  ক্রয় নিশ্চিত করলে প্যাকেজের নির্ধারিত মূল্য সঞ্চয় থেকে কাটা
                  হবে।
                </li>
                <li>
                  পর্যাপ্ত ব্যালেন্স থাকলে নির্বাচিত প্যাকেজ সঙ্গে সঙ্গে সক্রিয়
                  হবে।
                </li>
                <li>
                  প্রতিদিনের লাভ আগের দিনের পুঁজি ও লাভের সম্মিলিত অঙ্কের ওপর
                  নতুন করে হিসাব হবে।
                </li>
                <li>
                  নির্ধারিত মেয়াদ শেষে প্যাকেজটি স্বয়ংক্রিয়ভাবে ফুরিয়ে যাবে।
                </li>
              </ol>
            </div>

            <div className="purchase-actions">
              <button
                className="cancel"
                onClick={() => setSelectedPackage(null)}
              >
                বাতিল করুন
              </button>
              <button className="confirm" onClick={confirmPurchase}>
                ক্রয় নিশ্চিত করুন
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

type TeamMember = {
  id: string
  date: string
  deposit: number
  profit: number
  active: boolean
}

const teamRates = { 1: 5, 2: 2, 3: 1 } as const
const teamData: Record<keyof typeof teamRates, {
  title: string
  members: number
  active: number
  teamDeposit: number
  teamProfit: number
  list: TeamMember[]
}> = {
  1: {
    title: "লেভেল ১ ডিরেক্ট টিম",
    members: 25,
    active: 18,
    teamDeposit: 52000,
    teamProfit: 4800,
    list: [
      {
        id: "০১৭৮***৯০১২",
        date: "২৪ অক্টো, ২০২৬",
        deposit: 5000,
        profit: 250,
        active: true,
      },
      {
        id: "০১৮১***৪৫৬৭",
        date: "২২ অক্টো, ২০২৬",
        deposit: 2000,
        profit: 100,
        active: true,
      },
      {
        id: "০১৯২***১১২২",
        date: "২০ অক্টো, ২০২৬",
        deposit: 0,
        profit: 0,
        active: false,
      },
      {
        id: "০১৫৫***৩৩৪৪",
        date: "১৮ অক্টো, ২০২৬",
        deposit: 10000,
        profit: 500,
        active: true,
      },
    ],
  },
  2: {
    title: "লেভেল ২ ইনডাইরেক্ট টিম",
    members: 15,
    active: 10,
    teamDeposit: 34000,
    teamProfit: 2900,
    list: [
      {
        id: "০১৬৭***৮৮৯৯",
        date: "২৫ অক্টো, ২০২৬",
        deposit: 3000,
        profit: 150,
        active: true,
      },
      {
        id: "০১৭৬***০০১১",
        date: "২১ অক্টো, ২০২৬",
        deposit: 10000,
        profit: 500,
        active: true,
      },
      {
        id: "০১৩৩***৭৭৬৬",
        date: "১৯ অক্টো, ২০২৬",
        deposit: 0,
        profit: 0,
        active: false,
      },
    ],
  },
  3: {
    title: "লেভেল ৩ ইনডাইরেক্ট টিম",
    members: 8,
    active: 4,
    teamDeposit: 16000,
    teamProfit: 1500,
    list: [
      {
        id: "০১৯৯***৫৫৪৪",
        date: "২৬ অক্টো, ২০২৬",
        deposit: 5000,
        profit: 250,
        active: true,
      },
      {
        id: "০১৭৪***২৩২৩",
        date: "২৩ অক্টো, ২০২৬",
        deposit: 6318.5,
        profit: 300,
        active: true,
      },
      {
        id: "০১৮৮***৯৯০০",
        date: "২০ অক্টো, ২০২৬",
        deposit: 0,
        profit: 0,
        active: false,
      },
    ],
  },
}

const bengaliNumber = (value: number) =>
  value.toLocaleString("bn-BD", { maximumFractionDigits: 1 })

const toBengaliDigits = (value: number) =>
  String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)])

const parseBengaliNumber = (value: string) => {
  const normalized = value
    .replace(/[০-৯]/g, (digit) => String("০১২৩৪৫৬৭৮৯".indexOf(digit)))
    .replace(/[^\d]/g, "")

  return normalized ? Number(normalized) : 0
}

const money = (value: number) =>
  `৳ ${value.toLocaleString("bn-BD", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`

const bengaliDate = (date: Date) =>
  date.toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

const expiryDateFromToday = (durationDays: number) => {
  const expiry = new Date()
  expiry.setDate(expiry.getDate() + durationDays)
  return bengaliDate(expiry)
}

const levelTotals = (level: keyof typeof teamRates) => {
  const data = teamData[level]
  const deposit = (data.teamDeposit * teamRates[level]) / 100
  const profit = (data.teamProfit * teamRates[level]) / 100
  return { deposit, profit, total: deposit + profit }
}

function TeamPage({ action }: { action: (message: string) => void }) {
  const [level, setLevel] = useState<keyof typeof teamRates>(1)
  const data = teamData[level]
  const totals = levelTotals(level)
  const summary = ([1, 2, 3] as const).reduce(
    (result, item) => {
      const itemTotals = levelTotals(item)
      result.deposit += itemTotals.deposit
      result.profit += itemTotals.profit
      result.members += teamData[item].members
      result.active += teamData[item].active
      return result
    },
    { deposit: 0, profit: 0, members: 0, active: 0 },
  )

  const copyText = async (text: string, message: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const input = document.createElement("input")
      input.value = text
      document.body.appendChild(input)
      input.select()
      document.execCommand("copy")
      input.remove()
    }
    action(message)
  }

  return (
    <main className="team-page page-content">
      <section className="team-summary">
        <div className="team-summary-mark">
          <Icon name="users" size={74} strokeWidth={1.4} />
        </div>
        <div className="team-badges">
          <span>রেফারেল প্রোগ্রাম</span>
          <small>● ৩ টিয়ার সিস্টেম</small>
        </div>
        <h1>সাফল্যের সঙ্গী (টিম ইনকাম)</h1>
        <p>
          বন্ধুদের আমন্ত্রণ জানান এবং ৩টি স্তর থেকে ডিপোজিট বোনাস ও দৈনিক প্রফিট কমিশন
          অর্জন করুন।
        </p>
        <div className="team-summary-grid main">
          <div>
            <small>মোট রেফার ইনকাম</small>
            <strong className="amber">
              {money(summary.deposit + summary.profit)}
            </strong>
          </div>
          <div>
            <small>মোট সদস্য</small>
            <strong>{bengaliNumber(summary.members)} জন</strong>
          </div>
          <div>
            <small>সক্রিয় সদস্য</small>
            <strong className="green">
              {bengaliNumber(summary.active)} জন
            </strong>
          </div>
        </div>
        <div className="team-summary-grid secondary">
          <div>
            <small>ডিপোজিট বোনাস</small>
            <strong>{money(summary.deposit)}</strong>
          </div>
          <div>
            <small>প্রফিট কমিশন</small>
            <strong>{money(summary.profit)}</strong>
          </div>
        </div>
      </section>

      <section className="invite-card team-card">
        <div className="team-card-heading">
          <span>
            <Icon name="share" size={20} />
          </span>
          <div>
            <h2>আপনার আমন্ত্রণ লিংক</h2>
            <p>শেয়ার করে নতুন মেম্বার যুক্ত করুন</p>
          </div>
        </div>
        <label>আমন্ত্রণ কোড (Invitation Code):</label>
        <div className="copy-field">
          <strong>BOROJAJ8996</strong>
          <button
            onClick={() => copyText("BOROJAJ8996", "আমন্ত্রণ কোড কপি করা হয়েছে!")}
          >
            <Icon name="copy" size={15} /> কপি
          </button>
        </div>
        <label>আমন্ত্রণ লিংক (Invitation Link):</label>
        <div className="copy-field link-field">
          <span>https://borojaj.app/ref/BOROJAJ8996</span>
          <button
            onClick={() =>
              copyText(
                "https://borojaj.app/ref/BOROJAJ8996",
                "আমন্ত্রণ লিংক কপি করা হয়েছে!",
              )
            }
          >
            <Icon name="link" size={15} /> কপি লিংক
          </button>
        </div>
      </section>

      <section className="team-levels">
        <h2>
          <i /> টিম সদস্য ও কমিশন লেভেল
        </h2>
        <div className="level-tabs">
          {([1, 2, 3] as const).map((item) => (
            <button
              className={level === item ? "active" : ""}
              key={item}
              onClick={() => setLevel(item)}
            >
              লেভেল {bengaliNumber(item)}
              <span>({bengaliNumber(teamRates[item])}%)</span>
            </button>
          ))}
        </div>

        <div className="level-stats team-card">
          <div className="level-stats-head">
            <div>
              <small>
                {data.title} ({bengaliNumber(teamRates[level])}% কমিশন)
              </small>
              <strong>
                সদস্য: {bengaliNumber(data.members)} জন{" "}
                <em>({bengaliNumber(data.active)} জন সক্রিয়)</em>
              </strong>
            </div>
            <div>
              <small>এই লেভেলের আয়</small>
              <strong>{money(totals.total)}</strong>
            </div>
          </div>
          <div className="level-income">
            <div>
              <small>
                <Icon name="wallet" size={13} /> ডিপোজিট বোনাস
              </small>
              <strong>{money(totals.deposit)}</strong>
            </div>
            <div>
              <small>
                <Icon name="chart" size={13} /> প্রফিট কমিশন
              </small>
              <strong>{money(totals.profit)}</strong>
            </div>
          </div>
        </div>

        <div className="member-list">
          {data.list.map((member) => {
            const bonus = (member.deposit * teamRates[level]) / 100
            const commission = (member.profit * teamRates[level]) / 100
            return (
              <article className="member-card team-card" key={member.id}>
                <div className="member-head">
                  <span
                    className={
                      member.active ? "member-icon active" : "member-icon"
                    }
                  >
                    <Icon name="user" size={21} />
                  </span>
                  <div className="member-identity">
                    <div>
                      <strong>{member.id}</strong>
                      <small
                        className={member.active ? "status active" : "status"}
                      >
                        {member.active ? "সক্রিয়" : "নিষ্ক্রিয়"}
                      </small>
                    </div>
                    <p>যোগদান: {member.date}</p>
                  </div>
                  <div className="member-total">
                    <small>মোট বোনাস</small>
                    <strong>{money(bonus + commission)}</strong>
                  </div>
                </div>
                <div className="member-income">
                  <div>
                    <p>
                      ডিপোজিট: <strong>{money(member.deposit)}</strong>
                    </p>
                    <b>
                      বোনাস ({bengaliNumber(teamRates[level])}%): {money(bonus)}
                    </b>
                  </div>
                  <div>
                    <p>
                      দৈনিক প্রফিট: <strong>{money(member.profit)}</strong>
                    </p>
                    <b>
                      কমিশন ({bengaliNumber(teamRates[level])}%):{" "}
                      {money(commission)}
                    </b>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="commission-rules">
        <h2>
          <Icon name="gift" size={17} /> কমিশন যেভাবে হিসাব করা হয়:
        </h2>
        {[
          ["wallet", "ডিপোজিট বোনাস (সদস্যের প্রতিটি ডিপোজিটে)", "বোনাস"],
          ["chart", "দৈনিক প্রফিট কমিশন (সদস্যের প্রতিদিনের লাভে)", "কমিশন"],
        ].map(([icon, title, label]) => (
          <div className="rule-group" key={title}>
            <h3>
              <Icon name={icon} size={14} /> {title}
            </h3>
            <div>
              {([1, 2, 3] as const).map((item) => (
                <article key={item}>
                  <strong>
                    {bengaliNumber(teamRates[item])}% {label}
                  </strong>
                  <small>{bengaliNumber(item)}ম লেভেল</small>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

function PlaceholderPage({ page }: { page: Page }) {
  const current = navItems.find((item) => item.id === page)!
  return (
    <main className="placeholder page-content">
      <div>
        <span>
          <Icon name={current.icon} size={54} />
        </span>
        <h1>{current.label}</h1>
        <p>এই বিভাগটি শীঘ্রই উন্মুক্ত হবে।</p>
      </div>
    </main>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>("home")
  const [toast, setToast] = useState("")
  const [balance, setBalance] = useState(2500)
  const [investment, setInvestment] = useState<ActiveInvestment | null>(null)
  const [fixedDeposit, setFixedDeposit] = useState<FixedDeposit | null>(null)
  const [transactions, setTransactions] = useState<DashboardTransaction[]>([
    {
      id: 1,
      label: "প্রারম্ভিক সঞ্চয়",
      amount: 2500,
      type: "credit",
      date: "আজ",
    },
  ])

  useEffect(() => {
    if (!fixedDeposit) return

    const releaseDeposit = () => {
      setBalance((current) => current + fixedDeposit.maturityAmount)
      setTransactions((current) => [
        {
          id: Date.now(),
          label: "স্থির সঞ্চয়ের মেয়াদপূর্তি",
          amount: fixedDeposit.maturityAmount,
          type: "credit",
          date: bengaliDate(new Date()),
        },
        ...current,
      ])
      setFixedDeposit(null)
      showToast("স্থির সঞ্চয়ের মূলধন ও ২% লাভ ব্যবহারযোগ্য সঞ্চয়ে যুক্ত হয়েছে")
    }

    const remaining = fixedDeposit.maturesAt - Date.now()
    if (remaining <= 0) {
      releaseDeposit()
      return
    }

    const timer = window.setTimeout(releaseDeposit, remaining)
    return () => window.clearTimeout(timer)
  }, [fixedDeposit])

  const showToast = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(""), 2200)
  }

  const changePage = (next: Page) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const addTransaction = (
    label: string,
    amount: number,
    type: DashboardTransaction["type"],
  ) => {
    setTransactions((current) => [
      {
        id: Date.now(),
        label,
        amount,
        type,
        date: bengaliDate(new Date()),
      },
      ...current,
    ])
  }

  const deposit = (amount: number) => {
    setBalance((current) => current + amount)
    addTransaction("সঞ্চয় জমা", amount, "credit")
    showToast(`${money(amount)} সফলভাবে সঞ্চয়ে যুক্ত হয়েছে`)
  }

  const withdraw = (amount: number) => {
    setBalance((current) => current - amount)
    addTransaction("অর্থ উত্তোলন", amount, "debit")
    showToast(`${money(amount)} উত্তোলন সফল হয়েছে`)
  }

  const activateFixedDeposit = () => {
    if (balance <= 0 || fixedDeposit) return

    const principal = balance
    const profit = principal * 0.02
    setBalance(0)
    setFixedDeposit({
      principal,
      profitRate: 2,
      profit,
      maturityAmount: principal + profit,
      startedAt: bengaliDate(new Date()),
      expiresAt: expiryDateFromToday(7),
      maturesAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    })
    addTransaction("৭ দিনের স্থির সঞ্চয়ে স্থানান্তর", principal, "debit")
    showToast("পূর্ণ সঞ্চয় ৭ দিনের জন্য নিরাপদে আবদ্ধ হয়েছে")
  }

  return (
    <div className="app blue-header">
      <AppHeader onNotice={() => showToast("কোনো নতুন নোটিফিকেশন নেই")} />
      {page === "home" && (
        <HomePage
          action={showToast}
          balance={balance}
          fixedDeposit={fixedDeposit}
          investment={investment}
          onDeposit={deposit}
          onFixedDeposit={activateFixedDeposit}
          onNavigate={changePage}
          onWithdraw={withdraw}
          transactions={transactions}
        />
      )}
      {page === "work" && (
        <WorkPage
          investment={investment}
          onExplore={() => changePage("earn")}
        />
      )}
      {page === "earn" && (
        <EarnPage
          action={showToast}
          balance={balance}
          onPurchase={(selectedPackage) => {
            setBalance((current) => current - selectedPackage.price)
            addTransaction(
              `${selectedPackage.name} প্যাকেজ ক্রয়`,
              selectedPackage.price,
              "debit",
            )
            setInvestment({
              package: selectedPackage,
              amount: selectedPackage.price,
              startedAt: bengaliDate(new Date()),
              expiresAt: expiryDateFromToday(
                selectedPackage.durationDays,
              ),
            })
            showToast(
              `${selectedPackage.name} সক্রিয় হয়েছে—প্রাপ্তির নতুন অধ্যায় শুরু হলো`,
            )
            changePage("work")
          }}
        />
      )}
      {page === "team" && <TeamPage action={showToast} />}
      {page === "profile" && (
        <HomePage
          action={showToast}
          balance={balance}
          fixedDeposit={fixedDeposit}
          investment={investment}
          onDeposit={deposit}
          onFixedDeposit={activateFixedDeposit}
          onNavigate={changePage}
          onWithdraw={withdraw}
          transactions={transactions}
        />
      )}
      {!["home", "work", "earn", "team", "profile"].includes(page) && (
        <PlaceholderPage page={page} />
      )}
      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
      <BottomNav page={page} onChange={changePage} />
    </div>
  )
}
