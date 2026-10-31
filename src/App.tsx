import { useState, type ReactNode } from "react"

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

const stats = [
  ["coins", "কর্মক্ষেত্রের আয়", "৳ ২,৭২৬.৩৭"],
  ["gift", "দলীয় প্রাপ্ত", "৳ ২৮০.০০"],
  ["users", "দলীয় লভ্যাংশ", "৳ ২৪.৫০"],
  ["chart", "আজকের অর্জন", "৳ ১,৪০০.৭৫"],
  ["gift", "মোট জমা", "৳ ২,৬০০.০০"],
  ["wallet", "মোট উত্তোলন", "৳ ২০০.০০"],
]

function HomePage({ action }: { action: (message: string) => void }) {
  const menu = [
    "সাধারণ হিসাবপত্র",
    "জমার অর্ডার",
    "কমিশন",
    "লভ্যাংশ",
    "উত্তোলন",
    "স্টকের মূল্যায়ন",
    "অ্যাপ ডাউনলোড",
  ]
  return (
    <main className="home-page page-content">
      <section className="balance-card">
        <div className="wallet-mark">
          <Icon name="wallet" size={37} />
        </div>
        <div>
          <span>মোট সঞ্চয়</span>
          <strong>৳ ১০২.০৩</strong>
        </div>
      </section>

      <section className="stats-grid">
        {stats.map(([icon, title, value]) => (
          <div className="stat-cell" key={title}>
            <span className="small-icon">
              <Icon name={icon} size={23} />
            </span>
            <div>
              <span>{title}</span>
              <strong>{value}</strong>
            </div>
          </div>
        ))}
      </section>

      <section className="quick-grid">
        {[
          ["deposit", "জমা করুন"],
          ["withdraw", "উত্তোলন"],
          ["users", "সঙ্গীগণ"],
          ["settings", "বিন্যাস"],
        ].map(([icon, label]) => (
          <button
            key={label}
            onClick={() => action(`${label} নির্বাচন করা হয়েছে`)}
          >
            <span>
              <Icon name={icon} size={34} />
            </span>
            <b>{label}</b>
          </button>
        ))}
      </section>

      <section className="menu-list">
        {menu.map((item) => (
          <button key={item} onClick={() => action(`${item} শীঘ্রই আসছে`)}>
            <span>{item}</span>
            <b>›</b>
          </button>
        ))}
      </section>
      <button
        className="chat-button"
        aria-label="সহায়তা"
        onClick={() => action("সহায়তা বার্তা খোলা হয়েছে")}
      >
        <span>•••</span>
        <b>১</b>
      </button>
    </main>
  )
}

function GiftArtwork() {
  return (
    <div className="gift-art" aria-hidden="true">
      <div className="gift-lid" />
      <div className="gift-body" />
      <div className="gift-ribbon" />
      <div className="gift-bow">
        <i />
        <i />
      </div>
    </div>
  )
}

function WorkPage({
  claimed,
  onGrab,
}: {
  claimed: boolean
  onGrab: () => void
}) {
  return (
    <main className="work-page page-content">
      <section className="product-banner">
        <span className="cube-round">
          <Icon name="work" size={32} />
        </span>
        <div>
          <strong>Product Grabbing System</strong>
          <p>
            আপনার ব্যালেন্স অনুযায়ী প্রোডাক্ট গ্রাব করুন
            <br />
            এবং প্রতি গ্রাবের জন্য কমিশন পান।
          </p>
        </div>
        <GiftArtwork />
        <em>
          Grab
          <br />
          Earn
          <br />
          Grow
        </em>
      </section>

      <section className="work-stats">
        {[
          ["wallet", "আমার ব্যালেন্স", "৳ ৫০২.০৩"],
          ["coins", "প্রতি গ্রাব কমিশন", "৳ ১২৫.০০"],
          ["users", "মোট গ্রাব সংখ্যা", claimed ? "৪" : "৩"],
          ["calendar", "আজকের বাকি গ্রাব", claimed ? "১" : "২"],
        ].map(([icon, title, value]) => (
          <div key={title}>
            <span>
              <Icon name={icon} size={21} />
            </span>
            <small>{title}</small>
            <b>{value}</b>
          </div>
        ))}
      </section>

      <section className="grab-card">
        <div className="section-title">
          <span>
            <Icon name="work" size={25} />
          </span>
          <div>
            <strong>প্রোডাক্ট গ্রাবিং</strong>
            <p>আপনার ব্যালেন্স অনুযায়ী একটি প্রোডাক্ট নির্বাচন করুন এবং গ্রাব করুন।</p>
          </div>
        </div>
        <div className="empty-product">
          <span>
            <Icon name={claimed ? "check" : "work"} size={47} />
          </span>
          <strong>
            {claimed
              ? "প্রোডাক্ট সফলভাবে গ্রাব হয়েছে"
              : "এখনো কোনো প্রোডাক্ট গ্রাব করা হয়নি"}
          </strong>
          <p>
            {claimed ? "কমিশন আপনার ব্যালেন্সে যুক্ত হয়েছে" : "গ্রাব বাটনে ক্লিক করুন"}
          </p>
        </div>
        <button
          className={claimed ? "grab-button claimed" : "grab-button"}
          onClick={onGrab}
        >
          <span>
            {claimed ? (
              <Icon name="check" size={23} />
            ) : (
              <Icon name="cursor" size={23} />
            )}
          </span>{" "}
          {claimed ? "Grabbed" : "Grab Now"}
        </button>
        <p className="grab-note">▣ আপনার নির্ধারিত পরিমাণ অনুযায়ী গ্রাব করতে পারবেন।</p>
      </section>

      <section className="work-details">
        <h2>
          <Icon name="target" size={26} /> কাজের বিবরণ
        </h2>
        <div>
          {[
            ["work", "মোট কাজ", "৩"],
            ["check", "সম্পন্ন", claimed ? "২" : "১"],
            ["clock", "বাকি", claimed ? "১" : "২"],
          ].map(([icon, title, value]) => (
            <article key={title}>
              <span>
                <Icon name={icon} size={22} />
              </span>
              <small>{title}</small>
              <b>{value}</b>
            </article>
          ))}
        </div>
      </section>
      <p className="work-slogan">—　◆　ছোট ছোট কাজ　→　বড় আয়　◆　—</p>
    </main>
  )
}

const vipPackages = [
  {
    name: "ভিআইপি ১",
    investment: "৳ ১,০০০ – ৳ ৪,৯৯৯",
    profit: "১% – ১.২%",
    minimum: 1000,
  },
  {
    name: "ভিআইপি ২",
    investment: "৳ ৫,০০০ – ৳ ৯,৯৯৯",
    profit: "১.২% – ১.৪%",
    minimum: 5000,
  },
  {
    name: "ভিআইপি ৩",
    investment: "৳ ১০,০০০ – ৳ ১৯,৯৯৯",
    profit: "১.৪% – ১.৬%",
    minimum: 10000,
  },
  {
    name: "ভিআইপি ৪",
    investment: "৳ ২০,০০০ – ৳ ৩৪,৯৯৯",
    profit: "১.৬% – ১.৮%",
    minimum: 20000,
  },
  {
    name: "ভিআইপি ৫",
    investment: "৳ ৩৫,০০০ – ৳ ৪৯,৯৯৯",
    profit: "১.৮% – ২%",
    minimum: 35000,
  },
]

function EarnPage({ action }: { action: (message: string) => void }) {
  const [selectedPackage, setSelectedPackage] = useState<
    (typeof vipPackages)[number] | null
  >(null)
  const availableBalance = 102.03
  const hasEnoughBalance = selectedPackage
    ? availableBalance >= selectedPackage.minimum
    : false

  const confirmPurchase = () => {
    if (!selectedPackage) return
    if (!hasEnoughBalance) {
      action("প্যাকেজ কেনার জন্য আপনার ব্যালেন্স পর্যাপ্ত নয়")
      return
    }

    action(`${selectedPackage.name} প্যাকেজ সফলভাবে কেনা হয়েছে`)
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
              <strong>৫টি</strong>
            </div>
            <div>
              <small>দৈনিক সম্ভাব্য লাভ</small>
              <strong>১% – ২%</strong>
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
                <p>বিনিয়োগের সীমা ও দৈনিক লাভ দেখে প্যাকেজ নির্বাচন করুন</p>
              </div>
            </div>
            <b>৫টি স্তর</b>
          </div>

          <div className="package-list" aria-label="ভিআইপি প্যাকেজের তালিকা">
            {vipPackages.map((item, index) => (
              <article className="vip-package" key={item.name}>
                <div className="package-number">{bengaliNumber(index + 1)}</div>
                <div className="package-main">
                  <div className="package-name">
                    <span>{item.name}</span>
                    <small>বিনিয়োগ স্তর</small>
                  </div>
                  <div className="package-range">
                    <small>বিনিয়োগ সীমা</small>
                    <strong>{item.investment}</strong>
                  </div>
                  <div className="package-profit">
                    <span>
                      <Icon name="chart" size={17} />
                    </span>
                    <div>
                      <small>প্রতিদিন সম্ভাব্য লাভ</small>
                      <strong>{item.profit}</strong>
                    </div>
                  </div>
                  <button onClick={() => setSelectedPackage(item)}>
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
              দৈনিক লাভের হার নির্বাচিত প্যাকেজ অনুযায়ী প্রযোজ্য হবে। বিনিয়োগের
              আগে সংশ্লিষ্ট সব নিয়ম ও শর্ত ভালোভাবে যাচাই করুন।
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
                <small>বিনিয়োগ সীমা</small>
                <strong>{selectedPackage.investment}</strong>
              </div>
              <div>
                <small>দৈনিক সম্ভাব্য লাভ</small>
                <strong>{selectedPackage.profit}</strong>
              </div>
            </div>

            <div className="purchase-balance">
              <div>
                <span>
                  <Icon name="wallet" size={21} />
                </span>
                <div>
                  <small>আপনার সম্পূর্ণ ব্যালেন্স</small>
                  <strong>{money(availableBalance)}</strong>
                </div>
              </div>
              <div>
                <small>প্রয়োজনীয় সর্বনিম্ন ব্যালেন্স</small>
                <strong>{money(selectedPackage.minimum)}</strong>
              </div>
            </div>

            {!hasEnoughBalance && (
              <p className="balance-warning">
                এই প্যাকেজ কেনার জন্য আপনার বর্তমান ব্যালেন্স পর্যাপ্ত নয়।
              </p>
            )}

            <div className="purchase-rules">
              <h3>প্যাকেজ কেনার নিয়ম</h3>
              <ol>
                <li>
                  ক্রয় নিশ্চিত করলে প্যাকেজের সর্বনিম্ন মূল্য আপনার ব্যালেন্স
                  থেকে কাটা হবে।
                </li>
                <li>
                  পর্যাপ্ত ব্যালেন্স থাকলে নির্বাচিত প্যাকেজ সঙ্গে সঙ্গে সক্রিয়
                  হবে।
                </li>
                <li>
                  দৈনিক সম্ভাব্য লাভ নির্বাচিত প্যাকেজের নির্ধারিত হারের মধ্যে
                  হিসাব করা হবে।
                </li>
                <li>
                  নিশ্চিত করার আগে প্যাকেজের সীমা, লাভের হার এবং সব শর্ত যাচাই
                  করুন।
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
  value.toLocaleString("bn-BD", { maximumFractionDigits: 0 })

const money = (value: number) =>
  `৳ ${value.toLocaleString("bn-BD", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`

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
  const [claimed, setClaimed] = useState(false)

  const showToast = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(""), 2200)
  }

  const changePage = (next: Page) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="app blue-header">
      <AppHeader onNotice={() => showToast("কোনো নতুন নোটিফিকেশন নেই")} />
      {page === "home" && <main className="page-content" />}
      {page === "work" && (
        <WorkPage
          claimed={claimed}
          onGrab={() => {
            if (!claimed) {
              setClaimed(true)
              showToast("অভিনন্দন! প্রোডাক্ট গ্রাব সফল হয়েছে")
            } else {
              showToast("আজকের এই গ্রাবটি ইতিমধ্যে সম্পন্ন হয়েছে")
            }
          }}
        />
      )}
      {page === "earn" && <EarnPage action={showToast} />}
      {page === "team" && <TeamPage action={showToast} />}
      {page === "profile" && <HomePage action={showToast} />}
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
